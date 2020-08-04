rh._.exports({"0":["Load Buffer"],"1":["DnD™ Action - Load Buffer"],"2":["Load Buffer"],"3":["\n  ","\n  ","\n  ","With this action you can load a buffer that was previously saved with the action ","Save Buffer",". The action will create a new buffer, load the data file into it, and return the unique ID value to identify the buffer to the\n    variable. You supply the name of the file to load (as a string) and a variable to store the returned buffer ID in. Note that if you flag the variable as a temporary local variable, you need to make sure to delete the buffer this function creates before\n    the end of the action script or event, otherwise you will lose the reference to it and get a memory leak when the variable is discarded.","\n  "," ","\n  ","\n  ","\n  ","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","Filename","\n        ","The name (as a string) of the file to open","\n      ","\n      ","\n        ","Target","\n        ","The target variable to hold the unique ID value for the buffer created on load","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","The above action block code will create a variable to hold buffer data and then check to see if a\n    buffer save file has been made previously. If the file exists, then it is loaded into the buffer variable that we created, but if it doesn't exist, it is created, written to and then saved out ready for loading the next time.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","File Actions","\n        ","Next: ","Save Buffer","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":[" Load Buffer"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Action Syntax:","Arguments:","Example:"],"id":"356"})