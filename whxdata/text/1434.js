rh._.exports({"0":["draw_light_get"],"1":["draw_light_get"],"2":["draw_light_get"],"3":["\n  ","\n  ","\n  ","This function will get the specified light parameters as an array with the following 6 elements -","\n  ","\n    ","[0] = enabled / disabled (","true"," / ","false",")","\n    ","[1] = light type (see constants below)","\n    ","[2] = x position","\n    ","[3] = y position","\n    ","[4] = z position","\n    ","[5] = light radius (only for point lights, will be 0 for directional)","\n    ","[6] = light colour (a real)","\n  ","\n  ","The light type can be one of the following two constants:","\n  "," ","\n  ","\n    ","\n      ","\n        ","Constant","\n        ","Description","\n      ","\n      ","\n        ","lighttype_dir","\n        ","The light is a directional light","\n      ","\n      ","\n        ","lighttype_point","\n        ","The light is a point light","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","draw_light_get(ind);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","ind","\n        ","The index number of the light (from 0 to 7)","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","light_a = draw_light_get(1);"," if light_a[5] < 200","     {\n    ","     light_a[5] += 5;","     draw_light_define_point(1, 200, 123, 50, light_a[5], c_white);","     }\n  ","\n  ","The above code will get the values used to define the light indexed as \"1\", then check the radius and if it is less than 200 it will be increased and the light radius set to the new value.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Lighting","\n        ","Next: ","draw_get_lighting","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["draw_light_get"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1434"})