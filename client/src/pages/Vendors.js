import React from 'react';
import { Layout, Menu, InputNumber } from 'antd';
// const { Client } = require("@googlemaps/google-maps-services-js");

const { Sider, Content } = Layout;

let typeMenu = {
	key: `1`,
	label: `Type`,
	children: [
		{
			key: `1`,
			label: `All`,
		},
		{
			key: `2`,
			label: `Food`,
		},
		{
			key: `3`,
			label: `Floral`,
		}
	]
};
let sortMenu = {
	key: `2`,
	label: `Sort by`,
	children: [
		{
			key: `1`,
			label: `Relevance`,
		},
		{
			key: `2`,
			label: `Price (high)`,
		},
		{
			key: `3`,
			label: `Price (low)`,
		},
		{
			key: `4`,
			label: `Reviews (high)`,
		},
		{
			key: `5`,
			label: `Reviews (low)`,
		}
	]
};

const onChange = (value) => {
	console.log('changed', value);
};

const Vendors = () => {
	const googleMapsApiKey = "AIzaSyAuoc5IMttQ0EzKiOjOVOMmbwx4MZBkYTM";
	const script = document.createElement('script');
	script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&libraries=places&callback=initMap`;
	script.async = true;

	window.initMap = function () {
		const map = new google.maps.Map(document.getElementById("map"), {
		  center: { lat: 37.7749, lng: -122.4194 },
		  zoom: 8,
		});
		const infoWindow = new google.maps.InfoWindow();
		const locationButton = document.createElement("button");
		locationButton.textContent = "Pan to Current Location";
		locationButton.classList.add("custom-map-control-button");
		map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
		locationButton.addEventListener("click", () => {
	  
		  if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
			  (position) => {
				const pos = {
				  lat: position.coords.latitude,
				  lng: position.coords.longitude,
				};
				infoWindow.setPosition(pos);
				infoWindow.setContent("Location found.");
				infoWindow.open(map);
				console.log(pos)
				map.setCenter(pos);
			  },
			  () => {
				handleLocationError(true, infoWindow, map.getCenter());
			  }
			);
		  } else {
	  
			handleLocationError(false, infoWindow, map.getCenter());
		  }
		});
	  };

	return (
		<>
			<Layout className="main-content">
				<h1>Vendors</h1>
				<Sider className="sidebar">
					<Menu mode="inline" defaultSelectedKeys={['1']} items={[typeMenu, sortMenu]} />
					<InputNumber min={0} addonBefore="Min:" addonAfter="$" onChange={onChange} />
					<InputNumber min={0} addonBefore="Max:" addonAfter="$" onChange={onChange} />
				</Sider>
				<Content className="content">
					<h2>Vendor List</h2>
					<div id="map"></div>
				</Content>
			</Layout>
		</>
	);
};

export default Vendors;