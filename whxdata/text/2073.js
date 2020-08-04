rh._.exports({"0":["physics_get_restitution"],"1":["physics_get_restitution"],"2":["physics_get_restitution"],"3":["\n  ","\n  ","\n  ","When you bind a fixture to an instance using ","physics_fixture_bind()"," this returns an \"id\" for the bound fixture. You can use this id to get the restitution (the \"bounciness\" property)\n    value of the bound fixture, ","not"," the \"base\" fixture, at any time using this function.","\n  "," ","\n  ","\n  ","physics_get_restitution(fixture)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","fixture","\n        ","the id of the bound fixture","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","var rest = physics_get_restitution(fix_id);"," physics_set_restitution(fix_id, rest * 2);","\n  ","The code above gets the current restitution value for the bound physics properties of the instance and then sets them to a different value.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Fixtures","\n        ","Next: ","physics_set_friction","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["physics_get_restitution"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2073"})