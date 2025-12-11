import { CloudParkClient } from "../client";

export interface AgreementValidationRequest {
  contract_id: number;
  ticket_id?: string;
  qr_code?: string;
}

export interface AgreementValidationResponse {
  status: string;
  message?: string;
  ticket?: any;
}

export class AgreementValidationAPI {
  constructor(private client: CloudParkClient) {}

  validate(data: AgreementValidationRequest) {
    return this.client.post<AgreementValidationResponse>(
      "/api/agreementvalidation/",
      data
    );
  }
}
