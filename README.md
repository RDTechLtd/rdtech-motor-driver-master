# rdtech blocks for micro:bit

Blocks that support [rdtech kits and shields for the micro:bit](https://www.rdtech.co.uk/microbit.html)
This package is for the [Motor Driver Board](https://www.rdtech.co.uk/5620-motor-driver-board-for-the-bbc-microbit-v2.html)

## Motors

* turn around

```blocks
input.onButtonPressed(Button.A, () => {
    rdtech_motor_driver.motorOn(rdtech_motor_driver.Motors.Motor1, rdtech_motor_driver.MotorDirection.Forward, 100);
    rdtech_motor_driver.motorOn(rdtech_motor_driver.Motors.Motor2, rdtech_motor_driver.MotorDirection.Reverse, 100);
})
```

* go forward

```blocks
input.onButtonPressed(Button.B, () => {
    rdtech_motor_driver.motorOn(rdtech_motor_driver.Motors.Motor1, rdtech_motor_driver.MotorDirection.Reverse, 100);
    rdtech_motor_driver.motorOn(rdtech_motor_driver.Motors.Motor2, rdtech_motor_driver.MotorDirection.Forward, 100);
})
```

* stop both motors when pressing ``A+B``

```blocks
input.onButtonPressed(Button.AB, () => {
    rdtech_motor_driver.motorOff(rdtech_motor_driver.Motors.Motor1);
    rdtech_motor_driver.motorOff(rdtech_motor_driver.Motors.Motor2);
})
```

## License

MIT

## Supported targets

* for PXT/microbit
(The metadata above is needed for package search.)

