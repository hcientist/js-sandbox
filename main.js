console.log('hello')
// https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
const items = [
  {
    name: "michael",
    value: 1000,
    weight: 160,
  },
  {
    name: "steven",
    value: 100,
    weight: 150,
  },
];

console.log(items)
items.sort((a, b) => a.value/a.weight - b.value/b.weight);
console.log(items)