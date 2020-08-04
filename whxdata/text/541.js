rh._.exports({"0":["animcurve_get"],"1":["animcurve_get"],"2":["animcurve_get"],"3":["\n  ","\n  ","\n  ","This function will return a ","struct"," containing all the data for the given animation curve. You supply the animation curve asset ID (as defined in the Asset Browser), and the function\n    will return a struct with the following variables:","\n  "," ","\n  ","\n    ","\n      ","\n        ","Variable Name","\n        ","Data Type","\n        ","Description","\n      ","\n      ","\n        ","name","\n        ","string","\n        ","This is the name of the animation curve.","\n      ","\n      ","\n        ","channels","\n        ","array pointer","\n        ","This is an array, where each item in the array is a channel struct.","\n      ","\n    ","\n  ","\n  "," When accessing an animation curve in this way, you get an ","array"," back where each array item is a struct with data relating to a channel within the curve. The channel struct will have the following\n    variables:","\n  "," ","\n  ","\n    ","\n      ","\n        ","Variable Name","\n        ","Data Type","\n        ","Description","\n      ","\n      ","\n        ","name","\n        ","string","\n        ","This is the name of the channel.","\n      ","\n      ","\n        ","type","\n        ","constant","\n        ","This will be one of the constants ","animcurvetype_linear"," for linear interpolation between points, or ","animcurvetype_catmullrom"," for \"smooth\" interpolation\n          between the points using catmull-rom interpolation.","\n      ","\n      ","\n        ","iterations","\n        ","integer","\n        ","If the channel is using catmull-rom (\"smooth\") interpolation this holds how many points have been generated for each segment of the curve (note that these extra points are internal to the function and only used for the runtime calculations).\n          If the channel is using linear interpolation, this value will still exist but can be ignored as it has no bearing on how the curve is interpolated.","\n      ","\n      ","\n        ","points","\n        ","array pointer","\n        ","This is an array, where each item in the array is a point struct.","\n      ","\n    ","\n  ","\n  "," As with channels, the points on a single channel are stored as structs in an array, where each item in the array is a single point struct. The point struct has the following variables:","\n  "," ","\n  ","\n    ","\n      ","\n        ","Variable Name","\n        ","Data Type","\n        ","Description","\n      ","\n      ","\n        ","posx","\n        ","real","\n        ","The position in time (normalised from 0 to 1) of the point.","\n      ","\n      ","\n        ","value","\n        ","real","\n        ","The value of the point.","\n      ","\n    ","\n  ","\n  "," Note that if the function fails (ie: the given Animation Curve ID does not exist) then the function will return -1.","\n  "," ","\n  "," ","\n  ","\n  ","animcurve_get(curve_id);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","curve_id","\n        ","The asset browser ID (index) of the animation curve to get.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Struct or -1","\n  "," ","\n  ","\n  ","var _curve = animcurve_get(ac_ButtonTween);"," var _channel = _curve.channels[0];"," if _channel.type != animcurvetype_linear","     {\n    ","     _channel.type = animcurvetype_linear;","     }\n  ","\n  ","The above code retrieves the animation curve struct for the curve asset \"ac_ButtonTween\", then checks the curve type for the first channel, and if it's not linear it sets it to linear.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Animation Curves","\n        ","Next: ","animcurve_get_channel","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["animcurve_get"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax: ","Returns: ","Example: "],"id":"541"})