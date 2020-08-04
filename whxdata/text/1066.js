rh._.exports({"0":["layer_background_blend"],"1":["layer_background_blend"],"2":["layer_background_blend"],"3":["\n  ","\n  ","\n  ","This function controls the blending (or \"tinting\") of the background sprite and the default value is -1 (which represents the constant ","c_white",", which can also be used). Any other value (including internal colour constants like ","c_red",",\n    or ","c_aqua",") will blend the specified colour with the original sprite. You give the background element ID (which you get when you create a background element using ","layer_background_create()","    or when you use the function ","layer_background_get_id()","), and then set the blending colour to use. Below you can see an example of a sprite that has been blended with different colours:","\n  ","Please note that you should try to limit blending on the ","HTML5"," platform (unless using WebGL), as each\n    blended sprite has to be cached separately and so having many blended sprites may adversely affect performance (you can also set the cache size using the function ","sprite_set_cache_size()",").","\n  "," ","\n  ","\n  ","layer_background_blend(background_element_id, blend);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","background_element_id","\n        ","The unique ID value of the background element to change","\n      ","\n      ","\n        ","blend","\n        ","The colour to blend with the background sprite (default is ","c_white",")","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","var lay_id = layer_get_id(\"Background_sky\");"," var back_id = layer_background_get_id(lay_id);"," layer_background_blend(back_id, c_aqua);","\n  ","The above code gets the ID value of the background assigned to the layer \"Background_sky\" and then tints it to a colour.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Background Layers","\n        ","Next: ","layer_background_alpha","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["layer_background_blend"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1066"})