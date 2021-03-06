import React, { useEffect, useState } from "react";
import "../styles/pages/orphanages-map.css";
import { Link } from "react-router-dom";
import { FiPlus, FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import mapMarkerImg from "../images/map-marker.svg";

import mapIcon from "../utils/mapIcon";
import api from "../services/api";

interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

function OrphanagesMap() {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);
  const [mapMode, setMapMode] = useState(false);
  const [textMapMode, setTextMapMode] = useState<String>("Satélite");
  const [mapTheme, setMapTheme] = useState<String>("light-v10");

  useEffect(() => {
    api.get("orphanages").then((response) => {
      setOrphanages(response.data);
    });
  }, []);

  function handleChangeMapMode() {
    if (!mapMode) {
      setTextMapMode("Mapa");
      setMapMode(true);
      setMapTheme("satellite-v9");
      return;
    }
    setTextMapMode("Satélite");
    setMapTheme("light-v10");
    setMapMode(false);
  }

  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />
          <h2>Escolha um Orfanato no Mapa</h2>
          <p>Muitas Crianças estão esperando a sua Visita</p>
        </header>

        <footer>
          <strong>Fortaleza</strong>
          <span>Ceará</span>
        </footer>
      </aside>

      <Map
        center={[-3.7429958, -38.5166363]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/> */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/${mapTheme}/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        {orphanages.map((orphanage) => {
          return (
            <Marker
              key={orphanage.id}
              icon={mapIcon}
              position={[orphanage.latitude, orphanage.longitude]}
            >
              <Popup
                closeButton={false}
                minWidth={240}
                maxWidth={240}
                className="map-popup"
              >
                {orphanage.name}
                <Link to={`/orphanages/${orphanage.id}`}>
                  <FiArrowRight size={20} color="#fff" />
                </Link>
              </Popup>
            </Marker>
          );
        })}
      </Map>

      <a
        type="button"
        className="switch-map-mode"
        onClick={handleChangeMapMode}
      >
        {textMapMode}
      </a>

      <Link to="/" className="landing-orphanage">
        <FiArrowLeft size={24} color="#FFF" />
      </Link>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
