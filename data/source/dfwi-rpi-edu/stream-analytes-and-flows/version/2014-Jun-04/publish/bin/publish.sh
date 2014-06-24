#!/bin/bash

CSV2RDF4LOD_HOME=${CSV2RDF4LOD_HOME:?"not set; source csv2rdf4lod/source-me.sh or see https://github.com/timrdf/csv2rdf4lod-automation/wiki/CSV2RDF4LOD-not-set"}
#sourceID="dfwi-rpi-edu"
#datasetID="stream-analytes-and-flows"
#versionID="2014-Jun-04"
eID="1"

#graph="http://jefferson.tw.rpi.edu/source/dfwi-rpi-edu/dataset/stream-analytes-and-flows/version/2014-Jun-04"

export CSV2RDF4LOD_FORCE_PUBLISH="true"
source $CSV2RDF4LOD_HOME/bin/convert-aggregate.sh
export CSV2RDF4LOD_FORCE_PUBLISH="false"
