function changeMode(size, weight, transform, background, color) {
    return function() {
        document.body.fontSize = size;
        document.body.weight = weight;
        document.body.textTransformation = transform;
        document.body.backgroundColor = background;
        document.body.color = color;
    }
}
function main() {
    let spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    let darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white', 'black');
    let screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');
         
        // add paragraph
    let paragraph = document.createElement('p');
    let text = document.createTextNode('welcome Holberton!');
    document.body.appendChild(paragraph);

        // add abutton
   let buttonSpooky = document.createElement('button');
    let buttonText = document.createTextNode('spooky');
    buttonSpooky.setAttribute('on click', 'spooky');
    buttonSpooky.appendChild(buttonText);
    document.body.appendChild(buttonSpooky);

    let buttonDarkMode = document.createElement('button');
    let textDarkMode = document.createTextNode( 'darkMode');
    buttonDarkMode.setAttribute('on click', 'darkMode');
    textDarkMode.appendChild(textDarkMode);
    document.body.appendChild(buttonDarkMode);
     
    let buttonScream = document.createElement('screamMode');
    let textScream = document.createTextNode('screaMode');
    buttonScream.setAttribute('on click', 'screaMoode');
    textScream.appendChild(textScream);
    document.DOCUMENT_TYPE_NODE.appendChild(buttonScream);
    }
main()