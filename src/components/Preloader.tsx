import "../assets/css/preloader..css";

type PreloaderProps = {
  isLoading: boolean;
};

const Preloader = ({ isLoading }: PreloaderProps) => {
  return (
    <div
      className={`zorays-preloader ${!isLoading ? "zorays-preloader-hide" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Loading Zorays Solar website"
    >
      <div className="zorays-preloader-card">
        <div className="zorays-preloader-brand-mark">
          <span />
          <span />
          <span />
        </div>

        <div className="zorays-solar-loader">
          <div className="zorays-loader-sun" />

          <div className="zorays-loader-panel">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>

        <h3>Zorays Solar</h3>
        <p>Loading smart solar experience</p>

        <div className="zorays-loader-bar">
          <span />
        </div>
      </div>
    </div>
  );
};

export default Preloader;