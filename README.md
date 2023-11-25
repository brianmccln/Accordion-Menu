## Accordion Menu
This accordion widget / plugin can be deployed anywhere in your website,  
integrating seamlessly with your existing code.

- This project has four versions of an accordion menu.  
- Each version has its own **html** and **js** files. 
- Versions **1.5+** also use the **accordion-data.js** file.
- All four versions use the same **css*** file.
- The accordion is structured as a **ul**, hard-coded into the html.
- Each accordion item is a **li** tag inside the **ul**.
- Each **li** contains a **button** which is seen when the accordion is closed.
    - Click the button to open/close the accordion.
- Each **li** also contains a **div** which appears when the accordion opens.
    - The div can contain whatever content you wish to put in it, but in these examples the divs just contain text.
- Each **li** contains a button to click to open/close the accordion item,  
which shows/hides the contents, which consists of a div with text.  
- **animation**: The accordion uses CSS transition property and JavaScript to animate the opening and closing of the accordion menu items.

### The four versions of the Accordion Menu:

**v.1.0 Accordion Menu** :  
- The static **ul** and **li** elements are all hard-coded in html.  
- To use your data, make the change to menu content directly in the html.

**v.1.5 - Accordion Dynamic Menu** :  
- The contents of the **".ul-accordion"** are made dynamically in JS.  
- This version, and all higher versions, import **accordion-data.js**, which contains an array of objects, one object per accordion item.

**v.2.0 - Accordionify OOP** :  
- All JS in **Class Accordionify**
- Class file imported into html page and instantiated:
```js
const accordion = new Accordionify(".accordion-ul", accordionData);
```

**v.2.1 - Accordionify Minified** : 
- Same as v.2.0, just with Class JS file minified to make it smaller 
- minified version file size is only 558 bytes.

### The **accordion-data.js** file:  
- **v.1.5+** use the **accordion-data.js** file as its data source.
- In **accordion-data.js**, change the values of **btnText** and **divText** to  your own text.
- **btnText** appears on the individual accordion button. This is what you see to click on.
- **divText** is the content that shows/hides when accordion opens/closes.