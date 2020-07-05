rh._.exports({"0":["tile_set_mirror"],"1":["tile_set_mirror"],"2":["tile_set_mirror"],"3":["\n  ","\n  ","\n  ","This function can be used to set a given set of tiledata to mirror the tile or not. You give the tiledata, which can be retrieved using the function ","tilemap_get()",", and then set the mirror argument to either ","true","    if you want the tile mirrored, or ","false"," if you want the tile to be in its default, un-mirrored state. The function will return a modified tiledata set which can then be applied using the ","tilemap_set()","    function.","\n  "," ","\n  ","\n  ","tile_set_mirror(tiledata, mirror)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","tiledata","\n        ","the tiledata to set","\n      ","\n      ","\n        ","mirror","\n        ","Set to ","true"," to mirror and ","false"," to leave it as-is","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real (tiledata)","\n  "," ","\n  ","\n  ","var lay_id = layer_get_id(\"Tiles_sky\");"," var map_id = layer_tilemap_get_id(lay_id);"," var mx = tilemap_get_cell_x_at_pixel(map_id, mouse_x, mouse_y);"," var my = tilemap_get_cell_y_at_pixel(map_id, mouse_x, mouse_y);"," var data\n    = tilemap_get(map_id, mx, my);"," var bool = !tile_get_mirror(data);"," data = tile_set_mirror(data, bool);"," tilemap_set(map_id, data, mx, my);","\n  ","The above code gets the tilemap ID from the given layer and then gets the x and y cell position for the tile under the mouse. This position is then used to get the tiledata which is mirrored and then used to set the tile again.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Tile Map Layers","\n        ","Next: ","tile_set_rotate","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["tile_set_mirror"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1052"})