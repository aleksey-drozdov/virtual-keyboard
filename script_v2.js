
const LANGS = {

    RU_LOW_BTNS: ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Shift', 'ArrowUp', 'Control', 'Alt', ' ', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight'],

    RU_UP_BTNS: ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', 'Shift', 'ArrowUp', 'Control', 'Alt', ' ', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight'],

    RU_SHIFT_BTNS: ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', 'Shift', 'ArrowUp', 'Control', 'Alt', ' ', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight'],

    ENG_LOW_BTNS: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift', 'ArrowUp', 'Control', 'Alt', ' ', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight'],

    ENG_UP_BTNS: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'Shift', 'ArrowUp', 'Control', 'Alt', ' ', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight'],

    ENG_SHIFT_BTNS: ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'Shift', 'ArrowUp', 'Control', 'Alt', ' ', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight'],

    KEY_CODE: ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ArrowUp', 'ControlLeft', 'AltLeft', 'Space', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'],

    KEY_N_CODE: [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 16, 38, 17, 18, 32, 17, 37, 40, 39],

    shift: false,
};

function init() {
    document.body.innerHTML = '<textarea autofocus cols="100" rows="10"></textarea><div class="keyboard"></div>';
    if (localStorage.getItem('lang') === null) {
        localStorage.setItem('lang', 'RU_LOW_BTNS');
    }
    renderKeys(LANGS[localStorage.lang], LANGS.KEY_CODE);
}

function renderKeys(keys, keysCode) {
    let out = '';
    for (let i = 0; i < keys.length; i++) {
        if (keys[i] === 'Backspace' || keys[i] === 'CapsLock' || keys[i] === 'Enter' || keys[i] === 'ArrowUp' || keys[i] === 'Control' || keys[i] === 'Alt' || keys[i] === 'ArrowLeft' || keys[i] === 'ArrowDown' || keys[i] === 'ArrowRight' || keys[i] === 'Tab') {
            out += `<div class="key key-btn ${keysCode[i]}" data-key="${keys[i]}">${keys[i]}</div>`;
        } else {
            out += `<div class="key key-letr ${keysCode[i]}" data-key="${keys[i]}">${keys[i]}</div>`;
        }
    }
    document.querySelector('.keyboard').innerHTML = out;
}


init();

let letters = document.querySelectorAll('.key-letr')
let lastLetter = ''
var input = document.querySelector('textarea')

//нажатие клавиши
document.addEventListener('keydown', function (event) {
    lastLetter = document.querySelector(`.${event.code}`).dataset.key

    //убираем события от кнопок, которых нет на виртуальной клавиатуре 
    if (!document.querySelector(`.${event.code}`)) {
        event.preventDefault();
        return
    }
    //таб
    if (event.key === 'Tab') {
        event.preventDefault()
        let cursorPosition = input.selectionStart;
        let strBeforeCursor = input.value.substring(0, cursorPosition)
        let strAfterCursor = input.value.substring(cursorPosition)
        strBeforeCursor += '\t'
        input.value = strBeforeCursor + strAfterCursor

    }
    //меняем размер шрифта на капс
    if (event.key === 'CapsLock' || event.key === 'Shift') {
        if (!event.repeat) {
            switch (localStorage.lang) {
                case 'RU_LOW_BTNS':
                    localStorage.lang = 'RU_SHIFT_BTNS'
                    break;
                case 'RU_SHIFT_BTNS':
                    localStorage.lang = 'RU_LOW_BTNS'
                    break;
                case 'ENG_LOW_BTNS':
                    localStorage.lang = 'ENG_SHIFT_BTNS'
                    break;
                case 'ENG_SHIFT_BTNS':
                    localStorage.lang = 'ENG_LOW_BTNS'
                    break;
                default:
                    break;
            }
        } else {
            event.preventDefault()
        }
        renderKeys(LANGS[localStorage.lang], LANGS.KEY_CODE)
    }

    // меняем язык
    if (event.key === 'Alt' && event.ctrlKey) {
        switch (localStorage.lang) {
            case 'RU_LOW_BTNS':
                localStorage.lang = 'ENG_LOW_BTNS'
                break;
            case 'RU_SHIFT_BTNS':
                localStorage.lang = 'ENG_SHIFT_BTNS'
                break;
            case 'ENG_LOW_BTNS':
                localStorage.lang = 'RU_LOW_BTNS'
                break;
            case 'ENG_SHIFT_BTNS':
                localStorage.lang = 'RU_SHIFT_BTNS'
                break;
            default:
                break;
        }
        renderKeys(LANGS[localStorage.lang], LANGS.KEY_CODE)
    }
    //добавляем анимацию нажатия
    document.querySelector(`.${event.code}`).classList.add('key-active');

})

//отпускание клавиши 
document.addEventListener('keyup', function (event) {
    //убираем события от кнопок, которых нет на виртуальной клавиатуре 
    if (!document.querySelector(`.${event.code}`)) {
        event.preventDefault();
        return
    }
    //отпускание шифта
    if (event.key === 'Shift') {
        switch (localStorage.lang) {
            case 'RU_LOW_BTNS':
                localStorage.lang = 'RU_SHIFT_BTNS'
                break;
            case 'RU_SHIFT_BTNS':
                localStorage.lang = 'RU_LOW_BTNS'
                break;
            case 'ENG_LOW_BTNS':
                localStorage.lang = 'ENG_SHIFT_BTNS'
                break;
            case 'ENG_SHIFT_BTNS':
                localStorage.lang = 'ENG_LOW_BTNS'
                break;
            default:
                break;
        }
        renderKeys(LANGS[localStorage.lang], LANGS.KEY_CODE)
    }
    //анимация
    document.querySelector(`.${event.code}`).classList.remove('key-active')
})

