const VOLTAGE_AUTH = process.env.VOLTAGE_AUTH;
const VOLTAGE_BASE_URL = process.env.VOLTAGE_BASE_URL

//TODO
//Implement payments

class PaymentRepository {
  async createCharge(request: any): Promise<any> {
    const res = await fetch(`${VOLTAGE_BASE_URL}/v0/charges`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-VOLTAGE-AUTH": `${VOLTAGE_AUTH}`,
      },
      body: JSON.stringify({
        capacity: 1000000,
        self_chan_balance: 100000,
        lease_duration_blocks: 2016,
        node_tier: "any",
        bps: 18,
      }),
    });
    console.log(res);
  }

  async sendLightningAddressPayment(
    payment: any
  ): Promise<any> {
    return "todo";
  }
}

export default new PaymentRepository();
