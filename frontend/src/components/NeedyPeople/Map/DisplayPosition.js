import { React,useState,useRef,useMemo,useCallback,useContext,useEffect } from "react";

import { MapContainer,TileLayer, Marker,Popup, } from "react-leaflet";
import { StepperContext } from "../Context/StepperContext";

  export default function DraggableMarker() {
    const {userData,setUserData}=useContext(StepperContext);
    const [draggable, setDraggable] = useState(false)
    const [position, setPosition] = useState({
      lat:0,
      lng:0
    })
    const markerRef = useRef(null);

    useEffect(()=>
    {
        navigator.geolocation.getCurrentPosition((position)=>
        {
          setPosition({
            ...position,
            lat:position.coords.latitude,
            lng:position.coords.longitude
          })
        })
    },[])


    const eventHandlers = useMemo(
      () => ({
        dragend() {
          const marker = markerRef.current
          if (marker != null) {
            setPosition(marker.getLatLng())

           
          }
        },
      }),
      
    )
    const toggleDraggable = useCallback(() => {
      setDraggable((d) => !d)
      setUserData({
        ...userData,
        lat:position.lat,
        lng:position.lng
      })
    })
  
    return (
      <>
      <Marker
        draggable={draggable}
        eventHandlers={eventHandlers}
        position={position}
        ref={markerRef}>
        <Popup minWidth={90}>
          <span onClick={toggleDraggable}>
            {draggable
              ? 'Marker is draggable'
              : 'Click here to make marker draggable'}
          </span>
        </Popup>
      </Marker>

      </>
    )
  }