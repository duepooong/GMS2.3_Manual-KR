rh._.exports({"0":["draw_skeleton"],"1":["draw_skeleton"],"2":["draw_skeleton"],"3":["\n  ","\n  ","\n  ","This function is ","only"," for use with sprites that have been created using a skeletal animation program like Spine. While you can draw these sprites using the normal draw functions (like ","draw_self()","),\n    there are times when you may want to draw a single frame or show a change of skin texture without actually changing the sprite properties. In these cases you can draw the sprite with this function, where you give the sprite index and then the name\n    of the animation to get the frame from (a string, as set within the program used to make the sprite). Next you give the name of the skin to use (again, as set when the sprite was made), and a frame value. The frame value is for telling GameMaker Studio\n    2 what part of the animation to show and is a value between 0 and the ","image_number",". The rest of the arguments are the same as those used for normal sprite drawing and will change\n    the scale, angle, blend colour and alpha of the final animation frame being drawn.","\n  ","WARNING!"," Because of the way skeletal animations are interpolated between various \"key\" frames, there is an additional overhead associated with this call and therefore it is recommended that you avoid drawing skeleton based sprites using\n    this method unless absolutely necessary.","\n  "," ","\n  ","\n  ","draw_skeleton(sprite, animname, skinname, frame, x, y, xscale, yscale, rot, colour, alpha);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","sprite","\n        ","The index of the sprite to draw.","\n      ","\n      ","\n        ","animname","\n        ","The name of the animation to get the frame from (a string).","\n      ","\n      ","\n        ","skinname","\n        ","The name of the skin to use (a string).","\n      ","\n      ","\n        ","frame","\n        ","The animation frame to draw (from 0 to image_number - 1).","\n      ","\n      ","\n        ","x","\n        ","The x coordinate of where to draw the sprite.","\n      ","\n      ","\n        ","y","\n        ","The y coordinate of where to draw the sprite.","\n      ","\n      ","\n        ","xscale","\n        ","The horizontal scaling of the sprite, as a multiplier: 1 = normal scaling, 0.5 is half etc...","\n      ","\n      ","\n        ","yscale","\n        ","The vertical scaling of the sprite, as a multiplier: 1 = normal scaling, 0.5 is half etc...","\n      ","\n      ","\n        ","rot","\n        ","The rotation of the sprite. 0=normal, 90=turned 90 degrees counter-clockwise etc.","\n      ","\n      ","\n        ","colour","\n        ","The colour with which to blend the sprite.","\n      ","\n      ","\n        ","alpha","\n        ","The alpha of the sprite (from 0 to 1 where 0 is transparent and 1 opaque).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  "," ","\n  ","draw_skeleton(spr_Jump, \"jump\", \"skin1\", 0, x, y, image_xscale, image_yscale, image_angle, c_white, 0.5);","\n  ","The above code will draw the first frame of the given skeletal animation sprite, using the \"jump\" animation set, the skin defined as \"skin1\" and at the same scale and position as the instance properties define, but with an alpha\n    of 0.5.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Drawing And Miscellaneous","\n        ","Next: ","draw_skeleton_instance","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["draw_skeleton"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"654"})