rh._.exports({"0":["General Preferences"],"1":["Prefs - General"],"2":["general prefs,general preferences,general"],"3":["\n  ","\n  ","\n  ","The ","General Preferences"," are used to define the general behaviour of the GameMaker Studio 2 ","IDE",". The most general ones are listed on the main page while many others are split into multiple sub-categories, explained further down this page.","\n  ","\n    ","IDE Language",": This option permits you to select the language for the IDE from the list of options supplied. Default is English.","\n    ","IDE Skin",": Here you can select from the different skins that the IDE can use. By default GameMaker Studio 2 comes with two skins, one light and one dark, and the initial setup uses the dark skin.","\n    ","Maximum Framerate of GameMaker Studio 2 Editor",": This option permits you to set the maximum framerate that the GameMaker Studio 2 IDE will update at, permitting you to set the framerate to match the update speed of your monitor. Default\n      value is 60.","\n    ","Default Audio Device",": Here you can choose the default audio device for the GameMaker Studio 2 IDE to use. You can refresh the list by clicking the Refresh Button  ",".","\n    ","Automatic Response to Exit Confirmation",": This option permits you to set whether a confirmation message should be shown when you exit GameMaker Studio 2. By default this is set to \"show message\", but can be set to skip the\n      message as if you'd clicked OK.","\n    ","Automatic Response to The System Font Changed Dialog",": This option permits you to set whether a confirmation message should be shown when a system font has been added, removed or edited. By default this is set to \"show message\",\n      but can be set to skip the message as if you'd clicked OK.","\n    ","Enable notifications",": Checking this will enable the IDE to show notifications about new runtimes, etc... This is on by default.","\n    ","Notification timeout (ms)",": This sets the length of time (in milliseconds) that a notification is shown for. Default is 6000.","\n    ","Set FileWatcher tolerance in MS after saving In the IDE",": This adjusts the time ebtween saving a file and the file watcher checking for changes. You would adjust this value if you were saving your project and the filewatcher was erroneously\n      appearing saying something had changed, in which cvase you would increase the delay until the message no longer appears. The default value is 2000ms, but can range from 1ms up to 10,000ms.","\n    ","Logout on exit",": If this option is checked then the IDE will automatically log out the user session when GameMaker Studio 2 is closed. This is primarily aimed at Education users, as - when checked - this means that whenever the program\n      shuts down the user would be logged out and so free up the session seat for other users to use. This is off by default.","\n    ","Enable DPI Override",": This option lets you override the default DPI setting with your own. You must first enable the option and then set either the ","Raw DPi Override"," value (the default value is 96) or set the ","Percentage of the native DPi","      (default value 100%), and once changed you will be prompted to restart the IDE, which may require you to save any work being done on the currently open project. Note that the DPi has a minimum percentage of 50% and a maximum of 500%, and if you\n      you mouse over the information icon you can see the recommended maximum setting for the display being used:","\n      ","\n      ","Note that if you go above the recommended DPi setting for the monitor, you will be shown\n      a notification that permits you to reset the DPi.","\n    ","Show welcome screen on startup",": This is on by default and simply tells GameMaker Studio 2 to show a brief splash screen when you start the program. Un-checking this will prevent the splash screen from showing.","\n    ","Allow empty tabs to close via shortcut",": You can close any open Tabs using the keyboard shortcut "," / "," + ","W",", but if you disable this option that shortcut will no longer work. This is enabled by default.","\n    ","Open new resources for edit on dragging files into IDE",": Certain resources (like sprites or sounds) can be dragged onto the main Workspace in the GameMaker Studio 2 IDE and will be detected and added as a new resource in the Asset\n      Browser. By default the corresponding resource editor will also be opened for editing when this happens, but un-checking this option will prevent the editors from being opened and you will be required to open them manually.","\n    ","Open new resources for edit on creation",": If this is checked, every time you create a new resource in the Asset Browser, the corresponding resource editor will be opened automatically. This is checked by default and un-checking it\n      will mean that you have to manually open all newly created resources.","\n    ","Automatically reload changed files",": If this is checked then the IDE will automatically scan and check files to see if any of them have been changed outside of GameMaker Studio 2 and reload them if they have.","\n    ","Disable IDE transition animations",": The GameMaker Studio 2 IDE has a number of animated transitions for things like opening windows etc... however they are not to everyone's taste and you may experience a performance boost if they\n      are disabled on older or under-powered machines if they are disabled. You can disable them here, and they are on by default.","\n    ","Opt-in To Feedback Surveys",": When this option is checked, you are telling GameMaker Studio 2 that you wish to participate in feedback surveys, meaning that occasionally while working a message will be shown about the area you are working\n      on and request a rating and feedback. This option is on by default.","\n  ","\n  ","The options above are the main options available from the ","General ","preferences, but there are a number of extra options available to you in the sub-categories listed below:","\n  ","Asset Explorer","Asset Explorer","\n  ","\n    ","\n    ","When you go to add a sprite to an object or when you want to use a font in Drag and Drop™ or in any number of situations, you will be presented with the Asset Explorer:","\n    ","\n    ","By default it shows both a ","Tree View"," (on the left) and a ","List View"," (on the right) but using this preference you can choose to have it only show one or the other.","\n    ","\n    ","\n  ","\n  ","Background","Background","\n  ","\n    ","\n    ","The ","Background ","preferences deal with the Workspace background and what it will display as well as how it will be displayed. The options are:","\n    ","\n      ","Background Image",": This is the image file that will be used as the background for the different Workspaces. There is a default image supplied and it is enabled by default, but you can select your own image here. The types of image\n        that you can select from are ","*.png",", ","*.gif",", ","*.jpg",", ","*.jpeg",", ","*.tif",", ","*.tiff",",\n        ","*.ico",", ","*.bmp",", ","*.2bp"," or ","*.mdi",", but note that regardless of initial image format, all files will be saved out for use as ","*.png","        files, so animated ","*.gif"," files for example will only be rendered as a single initial frame.","\n      ","Image Scaling",": This controls how the background image will be scaled within the different workspaces. The choices are:\n        ","\n          ","Stretch ","- The image will be stretched to fit the workspace, changing scale depending on the visible docks","\n          ","Tile ","- The image will be tiled to cover the workspace","\n          ","Best Fit ","- The image will be scaled to fit the workspace proportionally, with bars being added around the edge if it is not a 1:1 fit","\n          ","Desktop Stretch"," - The background will cover the whole workspace, and will move rather than change scale when docks are opened/closed","\n          ","Screen Stretch"," - The background will cover an area the size of the window and will be cropped/extended to show more or less of the image as docks are opened/closed.","\n        ","\n      ","\n      ","Show background images on workspaces",": This option controls whether the selected background image should be shown or not. By default this is checked as on.","\n    ","\n    ","\n    ","\n    ","\n    ","\n  ","\n  ","Compiling","Compiling","\n  ","\n    ","\n    ","The Compiling preferences deal with certain options related to the output when compiling your game for testing or creating a package, as well as certain areas of the compiling process. The options are:","\n    ","\n      ","Automatically open syntax error window on detection",": Enable or disable syntax error notification when compiling. This is off by default.","\n      ","Show the compile window during compilation",": By default the compile window will be shown when you compile your projects, even if the compile doc is closed (it will open for the compile). Unchecking this will switch this behavior\n        off and the compile window will on be visible if open.","\n      ","Sh ","ow compiler commands in compile output",": This is checked by default and forces the compiler to show all relevant commands in the compile window. Un-checking this will make the output smaller and have less information.","\n      ","Show verbose compiler output",": Checking this will force the compiler to show extra commands related to the compilation process. In general this is only required when debugging and may be requested by support should you have an issue.\n        It is off by default (and this is the recommended setting).","\n      ","Use Subst for drive paths",": When this is checked, GameMaker Studio 2 will create - and remove again when no longer required - virtual drives to use as a substitution for full file paths. These virtual drives bypass any potential\n        issue with file paths being too long for the OS (particularly when compiling for Android or using extensions) and it is recommended to have this enabled. However, if you are having issues with GameMaker Studio 2 creating virtual drives like this,\n        you can disable the option. By default, this is enabled.","\n      ","Show package in explorer on build completion",": Checking this will make GameMaker Studio 2 open the OS explorer window at the location where the final executable package has been created. It is on by default.","\n      ","Clear output window on compile start",": By default the compiler window will clear all previous messages from the compile output window at the start of each build, however un-checking this will maintain previous compiler logs. This\n        is on by default and is the recommended configuration since large compiler logs can slow down compile times.","\n      ","Maximum parallel compile jobs",": This value sets the maximum number of CPU cores to dedicate to compiling a project. The default value is 8 and in general you shouldn't have to change this, but if you are on a laptop or a lower\n        end machine you may want to lower this value. The default is set to 8.","\n    ","\n    ","\n    ","\n    ","\n    ","\n  ","\n  ","Confirm","Confirm","\n  ","\n    ","\n    ","The Confirm Dialogue preferences deal with some of the general confirmation pop-ups that will appear when performing certain actions in the GameMaker Studio 2 IDE. The options are:","\n    ","\n      ","Automatic response to closing a workspace via keyboard shortcut",": The keyboard shortcut mentioned above can be used to close any open tab, but sometimes you may accidentally close an empty tab that you require. To prevent this you\n        can set this option to \"Show message\" (the default option) to ask if you really want to close that empty tab. The other settings are \"No\", to simply do nothing if the shortcut is used, or \"Okay\" to close the tab without\n        any message.","\n      ","Automatic response to restarting a running build",": When you restart a build and another previous one is still running, you will be asked whether you want to stop the current build first. Un checking this message will suppress that\n        message and force GameMaker Studio 2 to assume you had clicked \"Okay\" as a response. This option is set to \"Show Message\" by default.","\n      ","Automatic response to warning when attempting to debug YYC",": The YYC target compiles to native code and as such cannot be debugged using the built in debugger. When you try to use the debugger on the YYC target, you will get a warning\n        informing you of this, and the fact that the project will be compiled using the VM instead. This option is set to \"Show Message\" by default, but setting it to \"OK\" will suppress this warning.","\n      ","Automatic response to resetting the project layout",": When you select to reset the project layout (from the ","Layouts Menu",") you will, by default, be shown a warning message\n        about how this will close any open resource windows. However you can suppress this message and automatically reset the layout by selecting \"Okay\", or have it do nothing by selecting \"No\". The default value is to have \"Show\n        Message\".\n      ","\n    ","\n    ","\n    ","\n    ","\n    ","\n  ","\n  ","Debugging","Debugging","\n  ","\n    ","\n    ","The preferences here are related to the ","GameMaker Studio 2 Debugger"," and you have the following options:","\n    ","\n      ","Automatic response to closing the debugger",": This option permits you to set the automatic response when closing the debugger. If set to \"Show message\", you will be shown the dialogue when you want to close the debugger,\n        while setting it to \"Yes\" or \"No\" will not show this dialogue and perform the task as indicated.","\n      ","Enable real-time debugging",": Checking this option will permit you to debug your game projects in real time as you run them from the IDE. This is checked by default.","\n      ","Debugger port",": This sets the port number for the Debug Module to use. The default value is 6509.","\n      ","Show event icons in Debugger Resource View",": Set whether icons should be shown in the Debugger resource view. This is checked by default.","\n    ","\n    "," ","\n    ","\n    ","\n  ","\n  ","GoTo","GoTo","\n  ","\n    ","\n    ","The preferences here are for ","Go To"," window, which you can open using the keyboard shortcut "," / "," + T.","\n    ","\n      ","Maximum number of search results to display",": This option controls the maximum number of returned results when you use the Go To search window.","\n      ","Enable styling on search results (turn off for better performance)",": This option enables or disables the text styling for the assets found in the Go To window. Default is enabled.","\n      ","Search In Assets",": Disabling this will mean that the Go To window will omit any items from the Asset Browser that coincide with the given search phrase. The default value is that this is enabled.","\n      ","Search In Preferences",": Disabling this will mean that the Go To window will omit any items from the Preferences that coincide with the given search phrase. The default value is that this is enabled.","\n      ","Search In Game Options",": Disabling this will mean that the Go To window will omit any items from the Game Options that coincide with the given search phrase. The default value is that this is enabled.","\n    ","\n    ","\n    ","\n    ","\n    ","\n  ","\n  ","Help","Help","\n  ","\n    ","\n    ","The helpfile is designed to operate like a web page and as such requires the use of the GameMaker Studio 2 micro web server, or the use of an external browser. These settings can be changed here:","\n    ","\n      ","Manual Language",": This sets language for the IDE to use. The default is \"English\".","\n      ","Help manual port",": This sets the port number for the manual micro web server to use. The default value is 51291.","\n      ","Use an external browser for help",": If this is checked then opening the help file will open it using the default browser for your system. This is on by default, and switching it off will force the help file to open in workspace within\n        the IDE.","\n    ","\n    ","\n    ","\n    ","\n    ","\n  ","\n  ","Input","Input","\n  ","\n    ","\n    ","The ","Input ","preferences control certain aspects of the mouse and keyboard input within the IDE. The available options are:","\n    ","\n      ","Slow double click time (ms)",": Some areas of the IDE require a slower double click to work correctly, for example when renaming a resource (a fast double click will open the resource editor, while a slow double click will permit you\n        to rename it). This option permits you to set the detection speed, with a default value of 500ms.","\n      ","Scroll lock time (ms)",": This option deals with the time that GameMaker Studio 2 should wait between scrolling windows that are overlapping. Essentially, When you're scrolling in window \"A\", the cursor might hover over\n        another scrollable area in window \"B\", so this preference defines how long you have to wait after you stop scrolling \"A\" before you can then scroll \"B\", so you don't accidentally start scrolling different panels.\n        The default value is 500ms.","\n      ","Wrap cursor around the screen when panning",": When enabled, this will wrap the cursor around the screen bounds when panning workspaces. Default is enabled.","\n      ","\n      ","Scroll speed",": This controls the scrolling speed within the different workspaces. The default value is 1.","\n      ","Tab drag distance to un-maximise desktop (px)",": When you drag a workspace tab away from its default position within the IDE, if there is only one workspace active at that time then the GameMaker Studio 2 window will un-maximise and\n        move with the mouse (if you have more than one workspace active a new instance of the IDE will be created to hold the workspace). This setting controls how far you have to drag the tab before the workspace recognises it, and the default value\n        is 50px.","\n      ","Minimum zoom level for interacting with window contents (%)",": This option controls the zoom cut-off point at which the mouse will no longer be able to interact with workspace windows (ie: add nodes, drag windows, etc...). The default\n        value is 40.","\n      ","Mouse wheel zoom requires Ctrl key",": When this is checked all editors (and the main workspace) will have zoom enabled with "," / "," + the mouse wheel ",", while un-checking it will enable zoom\n        with only the mouse wheel MMB Icon.","\n      ","Ctrl + MMB to open the inherited event instead of the manual",": When this is checked, holding "," / "," + the middle mouse button "," in an object will open the objects inherited event (if it has one)\n        rather than the manual.","\n      ","Add bias to text selection to prevent line jumping",": When this is checked, the conceived line height while selecting a single line in any text window will be padded, making it less prone to vertical imprecision. This is enabled by\n        default.\n      ","\n      ","Enable laptop mode on all devices",": Checking this will show the ","Laptop Mode"," button on the IDE, enabling you to switch it on or off as required regardless of whether the device running\n        GameMaker Studio 2 is a laptop or not. This is unchecked by default.","\n    ","\n    ","\n    ","\n    ","\n    ","\n  ","\n  ","Output Windows","Output Windows","\n  ","\n    ","\n    ","The ","Output Window"," preferences control the different colour and formatting options for the various different output windows in the IDE. Each of the different windows has the same set of options, which are listed below:","\n    ","\n      ","Colour",": The default colour for the text being written to the window.","\n      ","Font Name",": The name of the font to use (available fonts will depend on those installed on your system).","\n      ","Style",": The font style to use, like ","bold ","or ","italics ","(note that not all windows will permit the same styles and it will also depend on the font used).","\n      ","Size",": The size to set the font to for the given output window.","\n      ","Anti-Aliasing",": Here you can set the ","anti-aliasing"," mode for the output windows font rendering. You can choose to let the IDE decide by selecting ","Use Default",",\n        or you can force it ","On ","or ","Off ","by selecting either of those options.","\n    ","\n    ","\n    ","\n    ","\n    ","\n  ","\n  ","Paths","Paths","\n  ","\n    ","\n    ","The ","Path ","preferences control the different file paths required by elements in the GameMaker Studio 2 IDE as well as for any external editors that you require. The following options exist for the IDE:","\n    ","\n      ","Temp directory",": The location for saving all the temporary folders. By default this is ","\\Users\\<Username>\\AppData\\Local\\Temp\\GameMakerStudio2",".","\n      ","IDE cache directory",": The location for saving the IDE cache. By default this is ","\\Users\\<Username>\\AppData\\Roaming\\GameMakerStudio2-Dev\\Cache",".","\n      ","Asset cache directory",": The location for saving the asset cache for each project. By default this is ","\\Users\\<Username>\\AppData\\Roaming\\GameMakerStudio2-Dev\\Cache",".","\n      ","\"My Projects\" Location",": The location where GameMaker Studio 2 will initially create new projects. By default this is ","\\Users\\<Username>\\Documents\\GameMakerStudio2",".","\n      ","Automatically delete temp directory on close",": Checking this will force GameMaker Studio 2 to automatically delete the Temp folder that it creates per project for compiling etc... This setting is on by default, and un-checking it\n        will switch it off (meaning that you will have to manually remove any temp files later).","\n      ","Automatically delete asset cache on close",": If this is checked then the asset compiler cache folder will be removed when you quit GameMaker Studio 2. This is off by default, and enabling it will mean that every time you load and\n        run any project the cache will need to be rebuilt (which can take time depending on the size of the game).","\n      ","Automatically delete IDE cache on close",": If this is checked then the IDE compiler cache folder will be removed when you quit GameMaker Studio 2. This is off by default, and enabling it will mean that every time you start GameMaker\n        Studio 2 the cache will need to be rebuilt.","\n      ","Delete Temp Folder",": Clicking this button will delete the temp folder for the project.","\n      ","Delete Asset Cache",": Clicking this button will delete the compiler asset cache for the project.","\n      ","Delete IDE Cache",": Clicking this button will delete the IDE cache","\n      ","\n    ","\n    ","The following options exist for setting paths to external editors:","\n    ","\n      ","Path to external editor/viewer for SWF files",": If you are working with SWF format sprites, you can set this to the path of your preferred viewer/editor and when you click the ","Edit Image"," button in the Sprite Editor then it\n        will open the given program. The default value here is to have no path.","\n      ","Path to external editor/viewer for Spine files",": If you are working with Spine format sprites, you can set this to the path of your preferred viewer/editor and when you click the ","Edit Image"," button in the Sprite Editor then\n        it will open the given program. The default value here is to have no path.","\n    ","\n    ","\n    ","\n  ","\n  ","Power Saving","Power Saving","\n  ","\n    ","\n    ","The ","Power Saving"," preferences here will affect how much CPU power and GPU power will be used to generate the GameMaker Studio 2 IDE (essentially this will lower the base framerate at which the program runs and so lower power consumption).\n      Note that some of these are specific to the ","File Watcher"," background process. The File Watcher scans the project folders for external changes - for example if you change a gml script in Notepad++ then the file watcher will detect\n      this change and ask you if you want to reload it or discard it - and as such the frequency that this scan happens can severely impact performance and power consumption.","\n    ","The options here are:","\n    ","\n      ","AC power framerate (%)",": The base IDE framerate modifier when connected to a power input. Default is 100%.","\n      ","Battery power framerate (%)",": The base IDE framerate modifier when using battery to power the machine. Default is 35%.","\n      ","Background framerate (%)",": The base IDE framerate modifier when GameMaker Studio 2 is not in focus (regardless of the power supply). Default is 15%.","\n      ","File watcher frequency (ms)",": This is the frequency that the file watcher will run at when on desktop (or a docked laptop). Default is 2000.","\n      ","Laptop file watcher frequency (ms)",": This is the frequency that the file watcher will run at when in laptop mode. Default is 5000.","\n    ","\n    ","\n    ","\n  ","\n  ","Recent Windows","Recent Windows","\n  ","\n    ","\n    ","The preferences here contain options for how the ","Recent Windows"," list will display items:","\n    ","\n      ","Open automatically on Project load",": When enabled, the Recent Windows list will be shown when you load a new project. Default is disabled.","\n      ","Move focused windows to top",": When this is enabled and you click on any item in the Recent Window list, the selected item will be moved to the top of the list. By default this is disabled.","\n      ","Display only currently open windows",": Enabling this will make the Recent Windows list remove those items that are no longer open in a workspace (ie: closing any window will remove it from the list too). By default this is disabled.","\n      ","Maximum windows to display",": This sets the maximum number of previously opened windows that will be shown within the Recent Windows list. Default is 10.","\n    ","\n    ","\n    ","\n  ","\n  ","Resources","Resources","\n  ","\n    ","The preferences here contain options for how certain ","resources ","will be drawn in your projects:","\n    ","\n      ","Initial default draw colour for new projects",": When you use a font or draw a shape using the GameMaker Studio 2 functions or DnD™ actions without specifying a colour, the colour set here is the one that will be used. The default\n        colour is white ( ","ARGB",": $FFFFFFFF).","\n      ","Initial default window colour for new projects",": This option is used to set the HTML page background colour for the HTML5 target, as well as set the colour shown outside of rooms on all targets (including HTML5). The default colour\n        is black (ARGB: $000000FF).","\n    ","\n    "," ","\n  ","\n  ","Workspaces","Workspaces","\n  ","\n    ","\n    ","The preferences here will affect how you move around within the different GameMaker Studio 2 ","workspaces",". The options are:","\n    ","\n      ","Workspace keyboard navigation degree range",": Within a workspace you can have multiple windows open for different objects and resources, and so to move around quickly between them you can use the keyboard shortcut "," / "," + "," + ","<Arrow Keys>"," to move between them. Given that the windows within a workspace are not grid aligned the IDE has to choose which window you mean when you press any of the possible 8 directions, and\n        this option permits you to set the \"look angle\" that is used. The default value is 40°.","\n      ","Workspace chain column padding (px)",": Workspace elements are often \"chained\" to each other (for example, the Code Editor is chained to the Event Editor is chained to the Object Editor), and this option permits you to set\n        the horizontal distance between any two chained windows. The default value is 30px.","\n      ","Workspace chain row padding (px)",": As mentioned above, workspace elements are often \"chained\" to each other and this option permits you to set the vertical distance between any two chained windows. The default value is\n        20px.\n      ","\n      ","Workspace chain rendering segment count",": Here you can set the maximum number of segments for render chains. Lowering this value may help performance on lower end machines. The default value is 20.","\n      ","Workspace chain link colour",": This is the colour that will be used to display chains between workspace elements. Default colour is ARGB $99DD00.","\n      ","Workspace keyboard navigation resets zoom",": As mentioned above, you can skip from window to window within the workspace using keyboard shortcuts. You can also zoom the workspace in and out using the "," / "," + the mouse wheel ",". Setting this option will mean that if you have the workspace zoomed and use the shortcuts to skip to another window, then the workspace will be returned to a 1:1 view and centered on the selected window. This option is off by default.","\n      ","Workspace chains can overlap",": When enabled this option will permit workspace chains to cross and overlap. This is off by default.","\n    ","\n    ","\n    ","\n  ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","IDE Preferences","\n        ","Next: ","Drag And Drop™ Preferences","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["General Preferences"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"id":"27"})