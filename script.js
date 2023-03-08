window.addEventListener("load", init);
function init() {
  var articELEM = document.querySelectorAll("article");
  articELEM[0].innerHTML = "<button> Katt ide! </button>";
  const gombElem = document.querySelectorAll("article button");
  gombElem[0].addEventListener("click", function () {
    console.log("kattintottál");
  });
  gombElem[0].addEventListener("click", () => {
    console.log("kattintottál");
  });

  /**ez függveny 
    csak egy memoria cim referencia, referencia függvényre */
    
    articELEM[0].innerHTML = "<div> <img src= \"kep.jpg\"> </div>";
    const kepElem = document.querySelector("article div");
    kepElem.addEventListener("mouseenter", function () {
    console.log("Fölé vittem az egeret");
  });
  kepElem.addEventListener("mouseout", function(){
kepElem.style.border="2px solid red";
})
}

