rh._.exports({"0":["Save / Load"],"1":["Objects - Async Save / Load Event"],"2":["Save,Load,Save / Load,ev_async_save_load"],"3":["\n  ","\n  ","\n  ","This event will be triggered by the ","callback"," from certain functions related to loading\n    and saving buffers to files, as well as when loading or unloading audio from memory. The event itself will contain the built in ","async_load","    DS map which will be populated by the keys required for the specific function. These are listed in the sections below.","\n  "," ","\n  ","\n  ","When you use the functions ","buffer_save_async()"," or ","buffer_load_async()"," an\n    asynchronous event will be triggered when the data transfer has been completed. This event will populate the ","async_load ","map with the following key/value pairs","\n  ","\n    ","\"","id","\": the ID of the async function as returned by the function used.","\n    ","\"","status","\": will return true if the data was saved/loaded correctly, and false otherwise.","\n  ","\n  ","This permits you to poll the saving/loading progress and display a message or change rooms etc... when the process is complete.","\n  "," ","\n  ","\n  ","When working with ","Audio Groups",", you can load them an unload them from memory using the functions ","audio_group_load()"," and\n    ","audio_group_unload()",". When using the load function, it will trigger this event when the full set of audio\n    files set for the group has been loaded into memory and will populate the map with the following key/value pairs:","\n  ","\n    ","\"","type","\": this tells us the type of event being called and will be \"audiogroup_load\" for loading audio.","\n    ","\"","group_id","\": will return the ID of the audio group that has been loaded (as defined in the ","Audio Group Editor",").","\n  ","\n  ","When all audio has been loaded for a group, this event will trigger and it can then be used to change rooms, or play a music track etc...","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Async Events","\n        ","Next: ","Social","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["Save / Load"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"6":["Buffers","Audio Groups"],"id":"95"})