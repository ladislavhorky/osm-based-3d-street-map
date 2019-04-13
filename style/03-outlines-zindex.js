$03Outlines = {
"layers" : {
    "motorways" : {
        "filter" : ["all",["==","#group","transportation"],["in","$class","motorway"]],
        "line" : true,
        "line-flat": true,
        "line-width-units": "ratio",
        "line-width" : 0.002,
        "line-color" : [255,235,160,255],
        "zbuffer-offset": [-0.02,0,0]
    },

    "motorways-outline" : {
        "filter" : ["all",["==","#group","transportation"],["in","$class","motorway"]],
        "line" : true,
        "line-flat": true,
        "line-width-units": "ratio",
        "line-width" : 0.0026,
        "line-color" : [0,0,0,255],
        "z-index": 1,
        "zbuffer-offset": [-0.02,0,0]
    }
}
}