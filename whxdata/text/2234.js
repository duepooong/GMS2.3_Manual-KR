rh._.exports({"0":["browser_height"],"1":["browser_height"],"2":["browser_height"],"3":["\n  ","\n  ","\n  ","This variable holds the height (in pixels) of the browser the game is being run in. If no browser is present then the window size is returned. the following image illustrates how this variable relates to the rest of the positioning functions available\n    through the ","Window Functions",".","\n  ","\n  ","\n  ","browser_height","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","if (browser_height > window_get_height()) || (browser_width > window_get_width())","     {\n    ","     var xx, yy;","     if (browser_width > window_get_width())","         {\n    ","         xx = (browser_width - window_get_width()) / 2;","         }\n    ","     else\n    ","         {\n    ","         xx = 0;","         }\n    ","     if (browser_height > window_get_height())","         {\n    ","         yy = (browser_height - window_get_height()) / 2;","         }\n    ","     else\n    ","         {\n    ","         yy = 0;","         }\n    ","     window_set_position(xx, yy);","     }\n  ","\n  ","The above code checks the width and height of the browser to see if either is larger than the current window width and height. If either of them are, it then calculates a new position for the game window within the browser.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Web And HTML5","\n        ","Next: ","browser_width","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["browser_height"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2234"})