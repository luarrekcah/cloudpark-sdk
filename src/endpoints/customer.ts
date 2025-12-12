import { CloudParkClient } from "../client";

/**
 * {
  "id": 821424362,
  "nome": "João",
  "sobrenome": "Silva",
  "bloqueado": false,
  "plano_id": 709601794,
  "veiculos": [
    {
      "placa": "ABC1234",
      "tag": "123321123"
    },
    {
      "placa": "ABC2244",
      "tag": "321321321"
    }
  ]
}
 */

export interface Veiculos {
  placa: string;
  tag: string;
}

export interface CustomerCreationRequest {
  nome: string;
  sobrenome: string;
  bloqueado: boolean;
  plano_id: number;
  veiculos: Veiculos[];
}

export interface CustomerUpdateRequest {
  nome: string;
  sobrenome: string;
  bloqueado: boolean;
  plano_id: number;
  veiculos: Veiculos[];
}

export interface CustomerResponse {
  id: number;
}

export class CustomerAPI {
  constructor(private client: CloudParkClient) {}

  createCustomer(data: CustomerCreationRequest) {
    return this.client.post<CustomerResponse>("/customer", data);
  }

  updateCustomer(customerId: string, data: CustomerCreationRequest) {
    const requestData = {
      ...data,
      id: customerId,
    };
    return this.client.post<CustomerResponse>("/customer", requestData);
  }
}
