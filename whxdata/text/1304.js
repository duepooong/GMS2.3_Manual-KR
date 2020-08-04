rh._.exports({"0":["draw_line_width"],"1":["draw_line_width"],"2":["draw_line_width"],"3":["\n  ","\n  ","\n  ","With this function you can draw a line of a specified width between any two points in the game room. Please note that the line being drawn may need different values (+/-1 on the x, y) to be drawn with the desired dimensions due to differences across\n    the various supported platforms.","\n  ","NOTE",": If you are wanting to draw a shape using a shader, you should be aware that most shaders expect the following inputs: vertex, texture, Colour. However, when using this function, only vertex and colour data are being passed in, and so the\n    shader may not draw anything (or draw something but not correctly). If you need to draw shapes in this way then the shader should be customised with this in mind.","\n  "," ","\n  ","\n  ","draw_line_width(x1, y1, x2, y2, w);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","x1","\n        ","The x coordinate of the start of the line.","\n      ","\n      ","\n        ","y1","\n        ","The y coordinate of the start of the line.","\n      ","\n      ","\n        ","x2","\n        ","The x coordinate of the end of the line.","\n      ","\n      ","\n        ","y2","\n        ","The y coordinate of the end of the line.","\n      ","\n      ","\n        ","w","\n        ","The width of the line in pixels.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","draw_set_colour(c_red);"," draw_line_width(100, 100, 200, 200, 6);","\n  ","This will draw a red diagonal line, 6 pixels wide, from point (100,100) to point (200,200).","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Basic Forms","\n        ","Next: ","draw_line_width_colour","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["draw_line_width"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1304"})