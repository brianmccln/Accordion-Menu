// Accordify Menu
const btnsArr = document.querySelectorAll("li button");

// show-hide funciton is short, so just put it inline as anon function:
for (let i = 0; i < btnsArr.length; i++) {
    btnsArr[i].addEventListener("click", function() {
        btnsArr[i].classList.toggle("btn-hilite"); // toggle on-off hilite class
        const div = btnsArr[i].nextElementSibling; // div is sibling next to btn
        div.style.height = div.style.height ? null : div.scrollHeight+"px";
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