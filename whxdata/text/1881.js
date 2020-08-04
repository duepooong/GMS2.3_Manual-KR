rh._.exports({"0":["string_format"],"1":["string_format"],"2":["string_format"],"3":["\n  ","\n  ","\n  ","Turns a real number into a string using your own formatting, where you can choose how many \"places\" are saved to the string and how many decimal places are saved also. Both can be very handy, some games prefer to display a score as a set number\n    of digits, while control over decimal places can be good for a high accuracy the two decimal places of ","string()"," cannot provide. If the number of places specified is greater than the value to be shown and/or the number\n    plus the decimal places that have been specified is less than the total places, then spaces will be added before the value to make up the difference (see the example below). Zeros will be added to the right of the decimal point if the value given\n    is less than the total and the number of decimal places to include. The default format is no extra spaces on the left, and only two decimal places on the right, eg \"265.73\".","\n  "," ","\n  ","\n  ","string_format(val, tot, dec);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","val","\n        ","The real number to be turned into a string.","\n      ","\n      ","\n        ","tot","\n        ","The total number of places of the main number to be shown. Zeroes or spaces will be inserted to match this.","\n      ","\n      ","\n        ","dec","\n        ","The number of decimal places to be included.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","String","\n  "," ","\n  ","\n  ","str1 = string_format(1234, 8, 0);"," str2 = string_format(pi, 1, 10);"," str3 = string_format(pi, 5, 5);","\n  ","This will set ","str1"," to \"    1234\", ","str2"," to \"3.1415926535\" and ","str3"," to \"    3.14159\".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Strings","\n        ","Next: ","string_insert","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["string_format"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1881"})