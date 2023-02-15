var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";
function menutoggle() {
  if (MenuItems.style.maxHeight == "0px") {
    MenuItems.style.maxHeight = "200px";
  } else {
    MenuItems.style.maxHeight = "0px";
  }
}

const buttons = document.querySelectorAll("div");

buttons.forEach( button =>{
    button.addEventListener('click',()=>{
        const faq = button.nextElementSibling;
        const icon = button.children[1];

        faq.classList.toggle('show');
        icon.classList.toggle('rotate');
    })
} )

const p = document.getElementById("searchword");
const special =  /[\\[{().+*?|^$]/g;
const specials =  /[\\[{().+*?|^$]/g;
var ps = document.getElementById("intro");
var pse = document.getElementById("intro1");
var pseee = document.getElementById("intro3");
var pseees = document.getElementById("intro4");
var pses = document.getElementById("intro5");
var psess = document.getElementById("intro6");
var pseess = document.getElementById("intro7");
var pss = document.getElementById("intro8");
var psse = document.getElementById("intro9");
var prse = document.getElementById("intro10");
var pese = document.getElementById("intro11");
var pswe = document.getElementById("intro12");
var pste = document.getElementById("intro13");
var psre = document.getElementById("intro14");
var p1se = document.getElementById("intro15");
var pse2 = document.getElementById("intro16");
var pse3 = document.getElementById("intro17");
var pse4 = document.getElementById("intro18");
var pse5 = document.getElementById("intro19");
var pse6 = document.getElementById("intro20");

function search() {
    let input = document.getElementById("input").value;
    
    if (input !== "") {
      if(special.test(input)) input = input.replace(special, "$&");
      let regExp = new RegExp(input, "gi");
      p.innerHTML = (p.textContent).replace(regExp, "<mark>$&</mark>");
    }
    if(input !== ""){
      if(specials.test(input)) input = input.replace(specials, "$&");
      let regExp = new RegExp(input, "gi");
      ps.innerHTML = (ps.textContent).replace(regExp, "<mark>$&</mark>");
    }
    if(input !== ""){
      if(special.test(input)) input = input.replace(special, "$&");
      let regExp = new RegExp(input, "gi");
      pse.innerHTML = (pse.textContent).replace(regExp, "<mark>$&</mark>");
    }
    if(input !== ""){
      if(special.test(input)) input = input.replace(special, "$&");
      let regExp = new RegExp(input, "gi");
      pseee.innerHTML = (pseee.textContent).replace(regExp, "<mark>$&</mark>");
    }
    if(input !== ""){
      if(special.test(input)) input = input.replace(special, "$&");
      let regExp = new RegExp(input, "gi");
      pseees.innerHTML = (pseees.textContent).replace(regExp, "<mark>$&</mark>");
    }
    if(input !== ""){
      if(special.test(input)) input = input.replace(special, "$&");
      let regExp = new RegExp(input, "gi");
      pses.innerHTML = (pses.textContent).replace(regExp, "<mark>$&</mark>");
    }
    if(input !== ""){
      if(special.test(input)) input = input.replace(special, "$&");
      let regExp = new RegExp(input, "gi");
      psess.innerHTML = (psess.textContent).replace(regExp, "<mark>$&</mark>");
    }
    if(input !== ""){
      if(special.test(input)) input = input.replace(special, "$&");
      let regExp = new RegExp(input, "gi");
      pseess.innerHTML = (pseess.textContent).replace(regExp, "<mark>$&</mark>");
    }
    if(input !== ""){
      if(special.test(input)) input = input.replace(special, "$&");
      let regExp = new RegExp(input, "gi");
      pss.innerHTML = (pss.textContent).replace(regExp, "<mark>$&</mark>");
    }
    if(input !== ""){
      if(special.test(input)) input = input.replace(special, "$&");
      let regExp = new RegExp(input, "gi");
      psse.innerHTML = (psse.textContent).replace(regExp, "<mark>$&</mark>");
    }
    if(input !== ""){
      if(special.test(input)) input = input.replace(special, "$&");
      let regExp = new RegExp(input, "gi");
      prse.innerHTML = (prse.textContent).replace(regExp, "<mark>$&</mark>");
    }
    if(input !== ""){
      if(special.test(input)) input = input.replace(special, "$&");
      let regExp = new RegExp(input, "gi");
      pese.innerHTML = (pese.textContent).replace(regExp, "<mark>$&</mark>");
    }
    if(input !== ""){
      if(special.test(input)) input = input.replace(special, "$&");
      let regExp = new RegExp(input, "gi");
      pswe.innerHTML = (pswe.textContent).replace(regExp, "<mark>$&</mark>");
    }
    if(input !== ""){
      if(special.test(input)) input = input.replace(special, "$&");
      let regExp = new RegExp(input, "gi");
      pste.innerHTML = (pste.textContent).replace(regExp, "<mark>$&</mark>");
    }
    if(input !== ""){
      if(special.test(input)) input = input.replace(special, "$&");
      let regExp = new RegExp(input, "gi");
      psre.innerHTML = (psre.textContent).replace(regExp, "<mark>$&</mark>");
    }
    if(input !== ""){
      if(special.test(input)) input = input.replace(special, "$&");
      let regExp = new RegExp(input, "gi");
      p1se.innerHTML = (p1se.textContent).replace(regExp, "<mark>$&</mark>");
    }
    if(input !== ""){
      if(special.test(input)) input = input.replace(special, "$&");
      let regExp = new RegExp(input, "gi");
      pse2.innerHTML = (pse2.textContent).replace(regExp, "<mark>$&</mark>");
    }
    if(input !== ""){
      if(special.test(input)) input = input.replace(special, "$&");
      let regExp = new RegExp(input, "gi");
      pse3.innerHTML = (pse3.textContent).replace(regExp, "<mark>$&</mark>");
    }
    if(input !== ""){
      if(special.test(input)) input = input.replace(special, "$&");
      let regExp = new RegExp(input, "gi");
      pse4.innerHTML = (pse4.textContent).replace(regExp, "<mark>$&</mark>");
    }
    if(input !== ""){
      if(special.test(input)) input = input.replace(special, "$&");
      let regExp = new RegExp(input, "gi");
      pse5.innerHTML = (pse5.textContent).replace(regExp, "<mark>$&</mark>");
    }
    if(input !== ""){
      if(special.test(input)) input = input.replace(special, "$&");
      let regExp = new RegExp(input, "gi");
      pse6.innerHTML = (pse6.textContent).replace(regExp, "<mark>$&</mark>");
    }
}
