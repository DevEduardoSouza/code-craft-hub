const calculationImc = ({ weight, height }) => {
  if (!weight || !height) {
    throw new Error("The weight and height fields cannot be empty");
  }

  if (typeof weight !== "number" || typeof height !== "number") {
    throw new TypeError("The weight and height fields must be a number");
  }

  const imc = Number((weight / (height * height)).toFixed(2));

  const ranges = [
    {
      range: 18.5,
      description: "Abaixo do peso",
    },
    {
      range: 24.9,
      description: "Peso normal (saudável)",
    },
    {
      range: 29.9,
      description: "Sobrepeso",
    },
    {
      range: 34.9,
      description: "Obesidade grau 1",
    },
    {
      range: 39.9,
      description: "Obesidade grau 2",
    },
    {
      range: 40,
      description: "mórbida",
    },
  ];

  const findIMCRange =
    ranges.find((range) => imc < range.range) ?? ranges[ranges.length - 1];

  return {
    imc: imc,
    classification: findIMCRange,
  };
};

export default calculationImc;
