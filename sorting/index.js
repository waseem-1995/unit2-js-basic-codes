let arr = [
  {
    price: 240,
  },
  {
    price: 200,
  },
  {
    price: 340,
  },
  {
    price: 300,
  },
];
// ascending - decending

// ascending -> [-4,1,3,7,10](Increasing Order)
// decending -> [10,7,3,1,-4]; (Decreasing Order)
// ["1","4","6","2","5"];
// [1,10,2,20,4,5,6];
// acctual -> [1,2,4,5,6,10,20]
// a function that takes another function as a parameter is
// called HOF and the function it takes is called callback function

let arr1 = arr.map(function(el){
    return el;
});
let sorted = arr1.sort(function(var1,var2){
   return var1.price - var2.price;
});
console.log(arr);
arr.sort()

let startVal = 200;
let endVal = 300;

// select.addEventListner("change", function () {
//   if (select.value === "") {
//     console.log(arr);
//   } else {
//     console.log(
//       arr.filter(function (el) {
//         if (el.price >= startVal && el.price <= endVal) {
//           return true;
//         } else {
//           return false;
//         }
//       })
//     );
//   }
// });


