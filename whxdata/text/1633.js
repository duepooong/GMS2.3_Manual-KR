rh._.exports({"0":["keyboard_set_map"],"1":["keyboard_set_map"],"2":["keyboard_set_map"],"3":["\n  ","\n  ","\n  ","Sometimes when making a game you may wish one key to do the same as another. For example many people use the keys WASD for movement, but then many people ","also"," use the arrow keys! So, what to do? Well, you ","could"," code the movement system\n    twice, but that is a bit complicated and thankfully redundant as this function permits you to \"map\" one key to another and so any input from either key will be interpreted as the same. To do this you choose a key that you want to map (key2\n    - this will be the key that you write the code for) and a key that you want it to be mapped ","to"," (key1). After that, keypresses to either key will be interpreted by GameMaker Studio 2 as coming from key2. You can also use this function\n    to design a system where the user can define their own keys for playing by simply mapping the user input key to the key that you have coded into the game.","\n  ","The function takes a keycode value as returned by the function ","ord()"," (only ","capital"," letters from A-Z or numbers from 0-9), or any of the ","vk_*"," constants listed on the main ","Keyboard Input","    page.","\n  "," ","\n  ","\n  ","keyboard_set_map(key1, key2);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","key1","\n        ","This is the key that key1 is to be mapped to","\n      ","\n      ","\n        ","key2","\n        ","This is the key that is to be mapped","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Boolean","\n  "," ","\n  ","\n  ","keyboard_set_map(ord(\"A\"), vk_left);","\n  ","The above example code will map the \"A\" key to the left arrow key. This means that the player can use either the \"A\" ","or"," the left arrow key, and that all code written for the left arrow will also respond to the \"A\"\n    key being used instead.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Keyboard Input","\n        ","Next: ","keyboard_get_map","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["keyboard_set_map"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1633"})