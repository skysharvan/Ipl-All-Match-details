let arr = [1,2,3,4,5,6 , 45,25];
let arr1 = [1,2,3,4,5 , 5 , 4,8];
// console.log(arr1);
// console.log(typeof(arr1));
function smaller(x ){
   // let sr = x*x;
    return  x*x*x;
}
function square(arr){
    return arr;
}

// console.log("ljflo");
function bigger(arr1 , cb)
{
    let newArr = [];
    for(let i = 0 ; i< arr1.length ; i++)
    {
        let cubVal = cb(arr1[i]);
        newArr.push(cubVal);

    }
    return newArr;
}
let cubArr = bigger(arr , smaller);
console.log("cubArr"  , cubArr);


