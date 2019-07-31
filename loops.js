function forLoop(array) {
    for (let i = 0; i < 25; i++){
        array.push(`I am ${i} strange loop${i === 1 ? '' : 's'}.`);
    }
    return array;
}


function whileLoop(n) {
  let countdown = n
  
  while(countdown > 0) {
    console.log(--countdown);
  }
  return done
}