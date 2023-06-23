set(MAIN_SRCS
    "app_main.c"
    "networking/wifi/app_wifi.c"
    "networking/mqtt/subscription_manager.c"
    "networking/mqtt/core_mqtt_agent_manager.c"
    "networking/mqtt/core_mqtt_agent_manager_events.c"
)

# TASK ENABLERS

# Temperature Sub Pub and LED control task
if(CONFIG_GRI_ENABLE_TEMP_SUBPUB_LED_CONTROL)
    list(APPEND MAIN_SRCS 
        "tasks/temp_subpub_led/temp_subpub_led.c"
        "tasks/temp_subpub_led/hardware_drivers/app_driver.c"
    )
endif()

# MAIN

set(MAIN_INCLUDE_DIRS
    "."
    "tasks/temp_subpub_led"
    "tasks/temp_subpub_led/hardware_drivers"
    "networking/wifi"
    "networking/mqtt"
)

set(MAIN_REQUIRES
    qrcode
    wifi_provisioning
    coreMQTT
    coreMQTT-Agent
    corePKCS11
    coreJSON
    backoffAlgorithm
    esp_secure_cert_mgr
    FreeRTOS-Libraries-Integration-Tests
    unity
    driver
)

idf_component_register(
    SRCS
        ${MAIN_SRCS}
    INCLUDE_DIRS
        ${MAIN_INCLUDE_DIRS}
    REQUIRES
        ${MAIN_REQUIRES}
)

# Root Certificate
target_add_binary_data(${COMPONENT_TARGET} "certs/AmazonRootCA1.pem" TEXT)