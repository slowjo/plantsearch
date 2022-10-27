import { useEffect } from "react";
import { useMap } from "react-leaflet/hooks";
import L from "leaflet";
import data from '../../data/countries.json';
import { styleByCountry } from './colorFunc';

function Shapefile({ countries, countryNames }) {
  // console.log(data);

  const map = useMap();

  useEffect(() => {
    // const geo = L.geoJson(
    //   { features: [] },
    //   {
    //     onEachFeature: function popUp(f, l) {
    //       var out = [];
    //       if (f.properties) {
    //         for (var key in f.properties) {
    //           out.push(key + ": " + f.properties[key]);
    //         }
    //         l.bindPopup(out.join("<br />"));
    //       }
    //     }
    //   }
    // ).addTo(map);

    // shp(zipUrl).then(function (data) {
    //   geo.addData(data);
    // });

    L.geoJson(data, { style: (feature) => styleByCountry(feature, countries, countryNames) }).addTo(map);
  }, [countries]);

  return null;
}

export default Shapefile;