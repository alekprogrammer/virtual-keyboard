const KEYBOARD = document.createElement("div");
KEYBOARD.classList.add("keyboard");
const fKeysContainer = document.createElement("div")
fKeysContainer.classList.add("upnumbers-keys-container")
const fKeys = [];
const backspace = document.createElement("div");
//backtick
backspace.classList.add("backspace")
backspace.innerHTML = "BACKSPACE"
for (let i = 0; i < 12; i++) {
    fKeys.push(document.createElement("div"));
    fKeys[i].classList.add("standart-key");
    fKeys[i].innerHTML = i;
    fKeysContainer.append(fKeys[i]);
}

document.body.append(KEYBOARD);
KEYBOARD.append(fKeysContainer);
KEYBOARD.append(backspace);

let modifychars = ["TAB", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "SHIFT", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/"];

const TAB = document.createElement("div")
TAB.classList.add("tab-slash");
TAB.innerHTML = modifychars[0];
let mainPartKeyboard = [];
const row_2 = document.createElement("div")
row_2.classList.add("row")
row_2.append(TAB)

for (let i = 0; i < 12; i++) {
    mainPartKeyboard.push(document.createElement("div"));
    mainPartKeyboard[i].classList.add("standart-key");
    mainPartKeyboard[i].innerHTML = modifychars[i + 1];
    row_2.append(mainPartKeyboard[i]);
}

const slashKey = document.createElement("div");
slashKey.innerHTML = "/";
row_2.append(slashKey);
slashKey.classList.add("tab-slash");

KEYBOARD.append(row_2);

const row_3 = document.createElement("div");
row_3.classList.add("row");

for (let i = 12; i < 23; i++) {
    mainPartKeyboard.push(document.createElement("div"));
    mainPartKeyboard[i].classList.add("standart-key");
    mainPartKeyboard[i].innerHTML = modifychars[i + 1];
    row_3.append(mainPartKeyboard[i]);
}

KEYBOARD.append(row_3);

console.log(modifychars)