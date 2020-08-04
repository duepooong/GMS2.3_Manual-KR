rh._.exports({"0":["Global Variables"],"1":["global,globalvar,Global Variables"],"2":["global,global variables,globalvar"],"3":["\n  ","\n  ","\n  ","A basic description of a ","global ","variable is one that, once declared, it belongs to no instance in particular and yet can be accessed by all. Just like ","local variables",", global variables must be declared\n    using an identifier, but unlike a local variable, a global variable remains in memory ","until the end of the game",". So, you can create a global variable to keep track of (for example) the number of bullets that the player has and then just update\n    this variable at different points in the game, form any instance or function and at any time. Essentially, a global variable does not belong to any specific instance and can be accessed, changed and used by all instances, and any changes made to the\n    variable are \"global\", in that all instances using the variable will be affected by the change. Let's have a look at an example:","\n  ","global.food = 5;","\n  ","We declare the \"","food","\" variable by first writing \"","global","\" and then a \"",".","\" to tell GameMaker Studio 2 that this variable is now global scope.\n    We will need to use this form from now on any time we are required to access or to change this variable in any way. So, we have created a new variable called \"","food","\" and we have declared it as global. Now, any\n    instance or function can use and change this variable in any way and all other instances will \"see\" this. For example we could have a different food object that the player collides with and in the collision event we have:","\n  ","global.food +=1;","\n  ","We also have another object that draws this value like this:","\n  ","draw_text(32, 32, \"food = \" + string(global.food));","\n  ","With global variables we can change values and see those changes reflected in all instances of the objects that reference this variable. As with ","local"," variables you have to take care not to name your global variables the same as any instance\n    variables as that may cause you problems and make bugs creep into your games due to variable overlap, which can be a difficult issue to debug sometimes. In general you should have a single object that declares all your global variables at the very\n    start of the game (for example, in the ","Room Start Event"," of the first object instance placed in the first room of the game) or a single ","script function","    that declares them all together, as this gives you a handy place to go back and reference everything at once should you need to check a variable name or edit a value.","\n  ","GameMaker Studio 2 has a collection of \"built in\" global variables too, so you should be aware of them as you may name one of your instance variables the same or wish to have your own global variable with the same name and wonder why you are\n    getting errors! They are easy to spot, however, as they are shown in a different colour in the code editor and also come up in the auto-complete bar at the bottom. The majority of built in global variables are very specific and will only be used on\n    rare occasions - and are listed in the appropriate sections of the manual - but there is one important one that is used frequently and isn't listed elsewhere:","\n  ","\n    ","async_load","\n  ","\n  ","There are also three ","deprecated"," built in global variables which you should be aware of (these variables are only designed to support legacy projects from previous versions of GameMaker and should ","not be used in new projects","):","\n  ","\n    ","score","\n    ","health","\n    ","lives","\n  ","\n  ","Finally, there are two variables that can be used for script functions and methods:","\n  ","\n    ","argument","\n    ","argument_count","\n  ","\n  ","The following form can also be used to declare global variables, but it is ","only included for backwards compatibility",", and it is not recommended that you use this form for new projects as future versions of GameMaker may not support it.","\n  ","The second form for creating global variables is to declare them as such using the ","globalvar"," declaration, much as you would a local variable using the ","var"," declaration.","\n  ","IMPORTANT!"," The ","globalvar"," declaration is ","deprecated"," and only supported for legacy purposes. You should ","always"," use the ","global."," identifier to mark global variables.","\n  ","This (deprecated) declaration would be used as follows:","\n  ","globalvar food;"," food = 5;","\n  ","Once declared in this way that variable \"food\" is now considered global and requires no ","global."," prefix - which also means that it's a lot harder to identify global variables in your code and it's also much easier to get variable\n    overlap as you use the same variable name in different objects or from extensions that you've installed. Once declared in this way the global variable is accessed as follows:","\n  ","food += 2;","\n  ","or:","\n  ","draw_text(32, 32, \"food = \" + string(food));","\n  ","As you can see, with nothing to show that the variable is global in scope you are potentially setting yourself up for many subtle problems to arise in your game, which is why this declaration should be avoided.","\n  ","There are a few functions designed to help you when dealing with global variables, which you can find on the following page:","\n  ","\n    ","Variable Functions","\n  ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Variables And Variables Scope","\n        ","Next: ","Constants","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["Global Variables"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"id":"447"})