function doDash () {
    pins.P1.digitalWrite(true)
    pause(700)
    pins.P1.digitalWrite(false)
    pause(200)
}
function encrypt (text: string) {
    for (let index2 = 0; index2 <= text.length - 1; index2++) {
        chr = text.charAt(index2)
        code = morse[alphabet.indexOf(chr)]
        playCode(code)
        doSpace()
        pause(500)
    }
}
function doDot () {
    pins.P20.digitalWrite(true)
    pause(100)
    pins.P20.digitalWrite(false)
    pause(200)
}
function playCode (text: string) {
    for (let index = 0; index <= text.length - 1; index++) {
        if ("-" == text.charAt(index)) {
            doDash()
        }
        if ("." == text.charAt(index)) {
            doDot()
        }
        if (" " == text.charAt(index)) {
            doSpace()
            pause(500)
        }
    }
}
function doSpace () {
    pins.LED.digitalWrite(true)
    pause(500)
    pins.LED.digitalWrite(false)
    pause(200)
}
function bumper () {
    for (let index = 0; index < 4; index++) {
        pins.LED.digitalWrite(true)
        pause(200)
        pins.LED.digitalWrite(false)
        pause(200)
    }
}
let code = ""
let chr = ""
let alphabet: string[] = []
let morse: string[] = []
morse = [
".-",
"-...",
"-.-.",
"-..",
".",
"..-.",
"--.",
"....",
"..",
".---",
"-.-",
".-..",
"--",
"-.",
"---",
".--.",
"--.-",
".-.",
"...",
"-",
"..-",
"...-",
".--",
"-..-",
"-.--",
"--..",
".----",
"..---",
"...--",
"....-",
".....",
"-....",
"--...",
"---..",
"----.",
"-----",
"/"
]
alphabet = [
"a",
"b",
"c",
"d",
"e",
"f",
"g",
"h",
"i",
"j",
"k",
"l",
"m",
"n",
"o",
"p",
"q",
"r",
"s",
"t",
"u",
"v",
"w",
"x",
"y",
"z",
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
"0",
" "
]
let _2tim316 = "all scripture is given by inspiration of god and profitable"
let luke636 = "therefore be merciful even as your father is also merciful"
forever(function () {
    bumper()
    pause(500)
    encrypt(luke636)
    pause(500)
    bumper()
    pause(500)
    encrypt(luke636)
    pause(500)
})
