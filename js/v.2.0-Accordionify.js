class Accordionify {

  constructor(ul, data) {
    this.ul = document.querySelector(ul);
    this.data = data;
    data.forEach(e => {
      this.li = document.createElement('li'); // make an li
      this.ul.appendChild(this.li); // output li to accordion ul
      this.btn = document.createElement('button'); // make a button
      this.btn.innerHTML = e.btnText + '<span>+</span>'; // output btn name with +
      this.btn.addEventListener('click', this.showHidePanel.bind(this)); // button calls function
      this.li.appendChild(this.btn); // output button to li
      this.div = document.createElement('div'); // make a div
      this.div.innerHTML = e.divHTML; // put the desc in the div
      // for html in the div, such a <p> tags, add that in the dataset
      this.li.appendChild(this.div); // output the div to the li
    });
  } // close constructor()

  showHidePanel(event) {
    event.target.classList.toggle("btn-hilite");
    const divvy = event.target.nextElementSibling;
    divvy.style.height = divvy.style.height ? null : divvy.scrollHeight + "px";
  };

} // close Class Accordionify