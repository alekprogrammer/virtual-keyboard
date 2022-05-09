const text = "Virtual Keyboard by alekprogrammer";
const title = document.createElement("h1");
let allKeys = {};
console.log(allKeys)

let allkeys = [];
class Methods {
    static addelemtopage(elem, clas, inn, row) {
        elem.classList.add(clas);
        elem.innerHTML = inn;
        elem.addEventListener('click', function() {
            TEXTINPUT.value += elem.innerHTML
            elem.classList.add("animation-radius");
            setTimeout(() => elem.classList.remove("animation-radius"), 300);
            setTimeout(() => elem.classList.add("animation-radius-reverse"), 300)
            setTimeout(() => elem.classList.remove("animation-radius-reverse"), 600)
        })
        allKeys[inn] = elem;
        row.append(elem);
    }
    static addrowtopage(rowelem) {
        rowelem.classList.add("row");
        KEYBOARD.append(rowelem);
    }
}

const TEXTINPUT = document.createElement("textarea")
document.body.append(TEXTINPUT);
TEXTINPUT.setAttribute("rows", 10)
TEXTINPUT.setAttribute("cols", 96)
TEXTINPUT.setAttribute("placeholder", "Write something...")

let spans = [];
for (let i = 0; i < text.length; i++) {
    spans.push(document.createElement("span"))
    spans[i].innerHTML = text[i];
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
const row_1 = document.createElement("div")

Methods.addrowtopage(row_1)
const fKeys = [];
const backtick = document.createElement("div");
Methods.addelemtopage(backtick, "standart-key", "`", row_1)
console.log(row_1)



for (let i = 0; i < 9; i++) {
    fKeys.push(document.createElement("div"));
    Methods.addelemtopage(fKeys[i], "standart-key", i + 1, row_1)
}

fKeys.push(document.createElement("div"));

Methods.addelemtopage(fKeys[9], "standart-key", 0, row_1)

fKeys.push(document.createElement("div"));
Methods.addelemtopage(fKeys[10], "standart-key", "-", row_1)

fKeys.push(document.createElement("div"));
Methods.addelemtopage(fKeys[11], "standart-key", "=", row_1)

const backspace = document.createElement("div");
Methods.addelemtopage(backspace, "backspace", "BACKSPACE", row_1)

document.body.append(KEYBOARD);

let modifychars = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/"];

const TAB = document.createElement("div")
Methods.addelemtopage(TAB, "tab-slash", "TAB", row_1)
let mainPartKeyboard = [];
const row_2 = document.createElement("div")
Methods.addrowtopage(row_2)
row_2.append(TAB)

for (let i = 0; i < 12; i++) {
    mainPartKeyboard.push(document.createElement("div"));
    Methods.addelemtopage(mainPartKeyboard[i], "standart-key", modifychars[i], row_2)
}

const slashKey = document.createElement("div");
Methods.addelemtopage(slashKey, "tab-slash", "/", row_2)

Methods.addrowtopage(row_2)

const row_3 = document.createElement("div");
Methods.addrowtopage(row_3)


const CAPSLOCK = document.createElement("div");
Methods.addelemtopage(CAPSLOCK, "caps-lock", "CAPS<br>LOCK", row_3)


for (let i = 12; i < 23; i++) {
    mainPartKeyboard.push(document.createElement("div"));
    Methods.addelemtopage(mainPartKeyboard[i], "standart-key", modifychars[i], row_3)
}

const ENTER = document.createElement("div");
Methods.addelemtopage(ENTER, "enter", "ENTER", row_3)

const row_4 = document.createElement("div");
Methods.addrowtopage(row_4)

const SHIFT = document.createElement("div");
Methods.addelemtopage(SHIFT, "shift", "SHIFT", row_4)

for (let i = 23; i < modifychars.length; i++) {
    mainPartKeyboard.push(document.createElement("div"));
    Methods.addelemtopage(mainPartKeyboard[i], "standart-key", modifychars[i], row_4)
}


const arrowUp = document.createElement("div");
Methods.addelemtopage(arrowUp, "standart-key", "↑", row_4)

const SHIFT2 = document.createElement("div");
Methods.addelemtopage(SHIFT2, "shift-two", "SHIFT", row_4)



const row_5 = document.createElement("div");
Methods.addrowtopage(row_5)

const CTRL = document.createElement("div");
Methods.addelemtopage(CTRL, "ctrl-alt-win", "CTRL", row_5)

const ALT = document.createElement("div");
Methods.addelemtopage(ALT, "ctrl-alt-win", "ALT", row_5);

const SPACE = document.createElement("div");
Methods.addelemtopage(SPACE, "space", "", row_5);

const arrowLeft = document.createElement("div");
Methods.addelemtopage(arrowLeft, "standart-key", "←", row_5);

const arrowDown = document.createElement("div");
Methods.addelemtopage(arrowDown, "standart-key", "↓", row_5);

const arrowRight = document.createElement("div");
Methods.addelemtopage(arrowRight, "standart-key", "→", row_5);

const CTRL2 = document.createElement("div");
Methods.addelemtopage(CTRL2, "ctrl-two", "CTRL", row_5);
window.onload = function() {
    TEXTINPUT.focus();
}


TEXTINPUT.addEventListener("keydown", function(e) {
    e.preventDefault();
}, false);

let isFocus = "nofocus";
TEXTINPUT.addEventListener('focus', function() {
    isFocus = "focus";
})

TEXTINPUT.addEventListener('blur', function() {
    isFocus = "nofocus";
})



window.addEventListener("keydown", function(event) {
    if (/^Key/.test(event.code) || /^Digit/.test(event.code)) {
        allKeys[event.code[event.code.length - 1].toLowerCase()].classList.add("animation-radius");
        setTimeout(() => allKeys[event.code[event.code.length - 1].toLowerCase()].classList.remove("animation-radius"), 300);
        setTimeout(() => allKeys[event.code[event.code.length - 1].toLowerCase()].classList.add("animation-radius-reverse"), 300)
        setTimeout(() => allKeys[event.code[event.code.length - 1].toLowerCase()].classList.remove("animation-radius-reverse"), 600)
        TEXTINPUT.value += allKeys[event.code[event.code.length - 1].toLowerCase()].innerHTML;
    } else if (event.code == "Backquote") {
        backtick.classList.add("animation-radius");
        setTimeout(() => backtick.classList.remove("animation-radius"), 300);
        setTimeout(() => backtick.classList.add("animation-radius-reverse"), 300)
        setTimeout(() => backtick.classList.remove("animation-radius-reverse"), 600)
        TEXTINPUT.value += backtick.innerHTML;
    } else if (event.ctrlKey && event.altKey) {
        console.log("hello");
    } else if (event.code == "Enter") {
        TEXTINPUT.value += "\n"
    } else if (event.code == "Backspace") {
        allKeys.BACKSPACE.classList.add("animation-radius");
        setTimeout(() => allKeys.BACKSPACE.classList.remove("animation-radius"), 300);
        setTimeout(() => allKeys.BACKSPACE.classList.add("animation-radius-reverse"), 300)
        setTimeout(() => allKeys.BACKSPACE.classList.remove("animation-radius-reverse"), 600)
        TEXTINPUT.value = TEXTINPUT.value.slice(0, TEXTINPUT.value.length - 1);
    }
}, true);
window.addEventListener("keydown", function(event) {
    console.log(event.key)
    console.log(event.code[event.code.length - 1].toLowerCase())
    console.log(event.code)
}, true);


console.log(mainPartKeyboard)
console.log(modifychars);