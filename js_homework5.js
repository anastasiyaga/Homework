var services = {
  "стрижка": "60 грн",
  "гоління": "80 грн",
  "Миття голови": "100 грн",
  price() {
    let total = 0;
    for (let key in this) {
      if (typeof this[key] === "string") {
        total += parseFloat(this[key]);
      }
    }
    return total + " грн";
  },
  minPrice() {
    let prices = [];
    for (let key in this) {
      if (typeof this[key] === "string") {
        prices.push(parseFloat(this[key]));
      }
    }
    let min = Math.min(...prices);
    return min + " грн";
  },
  maxPrice() {
    let prices = [];
    for (let key in this) {
      if (typeof this[key] === "string") {
        prices.push(parseFloat(this[key]));
      }
    }
    let max = Math.max(...prices);
    return max + " грн";
  }
};

console.log("Загальна вартість:", services.price());
console.log("Мінімальна ціна:", services.minPrice());
console.log("Максимальна ціна:", services.maxPrice());