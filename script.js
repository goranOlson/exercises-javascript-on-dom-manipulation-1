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
    url: String,
    height: Number,
    width: Number
}
console.log(objSquare);

/* 6 */
const pasteIngredients = document.querySelector(".ingredients-list-paste");
 console.log(pasteIngredients.childElementCount);





