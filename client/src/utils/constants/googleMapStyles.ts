export const directionsRendererOption = {
   polylineOptions: {
      strokeColor: "#5932ee",
      strokeWeight: 5,
   },
}

export const googleMapStyle = {
   styles: [
      {
         featureType: "all",
         elementType: "labels.text",
         stylers: [
            {
               visibility: "off",
            },
         ],
      },
      {
         featureType: "poi",
         elementType: "labels.icon",
         stylers: [
            {
               visibility: "off",
            },
         ],
      },
      {
         featureType: "transit",
         elementType: "labels.icon",
         stylers: [
            {
               visibility: "off",
            },
         ],
      },
   ],
}
