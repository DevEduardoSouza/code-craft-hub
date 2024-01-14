import calculateIMC from "../js/features/calculationImc";

test("Calculates IMC correctly", () => {
  const result = calculateIMC({ weight: 70, height: 1.75 });
  expect(result.imc).toEqual(22.86); // Valor calculado com base no exemplo fornecido
  expect(result.classification).toEqual({
    range: 24.9,
    description: "Peso normal (saudável)",
  });
});

test("Throws error for empty fields", () => {
  expect(() => calculateIMC({ weight: null, height: 1.75 })).toThrow(
    "The weight and height fields cannot be empty"
  );
});

test("Throws error for non-number types", () => {
  expect(() => calculateIMC({ weight: "20", height: true })).toThrow(
    "The weight and height fields must be a number"
  );
});
