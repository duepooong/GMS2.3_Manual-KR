rh._.exports({"0":["audio_emitter_velocity"],"1":["audio_emitter_velocity"],"2":["audio_emitter_velocity"],"3":["\n  ","\n  ","\n  ","This function can be used to give an emitter ","doppler"," effects and simulate audio motion based on the vector that is resolved from the given relative x, y and z positions. If the emitter itself is not ever going to move\n    you would normally not need to set these values, but, for example, if you are making a scrolling shooter game where the enemies come from the right and scroll to the left, you would set this to have a velocity of (hspeed, 0, 0) in the create event\n    of the enemies (and update the emitter of each instance in the step event using ","audio_emitter_position()",") to give any sounds emitted by the enemy instances the correct doppler as they\n    pass the player instance (which in turn would be using the function ","audio_listener_position()"," to set the ","listener"," to the\n    correct position).","\n  "," ","\n  ","\n  ","audio_emitter_velocity(emitter, vx, vy, vz);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","emitter","\n        ","The index of the emitter to change.","\n      ","\n      ","\n        ","vx","\n        ","The x vector value (default 0).","\n      ","\n      ","\n        ","vy","\n        ","The y vector value (default 0).","\n      ","\n      ","\n        ","vz","\n        ","The z vector value (default 0).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","s_emit = audio_emitter_create();"," audio_emitter_position(s_emit, room_width, 0, 0);"," audio_emitter_velocity(s_emit, -5, 0, 0);","\n  ","The above code creates an audio emitter and assigns its index to the variable \"s_emit\". This emitter is then placed at a position within the room and given a velocity of 5 pixels per step along the x axis (it will doppler correctly in relation\n    to the listener as if it had a horizontal speed of 5 pixels per step).","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Audio Emitters","\n        ","Next: ","audio_emitter_falloff","\n        "," ","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["audio_emitter_velocity"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"697"})