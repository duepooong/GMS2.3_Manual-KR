rh._.exports({"0":["physics_world_update_iterations"],"1":["physics_world_update_iterations"],"2":["physics_world_update_iterations"],"3":["\n  ","\n  ","\n  ","Everything in GameMaker Studio 2 is based around steps and, normally, each event will only happen once per step. However, to get the necessary precision with the physics functions they are made to do several calculations each step which are called\n    \"iterations\" the number of which are controlled by this function. The default number for the physics system is 10, but this can be changed to higher or lower depending how many times you want the physics to calculate each step, but it is\n    recommended that you set this no lower than 5 and no higher than 30. You should also be aware that this function is dependent on the ","physics_world_update_speed()"," function.","\n  "," ","\n  ","\n  ","physics_world_update_iterations(iterations)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","y1","\n        ","the iterations (per step) that the physics system will perform","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","physics_world_update_iterations(20);","\n  ","The code above sets the physics world in the current room to perform calculations 20 times a step.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","The Physics World","\n        ","Next: ","physics_world_update_speed","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["physics_world_update_iterations"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2038"})