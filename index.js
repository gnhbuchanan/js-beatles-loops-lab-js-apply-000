// add solution here
function theBeatlesPlay(mems,instruments){
  
  let result = [];
  
  for(let i = 0; i < mems.length; i++){
    
    let words = `${mems[i]} plays ${instruments[i]}`
    
    result.push(words);
    
  }
  
  return result; 
}

function johnLennonFacts(arr){
  
  let result = []
  
  while(result.length < arr.length){
    
    let i = 0; 
    let words = arr[i] + '!!!';
    result.push(words);
    i++;
    
  }
  
  return result; 
  
}











