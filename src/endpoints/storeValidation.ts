export interface StoreValidationRequest {
  integration_id: number;
  purchase_value: number;
  id?: number;
  qr_code?: string;
}

export interface StoreValidationResponse {
  status: string;
  message?: string;
  ticket_id?: number;
  pending_value?: number;
}
