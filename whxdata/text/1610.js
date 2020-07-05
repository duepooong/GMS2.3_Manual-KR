rh._.exports({"0":["display_get_timing_method"],"1":["display_get_timing_method"],"2":["display_get_timing_method,tm_sleep,tm_countvsyncs"],"3":["\n  ","\n  ","\n  ","This function can be used to retrieve the timing method to be used for rendering your game. The method can be one of the constants listed below.","\n  ","For more information on the different timing methods, please see ","display_set_timing_method()",".","\n  "," ","\n  ","\n  ","display_get_timing_method();","\n  "," ","\n  ","\n  ","Constant","\n  ","\n    ","\n      ","\n        ","Constant","\n        ","Description","\n      ","\n      ","\n        ","tm_sleep","\n        ","The sleep margin value is the main timing method","\n      ","\n      ","\n        ","tm_countvsyncs","\n        ","Vsync timing is the main timing method (default for all supported platforms)","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","if display_get_timing_method() != tm_sleep"," {\n    "," display_set_timing_method(tm_sleep);\n    "," if display_get_sleep_margin() != 20","     {\n    ","     display_set_sleep_margin(20);\n    ","     }\n    "," }\n  ","\n  ","The above code will check the timing method and then if it's not set to ","tm_sleep"," it will be set to that and the sleep margin set to 20.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","Cameras And Display","\n        ","Back: ","\n        ","Next: ","display_get_sleep_margin","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["display_get_timing_method"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1610"})