#!/bin/bash

CSV2RDF4LOD_HOME=${CSV2RDF4LOD_HOME:?"not set; source csv2rdf4lod/source-me.sh or see https://github.com/timrdf/csv2rdf4lod-automation/wiki/CSV2RDF4LOD-not-set"}
#sourceID="wunderground-com"
#datasetID="history-glens-falls-2008"
#versionID="2014-May-08"
eID="1"

#graph="http://jefferson.tw.rpi.edu/source/wunderground-com/dataset/history-glens-falls-2008/version/2014-May-08"

export CSV2RDF4LOD_FORCE_PUBLISH="true"
source $CSV2RDF4LOD_HOME/bin/convert-aggregate.sh
export CSV2RDF4LOD_FORCE_PUBLISH="false"
