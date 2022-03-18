

const input = document.querySelector("input[type=range]");

input.style.setProperty("--value", input.value);
input.addEventListener("input", function(evt) {
   input.style.setProperty("--value", input.value);
  });









  const myRange = document.getElementById("myRange")
  const measure = document.getElementById("measure")
  const toogle = document.getElementById("toogle")
  const labelSswitch = document.getElementById("switch")
  const dolarMonth = document.querySelector(".dolar-month")
  const money = document.querySelector(".money")
  const kbite = document.querySelector(".kbite")
 










function withoutDiscount(){

   myRange.addEventListener('input', () =>{

      let val = myRange.value;
 

      if (val == 0  ){
         measure.innerHTML = val;
         money.innerHTML = "0.00";
         kbite.innerHTML = "K";
      } 
      if (val == 20){
         measure.innerHTML = 10;
         money.innerHTML = "8.00";
         kbite.innerHTML = "K";
      }
      if (val == 40 ){
         measure.innerHTML = 50;
         money.innerHTML = "12.00";
         kbite.innerHTML = "K";
      }
      if (val == 60 ){
         measure.innerHTML = 100;
         money.innerHTML = "16.00";
         kbite.innerHTML = "K";
      }
      if (val == 80 ){
         measure.innerHTML = 500;
         money.innerHTML = "24.00";
         kbite.innerHTML = "K";
      }
      if (val == 100){
         measure.innerHTML = 1;
         money.innerHTML = "36.00";
         kbite.innerHTML = "M";
      } 
      
  }); 


}






function displayDiscount(){

   myRange.addEventListener('input', () =>{

      let val = myRange.value;
 

      if (val == 0  ){
         measure.innerHTML = val;
         money.innerHTML = "0.00";
         kbite.innerHTML = "K";
      } 
      if (val == 20){
         measure.innerHTML = 10;
         money.innerHTML = "6.00";
         kbite.innerHTML = "K";
      }
      if (val == 40 ){
         measure.innerHTML = 50;
         money.innerHTML = "9.00";
         kbite.innerHTML = "K";
      }
      if (val == 60 ){
         measure.innerHTML = 100;
         money.innerHTML = "12.00";
         kbite.innerHTML = "K";
      }
      if (val == 80 ){
         measure.innerHTML = 500;
         money.innerHTML = "18.00";
         kbite.innerHTML = "K";
      }
      if (val == 100){
         measure.innerHTML = 1;
         money.innerHTML = "27.00";
         kbite.innerHTML = "M";
      } 
      
  }); 


}



withoutDiscount();



toogle.addEventListener('click', () =>{

   if(toogle.checked == true){
      displayDiscount();

   } else {
      withoutDiscount();
     
   } 

 

   }); 







  



























/* 

  myRange.addEventListener('input', () =>{

   let val = myRange.value;


   if (val == 0  ){
      measure.innerHTML = val;
      money.innerHTML = "0.00";
      kbite.innerHTML = "K";
   } 
   if (val == 20){
      measure.innerHTML = 10;
      money.innerHTML = "8.00";
      kbite.innerHTML = "K";
   }
   if (val == 40 ){
      measure.innerHTML = 50;
      money.innerHTML = "12.00";
      kbite.innerHTML = "K";
   }
   if (val == 60 ){
      measure.innerHTML = 100;
      money.innerHTML = "16.00";
      kbite.innerHTML = "K";
   }
   if (val == 80 ){
      measure.innerHTML = 500;
      money.innerHTML = "24.00";
      kbite.innerHTML = "K";
   }
   if (val == 100){
      measure.innerHTML = 1;
      money.innerHTML = "36.00";
      kbite.innerHTML = "M";
   } 
   
}); 
 */


 




  


