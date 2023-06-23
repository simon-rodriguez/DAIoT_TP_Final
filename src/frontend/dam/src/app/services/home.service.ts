import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  // config = {
  //   headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  // }

  constructor() { }

}
