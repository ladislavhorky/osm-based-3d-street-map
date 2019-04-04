# OSM-based 3D Street Map of Earth

This is an accompanying repository for the eponymous talk held on FOSS4G NA 2019 in San Diego. 
It is meant as a self-contained web where you can try styling OSM-based 3D street map and a tutorial describing how to 
setup up the map using [vts-geospatial FOSS stack](https://www.melown.com/products/vts/) and VTS Public Resources.

## What to do with this repo?

The repo contains [github-pages web with 3D OSM-based street map](//ladislavhorky.github.io/osm-based-3d-street-map).
To play with various styling options for OSM-based data VTS offers, just: 
  1. fork the repo,
  2. once forked, create one empty commit in your branch to force the github pages to build 
  (e.g. click "edit" the README.md and commit), gihub-pages are ready once there is a green tick next to your commit.
  3. verify your github-pages are working by visiting `https://<your-username>.github.io/osm-based-3d-street-map`,
  4. edit the styles and see your changes online (see below).
  
## How to play with the styles

The `index.html` contains a simple web application built on top of [vts-browser-js](//github.com/melowntech/vts-browser-js).
First it loads the style (in fact only the one you plan to use is needed), then it sets up the vts-browser-js using the map
configuration containg terrain, imagery and OSM-based data from VTS Public Resources. 
Then the map view is overriden so that your style is used instead the default style provided along the OSM-data.

To edit the style, simply edit the files in `style/` directory - see 
[styling reference](//github.com/melowntech/vts-browser-js/wiki/VTS-Geodata-Format#geo-layer-styles-structure)
for available directives. Then make sure you picked the correct style in `index.html`.

## How to set up my own map configuration

To set up your own map using VTS Public Resources, you will need latest Ubuntu LTS system.

  1. [Install VTS Backend](http://vtsdocs.melown.com/en/latest/tutorials/vtsbackend.html) from a Debian package.
  2. Add Viewfinder Panoramas 3 -based terrain from VTS Public Resources.
  ```
  $ suvts
  $ vts --add store/stage.melown2015/ \
        --tileset "//cdn.melown.com/vts/melown2015/terrain/global/viewfinder3/" \
        --bottom
  ```
  3. Download `map-config/osm-based-3d-street-map` into /var/vts/store/map-config, make sure `vts` user can read this file.
     Commented version of the file follows.
  ```
  {
        "storage": "../stage.melown2015",
        "tilesets": [
                "terrain-viewfinder3"
        ],
        "boundLayers": {
                "eox-sentinel2-cloudless": "https://cdn.melown.com/vts/melown2015/imagery/global/eox-it-sentinel2-cloudless/boundlayer.json"
        },
        "freeLayers": {
                "osm-maptiler" : "//cdn.melown.com/vts/melown2015/features/global/osm-maptiler/freelayer.json"
        },
        "view": {
                "description": "",
                "surfaces": {
                        "terrain-viewfinder3": [
                                "eox-sentinel2-cloudless"
                        ]
                },
                "freeLayers": {
                        "osm-maptiler": {}
                }
        },
        "position": [
            "obj",-117.215534,32.707985,"fix",-111.55,0.00,-90.00,0.00,7488304.21,45.00
        ],
        "version": 1
  }
  ```
