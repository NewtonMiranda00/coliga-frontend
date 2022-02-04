import { AxiosDefaults, AxiosInstance, HeadersDefaults } from "axios";

export interface PropsTournament { 
  name: String;
  UrlTag: String;
}

export interface PropsAxiosInstance extends AxiosInstance {
  defaults: PropsAxiosDefaults;
}

interface PropsAxiosDefaults extends AxiosDefaults {
  headers: PropsHeadersDefaults;
}

interface PropsHeadersDefaults extends HeadersDefaults {
  authorization?: string;
}
