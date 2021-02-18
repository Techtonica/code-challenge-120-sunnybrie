// Since you all have been reading about functional programming,
// let's create some useful functional-style JS.
//
// You have an array and you want to group it by some logic.
// In the \_functional\_ style you define that logic using a function
// and use it as an argument.
//
//
//
// ```
//
// // Let's say you want to group your pomeranians by weight class.
// pomeranians = [
//   { name: 'Osito', weight_kg: 3.5 },
//   { name: 'Maní', weight_kg: 3.9 },
//   { name: 'Bella', weight_kg: 7.2 }
// ]
// groupBy(pomeranians, (p) => Math.floor(p.weight_kg))\
// /*
//  {
//   '3': [
//         { name: 'Osito', weight_kg: 3.5 },
//         { name: 'Maní', weight_kg: 3.9 }
//       ],
//   '7': [{ name: 'Bella', weight_kg: 7.2 }]
//  }
// */
//
//  // or string by their length
// groupBy(['one', 'two', 'three'], (s) => s.length);
// // => { '3': ['one', 'two'], '5': ['three'] }
//
// ```
//
//
//
// Implement groupBy. Use other existing functions on Array if you want.
//

function groupBy(arr, logic){

  let organizedBox = new Object;
  
  for(item of arr){
    let newProp = logic(item);
    
    if(organizedBox.hasOwnProperty(`${newProp}`)){
      let groupHold = organizedBox[`${newProp}`];
      groupHold.push(item);
    }
    else {
      organizedBox[`${newProp}`] = [];
      let groupHold = organizedBox[`${newProp}`];
      groupHold.push(item);
    };

  };
  
  return organizedBox;
}

var butterflies = [
  {name:"bugsby", color:"blue", species:"morpho"},
  {name:"daisy", color:"yellow", species:"thistle-eater"},
  {name:"dell", color:"blue", species:"russian-blue"},
  {name:"kingsley", color:"orange", species:"monarch"}
];

console.log(groupBy(butterflies, b => b.color));

pomeranians = [
  { name: 'Osito', weight_kg: 3.5 },
  { name: 'Maní', weight_kg: 3.9 },
  { name: 'Bella', weight_kg: 7.2 }
];
console.log(groupBy(pomeranians, (p) => Math.floor(p.weight_kg)));

module.exports = groupBy;
