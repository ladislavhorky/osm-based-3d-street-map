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
      "line-width": 4,
      "line-color": [255,235,160,{"linear2":["#lod",[[7,80],[9,200],[12,200],[13,120]]]}],
      "zbuffer-offset": [-0.02,0,0],
      "visible": {"discrete":[[6,false],[7,true],[13,true],[14,false]]}
    },
    "highways-outline": {
      "inherit": "highways-base",
      "line-width": 5.5,
      "line-color": [0,0,0,{"linear2":["#lod",[[8,100],[9,200],[12,200],[13,100]]]}],
      "z-index": 1
    },

    "highways-detail-base": {
      "filter": ["all",["==","#group","transportation"],["in","$class","motorway"]],
      "line": true,
      "line-flat": true,
      "line-width": {"linear2":["#lod",[[13,10],[18,16]]]},
      "line-color": [255,235,160,{"linear2":["#lod",[[13,100],[14,120]]]}],
      "zbuffer-offset": [-0.05,-10,-10],
      "visible": {"discrete":[[12,false],[13,true]]},
      "z-index" : 2
    },
    "highways-detail-outline": {
      "inherit": "highways-detail-base",
      "line-width": 20,
      "line-color": [255,220,88,{"linear2":["#lod",[[13,100],[14,120]]]}],
      "z-index": 3
    },

    "main-roads": {
      "filter": ["all",["==","#group","transportation"],["in","$class","trunk","primary","secondary"]],
      "line": true,
      "line-width": 2,
      "line-color": [255,255,255,{"linear2":["#lod",[[9,80],[11,150]]]}],
      "zbuffer-offset": [-0.02,0,0],
      "visible": {"discrete":[[8,false],[9,true],[13,true],[14,false]]}
    },
    "main-roads-detail": {
      "filter": ["all",["==","#group","transportation"],["in","$class","trunk","primary","secondary"]],
      "line": true,
      "line-flat": true,
      "line-width": {"linear2":["#lod",[[9,30],[15,10]]]},
      "line-color": [255,255,255,{"linear2":["#lod",[[9,80],[11,150]]]}],
      "zbuffer-offset": [-0.02,-10,-10],
      "visible": {"discrete":[[8,false],[9,true]]}
    }
  }
}
