rh._.exports({"0":["draw_skeleton_collision"],"1":["draw_skeleton_collision"],"2":["draw_skeleton_collision"],"3":["\n  ","\n  ","\n  ","This function will draw the collision masks associated with the given skeletal animation. You supply the base sprite, the animation set to use and the frame to get the information from, and you can also set the transform properties to suit.","\n  "," ","\n  ","\n  ","draw_skeleton_collision(sprite, animname, frame, x, y, xscale, yscale, rot, colour)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","sprite","\n        ","The index of the sprite to draw.","\n      ","\n      ","\n        ","animname","\n        ","The name of the animation to get the frame from (a string).","\n      ","\n      ","\n        ","frame","\n        ","The animation frame to draw (from 0 to image_number - 1).","\n      ","\n      ","\n        ","x","\n        ","The x coordinate of where to draw the sprite.","\n      ","\n      ","\n        ","y","\n        ","The y coordinate of where to draw the sprite.","\n      ","\n      ","\n        ","xscale","\n        ","The horizontal scaling of the sprite, as a multiplier: 1 = normal scaling, 0.5 is half etc...","\n      ","\n      ","\n        ","yscale","\n        ","The vertical scaling of the sprite, as a multiplier: 1 = normal scaling, 0.5 is half etc...","\n      ","\n      ","\n        ","rot","\n        ","The rotation of the sprite. 0=normal, 90=turned 90 degrees counter-clockwise etc.","\n      ","\n      ","\n        ","colour","\n        ","The colour with which to blend the sprite.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","draw_skeleton_collision(sprite_index, \"jump\", image_index, x, y, image_xscale, image_yscale, image_angle, c_white);","\n  ","The above code will draw the collision mask data for the current sprite, using the current transforms, for the animation set \"jump\".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Drawing And Miscellaneous","\n        ","Next: ","draw_skeleton_time","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["draw_skeleton_collision"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"654"})