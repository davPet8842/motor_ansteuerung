let speed = 0
function Motor_an_rechts () {
    images.arrowImage(ArrowNames.West).showImage(0)
    speed = 50
    MiniCar.motor(Motorlist.M1, Direction1.Forward, speed)
    MiniCar.motor(Motorlist.M2, Direction1.Backward, speed)
    basic.pause(600)
    Motor_aus()
}
function LED_An (rot: number, grün: number, blau: number) {
    MiniCar.PWM_LED_R(pwm_led_r.pem_red_l, 255 - rot)
    MiniCar.PWM_LED_R(pwm_led_r.pwm_green_l, 255 - grün)
    MiniCar.PWM_LED_R(pwm_led_r.pwm_blue_l, 255 - blau)
    MiniCar.PWM_LED_L(pwm_led_l.pwm_red_r, 255 - rot)
    MiniCar.PWM_LED_L(pwm_led_l.pwm_green_r, 255 - grün)
    MiniCar.PWM_LED_L(pwm_led_l.pwm_blue_r, 255 - blau)
}
function LED_Aus () {
    MiniCar.PWM_LED_R(pwm_led_r.pem_red_l, 255)
    MiniCar.PWM_LED_R(pwm_led_r.pwm_green_l, 255)
    MiniCar.PWM_LED_R(pwm_led_r.pwm_blue_l, 255)
    MiniCar.PWM_LED_L(pwm_led_l.pwm_red_r, 255)
    MiniCar.PWM_LED_L(pwm_led_l.pwm_green_r, 255)
    MiniCar.PWM_LED_L(pwm_led_l.pwm_blue_r, 255)
}
function Motor_an_zurück (geschwindigkeit: number) {
    images.arrowImage(ArrowNames.South).showImage(0)
    MiniCar.motor(Motorlist.M1, Direction1.Backward, geschwindigkeit)
    MiniCar.motor(Motorlist.M2, Direction1.Backward, geschwindigkeit)
}
function Motor_an_vor (geschwindigkeit: number) {
    images.arrowImage(ArrowNames.North).showImage(0)
    MiniCar.motor(Motorlist.M1, Direction1.Forward, geschwindigkeit)
    MiniCar.motor(Motorlist.M2, Direction1.Forward, geschwindigkeit)
}
function Motor_aus () {
    speed = 0
    MiniCar.motor(Motorlist.M1, Direction1.Forward, speed)
    MiniCar.motor(Motorlist.M2, Direction1.Forward, speed)
    Display_Löschen()
}
function Display_Löschen () {
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0)
}
function Motor_an_links () {
    images.arrowImage(ArrowNames.East).showImage(0)
    speed = 50
    MiniCar.motor(Motorlist.M1, Direction1.Backward, speed)
    MiniCar.motor(Motorlist.M2, Direction1.Forward, speed)
    basic.pause(600)
    Motor_aus()
    Display_Löschen()
}
