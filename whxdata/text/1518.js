rh._.exports({"0":["camera_set_view_mat"],"1":["camera_set_view_mat"],"2":["camera_set_view_mat"],"3":["\n  ","\n  ","\n  ","This function will set the ","view matrix"," for a given camera. You give the unique camera ID value (as returned by the different ","camera_create()"," functions) and a view matrix to be applied. You can find out\n    more about creating view matrices from the section ","Matrix Functions",", specifically ","matrix_build_lookat()",".\n    Note that if your camera does automatic object tracking - ie: it has been created using ","camera_create_view()"," with an object index / instance ID that isn't -1, or you are setting a camera defined in\n    the Room Editor, or you are setting the default camera - then this matrix will get overwritten the next game frame.","\n  "," ","\n  ","\n  "," ","\n  ","camera_set_view_mat(camera_id, matrix)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","camera_id","\n        ","The unique camera ID value returned when you created the camera.","\n      ","\n      ","\n        ","matrix","\n        ","The unique matrix ID returned when you created the matrix.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  "," ","\n  ","N/A","\n  "," ","\n  ","\n  "," ","\n  ","view_camera[0] = camera_create();"," var viewmat = matrix_build_lookat(640, 240, -10, 640, 240, 0, 0, 1, 0);"," var projmat = matrix_build_projection_ortho(640, 480, 1.0, 32000.0);"," camera_set_view_mat(view_camera[0], viewmat);"," camera_set_proj_mat(view_camera[0],\n    projmat);","\n  ","The above code creates a new camera and assigns it to view port[0]. This camera then has its view and projection matrices set.","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Cameras And View Ports","\n        ","Next: ","camera_set_proj_mat","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["camera_set_view_mat"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1518"})