rh._.exports({"0":["tilemap_get_tileset"],"1":["tilemap_get_tileset"],"2":["tilemap_get_tileset"],"3":["\n  ","\n  ","\n  ","Using this function you can retrieve the index value of the tile set resource assigned to a given tilemap element on a layer. You give the tilemap element ID (which you get when you create a tilemap element using ","layer_tilemap_create()","    or when you use the function ","layer_tilemap_get_id()","), and the function will return the tile set index value.","\n  "," ","\n  ","\n  ","tilemap_get_tileset(tilemap_element_id);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","tilemap_element_id","\n        ","The unique ID value of the tilemap element to get the tile set from","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Tile Set index value (Real)","\n  "," ","\n  ","\n  ","var lay_id = layer_get_id(\"Tiles_trees\");"," var map_id = layer_tilemap_get_id(lay_id);"," if tilemap_get_tileset(map_id) != ts_Nighttime","     {\n    ","     tilemap_tileset(map_id, ts_Nighttime);","     }\n  ","\n  ","The above code checks the current tile set assigned to the layer \"Tiles_trees\" and if it is not \"ts_Nighttime\" then that tile set is assigned to the tilemap.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Tile Map Layers","\n        ","Next: ","tilemap_get_frame","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["tilemap_get_tileset"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1034"})