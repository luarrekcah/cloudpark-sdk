# CloudPark SDK  
SDK não-oficial em Node.js/TypeScript para integração com a API CloudPark.
Docs: https://sandbox.cloudpark.com.br/api/v1/integration/storevalidation

Este pacote fornece uma interface simples e tipada para consumir os endpoints REST da CloudPark, incluindo autenticação via Token, e demais operações disponíveis na API.

---

## Fluxo

...

---

## Instalação

```bash
npm install @luarrekcah/cloudpark-sdk
```
## Exemplo

Código base para criar o client da API:

```js
const {
  CloudParkClient,
  StoreValidationAPI,
  PlansAPI
} = require("@luarrekcah/cloudpark-sdk");

const client = new CloudParkClient(
  "token",
  "https://sandbox.cloudpark.com.br"
);
```

Depois utilize o endpoint desejado:

```js
const store = new StoreValidationAPI(client);
const plans = new PlansAPI(client);
// ... Entre outros
```

Exemplificação completa:

```js
const {
  CloudParkClient,
  PlansAPI
} = require("@luarrekcah/cloudpark-sdk");

const client = new CloudParkClient(
  "token",
  "https://sandbox.cloudpark.com.br"
);

const plans = new PlansAPI(client);

async function test() {
  try {
    const res = await plans.getPlans();
    console.log("Resultado:", res);
  } catch (err) {
    console.error("Erro:", err);
  }
}

test();
```
---

## Endpoints Disponíveis

### `PlansAPI`

Consulta de planos e contratos.

**Exemplo:**

```js
await plans.getPlans();
await plans.getPlanById("139075144");
```

---

Mais em breve

---

## Ambiente de Produção

Será necessário solicitar ao suporte da CloudPark:

* Token de Produção
* `integration_id`
* `contract_id`

---

## Suporte

Em caso de dúvidas sobre o funcionamento da API, entre em contato com o suporte oficial CloudPark.

---

## Licença

MIT — livre para uso comercial e modificações.