rh._.exports({"0":["file_find_close"],"1":["file_find_close"],"2":["file_find_close"],"3":["\n  ","\n  ","\n  ","Must be called after handling files opened using ","file_find_first()"," and ","file_find_next()"," functions to free memory. The file find functions open handles into the file\n    directory and these take up a minimal amount of memory, which (over time) mounts up. Therefore you should always call this function after you have found the files you require to \"close\" these handles.","\n  "," ","\n  ","\n  ","file_find_close();","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","file_find_close();","\n  ","This will close and free the memory associated with the file find function handles.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","File System","\n        ","Next: ","file_attributes","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["file_find_close"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns","Example:"],"id":"2344"})