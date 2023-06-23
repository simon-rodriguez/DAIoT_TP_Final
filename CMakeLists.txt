# The following four lines of boilerplate have to be in your project's CMakeLists
# in this exact order for cmake to work correctly
cmake_minimum_required(VERSION 3.5)

# This example uses the components of esp-aws-iot
set(EXTRA_COMPONENT_DIRS "${CMAKE_CURRENT_LIST_DIR}/components/esp-aws-iot/libraries/"
    )

include($ENV{IDF_PATH}/tools/cmake/project.cmake)
include_directories(BEFORE "${CMAKE_CURRENT_LIST_DIR}/main")
project(daiot_tp_final)

