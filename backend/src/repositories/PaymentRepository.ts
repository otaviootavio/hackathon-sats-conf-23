const ZDB_AUTH = process.env.VITE_ZDB_AUTH;
const ZDB_BASE_URL = process.env.VITE_ZDB_BASE_URL;

//TODO
//Implement payments

class PaymentRepository {
  async createCharge(amount: number): Promise<any> {

    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("apikey", ZDB_AUTH as string);

    const requestOptions = {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        expiresIn: 300,
        amount: amount,
        description: "My Charge Test Zapier",
        // internalId: "11af01d092444a317cb33faa6b8304b8",
        // callbackUrl: "https://my-website.com/zbd-callback",
      }),
    };

    const data = await fetch(`${ZDB_BASE_URL}/v0/charges`, requestOptions)
      .then((response) => response.json())

    return data;
  }

  async sendLightningAddressPayment(payment: any): Promise<any> {
    return "todo";
  }
}

export default new PaymentRepository();
