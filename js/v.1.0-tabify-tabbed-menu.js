// Tabify Menu
const btnArr = document.querySelectorAll(".tabify-ul button");
const liArr = document.querySelectorAll(".tabify-ul li");
const divArr = document.querySelectorAll(".tabify-panels div");
const colors = ['#cceeff', '#ddddee', '#ddee99', '#eeccdd', '#ddeedd']
let activeTab = divArr[0];
activeTab.style.display = "block";

for(let i = 0; i < btnArr.length; i++) {  
  liArr[i].style.backgroundColor = colors[i];
  divArr[i].style.backgroundColor = colors[i];
  btnArr[i].addEventListener("click", function() {
    btnArr[i].classList.toggle('btn-hilite');
    activeTab.style.display = "none";
    activeTab = divArr[i];
    activeTab.style.display = "inline-block";
  });
}

// nextElementSibling gets the next element after "this" 
// which is the clicked button that is calling the function
// this next element sibling is the div which is either hidden 
// or showing; function toggles the show-hide

// Element.nextElementSibling read-only property returns the 
// element immediately following the specified one in its 
// parent's children list

// Element.scrollHeight read-only property is a measurement of 
// the height of an element's content, including content not 
// visible on the page -- this tells us how tall we need to 
// make thediv when it animates from zero-height