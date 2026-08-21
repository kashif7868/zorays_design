import {
  ArrowRight,
  BookOpen,
  CalendarDays,
} from "lucide-react";

import "../../../assets/css/solarBlog/solarBlogOverview.css";

import {
  solarBlogPageData,
  solarBlogPosts,
} from "../../../Data/SolarBlog/solarBlogData";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80";

const SolarBlogOverview = () => {
  return (
    <section className="sblog-section">
      <div className="sblog-container">

        <div className="sblog-header">
          <span className="sblog-eyebrow">
            <BookOpen size={15} />
            Solar Knowledge Hub
          </span>

          <h1>
            {solarBlogPageData.title}{" "}
            <span>
              {solarBlogPageData.highlightedTitle}
            </span>
          </h1>

          <p>
            {solarBlogPageData.description}
          </p>
        </div>

        <div className="sblog-grid">
          {solarBlogPosts.map((post) => (
            <article
              className="sblog-card"
              key={post.id}
            >
              <a
                href={post.link}
                className="sblog-image-link"
                aria-label={`Read ${post.title}`}
              >
                <div className="sblog-image-wrap">
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.onerror = null;
                      event.currentTarget.src =
                        FALLBACK_IMAGE;
                    }}
                  />

                  <span className="sblog-category">
                    {post.category}
                  </span>
                </div>
              </a>

              <div className="sblog-content">
                <div className="sblog-meta">
                  <CalendarDays size={13} />
                  <span>{post.date}</span>
                </div>

                <h2>
                  <a href={post.link}>
                    {post.title}
                  </a>
                </h2>

                <p>
                  {post.excerpt}
                </p>

                <a
                  href={post.link}
                  className="sblog-read-more"
                >
                  Read Article
                  <ArrowRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SolarBlogOverview;