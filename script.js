const decrement=document.getElementById('decrease');
const increment=document.getElementById('increase');
const counterValue=document.getElementById('counter');
const reset=document.querySelector('#res');
let counter=0



decrement.addEventListener('click',()=>{
      if(counterValue.innerHTML>'0'){
        counter--;
        counterValue.innerHTML=counter;
      }
      else{
        alert("It can not be decreased further");
      }
      
});

increment.addEventListener('click',()=>{
    counter++;
    counterValue.innerHTML=counter;
});

reset.addEventListener('click',()=>{
    counter=0;
    counterValue.innerHTML=counter;
});
