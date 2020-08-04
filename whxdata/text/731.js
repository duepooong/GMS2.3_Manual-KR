rh._.exports({"0":["audio_group_set_gain"],"1":["audio_group_set_gain"],"2":["audio_group_set_gain"],"3":["\n  ","\n  ","\n  ","With this function you can fade a group of sounds in or out over a given length of time, or it can be used to set the group gain instantly. The time is measured in milliseconds, and the function requires that you input a final level of gain for the\n    group to have reached by the end of that time. This gain can be between 0 (silent) and 1 (full volume) and the scale is linear, such that a value of 0.5 would be half volume. To instantly change the gain, simply set the time argument to 0. Note that\n    on some platforms you can have a gain of greater than 1, although a value of 1 is considered \"full volume\" and anything greater may introduce audio clipping.","\n  "," ","\n  ","\n  ","audio_group_set_gain(groupID, volume, time);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","groupID","\n        ","The index of the audio group to stop (as defined in the ","Audio Groups Window",")","\n      ","\n      ","\n        ","volume","\n        ","The final value for the group volume.","\n      ","\n      ","\n        ","time","\n        ","The length of the change in gain in milliseconds.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if keyboard_check_pressed(vk_space)","    {\n    ","    audio_group_set_gain(audiogroup1, 0, 5000);","    }\n  ","\n  ","The above code checks for the \"space\" key and then fades all the audio for \"audiogroup1\" down to 0 over 5 seconds.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Audio Groups","\n        ","Next: ","audio_group_load","\n        "," ","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["audio_group_set_gain"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"731"})