
(function () {
    "use strict";
  
    let state = document.getElementById("s-state");
    document.addEventListener("DOMContentLoaded", function () {
      let btn = document.getElementById("btn-estimate");
      btn.disabled = true;
      state.addEventListener("change", () => {
        if (state.value === "") {
          btn.disabled = true;
        } else {
          btn.disabled = false;
        }
      });
  
      document.getElementById("cart-hplus").addEventListener("submit", (e) => {
        e.preventDefault();
        let itemball =parseInt(document.getElementById("txt-q-bball").value) ,
          itemjersey =parseInt(document.getElementById("txt-q-jersey").value) ,
          itempower =parseInt(document.getElementById("txt-q-power").value),
          shipingstate = state.value,
          shipingmethod = document.querySelector(
            "input[name=r_method]:checked"
          ).value;
  
        var isDAlnumber = itemball  + itemjersey  + itempower ;
        var pirace = (itemball*90)  + (itemjersey*25)  + (itempower*30) ;
        var isDaloption;
        if (shipingstate === "CA") {
          isDaloption = 1.075;
        } else {
          isDaloption = 1;
        }
  
        var isDalradio;
        switch (shipingmethod) {
          case "usps":
            isDalradio = 2;
            break;
          case "ups":
            isDalradio = 3;
            break;
            default:
              isDalradio = 0;
            break
        }
        
        
        let cons=isDAlnumber*isDalradio;
        let total=((pirace*isDaloption)+cons).toFixed(2)
       document.getElementById("txt-estimate").value="$"+total;
       document.getElementById("results").innerHTML="total:"+isDAlnumber+"<br>"
      });
    });
  })();