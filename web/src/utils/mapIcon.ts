import Leaflet from "leaflet";
import mapMarkerImg from "../images/map-marker.svg";

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,

  iconSize: [48, 68],
  iconAnchor: [29, 58],
  popupAnchor: [160, 12],
});

export default mapIcon;