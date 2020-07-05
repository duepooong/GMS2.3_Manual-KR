rh._.exports({"0":["ds_queue_copy"],"1":["ds_queue_copy"],"2":["ds_queue_copy"],"3":["\n  ","\n  ","\n  ","This function can be used to copy the contents of one queue into another. Note that this does ","NOT"," remove the contents from the original queue, nor does it destroy the original queue. When using this function the queue being copied to must have\n    been previously created and if it contained any items before the copy, then these will be cleared first (meaning this information will be lost).","\n  "," ","\n  ","\n  ","ds_queue_copy(id, source);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","id","\n        ","The id of the NEW queue.","\n      ","\n      ","\n        ","source","\n        ","The ORIGINAL queue to copy to id.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","with (instance_create_layer(x, y, \"Enemies\", obj_Enemy))","     {\n    ","     queue = ds_queue_create();","     ds_queue_copy(queue, other.queue);","     }\n  ","\n  ","The above function creates a new instance and then in that instance it creates a new DS queue and copies the contents of the queue in the instance running the code block, into the newly created instance queue.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","DS Queues","\n        ","Next: ","ds_queue_read","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["ds_queue_copy"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1849"})