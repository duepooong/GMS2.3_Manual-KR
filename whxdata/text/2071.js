rh._.exports({"0":["physics_fixture_set_awake"],"1":["physics_fixture_set_awake"],"2":["physics_fixture_set_awake"],"3":["\n  ","\n  ","\n  ","When you start a room with physics, or bind fixtures to instances, the fixtures are always considered to be \"awake\"... that is to say, they are processing events and interacting with the surrounding instances. However this can sometimes lead\n    to problems, especially if you have a number of instances with fixtures that are side by side when a room starts (think of a tower made of various instances with fixtures) as with them being \"awake\" they will move and possibly change position\n    due to the sudden start of gravity and collisions affecting them. In these cases you can use this function to flag the fixture as been \"asleep\", in which case it will not be processing anything when it is first created in the room.","\n  "," ","\n  ","\n  ","physics_fixture_set_awake(fixture, state)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","fixture","\n        ","the index of the fixture","\n      ","\n      ","\n        ","flag","\n        ","whether a fixture is awake (","true",") or not (","false",")","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","physics_fixture_set_awake(fix_Cloud, true);","\n  ","The code above flag the fixture as being \"awake\" when bound to an instance.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Fixtures","\n        ","Next: ","physics_get_friction","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["physics_fixture_set_awake"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2071"})