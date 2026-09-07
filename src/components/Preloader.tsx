import "../assets/css/preloader.css";

type PreloaderProps = {
  isLoading: boolean;
};

const Preloader = ({
  isLoading,
}: PreloaderProps) => {
  return (
    <div
      className={`zorays-preloader${
        !isLoading
          ? " zorays-preloader-hide"
          : ""
      }`}
      role="status"
      aria-live="polite"
      aria-label="Loading Zorays Solar"
      aria-hidden={!isLoading}
    >
      <div className="zorays-preloader-card">
        <div className="zorays-preloader-logo">
          <div className="zorays-preloader-mark">
            <span />
            <span />
            <span />
          </div>

          <div className="zorays-preloader-brand">
            <strong>
              Zorays Solar
            </strong>

            <span>
              Pakistan
            </span>
          </div>
        </div>

        <div className="zorays-preloader-animation">
          <div className="zorays-preloader-sun" />

          <div className="zorays-preloader-panel">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className="zorays-preloader-copy">
          <strong>
            Powering your experience
          </strong>

          <span>
            Loading solar solutions
          </span>
        </div>

        <div className="zorays-preloader-bar">
          <span />
        </div>
      </div>
    </div>
  );
};

export default Preloader;