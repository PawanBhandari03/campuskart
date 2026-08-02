// Card payments through a third-party payment gateway.
export async function chargeCard(orderId: string, amountPaise: number, token: string) {
  const res = await fetch(process.env.GATEWAY_URL + "/charge", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.GATEWAY_KEY}` },
    body: JSON.stringify({ orderId, amountPaise, token }),
  });
  if (!res.ok) throw new Error("gateway charge failed");
  return res.json();
}
