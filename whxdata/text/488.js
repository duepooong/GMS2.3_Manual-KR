rh._.exports({"0":["variable_global_get"],"1":["variable_global_get"],"2":["variable_global_get"],"3":["\n  ","\n  ","\n  ","With this function you can get the value from a given named global variable. You supply the name of the global variable to get the value of ","as a string"," (see example code below) and the function will return the value\n    held by the global variable or ","undefined"," if the variable does not exist.","\n  ","IMPORTANT!"," If the global variable you are getting does not exist then the function will return the keyword ","undefined"," and you may get errors that will stop the game from functioning, so if in doubt\n    use the function ","variable_global_exists"," first.","\n  "," ","\n  ","\n  ","variable_global_get(name);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","name","\n        ","The name of the global variable to get (as a string)","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Value (any data type) or ","undefined"," (if the named variable does not exist)","\n  "," ","\n  ","\n  ","if variable_global_exists(\"enemy_num\")","    {\n    ","    show_debug_message(\"enemy_num = \" + string(variable_global_get(\"enemy_num\"));)","    }\n  ","\n  ","The above code will check to see if a global variable exists and if it does then it is output to the console.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Variable Functions","\n        ","Next: ","variable_global_set","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["variable_global_get"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"488"})