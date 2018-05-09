class Batch {

  constructor(batch,salmonType,size,inventory,cost,price) {
    this.batch = batch;
    this.salmonType = salmonType;
    this.size = size;
    this.inventory = inventory;
    this.cost = cost;
    this.price = price;
  }

  sell() {
    return this.inventory--;
  }

  profit() {
    return this.price - this.cost;
  }
}

let batch1 = new Batch(1,"Pacific","M", 20, 10.00);

console.log('batch1',batch1);

batch1.price = 20;
console.log('price',batch1.price);
console.log('this',this);


