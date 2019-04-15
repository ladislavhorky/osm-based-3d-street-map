# OSM-based 3D Street Map of Earth

This is an accompanying repository for the eponymous talk held on FOSS4G NA 2019 in San Diego. 
It is meant as a [self-contained website](https://ladislavhorky.github.io/osm-based-3d-street-map/) where you can try styling OSM-based 3D street map. Furthermore, below is
a tutorial describing how to setup the same map using your own instance of
[vts-geospatial FOSS stack](https://www.melown.com/products/vts/) and resources hosted by Melowntech.

## What to do with this repo?

This repo contains [GitHub pages web with 3D OSM-based street map](//ladislavhorky.github.io/osm-based-3d-street-map).
To play with various styling options for OSM-based data vts-geospatial offers, just do the following: 
  1. fork the repo,
  2. once forked, create one commit in your branch to force the github pages to build. 
  (e.g. click "edit" the README.md, add space and commit). GiHub pages are ready once a green tick appears next to your commit.
  3. Verify your github-pages are working by visiting `https://<your-username>.github.io/osm-based-3d-street-map`,
  4. edit the styles and see your changes online (see below).
  
### How can I modify the styling of vector streets?

The [index.html](index.html) contains a simple web application built on top of [vts-browser-js](//github.com/melowntech/vts-browser-js).
First, it [loads the styles](index.html#L8) then it sets up the vts-browser-js using the map
configuration containing terrain, imagery and OSM-based street data. 
Finally the map `view` is [overridden](index.html#L48) so that your style is used instead of the default style provided along the OSM-data.

To edit the style, simply edit the files in `style/` directory - see 
[styling reference](//github.com/melowntech/vts-browser-js/wiki/VTS-Geodata-Format#geo-layer-styles-structure)
for available directives or browse [Live JSFiddle examples](//github.com/melowntech/vts-browser-js/wiki/Examples#geodata---basic) dealing with geodata. Then make sure you picked the correct style in [index.html](index.html#L55).

Aternatively, press Ctrl+Shift+D when browsing the map, then press Shift+E to open style-editting window. Pick correct style from dropdown menu, edit it and click update. When you are happy with your style, do not forget to copy some file so you do not lose in after reload.

## Setting up the map with your own VTS Backend instance

If you want to be able to add new resources like terrain, 3D city model into your map or simply gain total control over the map, the first step is to set up your own instance of VTS Backend. Here we will cover how to do it and how to replicate a map-configuration used in this example using some of the resoures hosted by Melowntech.
 
To set up your own VTS Backend and the map configuration, you will need latest Ubuntu LTS system with installed `nginx`:
  
  0. install nginx
  ```bash
  $ sudo apt update && sudo apt install nginx
  ```
  1. [Install VTS Backend](http://vtsdocs.melown.com/en/latest/tutorials/vtsbackend.html) from a Debian package.
  2. Add Viewfinder Panoramas 3 -based terrain hosted by Melowntech.
  ```bash
  $ suvts
  $ vts --add store/stage.melown2015/ \
        --tileset "//cdn.melown.com/vts/melown2015/terrain/global/viewfinder3/" \
        --bottom
  ```
  3. Download `map-config/osm-based-3d-street-map` from this repository into `/var/vts/store/map-config/`, make sure `vts` user can read this file.
     Commented version of the file follows.
  ```bash
  {
    # use the following VTS storage to pick a subset of surfaces
    "storage": "../stage.melown2015",
        
    # pick up these surfaces (just the one we added in this case)
    "tilesets": [ "terrain-viewfinder3"],
        
    # use following bound-layer(s) (imagery), it will be available under eox-sentinel2-cloudless name
    # here we use Sentinel2-cloudless imagery crafted by EOX hosted as VTS bound-layer by Melowntech
    "boundLayers": {
      "eox-sentinel2-cloudless": 
          "//cdn.melown.com/vts/melown2015/imagery/global/eox-it-sentinel2-cloudless/boundlayer.json"
    },
        
    # use following free-layer(s) (vector geodata in this case)
    # here we use OSM-based data based on MapTiler's MVT service, heightcoded by vts-mapproxy, 
    # hosted as VTS free-layer by Melowntech
    "freeLayers": {
      "osm-maptiler" : "//cdn.melown.com/vts/melown2015/features/global/osm-maptiler/freelayer.json"
    },
        
    # select a combination of layers that will be visible when the client loads the map-configuration
    "view": {
      "description": "Default View",
                
      # we shall display viewfinder3 terrain and drape it over with 
      # eox-sentinel2-cloudless imagery
      "surfaces": {
        "terrain-viewfinder3": [ "eox-sentinel2-cloudless" ]
      },
                
      # display OSM-based data styled with default style
      "freeLayers": {
        "osm-maptiler": {}
      }
    },
        
    # default position to look at
    "position": [
      "obj",-117.215534,32.707985,"fix",-111.55,0.00,-90.00,0.00,7488304.21,45.00
    ],
        
    "version": 1
  }
  ```
  4. Go to `http://localhost:8070/store/map-config/osm-based-3d-street-map` to see the map.
  
You can then use your map in this repo simply by changing `params['map']` into `http://localhost:8070/store/map-config/osm-based-3d-street-map/mapConfig.json`

## How do I add my own resources to the map?

That is quite easy with vts-geospatial! We have a [suite of tutorials](http://vtsdocs.melown.com/en/latest/tutorials/index.html) just for this
you might want to check out.

## Legal notice

Please respect any license restrictions applicable to the data sources used
in this demonstration. Respective copyright holders are clearly marked in the
bottom-right area of the map window:
  
