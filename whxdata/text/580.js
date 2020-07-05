rh._.exports({"0":["sprite_set_bbox"],"1":["sprite_set_bbox"],"2":["sprite_set_bbox"],"3":["\n  ","\n  ","\n  ","This function can be used to set the bounding box values for a sprite. You supply the sprite index to use and then the left, top, right and bottom values for the bounding box positions. The positions are ","absolute"," values, where the (0, 0) position\n    corresponds to the top left corner of the sprite, regardless of the offset for the sprite, any \"empty\" pixels the sprite may have, or where it is being drawn in the room.","\n  ","NOTE:"," This function affects the sprite ","asset ","so that all further instances with this sprite will have the same bounding box.","\n  "," ","\n  ","\n  ","sprite_set_bbox(ind, left, top, right, bottom);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","ind","\n        ","The index of the sprite to set the bounding box on.","\n      ","\n      ","\n        ","left","\n        ","The left side of the bounding box","\n      ","\n      ","\n        ","top","\n        ","The top of the bounding box.","\n      ","\n      ","\n        ","right","\n        ","The right side of the bounding box","\n      ","\n      ","\n        ","bottom","\n        ","The bottom of the bounding box.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if sprite_get_bbox_mode(sprite_index) == 2","     {\n    ","     left = irandom(sprite_width / 2);","     right = irandom((sprite_width / 2) + irandom(sprite_width / 2));","     top = irandom(sprite_height / 2);","     bottom = irandom((sprite_height / 2) + irandom(sprite_height / 2));","     sprite_set_bbox(sprite_index,\n    left, top, right, bottom);","     }\n  ","\n  ","The above code will check the bounding box mode of the sprite assigned to the ","sprite_index",", and if it is set to ","manual"," then it will have its bounding box changed.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sprite Manipulation","\n        ","Next: ","sprite_set_speed","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["sprite_set_bbox"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns","Example:"],"id":"580"})