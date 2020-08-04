rh._.exports({"0":["sprite_set_offset"],"1":["sprite_set_offset"],"2":["sprite_set_offset"],"3":["\n  ","\n  ","\n  ","This function can be used to set the x and y origin of a sprite, and takes relative values based on the (0,0) position being the upper left corner of the sprite. The following image illustrates this:","\n  ","\n  ","NOTE:"," This function affects the sprite ","asset ","so that all further instances with this sprite will have the same offset.","\n  "," ","\n  ","\n  ","sprite_set_offset(ind, xoff, yoff);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","ind","\n        ","The index of the sprite to change the offset of.","\n      ","\n      ","\n        ","xoff","\n        ","The x position of the origin.","\n      ","\n      ","\n        ","yoff","\n        ","The y position of the origin.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","sprite_assign(spr_Custom, spr_Base);"," sprite_set_offset(spr_Custom, sprite_get_xoffset(spr_Base), sprite_get_yoffset(spr_Base));","\n  ","The above code assigns the sprite indexed in \"spr_Base\" to the sprite indexed in \"spr_Custom\" and then uses the x and y offset values of \"spr_Base\" to set the new sprite's origin.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sprite Manipulation","\n        ","Next: ","sprite_set_bbox_mode","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["sprite_set_offset"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns","Example:"],"id":"578"})