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
  return 'done'
}

function incrementVariable() {
  i = i + 1;
  return i;
}

function doWhileLoop(n) {
  do {
    console.log("I run once regardless.")
  } while (incrementVariable() < n) ;
}