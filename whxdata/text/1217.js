rh._.exports({"0":["colour_get_value"],"1":["colour_get_value,color_get_value"],"2":["colour_get_value,color_get_value"],"3":["\n  ","\n  ","\n  ","This function will return the value (luminosity) of the given colour. This is the amount of the \"light\" that is mixed into the final colour and is part of the hue, saturation and value method for defining a colour. The following image illustrates\n    how this value corresponds to the HSV scale of colour:","\n  ","\n  "," ","\n  ","\n  ","colour_get_value(col);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","col","\n        ","The colour to check","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Int","\n  "," ","\n  ","\n  ","col = make_colour_hsv(random(255), 255, colour_get_value(c_teal));","\n  ","The above code gets the value used to make the colour constant \"c_teal\" and then uses that value to set a random colour to have the same luminosity, storing the resulting colour in the variable \"col\".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Colour And Alpha","\n        ","Next: ","draw_getpixel","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["colour_get_value"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1217"})