import React from 'react';
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    ZoomableGroup
} from "react-simple-maps";
const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const markers = [
    { markerOffset: -15, name: "Buenos Aires", coordinates: [-58.3816, -34.6037], color: "#FF0000" },
    { markerOffset: -15, name: "La Paz", coordinates: [-68.1193, -16.4897], color: "#330E0E" },
    { markerOffset: 25, name: "Brasilia", coordinates: [-47.8825, -15.7942], color: "#E3C50B" },
    { markerOffset: 25, name: "Santiago", coordinates: [-70.6693, -33.4489], color: "#D4F914" },
    { markerOffset: 25, name: "Bogota", coordinates: [-74.0721, 4.711], color: "#8EF914" },
    { markerOffset: 25, name: "Quito", coordinates: [-78.4678, -0.1807], color: "#35C4AB" },
    { markerOffset: -15, name: "Georgetown", coordinates: [-58.1551, 6.8013], color: "#35A5C4" },
    { markerOffset: -15, name: "Asuncion", coordinates: [-57.5759, -25.2637], color: "#163DAA" },
    { markerOffset: 25, name: "Paramaribo", coordinates: [-55.2038, 5.852], color: "#733DB6" },
    { markerOffset: 25, name: "Montevideo", coordinates: [-56.1645, -34.9011], color: "#BB48E5" },
    { markerOffset: -15, name: "Caracas", coordinates: [-66.9036, 10.4806], color: "#E548CD" },
    { markerOffset: -15, name: "Lima", coordinates: [-77.0428, -12.0464], color: "#AD2858" }
];

function Map() {
    return <div>


        <div className="card" style={{ maxHeight: "400px" }}>
            <ComposableMap
                projection="geoAzimuthalEqualArea"
                projectionConfig={{

                    scale: 400
                }}
            >
                <ZoomableGroup zoom={1}>
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map(geo => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill="#DDD"
                                    stroke="#FFF"
                                />
                            ))
                        }
                    </Geographies>
                    {markers.map(({ name, coordinates, markerOffset, color }) => (
                        <Marker key={name} coordinates={coordinates}>
                            <circle r={5} fill={color} stroke="#fff" strokeWidth={2} />
                            <text
                                textAnchor="middle"
                                y={markerOffset}
                                style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
                            >
                                {name}
                            </text>
                        </Marker>
                    ))}
                </ZoomableGroup>
            </ComposableMap>
        </div>

    </div>;
}

export default Map;
