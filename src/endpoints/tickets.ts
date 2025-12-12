import { CloudParkClient } from "../client";

export interface TicketResponse {
  id: number;
  entry_date: string;
  plate: string;
  value: number;
}

export interface TicketValidationResponse {
  expiration_date: string;
  message: string;
}

export class TicketAPI {
  constructor(private client: CloudParkClient) {}

  // Dois gets na mesma função
  getTicket(qrCode: string, contractId: number, ticketId: string) {
    /**
     * Se tiver ticketId, o qrCode fica opcional
     * Se não tiver o ticketId o qrCode fica obrigatório
     *
     * ContractId é sempre obrigatório
     */
    const query = ticketId ? `/${ticketId}?` : `?qr_code=${qrCode}`;
    return this.client.get<TicketResponse>(
      `/agreementvalidation${query}&contract_id=${contractId}`
    );
  }

  /**
   * Valida o ticket e retorna horário que o cliente
   * pode sair do pátio
   * (na api informa sobre "permitir que o cliente saia")
   */
  validateTicket(contractId: number, paidValue: number, ticketId: string) {
    const data = {
      contract_id: contractId,
      paid_value: paidValue,
      ticket_id: ticketId,
    };
    return this.client.post<TicketValidationResponse>(`/agreementvalidation`, data);
  }
}
