 const person = {name: 'jack william', age: 17, job: 'facebooker', gfName: 'Ema Watson', address: 'kochu khet', phone: '434344', friends: ['rakib', 'sakil', 'nayem']};
// //const gfName = person.gfName;
 const { phone } = person;
 const complexObject = {
     name: 'abc',
     info: {
         address: 'kola bagan',
         leader: 'tiger leader'
     }
 }
 const { leader } = complexObject.info
// const { phone, gfName, salary, address } = person;
// console.log(gfName, phone, address, salary);
// console.log(gfName, phone, address, salary);


const friends = ['rakib', 'rabbi', 'raihan', 'mehedi'];
const [firstFrnd, ...olders] = friends;
console.log(olders);