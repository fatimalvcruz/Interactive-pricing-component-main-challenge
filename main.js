

 const input = document.querySelector("input[type=range]");

input.style.setProperty("--value", input.value);
input.addEventListener("input", function(evt) {
   input.style.setProperty("--value", input.value);
  });
 

  
  

  const myRange = document.getElementById("myRange")
  const toogle = document.getElementById("toogle")
  const dolarMonth = document.querySelector(".dolar-month")
  const money = document.querySelector(".money")
  const measure = document.getElementById("measure")
  const pageViews = ["10K", "50K", "100K", "500K", "1M"]
  const monthlyRate = [8, 12, 16, 24, 36]

  money.innerHTML = monthlyRate[myRange.value]
  measure.innerHTML = pageViews[myRange.value]

  var isYearly = false;
  
 myRange.oninput = function(){
    updateCost()
  }



 toogle.onchange = function() {
    if (isYearly === false) {
      isYearly = true;
    } else {
      isYearly = false;
    }
    updateCost();
  } 

  function updateCost(){
   measure.innerHTML = pageViews[myRange.value]
    if (toogle.checked == true){
      money.innerHTML = monthlyRate[myRange.value] * 0.75
    } else {
      money.innerHTML = monthlyRate[myRange.value]
    }
  }
  

