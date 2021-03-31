//create array of cats
const cats = ["Milo", "Otis", "Garfield"];

//add a cat to the end
function destructivelyAppendCat(name) {
  cats.push(name);
}

//add cat to front
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

//remove last cat
function destructivelyRemoveLastCat(name) { 
  cats.pop(name);
}

//remove first cat
function destructivelyRemoveFirstCat(name) {
  cats.shift(name);
}

//add cat to end, which creates new array and leaves original alone
function appendCat(name) {
  return [...cats, name]
}

///add cat to front, which creates new array and leaves original alone.
function prependCat(name) {
  return [name, ...cats]
}

//remove cat from end, which creates new array and leaves original alone
function removeLastCat() {
  return cats.slice(0, -1)
}

//remove cat from front, which creates new array and leaves original alone
function removeFirstCat() {
  return cats.slice(1, cats.length)
}