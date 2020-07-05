rh._.exports({"0":["move_snap"],"1":["move_snap"],"2":["move_snap"],"3":["\n  ","\n  ","\n  ","This function is used to \"snap\" the instance to a grid of a given size. It will be snapped to the nearest corresponding position on the \"invisible\" grid that the hsnap and vsnap values define.","\n  "," ","\n  ","\n  ","move_snap( hsnap, vsnap );","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","hsnap","\n        ","The horizontal snapping (the size in pixels between 'cells').","\n      ","\n      ","\n        ","vsnap","\n        ","The vertical snapping (the size in pixels between 'cells').","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","with (obj_Pieces)","     {\n    ","     if !place_snapped(32, 32)","         {\n    ","         move_snap(32, 32);","         }\n    ","     }\n  ","\n  ","The above code checks all instances of \"obj_Pieces\" to see if they are snapped to a grid of 32x32 pixels, and if they are not it snaps them to the nearest position in that grid.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Movement","\n        ","Next: ","move_wrap","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["move_snap"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1160"})