  var tabcolor = ["#1abc9c", "#2ecc71", "#3498db", "#e74c3c"];

  function start() {
      var num = document.querySelector("#numero").value;
      var sec = (document.querySelector("#seconde").value) * 1000;
      var rand = Math.floor(Math.random() * num);
      var nvdiv = document.querySelector(".carres");
      var randC = tab(tabcolor);
      var randCP = tab(tabcolor);
      nvdiv.innerHTML = "";

      for (var i = 0; i < num; i++) {
          var t = document.createElement("div");
          
          if (randC === randCP)
               tab(table)
          else {
          if(i==rand)
              
          t.style.backgroundColor = randC;
          else
          t.style.backgroundColor = randCP;
          
          
      }
      nvdiv.appendChild(t);
      }
  }

  function tab(table) {
      var colorRand = Math.floor(Math.random() * tabcolor.length);
      var colorR = table[colorRand];
      return colorR;
  }
  //var table = [];
  //table.push(tab(tabcolor));









  /* 

           var colorS = table[colorRand];
        var newTab = [];
        if (colorT === colorS)
            var colorRand = Math.floor(Math.random() * tabcolor.length);
        else {

            newTab.push(colorS);
            
        }
        return newTab;
  */
