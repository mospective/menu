export function formatPrice(pennies) {
    return (pennies).toLocaleString("en-GB", {
      style: "currency",
      currency: "GBP"
    });
  }