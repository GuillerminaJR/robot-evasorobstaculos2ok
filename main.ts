let distancia = 0
function GiraDerecha () {
    basic.showArrow(ArrowNames.East)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.clearScreen()
}
function Retroceso () {
    basic.showArrow(ArrowNames.North)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.pause(100)
    basic.clearScreen()
}
function Avanza () {
    basic.showArrow(ArrowNames.South)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
    basic.pause(100)
    basic.clearScreen()
}
function Parar () {
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
}
basic.forever(function () {
    distancia = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    if (distancia <= 20) {
        Parar()
        basic.pause(1000)
        Retroceso()
        basic.pause(200)
    } else {
        pins.analogWritePin(AnalogPin.P8, 350)
        pins.analogWritePin(AnalogPin.P16, 350)
        GiraDerecha()
        basic.pause(300)
        pins.analogWritePin(AnalogPin.P8, 350)
        pins.analogWritePin(AnalogPin.P16, 350)
        Avanza()
    }
    basic.pause(10)
})
