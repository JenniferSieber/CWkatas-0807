// 6kyu, 7kyu, 8kyu
// KATA 1 8kyu
// https://www.codewars.com/kata/559d2284b5bb6799e9000047/train/javascript
const addLength = str => str.split(' ').map(el => `${el} ${el.length}`);
  
console.log(addLength('apple ban'))

// KATA 2 8kyu
// https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7
function gooseFilter (birds) {
  const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  let bird = []
  birds.forEach(bird => {
    if(geese.includes(bird)) {
      arr.push(bird)

    } 
  })
  return bird
  
};

console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]));

// KATA 3 7kyu
//

// KATA 4 8kyu
//

// KATA 5 7kyu
// 