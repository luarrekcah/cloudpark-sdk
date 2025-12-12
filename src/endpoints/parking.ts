import { CloudParkClient } from "../client";

export interface ReserveParkingRequest {
  initial_date: string;
  final_date: string;
  license_plate: string;
  email: string;
  name: string;
  last_name: string;
  total_price_value: number;
}

export interface ReserveParkingResponse {
  message: string;
}

export class ParkingAPI {
  constructor(private client: CloudParkClient) {}

  /**
   * Faz a reserva, cria o cliente no Dashboard se
   * não existir e retorna um gUID para que seja
   * feito um QRCode
   */
  reserve(data: ReserveParkingRequest) {
    return this.client.post<ReserveParkingResponse>(`/reserveparking`, data);
  }
}
