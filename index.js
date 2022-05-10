const text = "Virtual Keyboard by alekprogrammer";
const title = document.createElement("h1");
let allKeys = {};
let g;
if (localStorage.hasOwnProperty('language')) {
    g = localStorage.getItem("language");
} else {
    localStorage.setItem("language", "en");
    g = "en";
}
let modifychars = {
    "en": ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/"],
    "ru": ["й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", "."]
};
let modifyedcontentOffShift = [];
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

let modifyedRowUpper = [];
for (let i = 0; i < text.length; i++) {
    modifyedRowUpper.push(document.createElement("span"))
    modifyedRowUpper[i].innerHTML = text[i];
    title.append(modifyedRowUpper[i]);
}
let delay = 0;
for (let i = 0; i < modifyedRowUpper.length; i++) {
    modifyedRowUpper[i].style.animationDelay = delay + "s";
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
modifyedRowUpper.unshift(backtick)


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

const TAB = document.createElement("div")

let mainPartKeyboard = [];
const row_2 = document.createElement("div")
Methods.addrowtopage(row_2)

TAB.classList.add("tab-slash");
TAB.innerHTML = "TAB";
TAB.addEventListener('click', function() {
    TAB.classList.add("animation-radius");
    setTimeout(() => TAB.classList.remove("animation-radius"), 300);
    setTimeout(() => TAB.classList.add("animation-radius-reverse"), 300)
    setTimeout(() => TAB.classList.remove("animation-radius-reverse"), 600)
    TEXTINPUT.value += "    ";
})
allKeys["TAB"] = TAB;
row_2.append(TAB);


for (let i = 0; i < 12; i++) {
    mainPartKeyboard.push(document.createElement("div"));
    Methods.addelemtopage(mainPartKeyboard[i], "standart-key", modifychars[g][i], row_2)
}

const slashKey = document.createElement("div");
Methods.addelemtopage(slashKey, "tab-slash", "\\", row_2)

Methods.addrowtopage(row_2)

const row_3 = document.createElement("div");
Methods.addrowtopage(row_3)


const CAPSLOCK = document.createElement("div");


CAPSLOCK.classList.add("caps-lock");
CAPSLOCK.innerHTML = "CAPS<br>LOCK";
CAPSLOCK.addEventListener('click', function() {
    if (CAPSLOCK.classList.contains("active")) {
        CAPSLOCK.classList.add("animation-radius-reverse");
        CAPSLOCK.classList.remove("animation-radius-reverse");
        CAPSLOCK.classList.remove("active");
        for (elem of modifychars[g]) {
            allKeys[elem].innerHTML = allKeys[elem].innerHTML.toLowerCase();
        }
    } else {
        CAPSLOCK.classList.add("animation-radius");
        setTimeout(() => CAPSLOCK.classList.remove("animation-radius"), 300);
        setTimeout(() => CAPSLOCK.classList.add("active"), 300)
        for (elem of modifychars[g]) {
            allKeys[elem].innerHTML = allKeys[elem].innerHTML.toUpperCase();
        }
    }
})
allKeys["CAPS<br>LOCK"] = CAPSLOCK;
row_3.append(CAPSLOCK);


for (let i = 12; i < 23; i++) {
    mainPartKeyboard.push(document.createElement("div"));
    Methods.addelemtopage(mainPartKeyboard[i], "standart-key", modifychars[g][i], row_3)
}

const ENTER = document.createElement("div");

ENTER.classList.add("enter");
ENTER.innerHTML = "ENTER";
ENTER.addEventListener('click', function() {
    ENTER.classList.add("animation-radius");
    setTimeout(() => ENTER.classList.remove("animation-radius"), 300);
    setTimeout(() => ENTER.classList.add("animation-radius-reverse"), 300)
    setTimeout(() => ENTER.classList.remove("animation-radius-reverse"), 600)
    TEXTINPUT.value += "\n"
})
allKeys["ENTER"] = ENTER;
row_3.append(ENTER);

const row_4 = document.createElement("div");
Methods.addrowtopage(row_4)

const SHIFT = document.createElement("div");

SHIFT.classList.add("shift");
SHIFT.innerHTML = "SHIFT";
SHIFT.addEventListener('click', function() {
    SHIFT.classList.add("animation-radius");
    setTimeout(() => SHIFT.classList.remove("animation-radius"), 300);
    setTimeout(() => SHIFT.classList.add("animation-radius-reverse"), 300)
    setTimeout(() => SHIFT.classList.remove("animation-radius-reverse"), 600)
})
allKeys["SHIFT"] = SHIFT;
row_4.append(SHIFT);

for (let i = 23; i < modifychars[g].length; i++) {
    mainPartKeyboard.push(document.createElement("div"));
    Methods.addelemtopage(mainPartKeyboard[i], "standart-key", modifychars[g][i], row_4)
}


const arrowUp = document.createElement("div");
Methods.addelemtopage(arrowUp, "standart-key", "↑", row_4)

const SHIFT2 = document.createElement("div");

SHIFT2.classList.add("shift-two");
SHIFT2.innerHTML = "SHIFT";
SHIFT2.addEventListener('click', function() {
    SHIFT2.classList.add("animation-radius");
    setTimeout(() => SHIFT2.classList.remove("animation-radius"), 300);
    setTimeout(() => SHIFT2.classList.add("animation-radius-reverse"), 300)
    setTimeout(() => SHIFT2.classList.remove("animation-radius-reverse"), 600)
})
allKeys["SHIFT"] = SHIFT2;
row_4.append(SHIFT2);

const row_5 = document.createElement("div");
Methods.addrowtopage(row_5)

const CTRL = document.createElement("div");

CTRL.classList.add("ctrl-alt-win");
CTRL.innerHTML = "CTRL";
CTRL.addEventListener('click', function() {
    CTRL.classList.add("animation-radius");
    setTimeout(() => CTRL.classList.remove("animation-radius"), 300);
    setTimeout(() => CTRL.classList.add("animation-radius-reverse"), 300)
    setTimeout(() => CTRL.classList.remove("animation-radius-reverse"), 600)
})
allKeys["CTRL"] = CTRL;
row_5.append(CTRL);

const ALT = document.createElement("div");

ALT.classList.add("ctrl-alt-win");
ALT.innerHTML = "ALT";
ALT.addEventListener('click', function() {
    ALT.classList.add("animation-radius");
    setTimeout(() => ALT.classList.remove("animation-radius"), 300);
    setTimeout(() => ALT.classList.add("animation-radius-reverse"), 300)
    setTimeout(() => ALT.classList.remove("animation-radius-reverse"), 600)
})
allKeys["ALT"] = ALT;
row_5.append(ALT);

const SPACE = document.createElement("div");

SPACE.classList.add("space");
SPACE.innerHTML = "";
SPACE.addEventListener('click', function() {
    SPACE.classList.add("animation-radius");
    setTimeout(() => SPACE.classList.remove("animation-radius"), 300);
    setTimeout(() => SPACE.classList.add("animation-radius-reverse"), 300)
    setTimeout(() => SPACE.classList.remove("animation-radius-reverse"), 600)
    TEXTINPUT.value += " ";
})
allKeys[""] = SPACE;
row_5.append(SPACE);

const arrowLeft = document.createElement("div");
Methods.addelemtopage(arrowLeft, "standart-key", "←", row_5);

const arrowDown = document.createElement("div");
Methods.addelemtopage(arrowDown, "standart-key", "↓", row_5);

const arrowRight = document.createElement("div");
Methods.addelemtopage(arrowRight, "standart-key", "→", row_5);

const CTRL2 = document.createElement("div");
// Methods.addelemtopage(CTRL2, "ctrl-two", "CTRL", row_5);

CTRL2.classList.add("ctrl-two");
CTRL2.innerHTML = "CTRL";
CTRL2.addEventListener('click', function() {
    CTRL2.classList.add("animation-radius");
    setTimeout(() => CTRL2.classList.remove("animation-radius"), 300);
    setTimeout(() => CTRL2.classList.add("animation-radius-reverse"), 300)
    setTimeout(() => CTRL2.classList.remove("animation-radius-reverse"), 600)
})
allKeys["CTRL2"] = CTRL2;
row_5.append(CTRL2);

window.onload = function() {
    TEXTINPUT.focus();
}


TEXTINPUT.addEventListener("keydown", function(e) {
    e.preventDefault();
}, false);




window.addEventListener("keydown", function(event) {
    if (/^Key/.test(event.code) || /^Digit/.test(event.code)) {
        allKeys[event.code[event.code.length - 1].toLowerCase()].classList.add("animation-radius");
        setTimeout(() => allKeys[event.code[event.code.length - 1].toLowerCase()].classList.remove("animation-radius"), 300);
        setTimeout(() => allKeys[event.code[event.code.length - 1].toLowerCase()].classList.add("animation-radius-reverse"), 300)
        setTimeout(() => allKeys[event.code[event.code.length - 1].toLowerCase()].classList.remove("animation-radius-reverse"), 600)
        TEXTINPUT.value += allKeys[event.code[event.code.length - 1].toLowerCase()].innerHTML;
    } else if (event.code == "ArrowUp" || event.code == "ArrowDown" || event.code == "ArrowRight" || event.code == "ArrowLeft") {
        let currectarrow = event.code == "ArrowUp" ? "↑" : event.code == "ArrowDown" ? "↓" : event.code == "ArrowRight" ? "→" : "←"
        allKeys[currectarrow].classList.add("animation-radius");
        setTimeout(() => allKeys[currectarrow].classList.remove("animation-radius"), 300);
        setTimeout(() => allKeys[currectarrow].classList.add("animation-radius-reverse"), 300)
        setTimeout(() => allKeys[currectarrow].classList.remove("animation-radius-reverse"), 600)
        TEXTINPUT.value += allKeys[currectarrow].innerHTML;
    } else if (event.code == "Backquote") {
        backtick.classList.add("animation-radius");
        setTimeout(() => backtick.classList.remove("animation-radius"), 300);
        setTimeout(() => backtick.classList.add("animation-radius-reverse"), 300)
        setTimeout(() => backtick.classList.remove("animation-radius-reverse"), 600)
        TEXTINPUT.value += backtick.innerHTML;
    } else if (event.ctrlKey && event.altKey) {
        g = g == "en" ? "ru" : "en";
        for (let i = 0; i < modifychars[g].length; i++) {
            mainPartKeyboard[i].innerHTML = modifychars[g][i];
        }
    } else if (event.code == "Enter") {
        ENTER.classList.add("animation-radius");
        setTimeout(() => ENTER.classList.remove("animation-radius"), 300);
        setTimeout(() => ENTER.classList.add("animation-radius-reverse"), 300)
        setTimeout(() => ENTER.classList.remove("animation-radius-reverse"), 600)
        TEXTINPUT.value += "\n"
    } else if (event.code == "Backspace") {
        allKeys.BACKSPACE.classList.add("animation-radius");
        setTimeout(() => allKeys.BACKSPACE.classList.remove("animation-radius"), 300);
        setTimeout(() => allKeys.BACKSPACE.classList.add("animation-radius-reverse"), 300)
        setTimeout(() => allKeys.BACKSPACE.classList.remove("animation-radius-reverse"), 600)
        TEXTINPUT.value = TEXTINPUT.value.slice(0, TEXTINPUT.value.length - 1);
    } else if (event.code == "CapsLock") {
        if (CAPSLOCK.classList.contains("active")) {
            CAPSLOCK.classList.add("animation-radius-reverse");
            CAPSLOCK.classList.remove("animation-radius-reverse");
            CAPSLOCK.classList.remove("active");
            for (elem of modifychars[g]) {
                allKeys[elem].innerHTML = allKeys[elem].innerHTML.toLowerCase();
            }
        } else {
            CAPSLOCK.classList.add("animation-radius");
            setTimeout(() => CAPSLOCK.classList.remove("animation-radius"), 300);
            setTimeout(() => CAPSLOCK.classList.add("active"), 300)
            for (elem of modifychars[g]) {
                allKeys[elem].innerHTML = allKeys[elem].innerHTML.toUpperCase();
            }
        }
    } else if (event.code == "Space") {
        SPACE.classList.add("animation-radius");
        setTimeout(() => SPACE.classList.remove("animation-radius"), 300);
        setTimeout(() => SPACE.classList.add("animation-radius-reverse"), 300)
        setTimeout(() => SPACE.classList.remove("animation-radius-reverse"), 600)
        TEXTINPUT.value += " ";
    } else if (event.code == "Tab") {
        TAB.classList.add("animation-radius");
        setTimeout(() => TAB.classList.remove("animation-radius"), 300);
        setTimeout(() => TAB.classList.add("animation-radius-reverse"), 300)
        setTimeout(() => TAB.classList.remove("animation-radius-reverse"), 600)
        TEXTINPUT.value += "    ";
    }
}, true);

let infor = document.createElement("p")
infor.innerHTML = "Клавиатура создана в ОС Windows\n\nДля переключения языка используйте CTRL + ALT"

document.body.append(infor);