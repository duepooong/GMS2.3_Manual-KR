rh._.exports({"0":["http_get"],"1":["http_get"],"2":["http_get"],"3":["\n  ","\n  ","\n  ","With this function, you connect to the specified URL in order to retrieve information. As this is an asynchronous function, GameMaker Studio 2 will not block while waiting for a reply, but will keep on running unless it gets callback information.\n    This information will be in the form of a string and will trigger an ","Async Event"," in any instance that has one defined in their object properties. You should also note that HTTP request parameters (the bits sometimes \"tacked on\" to\n    the end of a URL when you submit a form on a web page) are perfectly acceptable when using this function, for example:","\n  ","http_get(\"http://www.YoYoGames.com/logon?username=\"+name);","\n  ","will pass the string held in the variable \"name\" to the server as well a retrieve the data from that URL. So, essentially, any time a simple, short piece of data needs to be passed from the client to the server, this would be reasonable choice\n    as the function to use.","\n  ","This function will generate multiple \"call backs\" which are picked up by any ","HTTP Events",". These will generate a ","DS Map","    (more commonly known as a \"dictionary\") that is exclusive to this event and is stored in the special variable ","async_load",". This DS map will contain\n    different values depending on whether there is data being returned or not. For example, if you have requested a file, the event will trigger multiple times as each packet of data is received so that you can show a progress bar, for example. The general\n    structure for the DS map will be as follows:","\n  ","\n    ","id: ","The ID which was returned from the command. If you fire off a series of ","http_"," requests then you need to know which one you are getting the reply to, and so you would use this value to compare to the value you stored when you originally\n      sent the request to find the right one.","\n    ","status: ","Returns a value of less than 0 for an error, 0 for complete and 1 for receiving packets (see below for more details).","\n    ","result: ","The data received (string only).","\n    ","url: ","The complete URL you requested.","\n    ","http_status: ","The raw http status code (if available). This returns the standard web status code for most browsers, eg: 304 for \"Not Modified\" or 204 for \"No Content\", etc...","\n  ","\n  ","If there are multiple packets being returned to your game, the callback \"status\" key will return 1, in which case the ds_map will have the following additional keys:","\n  ","\n    ","\"contentLength\": ","This is the size of file that the web server has said you should expect to receive (may be -1 if the server does not return this data).","\n    ","\"sizeDownloaded\": ","The size of the data that has already been downloaded.","\n  ","\n  ","NOTE",": You should be aware that due to XSS protection in browsers, requests to and attempts to load resources from across domains are blocked and may appear to return blank results. Please see the section on ","Cross Domain Issues","    for further details.","\n  "," ","\n  ","\n  ","http_get(url);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","url","\n        ","The web address of the server that you wish to get information from","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","The ","http_get()"," function can be called from any event, and since it is asynchronous the callback can be almost instantaneous or could take several seconds. Calling the function is simple and would look something like this:","\n  ","get = http_get(\"http://www.MacSweeneyGames.com/logon?username=\" + name);","\n  ","The above code will pass the string held in the variable \"name\" to the given server as well as retrieve the data from that URL, triggering an Async Event which will contain the async_load DS map (the async_load map index will be stored in\n    the variable \"get\" so you can check for the correct callback). The Async Event triggered would be the ","HTTP"," sub-event, and in that event you would have the following:","\n  ","if ds_map_find_value(async_load, \"id\") == get","     {\n    ","     if ds_map_find_value(async_load, \"status\") == 0","         {\n    ","         r_str = ds_map_find_value(async_load, \"result\");","         }\n    ","     else\n    ","         {\n    ","         r_str = \"null\";","         }\n    ","     }\n  ","\n  ","The above code will first check the id of the DS map that has been created, then check the \"status\" of the callback. If the value is equal to 0 (signalling success) the result from the callback will then be stored in a variable for future\n    use, otherwise the variable will be set to a default value (in this case \"null\").","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","HTTP","\n        ","Next: ","http_get_file","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["http_get"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Extended Example:"],"id":"2171"})