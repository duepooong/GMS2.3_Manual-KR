rh._.exports({"0":["window_has_focus"],"1":["window_has_focus"],"2":["window_has_focus"],"3":["\n  ","\n  ","\n  ","With this function you can poll the window (or tab) state and if it loses focus the function will return ","false"," otherwise it will return ","true",". In most cases you can simply use the ","os_is_paused()"," function\n    to test this, but in some very specific cases (for example games on Chrome Apps) that function will not trigger, in which case you should use this function instead.","\n  ","NOTE",": This function is only valid for the HTML5, Windows, and MacOS.","\n  "," ","\n  ","\n  ","window_has_focus();","\n  "," ","\n  ","\n  ","Boolean","\n  "," ","\n  ","\n  ","if !window_has_focus()","     {\n    ","     scr_PauseGame();\n    ","     }\n  ","\n  ","The above code will check to see if the game window is in focus or not, and if the function returns ","false"," a script will be called.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","The Game Window","\n        ","Next: ","window_device","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["window_has_focus"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1597"})