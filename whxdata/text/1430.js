rh._.exports({"0":["draw_light_enable"],"1":["draw_light_enable"],"2":["draw_light_enable"],"3":["\n  ","\n  ","\n  ","This function is used to enable a defined light. When you define a positional or a directional light you must assign it an index number which is then used by this function to switch the light on or off. Default is disabled (","false",").","\n  ","NOTE",": There are only 8 hardware lights available, so only 8 defined lights can be enabled at any one time (although more can be defined).","\n  "," ","\n  ","\n  ","draw_light_enable(ind, enable);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","ind","\n        ","The index number of the light (from 0 to 7)","\n      ","\n      ","\n        ","enable","\n        ","Enable or disable all lighting (","true"," or false)","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","draw_set_lighting(true);"," draw_light_define_direction(1, 0, 1, 0, c_white);"," draw_light_enable(1, true);","\n  ","The above code will enable lighting for the whole scene, then define a white directional light in the room space, and then finally turn that light on.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Lighting","\n        ","Next: ","draw_set_lighting","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["draw_light_enable"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1430"})