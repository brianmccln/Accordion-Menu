## Accordion Menu
- This accordion widget / plugin can be deployed anywhere in your website,  
integrating seamlessly with your existing code.
- In your html page, import the css into your html page's **head**:
```js
    <link href="css/accordion-menu.css" rel="stylesheet">
```
- Add this **ul** tag in your html, wherever you want the accordion to appear:
```js
    <ul class="accordiion-ul"></ul>
```
- Import the js file(s) at the end of the body. The different imports are  
shown below for each of the four versions:

- This project has four versions of an accordion menu.  
- Each version has its own **html** and **js** files. 
- All four versions look and behave identically in the browser--  
the difference is in how the same result is made four different ways  
in the JavaScript.
- Versions **1.5+** also use the **accordion-data.js** file.
- All four versions use the same **css** file.
- The accordion is structured as a **ul**, hard-coded into the html.
- Each accordion item is a **li** tag inside the **ul**.
- Each **li** contains a **button**, which is the only visible part of the accordion when the accordion is fully closed.
- Click the button to open/close one of the accordion items. The part that appears is the **li** for that list item.
- Each **li** also contains a **div** which appears when the accordion opens.
- The div can contain whatever content you wish to put in it, but in these examples the divs just contain text.
- **animation**: The accordion uses CSS transition property and JavaScript to animate the opening and closing of the accordion menu items.

### The four versions of the Accordion Menu:

**v.1.0 Accordion Menu** :  
- The static **ul** and **li** elements are all hard-coded in html.  
- To use your data, make the change to menu content directly in the html.
- To use **v.1.0**, add this to the bottom of your html page:

```js
    <script src="js/v.1.0-accordion-menu.js"></script>
```


**v.1.5 - Accordion Dynamic Menu** :  
- The contents of the **".ul-accordion"** are made dynamically in JS.  
- This version, and all higher versions, import **accordion-data.js**, which contains an array of objects, one object per accordion item.
- To use **v.1.5**, add this to the bottom of your html page:

```js
    <script src="js/accordion-data.js"></script>
    <script src="js/v.1.5-accordion-dynamic-menu.js"></script>
```

**v.2.0 - Accordionify OOP** :  
- All JS in **Class Accordionify**
- Class file imported into html page and instantiated:
- To use **v.2.0**, add this to the bottom of your html page:

```js
    <script src="js/accordion-data.js"></script>
    <script src="js/v.2.0-Accordionify.js"></script>
    <script>
        const ac = new Accordionify(".accordion-ul", accordionData);
    </script>
```

**v.2.1 - Accordionify Minified** : 
- Same as v.2.0, just with the JS Class file minified to make it smaller 
- The minified version, **Accordionify.min.js** is only 558 bytes.
- To use **v.2.1**, add this to the bottom of your html page:

```js
    <script src="js/accordion-data.js"></script>
    <script src="js/v.2.1-Accordionify.min.js"></script>
    <script>
        const ac = new Accordionify(".accordion-ul", accordionData);
    </script>
```

### About the **accordion-data.js** file and how to use it:  
- **accordion-data.js** provides the data for all accordion versions with the exception of **v.1.0**, which is hard-coded.
- **accordion-data.js**, has two keys: **btnText** and **divText**. 
- Change the values to be your own text. So if you had two accordion menu buttons, **Foo** and **Bar**, each with some **lorem impum** that appeared when you clicked the  button, you would need to have the followning two objects:
```js
    { btnText: "Foo", divText: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolores saepe nam natus, earum provident aperiam ipsum omnis excepturi sit? Totam modi debitis iusto nisi consequuntur necessitatibus maxime?` },
    { btnText: "Bar", divText: `Recusandae provident doloremque nam, deserunt eveniet quas commodi mollitia dolorem beatae quo ratione vitae, aspernatur corporis asperiores voluptatum et nemo veritatis possimus, repudiandae esse enim?` },
```
- **btnText** appears on the individual accordion button. This is what you see to click on.
- **divText** is the content that shows/hides when accordion opens/closes.
