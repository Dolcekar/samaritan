import React, { Component } from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

class Map extends Component {

	constructor(){
		super()
		this.state = {
			map: null
		}
	}

	mapMoved(){
		// console.log('mapMoved: '+JSON.stringify(this.state.map.getCenter()))
		if (this.props.locationChanged != null)
			this.props.locationChanged(this.state.map.getCenter())

	}

	zoomChanged(){
		// console.log('zoomChanged: '+this.state.map.getZoom())

	}

	mapLoaded(map){
		if (this.state.map != null)
			return

		this.props.onMapReady(map)
		this.setState({
			map: map
		})
	}

	handleMarkerClick(marker){
		if (this.props.markerClicked != null)
			this.props.markerClicked(marker, this.state.map)
	}


	render(){
		const markers = this.props.markers || []

		return (
			<GoogleMap
				ref={this.mapLoaded.bind(this)}
				onDragEnd={this.mapMoved.bind(this)}
				onZoomChanged={this.zoomChanged.bind(this)}
			    defaultZoom={this.props.zoom}
			    defaultCenter={this.props.center}>
			    {markers.map((marker, index) => (
				      <Marker 
		            	key={index} 
		            	clickable={true} 
		            	icon={marker.icon} 
		            	label={marker.label} 
		            	title={marker.key} 
		            	onClick={this.handleMarkerClick.bind(this, marker)} 				      
				      	{...marker} />
			    	)
			    )}
			</GoogleMap>
		)
	}
}

export default withGoogleMap(Map)

// import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// class MyClass extends Component {
//   constructor(props){
//     super(props);

//   }

//   render() {
//     return (
//       <GoogleMapReact
//         defaultCenter={this.props.center}
//         defaultZoom={this.props.zoom}
//         style={{height: '300px'}}
//       >
//         <AnyReactComponent
//           lat={59.955413}
//           lng={30.337844}
//           text={'Google Map'}
//         />
//       </GoogleMapReact>
//     );
//   }
// }
// MyClass.defaultProps = {
//   center: {lat: 59.95, lng: 30.33},
//   zoom: 11
// };

// export default MyClass;