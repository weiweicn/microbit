let strip = neopixel.create(DigitalPin.P2, 24, NeoPixelMode.RGB_RGB)
//  strip.set_pixel_color(0, neopixel.colors(NeoPixelColors.RED))
//  range2 = strip.range(1, 2)
//  strip.set_pixel_color(1, neopixel.colors(NeoPixelColors.RED))
//  range2.show_color(neopixel.rgb(255, 0, 0))
//  range2.show()
strip.show()
strip[0] = [255, 0, 0]
