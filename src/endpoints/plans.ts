import { CloudParkClient } from "../client";

export interface Plan {
  id: number;
  time_bands: object;
  patio: object;
  last_modified: string;
  changed: number;
  deleted: boolean;
  name: string;
  kind: string;
  value: number;
  day_count: number;
  access_count: number;
  use_time_bands: boolean;
  validate_to_exit: boolean;
  check_in: number;
  checkout: number;
  visible_in_operation: boolean;
  places_count: number;
  max_stay_minutes: number;
  order_in_screen: number;
  can_enter_without_balance: boolean;
  generate_pending: boolean;
  proportional_tolerance_percent: number;
  visible_in_validation: boolean;
  ignore_stay_minutes_in_time_band: boolean;
  discount_kind: number;
  discount_value: number;
  discount_advance_payment_days_before: number;
  discount_advance_payment_kind: number;
  discount_advance_payment_value: number;
  discount_advance_payment_apply_first_charge: boolean;
  internal_patio_transfer_time: number;
  can_customer_overtime: boolean;
  can_set_inital_date: boolean;
  min_booking_days: number;
  charge_by_contract: boolean;
  stay_tolerance_time: number;
  places_count_booking: number;
  contract: number;
  electric_charger_rule: number;
}

export interface PlansResponse {
  count: number;
  next: null;
  previous: null;
  results: Plan[]
}

export class PlansAPI {
  constructor(private client: CloudParkClient) {}

  getPlans() {
    /**
     * Não funciona /customerplan/139075144
     * Nem /customerplan?id=139075144
     * Retorna 404
     *
     * Mas retorna todos os planos, então temos que fazer filtragem manual
     * Usar a função getPlanById
     */
    return this.client.get<PlansResponse>("/customerplan");
  }

  async getPlanById(id: string) {
    const plans = await this.client.get<PlansResponse>("/customerplan");
    return plans.results.find((p: Plan) => Number(p.id) === Number(id));
  }
}
