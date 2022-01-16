it('should calculate the monthly rate correctly', function () {
  // ...
  expect(calcMonthlyPayment(500000, 30, 0.035)).toEqual("2245.22");
  expect(calcMonthlyPayment(300000, 15, 0.03)).toEqual("2071.74");
});
