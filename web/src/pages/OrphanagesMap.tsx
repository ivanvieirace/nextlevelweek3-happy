import React from "react";
import "../styles/pages/orphanages-map.css";
import mapMarkerImg from "../images/map-marker.svg";
import {Link} from "react-router-dom";
import {FiPlus} from "react-icons/fi";
import {Map, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";

function OrphanagesMap() {
  return(
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy"/>
          <h2>Escolha um Orfanato no Mapa</h2>
          <p>Muitas Crianças estão esperando a sua Visita</p>
        </header>

        <footer>
          <strong>Fortaleza</strong>
          <span>Ceará</span>
        </footer>
      </aside>

      <Map
      center={[-3.7429958,-38.5166363]}
      zoom={15}
      style={{ width: "100%", height: "100%" }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/> */}
        <TileLayer 
        url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#fff"/>
      </Link>
    </div>
  );
}

export default OrphanagesMap;
