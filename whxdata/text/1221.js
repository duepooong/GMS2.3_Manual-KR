rh._.exports({"0":["make_colour_hsv"],"1":["make_colour_hsv,make_color_hsv"],"2":["make_colour_hsv,make_color_hsv"],"3":["\n  ","\n  ","\n  ","GameMaker Studio 2 provides this function (as well as others) to permit the user to make their own colours. This particular function takes three component parts, the ","hue",", the ","saturation"," and the ","value"," (also know as \"luminosity\")\n    to create the colour desired. These values are taken as being between 0 and 255 so you can make 16,777,216 (256*256*256) colours with this! Below you can see an image of how these components look when separated:","\n  ","The image on the left is a break-down of the individual components of the function, and then on the right is an illustration\n    of how changing these components affects the end colour. As you can see, even without changing the hue (it stays at 0, red), we can dramatically change the colour with the other two settings, with saturation making the colour tone go from grey (0)\n    to a pure tone (255), and with the value making it go from darker (0) to lighter (255).","\n  "," ","\n  ","\n  ","make_colour_hsv(hue, sat, val);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","hue","\n        ","The hue of the colour","\n      ","\n      ","\n        ","sat","\n        ","How saturated the colour is","\n      ","\n      ","\n        ","val","\n        ","How dark the colour is","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Integer","\n  "," ","\n  ","\n  ","col = make_colour_hsv(100, 145, 255);","\n  ","The above code uses the function to create a colour and store its value in the variable \"col\" for later use.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Colour And Alpha","\n        ","Next: ","make_colour_rgb","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["make_colour_hsv"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1221"})