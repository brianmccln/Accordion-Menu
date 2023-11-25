// Dynamic Accordion Menu

/* Make this dynamically inside the accordify ul:
<li>
    <button>Balderdash<span>+</span></button>
    <div>
        <p>Plaid, portland truffaut chicharrones. Irony copper mug.</p>
        <p>Gluten-free pabst, Banjo green juice, quinoa waistcoat.</p>
    </div>
</li> 
*/

const accordifyUl = document.querySelector(".accordify");

accordifyData.forEach(e => {
    const li = document.createElement('li'); // make an li
    accordifyUl.appendChild(li); // output li to accordion ul
    const btn = document.createElement('button'); // make a button
    btn.innerHTML = e.btnText + '<span>+</span>'; // output btn name with +
    btn.addEventListener('click', showHide); // button calls function
    li.appendChild(btn); // output button to li
    const div = document.createElement('div'); // make a div
    div.innerHTML = e.divHTML; // put the desc in the div
    // for html in the div, such a <p> tags, add that in the dataset
    li.appendChild(div); // output the div to the li
});

function showHide() {
    this.classList.toggle("btn-hilite");
    const div = this.nextElementSibling;
    div.style.height = div.style.height ? null : div.scrollHeight + "px";
  };

// show-hide (toggle) div in same section as clicked panel
// nextElementSibling gets the next element after "this" 
// which is the clicked button that is calling the function
// this next element sibling is the panel div which is hidden 
// until the button is clicked

// Element.nextElementSibling read-only property returns the 
// element immediately following the specified one in its 
// parent's children list

// Element.scrollHeight read-only property is a measurement of 
// the height of an element's content, including content not 
// visible on the page -- this tells us how tall we need to 
// make thediv when it animates from zero-height