import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class CommonService {
  private coreService: string;
  private API_URL= environment.CORE_SERVICE_DOMAIN;
  constructor() {
    this.coreService = this.API_URL;
  }

  public GetCoreServiceUrl(): string {
    return this.coreService;
  }
}
