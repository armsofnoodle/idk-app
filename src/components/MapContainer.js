import React, { useState, useEffect, useContext } from "react";
import { Map, GoogleApiWrapper, Marker, Circle } from "google-maps-react";
import FiltersContext from "../context/FiltersContext";
import { getDistance, getHeading } from "./Maths";

const mapStyles = { width: "1px", height: "1px", opacity: 0 };

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

// -36.911387
// 174.721504

const MapsContainer = (props) => {
  const { filters, dispatch } = useContext(FiltersContext);
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();
  const [destinationLat, setDestinationLat] = useState();
  const [destinationLng, setDestinationLng] = useState();

  const options = {
    enableHighAccuracy: true,
    timeout: 500,
    maximumAge: 0,
    distanceFilter: 1,
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(showPosition, error, options);
      console.log("Position acquired");
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
    window.addEventListener("deviceorientation", setCompass);
    return () => {
      window.removeEventListener("deviceorientation", setCompass);
    };
  }, []);

  const showPosition = (position) => {
    setLat(position.coords.latitude);
    setLng(position.coords.longitude);
    dispatch({ type: "SET_POS_FOUND", posFound: true });
  };

  function error(err) {
    console.warn("ERROR(" + err.code + "): " + err.message);
  }

  const setCompass = (event) => {
    let direction;
    if (event.webkitCompassHeading) {
      direction = Math.round(event.webkitCompassHeading);
    }
    dispatch({ type: "SET_USER_FACING", userFacing: direction });

    if (!filters.compassFound) {
      dispatch({ type: "SET_COMPASS_FOUND", compassFound: true });
    }
  };

  useEffect(() => {
    const distance = Math.round(
      getDistance(lat, lng, destinationLat, destinationLng)
    );
    const heading = Math.round(
      getHeading(lat, lng, destinationLat, destinationLng)
    );

    dispatch({ type: "SET_DISTANCE", distance });
    dispatch({ type: "SET_HEADING", heading });

    if (!filters.distanceFound && !isNaN(distance)) {
      dispatch({ type: "SET_DISTANCE_FOUND", distanceFound: true });
    }
  }, [lat, lng]);

  useEffect(() => {
    console.log("posfound: ", filters.posFound);
  }, [filters.posFound]);

  const refs = {
    map: undefined,
  };

  const _mapLoaded = (mapProps, map) => {
    refs.map = map;
    destinationSearch();
  };

  const destinationSearch = () => {
    console.log("map is: ", refs.map);
    const request = {
      location: { lat, lng },
      radius: filters.radius,
      minPriceLevel: 0,
      maxPriceLevel: filters.price,
      opennow: true,
      type: filters.establishment,
    };
    const service = new props.google.maps.places.PlacesService(refs.map);
    service.nearbySearch(request, nearbyCallback);
  };

  const nearbyCallback = (results, status) => {
    if (status === props.google.maps.places.PlacesServiceStatus.OK) {
      const destination = results[Math.floor(Math.random() * results.length)];
      console.log("Your desitnation is", destination);
      const markerA = new props.google.maps.Marker({
        position: { lat, lng },
        map: refs.map,
      });
      const markerB = new props.google.maps.Marker({
        position: destination.geometry.location,
        map: refs.map,
      });
      setDestinationLat(destination.geometry.location.lat());
      setDestinationLng(destination.geometry.location.lng());
      dispatch({ type: "SET_PLACE_FOUND", placeFound: true });
    } else {
      dispatch({ type: "SET_NO_RESULTS", noResults: true });
      console.log("nada");
    }
  };

  return (
    <div>
      {filters.posFound && (
        <Map
          google={props.google}
          zoom={15}
          style={mapStyles}
          center={{ lat, lng }}
          onReady={(mapProps, map) => _mapLoaded(mapProps, map)}
        >
          <Circle
            radius={filters.radius}
            fillColor="#aa0000"
            center={{ lat, lng }}
          />
        </Map>
      )}
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: API_KEY,
})(MapsContainer);
