function numberIsRepeated(number){
    if(number % 11 == 0)
    return true;
    else
    return false;
  }
  
  let array = new Array();
  for(let i = 10; i < 100; i++){
  if(numberIsRepeated(i)) array.push(i);
  }
  console.log(array);