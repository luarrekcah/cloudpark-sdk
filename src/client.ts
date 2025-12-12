import axios, { AxiosInstance, AxiosError } from "axios";

export class CloudParkClient {
  private api: AxiosInstance;

  constructor(
    private token: string,
    private baseURL: string = "https://sandbox.cloudpark.com.br"
  ) {
    this.api = axios.create({
      baseURL: `${baseURL}/api/v1/integration`,
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      },
    });

    // Interceptor de respostas
    this.api.interceptors.response.use(
      (res) => res,
      (error: AxiosError) => {
        if (error.response) {
          const status = error.response.status;

          switch (status) {
            case 400:
              throw new Error(
                `Erro 400 – Erro de aplicação: ${JSON.stringify(
                  error.response.data
                )}`
              );
            case 401:
              throw new Error("Erro 401 – Token inválido ou não enviado.");
            case 404:
              throw new Error(
                `Erro 404 – Recurso não encontrado: ${JSON.stringify(
                  error.response.data
                )}`
              );
          }
        }

        throw new Error("Erro inesperado na API CloudPark.");
      }
    );
  }

  // Métodos REST base
  public get<T>(url: string, params?: any) {
    return this.api.get<T>(url, { params }).then((r) => r.data);
  }

  public post<T>(url: string, data?: any) {
    return this.api.post<T>(url, data).then((r) => r.data);
  }

  public put<T>(url: string, data?: any) {
    return this.api.put<T>(url, data).then((r) => r.data);
  }

  public delete<T>(url: string) {
    return this.api.delete<T>(url).then((r) => r.data);
  }
}
