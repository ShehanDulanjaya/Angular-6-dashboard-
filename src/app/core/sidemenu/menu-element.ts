export const menus = [
    {
        "name"   : "Dashboard",
        "icon"   : "dashboard",
        "link"   : false,
        "open"   : false,
        "chip"   :  { "value": 1,'color': 'accent'} ,
        "sub"    :  [
                        {
                            "name": "Dashboard",
                            "link": "/auth/dashboard",
                            "icon": "dashboard",
                            "chip"   : false,
                            "open"   : true,
                        }
                        
                    ]
    },
    {  
        "name"   : "Projects",
        "icon"   : "mode_edit",
        "link"   : false,
        "open"   : false,
        "chip"   :  { "value": 2,'color': 'accent'} ,
        "sub"    :  [
                        {
                            "name": "Admin Projects",
                            "link": "/auth/projects",
                            "icon": "dashboard",
                            "chip"   : false,
                            "open"   : true,
                        },
                        {
                            "name": "Other Projects",
                            "link": "/auth/projects/other",
                            "icon": "dashboard",
                            "chip"   : false,
                            "open"   : true,
                        }
                        
                    ]
                 
    },
    {  
        "name"   : "Add Project",
        "icon"   : "add_box",
        "link"   : "/auth/projects/add",
        "open"   : true,
       
                 
    }


]