// go round
input.onButtonPressed(Button.A, () => {
    rdtech_motor_driver.motorOn(rdtech_motor_driver.Motors.Motor1, rdtech_motor_driver.MotorDirection.Forward, 100);
    rdtech_motor_driver.motorOn(rdtech_motor_driver.Motors.Motor2, rdtech_motor_driver.MotorDirection.Reverse, 100);
})
// go forward
input.onButtonPressed(Button.B, () => {
    rdtech_motor_driver.motorOn(rdtech_motor_driver.Motors.Motor1, rdtech_motor_driver.MotorDirection.Reverse, 100);
    rdtech_motor_driver.motorOn(rdtech_motor_driver.Motors.Motor2, rdtech_motor_driver.MotorDirection.Forward, 100);
})
// stop
input.onButtonPressed(Button.AB, () => {
    rdtech_motor_driver.motorOff(rdtech_motor_driver.Motors.Motor1);
    rdtech_motor_driver.motorOff(rdtech_motor_driver.Motors.Motor2);
})
