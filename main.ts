enum RadioMessage {
    message1 = 49434
}
radio.onReceivedNumber(function (receivedNumber) {
    _0Progstep += 4
    if (_0Progstep == 4) {
        basic.clearScreen()
        if (receivedNumber == 1) {
            basic.showString("New SMS!")
            for (let index = 0; index < 4; index++) {
                basic.pause(100)
                basic.showIcon(IconNames.SmallHeart)
                basic.pause(100)
                basic.showIcon(IconNames.Heart)
            }
            basic.pause(2000)
        }
        if (receivedNumber == 2) {
            basic.showString("New SMS!")
            basic.pause(100)
            basic.showIcon(IconNames.Happy)
            basic.pause(2000)
        }
        if (receivedNumber == 3) {
            basic.showString("New SMS!")
            basic.pause(100)
            basic.showIcon(IconNames.Asleep)
            basic.pause(2000)
        }
        if (receivedNumber == 4) {
            basic.showString("New SMS!")
            basic.pause(100)
            basic.showIcon(IconNames.Sad)
            basic.pause(2000)
        }
        if (receivedNumber == 5) {
            basic.showString("New SMS!")
            basic.pause(100)
            basic.showIcon(IconNames.Yes)
            basic.pause(2000)
        }
        if (receivedNumber == 6) {
            basic.showString("New SMS!")
            basic.pause(100)
            basic.showIcon(IconNames.No)
            basic.pause(2000)
        }
        basic.pause(2000)
        _0Progstep = 3
    }
})
// Nach Funkeingabe wird die Funkgruppe festgelegt.
function _1Funkset () {
    radio.setGroup(_1Funk3)
    basic.showString("Set Funk")
    basic.pause(100)
    basic.showNumber(_1Funk3)
    _0Progstep = 3
}
// Funk -1
function _1Funk () {
    _1Funk3 += -1
}
function _3Send3 () {
    _0Progstep = 3
    _3Send_Text = 0
    _3Send_Text_Show = 0
    if (_3Send_Text == 0) {
        basic.clearScreen()
        basic.pause(100)
        basic.showNumber(1)
        basic.pause(500)
        basic.showIcon(IconNames.Heart)
        basic.pause(1000)
        basic.showNumber(2)
        basic.pause(500)
        basic.showIcon(IconNames.Happy)
        basic.pause(1000)
        basic.showNumber(3)
        basic.pause(500)
        basic.showIcon(IconNames.Asleep)
        basic.pause(1000)
        basic.showNumber(4)
        basic.pause(500)
        basic.showIcon(IconNames.Sad)
        basic.pause(1000)
        basic.showNumber(5)
        basic.pause(500)
        basic.showIcon(IconNames.Yes)
        basic.pause(1000)
        basic.showNumber(6)
        basic.pause(500)
        basic.showIcon(IconNames.No)
        basic.pause(1000)
        _3Send_Text = 1
    } else {
        if (_3Send_Text_Show == 1) {
            basic.showIcon(IconNames.Heart)
        }
        if (_3Send_Text_Show == 2) {
            basic.showIcon(IconNames.Happy)
        }
        if (_3Send_Text_Show == 3) {
            basic.showIcon(IconNames.Asleep)
        }
        if (_3Send_Text_Show == 4) {
            basic.showIcon(IconNames.Sad)
        }
        if (_3Send_Text_Show == 5) {
            basic.showIcon(IconNames.Yes)
        }
        if (_3Send_Text_Show == 6) {
            basic.showIcon(IconNames.No)
        }
    }
}
function _3Send2 () {
    _3Send_Text_Show += -1
    if (_3Send_Text_Show < 1) {
        _3Send_Text_Show = 1
    }
}
function _3Sendset () {
    radio.sendNumber(_3Send_Number)
    _3Send_Text = 0
}
// Wenn Encoder nach Rechts gedreht wird dann wird Funktion gestart je nach Progstep.ohne
KY040.onTurned(direction.clockwise, function () {
    if (_0Progstep == 1) {
        _1Funk2()
    }
    if (_0Progstep == 3) {
        _3Send()
    }
})
// Script für die Funkanzeige/Funkbegrenzung 0-15
function _1FunkFunktion () {
    if (_1FunkText == 0) {
        basic.showString("Funk?")
        basic.pause(100)
        _1FunkText = 1
    } else {
        if (_1Funk3 < 0) {
            _1Funk3 = 0
        }
        if (_1Funk3 > 15) {
            _1Funk3 = 15
        }
        basic.showNumber(_1Funk3)
    }
}
// Funk +1
function _1Funk2 () {
    _1Funk3 += 1
}
// Wenn Encoder gedrückt wird dann wird Funktion gestart je nach Progstep.
KY040.onPressEvent(DigitalPin.C17, function () {
    if (_0Progstep == 1) {
        _1Funkset()
    }
    if (_0Progstep == 3) {
        _3Sendset()
    }
})
// Wenn Encoder nach Links gedreht wird dann wird Funktion gestart je nach Progstep.
KY040.onTurned(direction.counterclockwise, function () {
    if (_0Progstep == 1) {
        _1Funk()
    }
    if (_0Progstep == 3) {
        _3Send2()
    }
})
function _3Send () {
    _3Send_Text_Show += 1
    if (_3Send_Text_Show > 6) {
        _3Send_Text_Show = 6
    }
}
// Startfrequenz:
// Setzt Sendeleistung Max
// Encoder Pins setzen
// Variablen auf 0
// LED in Rot,Grün,Blau,Weiß Leuchten lassen
// Variable Progstep (Programm Schritt) auf  (1) Start/Funkeingabe setzen.
// END
let _3Send_Text_Show = 0
let _3Send_Text = 0
let _3Send_Number = 0
let _1FunkText = 0
let _1Funk3 = 0
let _0Progstep = 0
radio.setTransmitPower(7)
KY040.setKY040(DigitalPin.C8, DigitalPin.C6)
let _0Klick = 0
_0Progstep = 0
_1Funk3 = 0
_1FunkText = 0
_3Send_Number = 0
_3Send_Text = 0
_3Send_Text_Show = 0
let _4RecieveNum = 0
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.pause(1000)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.pause(1000)
basic.setLedColor(basic.rgb(255, 0, 0))
basic.pause(1000)
basic.setLedColor(basic.rgb(0, 255, 0))
basic.pause(1000)
basic.setLedColor(basic.rgb(0, 0, 255))
basic.pause(1000)
basic.setLedColor(basic.rgb(255, 0, 255))
_0Progstep += 1
// Progstep überprüfen
// Funktion ausführen je nach Progstep
basic.forever(function () {
    if (_0Progstep == 1) {
        _1FunkFunktion()
    } else if (_0Progstep == 3) {
        _3Send3()
    }
})
