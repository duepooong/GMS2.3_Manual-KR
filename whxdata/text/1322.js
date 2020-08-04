rh._.exports({"0":["draw_sprite_general"],"1":["draw_sprite_general"],"2":["draw_sprite_general"],"3":["\n  ","\n  ","\n  ","This function combines the function ","draw_sprite_ext()"," with the function ","draw_sprite_part()",", adding in some additional blending options so that each corner of the\n    final sprite part can be blended with an individual colour.","\n  ","NOTE",": Colour blending is only recommended for the HTML5 target when WebGL is enabled, although you can still set the blending colour if it is not enabled and it will blend the sprite as normal. However all blending in this way creates a duplicate\n    sprite which is then stored in the cache and used when required. This is far from optimal and if you use multiple colour changes it will slow down your games performance unless you activate WebGL. if you do not wish to use WebGL, then you can set\n    the font cache size to try and limit this should it be necessary using the function ","sprite_set_cache_size()",".","\n  ","NOTE",": This function may not work as expected when using skeleton animation sprites, and you may find that the function only draws the first frame of the default pose. You should be using the ","draw_skeleton_*"," functions instead.","\n  "," ","\n  ","\n  ","draw_sprite_general(sprite, subimg, left, top, width, height, x, y, xscale, yscale, rot, c1, c2, c3, c4, alpha);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","sprite","\n        ","The index of the sprite to draw.","\n      ","\n      ","\n        ","subimg","\n        ","The subimg (frame) of the sprite to draw (image_index or -1 correlate to the current frame of animation in the object).","\n      ","\n      ","\n        ","left","\n        ","The x position on the sprite of the top left corner of the area to draw.","\n      ","\n      ","\n        ","top","\n        ","The y position on the sprite of the top left corner of the area to draw.","\n      ","\n      ","\n        ","width","\n        ","The width of the area to draw.","\n      ","\n      ","\n        ","height","\n        ","The height of the area to draw.","\n      ","\n      ","\n        ","x","\n        ","The x coordinate of where to draw the sprite.","\n      ","\n      ","\n        ","y","\n        ","The y coordinate of where to draw the sprite.","\n      ","\n      ","\n        ","xscale","\n        ","The horizontal scaling of the sprite, as a multiplier: 1 = normal scaling, 0.5 is half etc...","\n      ","\n      ","\n        ","yscale","\n        ","The vertical scaling of the sprite, as a multiplier: 1 = normal scaling, 0.5 is half etc...","\n      ","\n      ","\n        ","rot","\n        ","The rotation of the sprite. 0=normal, 90=turned 90 degrees counter-clockwise etc.","\n      ","\n      ","\n        ","c1","\n        ","The colour with which to blend the top left area of the sprite.","\n      ","\n      ","\n        ","c2","\n        ","The colour with which to blend the top right area of the sprite.","\n      ","\n      ","\n        ","c3","\n        ","The colour with which to blend the bottom right area of the sprite.","\n      ","\n      ","\n        ","c4","\n        ","The colour with which to blend the bottom left area of the sprite.","\n      ","\n      ","\n        ","alpha","\n        ","The alpha of the sprite (from 0 to 1 where 0 is transparent and 1 opaque).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","draw_sprite_general(sprite_index, image_index, 8, 8, sprite_width-16, sprite_height-16, x, y, 2, 0.5, 180, c_white, c_white, c_black, c_black, 1);","\n  ","This will draw the instances assigned sprite (sprite_index) and its current frame of animation (image_index), however it will shave an 8px margin off all four sides of the sprite. It will be stretched to double its usual width but half its usual height.\n    It will be opaque, and upside down. The top area of the sprite will be blended white and hence normal, but the bottom area will be black, meaning the sprite will go from normal to a silhouette downwards in a smooth gradient.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sprites And Tiles","\n        ","Next: ","draw_sprite_part","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["draw_sprite_general"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1322"})