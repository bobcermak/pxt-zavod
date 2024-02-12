
let soucetvse: number = 0
let prumer: number
let startTime: number = 0
let endTime: number
let status: number = 0
let time: number
let vitaTime: number
let prumerTime: number


//setup
radio.setTransmitSerialNumber(true)
radio.setTransmitPower(4) //0...7
radio.setGroup(164)




basic.forever(function () {
    
    if (input.lightLevel() < prumer - 50) {
        if (status === 2) {
            endTime = control.millis()
            time = endTime - startTime
            status = 3
            radio.sendNumber(time)
        }

        
    }

    if (status != 4) {
        whaleysans.showNumber(status)
        
    }
    basic.pause(100)
})

input.onButtonPressed(Button.B, function() {
    if (status === 3) {
        status = 4
        basic.showNumber(prumerTime)
    }
    
    
})

radio.onReceivedNumber(function (receivedNumber: number) {   //receivedNumber = musíme poté zobrazovat, je to odeslané číslo, od odesílatele
    if (receivedNumber === 2) {
        startTime = control.millis()
        status = 2
    }
    else {
        vitaTime = receivedNumber
        prumerTime = (vitaTime + time)/2 
        music.playTone(400, 500)
        

    }
})


input.onButtonPressed(Button.A, function () {
    basic.showString("K!")
    for (let i = 0; i < 20; i++) {
        basic.pause(50)
        soucetvse += input.lightLevel()
    }

    prumer = soucetvse / 20
    music.playTone(400, 500)

})