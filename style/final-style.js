cityLabels = {
  "layers": {
    "roads-far-base": {
      "filter": ["skip"],
      "line": true,
      "line-flat": true,
      "line-width-units": "ratio",
      "zbuffer-offset": [-0.02,0,0]
    },
    "roads-near-base": {
      "filter": ["skip"],
      "line": true,
      "line-flat": true,
      "zbuffer-offset": [-10,-50,-50]
    },
    "highways-base": {
      "inherit": "roads-far-base",
      "filter": ["all",["==","#group","transportation"],["in","$class","motorway"]],
      "line-width": 0.002,
      "line-color": [255,235,160,{"linear2":["#lod",[[7,80],[9,200]]]}],
      "visible": {"discrete":[[6,false],[7,true],[12,true],[13,false]]}
    },
    "highways-outline": {
      "inherit": "highways-base",
      "line-width": 0.0026,
      "line-color": [0,0,0,{"linear2":["#lod",[[8,100],[9,200]]]}],
      "z-index": 1
    },
    "highways-detail-base": {
      "inherit": "roads-near-base",
      "filter": ["all",["==","#group","transportation"],["in","$class","motorway"]],
      "line-width": {"linear2":["#lod",[[13,10],[18,16]]]},
      "line-color": [255,235,160,{"linear2":["#lod",[[13,200],[16,80]]]}],
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
      "inherit": "roads-far-base",
      "filter": ["all",["==","#group","transportation"],["in","$class","trunk","primary","secondary"]],
      "line-width": 0.0012,
      "line-color": [255,255,255,{"linear2":["#lod",[[10,80],[12,150]]]}],
      "visible": {"discrete":[[9,false],[10,true],[12,true],[13,false]]}
    },
    "main-roads-detail": {
      "inherit": "roads-near-base",
      "filter": ["all",["==","#group","transportation"],["in","$class","trunk","primary","secondary"]],
      "line-width": {"linear2":["#lod",[[9,30],[15,10]]]},
      "line-color": [255,255,255,{"linear2":["#lod",[[9,80],[12,150]]]}],
      "visible": {"discrete":[[12,false],[13,true]]}
    },
    "minor-roads-detail": {
      "inherit": "roads-near-base",
      "filter": ["all",["==","#group","transportation"],["in","$class","tertiary","minor"]],
      "line-width": {"linear2":["#lod",[[14,8],[17,4]]]},
      "line-color": [255,255,255,{"linear2":["#lod",[[14,50],[17,150]]]}],
      "visible": {"discrete":[[13,false],[14,true]]}
    },
    "other-roads-detail": {
      "inherit": "roads-near-base",
      "filter": ["all",["==","#group","transportation"],["in","$class","service"]],
      "line-width": {"linear2":["#lod",[[14,6],[17,2]]]},
      "line-color": [255,255,255,{"linear2":["#lod",[[16,50],[18,150]]]}],
      "visible": {"discrete":[[15,false],[16,true]]}
    },
    "road-labels": {
      "filter": ["all",["==","#group","transportation_name"],["in","$class","motorway","trunk","primary","secondary","tertiary","unclassified","minor","service","unclassified","residential","path"]],
      "line-label": true,
      "line-label-size": {"linear2":["#lod",[[15,13],[21,1.3]]]},
      "zbuffer-offset": [-20,-50,-50],
      "visible": {"discrete":[[15,false],[16,true]]}
    },
    "city-labels": {
      "filter": ["all",["==","#group","place"],["in","$class","city", "town"]],
      "visible": {"discrete":[[5,false],[6,true],[16,false]]},
      "label": true,
      "label-size": 19,
      "zbuffer-offset": [-20,-50,-50],
      "z-index": 4,
      "culling": 85,
      "visibility": {"linear2":[{"str2num":"$population"},[[2000,20000],[20000000,10000000]]]}
    }
  }
}