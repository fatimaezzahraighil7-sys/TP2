function addition(a, b) {
  return a + b;
}

function soustraction(a, b) {
  return a - b;
}

if (require.main === module) {
  console.log("Résultat addition:", addition(10, 5));
  console.log("Résultat soustraction:", soustraction(10, 5));
}