// Amounts are integers in paise, never floats.
export const toPaise = (rupees: number) => Math.round(rupees * 100);
