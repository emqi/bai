getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

arr = [];
for (x = 0; x< 10; x++){
    arr.push(getRandomIntInclusive(5,20))
}

console.log(arr);