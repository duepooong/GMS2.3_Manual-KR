rh._.exports({"0":["instance_nearest"],"1":["instance_nearest"],"2":["instance_nearest"],"3":["\n  ","\n  ","\n  ","This function will check all the instances of the given object to see which is nearest to the given x/y point. All checks will be from the given x/y position to the ","origin"," (the x/y position) of instances of the object specified. If no instances\n    of the object exist, the function will return the keyword ","noone",", but if there are instances then it will return the ","id","    of the instance found. Please note that if the instance running the code has the same object index as the object being checked, then it will be included in the check (this includes checks for parent objects if the calling instance is also a child\n    of the parent).","\n  "," ","\n  ","\n  ","instance_nearest(x, y, obj);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","x","\n        ","The x position to check from.","\n      ","\n      ","\n        ","y","\n        ","The y position to check from.","\n      ","\n      ","\n        ","obj","\n        ","The object to check for instances of.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real (either an instance ID value or the keyword ","noone",")","\n  "," ","\n  ","\n  ","var inst, xx;"," xx = x;"," x -= 10000;"," inst = instance_nearest(xx, y, object_index);"," if inst != id","     {\n    ","     draw_line(x, y, inst.x, inst.y);","     }\n    "," x += 10000;","\n  ","The above code move the current instance 10000 pixels then check its previous position to find the nearest instance of the same object type. If that instance is itself, it will do nothing more than move back to its original position, but should the\n    instance found be different, it will draw a line between the two.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Instances","\n        ","Next: ","instance_number","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["instance_nearest"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"938"})