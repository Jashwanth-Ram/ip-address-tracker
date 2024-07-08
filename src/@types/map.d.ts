export interface IPDATA {
    longitude: number;
    latitude: number;
    isp: string;
    timezone: string;
    ip: string;
    region: string;
    country: string;
  }
  
  export interface IMAP {
    data: IPDATA;
  }