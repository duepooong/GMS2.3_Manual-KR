rh._.exports({"0":["mp_grid_add_rectangle"],"1":["mp_grid_add_rectangle"],"2":["mp_grid_add_rectangle"],"3":["\n  ","\n  ","\n  ","This function asks you to define a rectangle within the room, and then it marks all MP grid cells \"touch\" that rectangle as being forbidden, meaning that the path-finding functions cannot cross them. The image below illustrates how this works:","\n  ","As you can see, the rectangle defined by (50, 90) to (200, 180) marks all the equivalent\n    MP grid cells that it touches as being forbidden.","\n  "," ","\n  ","\n  ","mp_grid_add_rectangle(id, x1, y1, x2, y2);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","id","\n        ","Index of the mp_grid that is to be used","\n      ","\n      ","\n        ","x1","\n        ","The x coordinate of the left side of the rectangle to check.","\n      ","\n      ","\n        ","y1","\n        ","The y coordinate of the top side of the rectangle to check.","\n      ","\n      ","\n        ","x2","\n        ","The x coordinate of the right side of the rectangle to check.","\n      ","\n      ","\n        ","y2","\n        ","The x coordinate of the bottom side of the rectangle to check.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","mp_grid_add_rectangle(grid, 0, 0, 100, 200);","\n  ","The above code will mark as forbidden all cells of the mp_grid indexed in the variable \"grid\" that fall within the area 0,0 to 100,200.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Motion Planning","\n        ","Next: ","mp_grid_get_cell","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["mp_grid_add_rectangle"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1179"})