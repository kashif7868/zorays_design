import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  MapPin,
  Star,
  Quote,
} from "lucide-react";

import "../../assets/css/home/ClientTestimonials.css";

import { clientTestimonialsData } from "../../Data/home/clientTestimonialsData";

const ClientTestimonials = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToCard = (index: number) => {
    const container = scrollRef.current;

    if (!container) return;

    const card = container.children[index] as HTMLElement;

    if (!card) return;

    container.scrollTo({
      left: card.offsetLeft - container.offsetLeft,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  const scrollTestimonials = (
    direction: "left" | "right"
  ) => {
    const nextIndex =
      direction === "right"
        ? Math.min(
            activeIndex + 1,
            clientTestimonialsData.length - 1
          )
        : Math.max(activeIndex - 1, 0);

    scrollToCard(nextIndex);
  };

  useEffect(() => {
    const container = scrollRef.current;

    if (!container) return;

    const handleScroll = () => {
      const cards = Array.from(
        container.children
      ) as HTMLElement[];

      const scrollLeft = container.scrollLeft;

      let closestIndex = 0;
      let closestDistance = Number.MAX_VALUE;

      cards.forEach((card, index) => {
        const distance = Math.abs(
          card.offsetLeft -
            container.offsetLeft -
            scrollLeft
        );

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    container.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    return () => {
      container.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  return (
    <section className="client-testimonials-section">
      <div className="testimonials-container">

        {/* HEADER */}

        <div className="testimonials-header-row">
          <div className="testimonials-header">
            <span className="testimonials-badge">
              <BadgeCheck size={14} />
              Trusted Across Pakistan
            </span>

            <h2>
              What Clients <span>Say</span>
            </h2>

            <p>
              Real experiences from residential,
              agricultural and commercial solar
              customers across Pakistan.
            </p>
          </div>

          <div className="testimonial-header-controls">
            <button
              type="button"
              onClick={() =>
                scrollTestimonials("left")
              }
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={17} />
            </button>

            <button
              type="button"
              onClick={() =>
                scrollTestimonials("right")
              }
              aria-label="Next testimonial"
            >
              <ArrowRight size={17} />
            </button>
          </div>
        </div>


        {/* TESTIMONIAL CAROUSEL */}

        <div
          className="testimonials-grid"
          ref={scrollRef}
        >
          {clientTestimonialsData.map(
            (item) => (
              <article
                className="testimonial-card"
                key={item.id}
              >
                <div className="testimonial-top">
                  <div className="testimonial-user">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                    />

                    <div className="testimonial-user-info">
                      <div className="testimonial-name-row">
                        <h3>{item.name}</h3>

                        {item.verified && (
                          <BadgeCheck
                            size={15}
                            className="testimonial-verified"
                          />
                        )}
                      </div>

                      <p className="testimonial-role">
                        {item.role}
                      </p>

                      {item.location && (
                        <span className="testimonial-location">
                          <MapPin size={12} />
                          {item.location}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="testimonial-quote-icon">
                    <Quote size={20} />
                  </div>
                </div>


                {/* META */}

                <div className="testimonial-meta">
                  {item.projectType && (
                    <span>
                      {item.projectType}
                    </span>
                  )}

                  {item.systemSize && (
                    <span>
                      {item.systemSize}
                    </span>
                  )}
                </div>


                {/* TEXT */}

                <p className="testimonial-text">
                  “{item.text}”
                </p>


                {/* FOOTER */}

                <div className="testimonial-footer">
                  <div className="stars">
                    {Array.from({
                      length: item.rating,
                    }).map((_, index) => (
                      <Star
                        key={index}
                        size={14}
                        fill="currentColor"
                      />
                    ))}
                  </div>

                  <span>Verified Client</span>
                </div>
              </article>
            )
          )}
        </div>


        {/* DOTS */}

        <div className="testimonial-controls">
          {clientTestimonialsData.map(
            (item, index) => (
              <button
                key={item.id}
                type="button"
                className={
                  activeIndex === index
                    ? "active"
                    : ""
                }
                onClick={() =>
                  scrollToCard(index)
                }
                aria-label={`Go to testimonial ${
                  index + 1
                }`}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;