import { useEffect, useRef } from "react";
import { GeodesicLine as LeafletGeodesicLine } from "leaflet.geodesic";
// import L from "leaflet.geodesic";

const GeodesicLine = props => {
  const { positions, options, map } = props;
  // console.log("test");
  // const map = useMap();
  // console.log(map);
  const line = useRef(null);

  useEffect(() => {
    if (!line.current) {
      line.current = new LeafletGeodesicLine(positions, options).addTo(map);
      // line.current = new L.Geodesic(positions).addTo(map);
    }

    return () => {
      line.current.remove();
    };
  }, [map]);

  useEffect(() => {
    if (line.current) {
      line.current.setLatLngs(positions);
    }
  }, [positions]);

  // useEffect(() => {
  //   if (line.current) {
  //     line.current.setOptions(options);
  //   }
  // }, [options]);

  return null;
};

export default GeodesicLine;
