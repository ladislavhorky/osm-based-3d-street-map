motorwaysStyle = {
"layers" : {
    "lines" : {
        "line" : true,
        "zbuffer-offset": [-0.02,0,0]
    },

    "motorways" : {
        "filter" : ["all",["==","#group","transportation"],["in","$class","motorway"]],
        "line" : true,
        "line-width" : 4,
        "line-color" : [255,235,160,128]
    }
}
}