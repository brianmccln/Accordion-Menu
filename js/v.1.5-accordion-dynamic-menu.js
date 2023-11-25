// Dynamic Accordion Menu

/* Make this dynamically inside the accordion-ul:
<li>
    <button>Balderdash<span>+</span></button>
    <div>
        <p>
            Scenester stumptown seitan, blog tacos heirloom semiotics before they sold out vibecession franzen. Blackbird spyplane twee plaid, jawn portland truffaut chicharrones. Lyft meggings irony, same sartorial wolf fashion axe PBR&B neutral milk hotel snackwave copper mug.</p>
        <p>
            Church-key chillwave hell of everyday carry selvage gluten-free pabst, jawn wayfarers ethical umami mustache. VHS banjo green juice, waistcoat synth four dollar toast neutra cray raw denim next level hoodie bushwick. Pok pok post-ironic tote bag cray schlitz tumblr. Squid palo santo vibecession butcher, mlkshk asymmetrical vexillologist tofu blog deep v franzen.
        </p>
    </div>
</li> 
*/

const ul = document.querySelector(".accordion-ul");

accordionData.forEach(e => {
    const li = document.createElement('li'); // make an li
    ul.appendChild(li); // output li to accordion ul
    const btn = document.createElement('button'); // make a button
    btn.innerHTML = e.btnText + '<span>+</span>'; // output btn name with +
    btn.addEventListener('click', showHidePanel); // button calls function
    li.appendChild(btn); // output button to li
    const div = document.createElement('div'); // make a div
    div.innerHTML = e.divText; // put the desc in the div
    // for html in the div, such a <p> tags, add that in the dataset
    li.appendChild(div); // output the div to the li
});

function showHidePanel() {
    // show-hide (toggle) "active" class,
    this.classList.toggle("btn-hilite");
    // show-hide (toggle) div in same section as clicked panel
    // nextElementSibling gets the next element after "this" 
    // which is the clicked button that is calling the function
    // this next element sibling is the panel div which is hidden 
    // until the button is clicked
    const div = this.nextElementSibling;
    div.style.height = div.style.height ? null : div.scrollHeight + "px";
  };

// Element.nextElementSibling read-only property returns the 
// element immediately following the specified one in its 
// parent's children list

// Element.scrollHeight read-only property is a measurement of 
// the height of an element's content, including content not 
// visible on the page -- this tells us how tall we need to 
// make thediv when it animates from zero-height