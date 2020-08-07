const ages = [11, 13, 17 , 23, 32];
const ages2 = [42, 54, 43];
const ages3 = [65, 75, 53, 32];
const allAges = ages.concat(ages2).concat(7).concat(ages3);
const allAges2 = [...ages, ...ages2, 7, ...ages3];
//console.log(allAges2);

const business = 650;
const minister = 450;
const sochib = 250;
//const maximum = Math.max(business, minister, sochib);
const takaPoisa = [650, 750, 875, 453, 250];
const maximum = Math.max(...takaPoisa);
console.log(maximum);