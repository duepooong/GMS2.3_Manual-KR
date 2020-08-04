rh._.exports({"0":["audio_listener_position"],"1":["audio_listener_position"],"2":["audio_listener_position"],"3":["\n  ","\n  ","\n  ","With this function you can change the position of the ","listener"," within the 3D audio space. The example image below shows the default position for the listener in the audio space:","\n  ","\n  ","NOTE: ","if you have multiple listeners you should use the function ","audio_listener_set_position()",".","\n  ","As you can see, the default position is (0, 0, 0) but you would normally use this function to move the listener around with the player object within your game and so change the way audio created by emitters is heard by the player, for example, in the\n    image below of a top down game, the player instance sets the listener which will cause the audio from the various emitters to \"change\" as the player moves around the level:","\n  ","\n  ","\n  ","audio_listener_position(x, y, z);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","x","\n        ","The x position of the listener (default 0).","\n      ","\n      ","\n        ","y","\n        ","The y position of the listener (default 0).","\n      ","\n      ","\n        ","z","\n        ","The z position of the listener (default 0).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if speed > 0","    {\n    ","    audio_listener_position(x, y, 0);","    }\n  ","\n  ","The above code checks to see if the player instance speed is over 0 and if it is it updates the audio listener to the current x/y position.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Audio Listeners","\n        ","Next: ","audio_listener_velocity","\n        "," ","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["audio_listener_position"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"713"})