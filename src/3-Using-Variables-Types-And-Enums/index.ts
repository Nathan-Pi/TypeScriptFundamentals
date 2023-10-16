let firstName: string | null | undefined;
firstName = 'Dan';

let age: number;
age = 45;

let hasPurchased = true;

let productNames: string[] = ['a', 'b', 'c']
let petCount: number[] = [];

productNames.push('baskerball');
petCount.push(5);

console.log( firstName, age, hasPurchased, productNames, petCount);


enum productType {
  Sports,
  HomeGoods,
  Groceries
}

let pt = productType.Sports;
if (pt === productType.Sports) {

}