rh._.exports({"0":["Draw Transformed Value"],"1":["DnD™ Action - Draw Transformed Value"],"2":["Draw Transformed Value"],"3":["\n  ","\n  ","\n  ","With this action you can draw a string caption and/or a variable or value to the screen. The caption argument is a string that you wish to add preceding the value, and can be left blank if required, and the value can be a variable, a fixed value, or\n    another string - in which case it should be enclosed in quotes, and can also be left blank if required. You then give the position where the string should be drawn, either as an absolute position or as a position relative to the instance drawing the\n    text. Additionally you can set the scale of the text, stretching it either along the horizontal or vertical axis, as well as the rotation (angles for rotating text are anti-clockwise, so setting it to 90° will rotate it to the left and -90° to the\n    right). Scaling is done by the factor given, so a scale of 0.5 will ","half"," the width of the text and a scale of 2 will double the width, with 1 being the default value for no scaling. Note that how the text will look when drawn will depend on\n    the font used, the colour used, and the alignment. All these things can be changed before drawing, as shown in the example below.","\n  ","NOTE",": This action is only for use in the various ","Draw Events",", and will not draw anything if used elsewhere.","\n  "," ","\n  "," ","\n  ","\n  ","\n  ","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","Caption","\n        ","The caption to draw (a string), can be left blank","\n      ","\n      ","\n        ","Value","\n        ","The value to draw (real, variable or string)","\n      ","\n      ","\n        ","x","\n        ","The x position to draw at","\n      ","\n      ","\n        ","y","\n        ","The y position to draw at","\n      ","\n      ","\n        ","xscale","\n        ","The x (horizontal) scale factor, default is 1","\n      ","\n      ","\n        ","yscale","\n        ","The y (vertical) scale factor, default is 1","\n      ","\n      ","\n        ","Rotation","\n        ","The rotation angle for drawing the text","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","The above action block code sets a colour, a font and then aligns the text\n    to draw from the center before actually drawing the \"current_time\" value along with the caption \"TIME: \", scaled to be double the size and \"vibrating\" slightly due to the random angle change.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Drawing Actions","\n        ","Next: ","Draw Sprite","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":[" Draw Transformed Value"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Action Syntax:","Arguments:","Example:"],"id":"257"})