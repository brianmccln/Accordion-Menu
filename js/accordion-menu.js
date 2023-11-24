// Lesson 05.07 - FINAL
// Accordion Menu
// adapted from: https://www.w3schools.com/howto/howto_js_accordion.asp

const panelsArr = document.querySelectorAll("section button");

for (let p = 0; p < panelsArr.length; p++) {
    panelsArr[p].addEventListener("click", showHidePanel);
}

function showHidePanel() {
    // show-hide (toggle) "active" class,
    this.classList.toggle("btn-active");
    console.log(this);
    // show-hide (toggle) div in same section as clicked panel
    // nextElementSibling gets the next element after "this" 
    // which is the clicked button that is calling the function
    // this next element sibling is the panel div which is hidden 
    // until the button is clicked
    const hiddenDiv = this.nextElementSibling;
    console.log('hiddenDiv:', hiddenDiv);
    if(hiddenDiv.style.maxHeight) {
        hiddenDiv.style.maxHeight = null;
    } else {
        hiddenDiv.style.maxHeight = hiddenDiv.scrollHeight + "px";
    } 
  };

// Element.nextElementSibling read-only property returns the 
// element immediately following the specified one in its 
// parent's children list

// Element.scrollHeight read-only property is a measurement of 
// the height of an element's content, including content not 
// visible on the page -- this tells us how tall we need to 
// make thediv when it animates from zero-height