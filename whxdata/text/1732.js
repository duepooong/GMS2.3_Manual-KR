rh._.exports({"0":["ds_grid_create"],"1":["ds_grid_create"],"2":["ds_grid_create"],"3":["\n  ","\n  ","\n  ","With this function you can create a new DS grid data structure of the specified cell width and height. This function returns an id which must be used in all further functions that deal with this DS grid.","\n  ","IMPORTANT!"," When you create a data structure, the index value to identify it is an integer value starting at 0. This means that data structures of different types can have the ","same"," index value, so if in doubt you should be using the\n    ","ds_exists()"," function before accessing them. Also note that indices are re-used, so a destroyed data structure index value may be used by a newly created one afterwards.","\n  "," ","\n  ","\n  ","ds_grid_create(w, h);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","w","\n        ","The width of the grid to be created.","\n      ","\n      ","\n        ","h","\n        ","The height of the grid to be created.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","mygrid = ds_grid_create(10, 10)","\n  ","This creates a grid 10 cells high and 10 cells wide.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","DS Grids","\n        ","Next: ","ds_grid_destroy","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["ds_grid_create"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1732"})