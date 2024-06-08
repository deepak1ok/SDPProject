import { React,useState,useRef,useMemo,useCallback,useEffect } from "react";

import {Marker,Popup, } from "react-leaflet";

import { Icon } from 'leaflet';

const customIcon=new Icon({
    iconUrl:"/placeholder.png",
    iconSize:[38,38]
})

  export default function DraggableMarker({state,setState}) {
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
      setState({
        ...state,
        lat:position.lat,
        lng:position.lng,
        donationStatus:false
      })
    })
  
    return (
      <>
      <Marker
        draggable={draggable}
        eventHandlers={eventHandlers}
        icon={customIcon}
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