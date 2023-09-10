import React from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import "./map.scss"

// région ile de france

function GoogleMapSection (){

	const {isLoaded} = useLoadScript({
		googleMapsAPIKey: process.env.GoogleMapsAPIKey
	});
	if (!isLoaded) return <div>Loading...</div>;

	


	// useEffect(()=>{

	// })

	return(
		<GoogleMap zoom={11} center={{lat: 48.866667, lng: 2.333333}} mapContainerClassName="mapContainer"></GoogleMap>
	)
}
export default GoogleMapSection;

