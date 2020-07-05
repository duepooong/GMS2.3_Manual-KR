rh._.exports({"0":["part_emitter_region"],"1":["part_emitter_region,ps_shape_rectangle,ps_shape_ellipse,ps_shape_diamond,ps_shape_line,ps_distr_linear,ps_distr_gaussian,ps_distr_invgaussian"],"2":["part_emitter_region,ps_shape_rectangle,ps_shape_ellipse,ps_shape_diamond,ps_shape_line,ps_distr_linear,ps_distr_gaussian,ps_distr_invgaussian"],"3":["\n  ","\n  ","\n  ","This function is used to set their position of a particle emitter within the current room. You specify the bounding box of the area within the function and then use any of a series of constants to define the final emitter shape within this bounding\n    box as well as the distribution of particles within the shape. The available constants for distribution shapes are listed below:","\n  "," ","\n  ","\n    ","\n      ","\n        ","Constant","\n        ","Description","\n      ","\n      ","\n        ","ps_shape_rectangle","\n        ","A rectangular shape that fills the given area.","\n      ","\n      ","\n        ","ps_shape_ellipse","\n        ","An ellipse, with the width and height defined by the area.","\n      ","\n      ","\n        ","ps_shape_diamond","\n        ","A diamond shape with the points at half width and half height.","\n      ","\n      ","\n        ","ps_shape_line","\n        ","A single line, where the start point is the left and top and the end point is the right and bottom.","\n      ","\n    ","\n  ","\n  "," ","\n  ","Apart from the distribution shapes, you can also define the distribution curve for the particles that are to be\n    emitted. The available constants for distribution curves are listed below:","\n  "," ","\n  ","\n    ","\n      ","\n        ","Constant","\n        ","Description","\n      ","\n      ","\n        ","ps_distr_linear","\n        ","A Linear distribution where all particles have an equal chance of appearing anywhere in the area.","\n      ","\n      ","\n        ","ps_distr_gaussian","\n        ","A gaussian distribution where more particles are generated in the center rather than the edges.","\n      ","\n      ","\n        ","ps_distr_invgaussian","\n        ","An inverse gaussian distribution where more particles are generated at the edges than center.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","NOTE",": If you need the emitter to move with an instance, you will have to use this function in the step event and update the emitter position that way. It is also worth noting that for point emissions where you do not need to create particles\n    over an area or with a specific distribution, it is often easier to use ","part_particles_create()",".","\n  "," ","\n  ","\n  ","part_emitter_region(ps, ind, xmin, xmax, ymin, ymax, shape, distribution);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","ps","\n        ","The particle system that the emitter is in.","\n      ","\n      ","\n        ","ind","\n        ","The index of the emitter to set.","\n      ","\n      ","\n        ","xmin","\n        ","The x coordinate of the left side of the region.","\n      ","\n      ","\n        ","xmax","\n        ","The x coordinate of the right side.","\n      ","\n      ","\n        ","ymin","\n        ","The y coordinate of the top of the region.","\n      ","\n      ","\n        ","ymax","\n        ","The y coordinate of the bottom of the region.","\n      ","\n      ","\n        ","shape","\n        ","The shape of the region.","\n      ","\n      ","\n        ","distribution","\n        ","The distribution style of the particles.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","part_emitter_region(global.Sname , emit_1, x - 50, x + 50, y - 50, y + 50, ps_shape_ellipse, ps_distr_linear);","\n  ","The above code will set an emitter to the a 100px tall and 100px wide elliptical shape around the current (x,y) position of the instance running the code.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Particle Emitters","\n        ","Next: ","part_emitter_burst","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["part_emitter_region"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1488"})