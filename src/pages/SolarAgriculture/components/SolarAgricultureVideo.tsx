import {
  CirclePlay,
  Sprout,
} from "lucide-react";

import "../../../assets/css/solarAgriculture/solarAgricultureVideo.css";

import {
  solarAgricultureVideoData,
} from "../../../Data/SolarAgriculture/solarAgricultureData";

const SolarAgricultureVideo = () => {
  return (
    <section className="sa-video-section">
      <div className="sa-video-container">
        <div className="sa-video-header">
          <span className="sa-video-eyebrow">
            <Sprout size={14} />
            {solarAgricultureVideoData.eyebrow}
          </span>

          <h2>
            {solarAgricultureVideoData.title}

            <span>
              {solarAgricultureVideoData.highlightedTitle}
            </span>
          </h2>

          <p>
            {solarAgricultureVideoData.description}
          </p>
        </div>

        <div className="sa-video-card">
          <div className="sa-video-frame">
            <iframe
              src={solarAgricultureVideoData.youtubeUrl}
              title={solarAgricultureVideoData.youtubeTitle}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <div className="sa-video-label">
            <span>
              <CirclePlay size={18} />
            </span>

            <div>
              <strong>
                On-Farm Water Management
              </strong>

              <p>
                Solar-powered agricultural water pumping
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarAgricultureVideo;