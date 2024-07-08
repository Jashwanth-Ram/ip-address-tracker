import { FC } from "react";

import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet"

import * as L from "leaflet";

import { IMAP } from "../@types/map";

import customMarker from "../assets/icon-location.svg";

import "leaflet/dist/leaflet.css";


 
export const Map:FC<IMAP> = ({data})=>
    {

        //creating custom icon -
        const customIcon  = new L.Icon({
            iconUrl:customMarker,
            iconRetinaUrl: customMarker,
            popupAnchor: [-0, -0],
            iconSize: [32, 45],
        })

        //change map view since map container is immutable

        const ChangeMapView = ({cordinates}:{cordinates:[number,number]})=>
        {
            const map = useMap();
            map.setView(cordinates,map.getZoom());
            return null;
        }
        



        return(
            <MapContainer       center={[data?.latitude, data?.longitude]}
            zoom={13} scrollWheelZoom={false}  style={{
                width: "100vw",
                height: "100vh",
                zIndex: 8,
              }}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker  position={[data?.latitude, data?.longitude]} icon={customIcon}>
              <Popup>
                {data?.region}
              </Popup>
            </Marker>
            <ChangeMapView cordinates={[data?.latitude, data?.longitude]}/>
          </MapContainer>
        )
    }