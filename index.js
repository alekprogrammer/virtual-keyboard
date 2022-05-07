const text = "Virtual Keyboard by Aleksandr Lobkov";
const title = document.createElement("h1");
let spans = [];
for (let i = 0; i < text.length; i++) {
    spans.push(document.createElement("span"))
    spans[i].innerHTML = text[i]
    title.append(spans[i]);
}
let delay = 0;
for (let i = 0; i < spans.length; i++) {
    spans[i].style.animationDelay = delay + "s";
    delay = delay + 0.2;
}
document.body.append(title);

const KEYBOARD = document.createElement("div");
KEYBOARD.classList.add("keyboard");
const fKeysContainer = document.createElement("div")
fKeysContainer.classList.add("upnumbers-keys-container")
const fKeys = [];
const backtick = document.createElement("div");
backtick.classList.add("standart-key");
backtick.innerHTML = "`"
const backspace = document.createElement("div");
backspace.classList.add("backspace");
backspace.innerHTML = "BACKSPACE";
fKeysContainer.append(backtick)
for (let i = 0; i < 9; i++) {
    fKeys.push(document.createElement("div"));
    fKeys[i].classList.add("standart-key");
    fKeys[i].innerHTML = i + 1;
    fKeysContainer.append(fKeys[i]);
}
fKeys.push(document.createElement("div"));
fKeys[9].classList.add("standart-key");
fKeys[9].innerHTML = 0;
fKeysContainer.append(fKeys[9]);
document.body.append(KEYBOARD);
fKeysContainer.append(backspace);
KEYBOARD.append(fKeysContainer);

let modifychars = ["TAB", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/"];

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


const CAPSLOCK = document.createElement("div");
CAPSLOCK.classList.add("caps-lock")
CAPSLOCK.innerHTML = "CAPS<br>LOCK"
row_3.append(CAPSLOCK);
for (let i = 12; i < 23; i++) {
    mainPartKeyboard.push(document.createElement("div"));
    mainPartKeyboard[i].classList.add("standart-key");
    mainPartKeyboard[i].innerHTML = modifychars[i + 1];
    row_3.append(mainPartKeyboard[i]);
}

const ENTER = document.createElement("div");
ENTER.classList.add("enter")
ENTER.innerHTML = "ENTER"
row_3.append(ENTER);

row_3.append()

KEYBOARD.append(row_3);


const row_4 = document.createElement("div");
row_4.classList.add("row");
const SHIFT = document.createElement("div");
SHIFT.classList.add("shift");
SHIFT.innerHTML = "SHIFT";
row_4.append(SHIFT);
for (let i = 23; i < modifychars.length - 1; i++) {
    mainPartKeyboard.push(document.createElement("div"));
    mainPartKeyboard[i].classList.add("standart-key");
    mainPartKeyboard[i].innerHTML = modifychars[i + 1];
    row_4.append(mainPartKeyboard[i]);
}

KEYBOARD.append(row_4);

console.log(modifychars);