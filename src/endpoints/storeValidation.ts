import { CloudParkClient } from "../client";
import {
  StoreValidationRequest,
  StoreValidationResponse,
} from "../types/storeValidation";

export class StoreValidationAPI {
  constructor(private client: CloudParkClient) {}

  validate(data: StoreValidationRequest) {
    return this.client.post<StoreValidationResponse>(
      "/storevalidation",
      data
    );
  }
}
