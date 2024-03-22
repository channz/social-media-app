export interface ApiResponse {
  code: string;
  message: string;
}

export interface ApiDataResponse<T = any> {
  code: number;
  data: T;
  message: string;
}
