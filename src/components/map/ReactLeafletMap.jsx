import { MapContainer } from 'react-leaflet';
// import { MapContainer, TileLayer, useMap, Marker, Popup, LayersControl } from 'react-leaflet';
import Shapefile from "./Shapefile";

// import zipUrl from "./ne_110m_admin_0_countries.zip";
// const { BaseLayer, Overlay } = LayersControl;

const ReactLeafletMap = ({ countries }) => {
    return (
        <div style={{ width: '100%', height: 500, maxWidth: '100%', display: 'grid', position: 'relative' }}>
            <MapContainer center={[51.505, -0.09]} zoom={2} scrollWheelZoom={false}>
                <Shapefile countries={countries} />
                {/* <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                /> */}
                {/* <Marker position={[51.505, -0.09]}>
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker> */}
            </MapContainer>
        </div>
    );
};

export default ReactLeafletMap;