roadsStyle = {
  "layers": {
    "lines": {
      "filter": ["all",["==","#group","transportation"],["in","$class","trunk","primary","secondary"]],
      "line": false,
      "zbuffer-offset": [-0.02,0,0],
      "z-index": 10
    },
    "highways-base": {
      "filter": ["all",["==","#group","transportation"],["in","$class","motorway"]],
      "line": true,
      "line-flat": true,
      "line-width-units" : "ratio",
      "line-width": 0.002,
      "line-color": [255,235,160,{"linear2":["#lod",[[7,80],[9,200]]]}],
      "zbuffer-offset": [-0.02,0,0],
      "visible": {"discrete":[[6,false],[7,true],[12,true],[13,false]]}
    },
    "highways-outline": {
      "inherit": "highways-base",
      "line-width": 0.0026,
      "line-color": [0,0,0,{"linear2":["#lod",[[8,100],[9,200]]]}],
      "z-index": 1
    },
    "highways-detail-base": {
      "filter": ["all",["==","#group","transportation"],["in","$class","motorway"]],
      "line": true,
      "line-flat": true,
      "line-width": {"linear2":["#lod",[[13,10],[18,16]]]},
      "line-color": [255,235,160,{"linear2":["#lod",[[13,200],[16,80]]]}],
      "zbuffer-offset": [-0.05,-10,-10],
      "visible": {"discrete":[[12,false],[13,true]]},
      "z-index": 2
    },
    "highways-detail-outline": {
      "inherit": "highways-detail-base",
      "line-width": 20,
      "line-color": [255,220,88,{"linear2":["#lod",[[13,200],[16,80]]]}],
      "z-index": 3
    },
    "main-roads": {
      "filter": ["all",["==","#group","transportation"],["in","$class","trunk","primary","secondary"]],
      "line": true,
      "line-flat": true,
      "line-width-units" : "ratio",
      "line-width": 0.0012,
      "line-color": [255,255,255,{"linear2":["#lod",[[10,80],[12,150]]]}],
      "zbuffer-offset": [-0.02,0,0],
      "visible": {"discrete":[[9,false],[10,true],[12,true],[13,false]]}
    },
    "main-roads-detail": {
      "filter": ["all",["==","#group","transportation"],["in","$class","trunk","primary","secondary"]],
      "line": true,
      "line-flat": true,
      "line-width": {"linear2":["#lod",[[9,30],[15,10]]]},
      "line-color": [255,255,255,{"linear2":["#lod",[[9,80],[12,150]]]}],
      "zbuffer-offset": [-0.02,-10,-10],
      "visible": {"discrete":[[12,false],[13,true]]}
    }
  }
}
