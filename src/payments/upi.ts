// UPI deep-link payments. No merchant gateway account is needed.
export function upiLink(orderId: string, amountPaise: number, payeeVpa: string) {
  const rupees = (amountPaise / 100).toFixed(2);
  const params = new URLSearchParams({ pa: payeeVpa, pn: "CampusKart", am: rupees, tr: orderId, cu: "INR" });
  return `upi://pay?${params.toString()}`;
}

export function openUpi(orderId: string, amountPaise: number, payeeVpa: string) {
  window.location.href = upiLink(orderId, amountPaise, payeeVpa);
}
