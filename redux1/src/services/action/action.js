export const depositMoney = (amount) => {
  return (dispach) => {
    dispach({
      type: "deposit",
      payload: amount,
    });
  };
};

export const withdrewMoney = (amount) => {
  return (dispach) => {
    dispach({
      type: "withdrew",
      payload: amount,
    });
  };
};
