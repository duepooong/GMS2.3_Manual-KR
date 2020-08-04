rh._.exports({"0":["ds_list_clear"],"1":["ds_list_clear"],"2":["ds_list_clear"],"3":["\n  ","\n  ","\n  ","With this function you can clear all data from the given list data-structure. This does ","NOT"," destroy the data-structure (for that you should use ","ds_list_destroy()",") it only wipes all data from it and makes\n    the list empty (zero in size). Note that clearing a list will de-reference any data structures stored in it giving a memory leak, so you would need to go through the list and destroy all data structure items manually before clearing it to prevent\n    this. The only time this is not required is when you have flagged any items in the list as another ","DS list"," or as a ","DS map",", in which case these items will be destroyed (not cleared!) and\n    their memory cleaned up automatically when the parent is cleared.","\n  "," ","\n  ","\n  ","ds_list_clear(id);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","id","\n        ","The id of the data structure to clear.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if (count == 15) && (!ds_list_empty(command_list))","     {\n    ","     ds_list_clear(command_list);\n    ","     alarm[0] = room_speed;","     ai_count = 0;","     }\n  ","\n  ","The above code checks a variable to see if it has reached a specific value and if it has it clears the DS list indexed in the variable \"command_list\", sets an alarm, and resets the variable to 0.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","DS Lists","\n        ","Next: ","ds_list_empty","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["ds_list_clear"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1774"})