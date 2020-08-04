rh._.exports({"0":["tile_get_empty"],"1":["tile_get_empty"],"2":["tile_get_empty"],"3":["\n  ","\n  ","\n  ","This function can be used to check whether a given set of tiledata is for an empty tile or not. You give the tiledata, which can be retrieved using the function ","tilemap_get()",", and the function will return ","true","    if the tile is empty, or ","false"," if there is a tile index.","\n  "," ","\n  ","\n  ","tile_get_empty(tiledata)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","tiledata","\n        ","the tiledata to check","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Boolean","\n  "," ","\n  ","\n  ","var lay_id = layer_get_id(\"Tiles_sky\");"," var map_id = layer_tilemap_get_id(lay_id);"," for (var i = 0; i < tilemap_get_width(map_id); i++;)","     {\n    ","     for (var j = 0; j < tilemap_get_height(map_id); j++;)","         {\n    ","         var data = tilemap_get(map_id, i, j);","         if !tile_get_empty(data)","             {\n    ","             data = tile_set_empty(data)","             tilemap_set(map_id, data, i, j);","             }\n    ","         }\n    ","     }\n  ","\n  ","The above code gets the tilemap ID from the given layer and then proceeds to check every tile cell on the map to see if it has data or not. If it does, the tile is set to empty.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Tile Map Layers","\n        ","Next: ","tile_get_index","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["tile_get_empty"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1046"})