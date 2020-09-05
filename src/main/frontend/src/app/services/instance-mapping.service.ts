import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY, of } from 'rxjs';
import { Instance } from './../model/Instance';
import { Recording } from '../model/Recording';

@Injectable({
  providedIn: 'root'
})
export class InstanceMappingService {
  private BASE_URL = 'http://localhost:8080';

  constructor(
    private http: HttpClient
  ) { }

  getInstanceByInstanceId(instanceId: number): Observable<Instance> {
    return this.http.get<Instance>(`${this.BASE_URL}/instance/id/${instanceId}`);
  }

  getMappingsByInstanceId(instanceId: number): Observable<Recording[]> {
    return this.http.get<Recording[]>(
      `${this.BASE_URL}/mappingOperationsLocalAndDB/importFromDB/instanceId/${instanceId}`
    );
  }

  exportMappingsToDatabase(recordings: Recording[], instanceId: number): Observable<Instance> {
    return this.http.post<Instance>(
      `${this.BASE_URL}/mappingOperationsLocalAndDB/exportToDB/instanceId/${instanceId}`,
      recordings
    );
  }

  exportMappingsToWireMock(instanceId: number): Observable<any> {
    return this.http.post<any>(
      `${this.BASE_URL}/mappingOperationsDBAndWM/exportToWiremock/instanceId/${instanceId}`,
      {}
    );
  }
}