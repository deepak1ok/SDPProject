// import { React,useState,useRef,useMemo,useCallback,useContext,useEffect } from "react";

// import { MapContainer,TileLayer, Marker,Popup, } from "react-leaflet";
// import L, { Icon } from 'leaflet';

// const customIcon=new Icon({
//     iconUrl:"/placeholder.png",
//     iconSize:[38,38]
// })


//   export default function DraggableMarker({lat,lng,ngoLat,ngoLng}) {
//     const [draggable, setDraggable] = useState(false)
//     const [position, setPosition] = useState({
//       lat:lat,
//       lng:lng
//     })

//     const [ngoPosition, setNgoPosition] = useState({
//         lat:ngoLat,
//         lng:ngoLng
//       })
//     const markerRef = useRef(null);

//     const eventHandlers = useMemo(
//       () => ({
//         dragend() {
//           const marker = markerRef.current
//           if (marker != null) {
//             setPosition(marker.getLatLng())

           
//           }
//         },
//       }),
      
//     )
//     const toggleDraggable = useCallback(() => {
//       setDraggable((d) => !d)

//     })
  
//     return (
//       <>
//       <Marker
//         icon={customIcon}
//         draggable={draggable}
//         eventHandlers={eventHandlers}
//         position={position}
//         ref={markerRef}>
//         <Popup minWidth={90}>
//           <span onClick={toggleDraggable}>
//             Donor Location
//           </span>
//         </Popup>
//       </Marker>

//       <Marker
//         icon={customIcon}
//         draggable={draggable}
//         eventHandlers={eventHandlers}
//         position={ngoPosition}
//         ref={markerRef}>
//         <Popup minWidth={90}>
//           <span onClick={toggleDraggable}>
//             Your NGO Location
//           </span>
//         </Popup>
//       </Marker>

      

//       </>
//     )
//   }