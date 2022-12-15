export const currencyFormatter = (price) => {
  return price?.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};
