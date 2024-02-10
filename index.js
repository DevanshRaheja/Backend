const arr = [1,2,3,4,5,6,7,8,9,10]

const multiply = (myArr) => {
    const newArr = []
    myArr.forEach(item => {
        item *= 2
        newArr.push(item)
    })
    console.log(newArr);
}

// multiply(arr)

/*
Other solution

map(arr, transform) : where arr is array and transform is a function using that array
 */

const ans = arr.map((i) =>  {
                        return i * 2;
                    });
// console.log(ans);

// ((myArr) => {
//     const newArr = [];
//     myArr.forEach((item) => {
//       item *= 2;
//       newArr.push(item);
//     });
//     console.log(newArr);
// })(arr);

// create a map function that takes 2 inputs
// an array, and a transformation callback/fn
// and transforms the array into a new one using
// the transformation fn

function transform(i){
   return i * 2;
}


// Filter in JS

const myArr = ["devansh", "sarthak", "shivi"]

const result = myArr.filter((i) => {
    if(i.startsWith("sh")) return true
    else return false
})

console.log(result);
