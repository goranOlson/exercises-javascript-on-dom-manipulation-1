/* 1 */
const recepieLbl = document.getElementById('recipe-name');
 console.log(recepieLbl.innerText);

/* 2 */
 console.log(recepieLbl.tagName);

/* 3 */
const item = document.querySelector(".description");
const cssObj = window.getComputedStyle(item, null);
 console.log(cssObj.getPropertyValue('font-size'));

/* 4 */
const image = document.getElementsByTagName('img')[0];
// console.log(image.alt);
const altText = image.getAttribute("alt"); 
 console.log(altText);

/* 5 */
 console.log(`${image.width} x ${image.height} px`);
 console.log(image.getAttribute("src"));

const objSquare = {
    url: image.getAttribute("src"),
    height: image.height,
    width: image.width
}
 console.log(objSquare);

/* 6 */
const pasteIngredients = document.querySelector(".ingredients-list-paste");
 console.log(pasteIngredients.childElementCount);

/* 7 */
 console.log(pasteIngredients.children[3].innerText);

/* 8 */
const instructionsList = document.querySelector('.instructions-list').children;


const arrInstructions = [];

for (let i = 0; i < instructionsList.length; i++) {
    const element = instructionsList[i];
    const obj = {
        order: i + 1,
        text: element.innerText
    }
    arrInstructions.push(obj);   
}

 console.log(arrInstructions);
