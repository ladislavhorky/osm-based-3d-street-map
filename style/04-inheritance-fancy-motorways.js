$04Inheritance = {
  "layers": {
    "motorways-base": {
      "filter": ["all",["==","#group","transportation"],["in","$class","motorway"]],
      "line": true,
      "line-flat": true,
      "line-width-units": "ratio",
      "zbuffer-offset": [-0.02,0,0],
      "line-width": 0.002,
      "line-color": [255,235,160,{"linear2":["#lod",[[7,80],[9,200]]]}],
      "visible": {"discrete2": ["#lod",[[6,false],[7,true],[12,true],[13,false]]]}
    },
    "motorways-outline": {
      "inherit": "motorways-base",
      "line-width": 0.0026,
      "line-color": [0,0,0,{"linear2":["#lod",[[8,100],[9,200]]]}],
      "z-index": 1
    },

    "motorways-detail-base": {
      "filter": ["all",["==","#group","transportation"],["in","$class","motorway"]],
      "line": true,
      "line-flat": true,
      "zbuffer-offset": [-10,-50,-50],
      "line-width": {"linear2":["#lod",[[13,10],[18,16]]]},
      "line-color": [255,235,160,{"linear2":["#lod",[[13,200],[16,80]]]}],
      "visible": {"discrete2": ["#lod",[[12,false],[13,true]]]},
      "z-index": 2
    },
    "motorways-detail-outline": {
      "inherit": "motorways-detail-base",
      "line-width": 20,
      "line-color": [255,220,88,{"linear2":["#lod",[[13,200],[16,80]]]}],
      "z-index": 3
    }
  }
}