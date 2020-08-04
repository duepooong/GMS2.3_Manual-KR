rh._.exports({"0":["sprite_get_xoffset"],"1":["sprite_get_xoffset"],"2":["sprite_get_xoffset"],"3":["\n  ","\n  ","\n  ","When you define a sprite in the sprite editor, you need to set the ","origin"," for that sprite. This is the point at which the sprite will be \"attached\" or \"drawn\" when used with an instance. This function returns the relative\n    offset for the x-axis of the origin based on the upper left corner being the 0,0 position, with a +x being right and a -x being left of this. The following image illustrates this:","\n  ","\n  "," ","\n  ","\n  ","sprite_get_xoffset(index);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","index","\n        ","The index of the sprite to find the xoffset of.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","if x - sprite_get_xoffset(sprite_index) < 0","     {\n    ","     x = sprite_get_xoffset(sprite_index);","     }\n  ","\n  ","The above code will ensure that an instance is maintained within the room based on the sprite (so the sprite is always visible).","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sprite Information","\n        ","Next: ","sprite_get_yoffset","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["sprite_get_xoffset"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns","Example:"],"id":"559"})