document.querySelector('textarea').addEventListener('blur', function (event) {
    this.focus()
})
document.querySelector('textarea').addEventListener('input', function (event) {
    //запоминаем позицию курсора после последнего ввода
    let cursorPosition = this.selectionStart
    let strBeforeCursor = this.value.substring(0, cursorPosition)
    let strAfterCursor = this.value.substring(cursorPosition)
    if (event.inputType === 'insertText') {
        strBeforeCursor = strBeforeCursor.substring(0, strBeforeCursor.length - 1) + lastLetter
        this.value = strBeforeCursor + strAfterCursor
        this.selectionStart = cursorPosition
        this.selectionEnd = cursorPosition
    }
})

//обработка клика по клаве
document.querySelector('.keyboard').addEventListener('mousedown', function (event) {
    //анимация
    event.target.classList.add('key-active')
    //определяем положение курсора в строке и разбиваем её по нему.
    let cursorPosition = input.selectionStart;
    let strBeforeCursor = input.value.substring(0, cursorPosition)
    let strAfterCursor = input.value.substring(cursorPosition)


    //нажатие на шифт
    if (event.target.classList.contains('CapsLock') || event.target.dataset.key == 'Shift') {
        switch (localStorage.lang) {
            case 'RU_LOW_BTNS':
                localStorage.lang = 'RU_SHIFT_BTNS'
                break;
            case 'RU_SHIFT_BTNS':
                localStorage.lang = 'RU_LOW_BTNS'
                break;
            case 'ENG_LOW_BTNS':
                localStorage.lang = 'ENG_SHIFT_BTNS'
                break;
            case 'ENG_SHIFT_BTNS':
                localStorage.lang = 'ENG_LOW_BTNS'
                break;
            default:
                break;
        }
        renderKeys(LANGS[localStorage.lang], LANGS.KEY_CODE)
    }
    //проверяем вводился ли текст
    if (event.target.classList.contains('key-letr') && !event.target.classList.contains('ShiftLeft') && !event.target.classList.contains('ShiftRight')) {
        strBeforeCursor += event.target.dataset.key
        input.value = strBeforeCursor + strAfterCursor
        input.selectionStart = cursorPosition + 1
        input.selectionEnd = cursorPosition + 1
    }

    //нажатие на стрелку влево
    if (event.target.classList.contains('ArrowLeft')) {
        if (input.selectionStart != 0) {
            input.selectionStart -= 1
            input.selectionEnd -= 1
        }
    }
    //нажатие на стрелку вправо
    if (event.target.classList.contains('ArrowRight')) {
        if (input.selectionStart != input.value.length) {
            input.selectionStart += 1
            input.selectionEnd += 0
        }
    }
    //стрелка вверх
    if (event.target.classList.contains('ArrowUp')) {
        if (input.selectionStart - input.cols < 0) {
            input.selectionStart = 0
            input.selectionEnd = 0
        } else {
            input.selectionStart -= input.cols
            input.selectionEnd -= input.cols
        }
    }
    //стрелка вниз 
    if (event.target.classList.contains('ArrowDown')) {
        if (input.selectionStart + input.cols > input.value.length) {
            input.selectionStart = input.value.length
            input.selectionEnd = input.value.length
        } else {
            input.selectionStart += input.cols
            input.selectionEnd += input.cols
        }
    }
    //энтер
    if (event.target.classList.contains('Enter')) {
        strBeforeCursor += '\n'
        input.value = strBeforeCursor + strAfterCursor
    }
    //таб
    if (event.target.classList.contains('Tab')) {
        strBeforeCursor += '\t'
        input.value = strBeforeCursor + strAfterCursor
    }
    //бекспейс
    if (event.target.classList.contains('Backspace')) {
        strBeforeCursor = input.value.substring(0, cursorPosition - 1)
        input.value = strBeforeCursor + strAfterCursor
        input.selectionStart -= 1
        input.selectionEnd -= 1

    }


})


//обработка отпускания клика по клаве
document.querySelector('.keyboard').addEventListener('mouseup', function (event) {
    //отпускание шифта
    if (event.target.dataset.key == 'Shift') {
        switch (localStorage.lang) {
            case 'RU_LOW_BTNS':
                localStorage.lang = 'RU_SHIFT_BTNS'
                break;
            case 'RU_SHIFT_BTNS':
                localStorage.lang = 'RU_LOW_BTNS'
                break;
            case 'ENG_LOW_BTNS':
                localStorage.lang = 'ENG_SHIFT_BTNS'
                break;
            case 'ENG_SHIFT_BTNS':
                localStorage.lang = 'ENG_LOW_BTNS'
                break;
            default:
                break;
        }
        renderKeys(LANGS[localStorage.lang], LANGS.KEY_CODE)
    }

    //анимация
    event.target.classList.remove('key-active')

})