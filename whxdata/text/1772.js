rh._.exports({"0":["ds_list_create"],"1":["ds_list_create"],"2":["ds_list_create"],"3":["\n  ","\n  ","\n  ","This function will create a new list data-structure and return the index value. This value should be stored in a variable and used in all further function calls relating to the list. Note that if you try and access a value in the list ","before","    it has been populated - i.e. the list is \"empty\" - then the return value may be 0 since internally the first few entries in the list are set when created to minimize performance issues when initially adding items to the list (although the\n    ","ds_list_size()"," function will still return 0 on a newly created list). If you wish to ensure that the list is \"truly\" empty on create, then you should call ","ds_list_clear()","    after creating the list, which will then mean that any values returned for unpopulated list slots will be ","undefined",".","\n  ","IMPORTANT!"," When you create a data structure, the index value to identify it is an integer value starting at 0. This means that data structures of different types can have the ","same"," index value, so if in doubt you should be using the\n    ","ds_exists()"," function before accessing them. Also note that indexes are re-used, so a destroyed data structure index value may be used by a newly created one afterwards.","\n  "," ","\n  ","\n  ","ds_list_create();","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","list = ds_list_create();","\n  ","This will create a new list and assign its index id to the instance variable \"list\".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","DS Lists","\n        ","Next: ","ds_list_destroy","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["ds_list_create"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1772"})