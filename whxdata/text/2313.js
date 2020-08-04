rh._.exports({"0":["steam_ugc_unsubscribe_item"],"1":["steam_ugc_unsubscribe_item"],"2":["steam_ugc_unsubscribe_item"],"3":["\n  ","\n  ","\n  ","This function can be used to unsubscribe from a UGC item. You supply the published file ID and then the function returns a unique async ID value which can be used to check that the item has been unsubscribed correctly in the ","Steam Async event",".\n    This event will have the ","async_load"," DS map which will be populated with the following key/value pairs:","\n  ","\n    ","\"","id","\" - The async ID returned by the function that triggered the event","\n    ","\"","result","\" - The result of the operation (a real value). This will either be the GML constant ","ugc_result_success"," or some other real number. So you should check for this constant to ensure that the call was successful, and if\n      otherwise somthing has not worked correctly. The rest of the possible values returned are shown as the result of the Steam \"EResult\" value and you should see ","steamclientpublic.h"," in the SDK headers for all 89 possible values.","\n    ","\"","event_type","\" - The string \"","ugc_unsubscribe_item","\".","\n    ","\"","published_file_id","\" - The unique ID for the published item.","\n  ","\n  "," ","\n  ","\n  ","steam_ugc_unsubscribe_item(published_file_id);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","published_file_id","\n        ","The unique file ID for the UGC to unsubscribe from.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Async ID","\n  "," ","\n  ","\n  ","steam_sub = steam_ugc_subscribe_item(global.pubFileID);","\n  ","The above code will subscribe (and download) the item with the file ID stored in the global variable \"pubFileID\".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","UGC","\n        ","Next: ","steam_ugc_num_subscribed_items","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["steam_ugc_unsubscribe_item"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2313"})