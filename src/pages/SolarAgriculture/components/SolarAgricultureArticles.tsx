import {
  ArrowRight,
  BookOpen,
  Sprout,
} from "lucide-react";

import "../../../assets/css/solarAgriculture/solarAgricultureArticles.css";

import {
  solarAgricultureArticles,
  solarAgricultureArticlesData,
} from "../../../Data/SolarAgriculture/solarAgricultureData";

const SolarAgricultureArticles = () => {
  return (
    <section className="sa-articles-section">
      <div className="sa-articles-container">
        <div className="sa-articles-header">
          <span className="sa-articles-eyebrow">
            <Sprout size={14} />
            {solarAgricultureArticlesData.eyebrow}
          </span>

          <h2>
            {solarAgricultureArticlesData.title}

            <span>
              {solarAgricultureArticlesData.highlightedTitle}
            </span>
          </h2>

          <p>
            {solarAgricultureArticlesData.description}
          </p>
        </div>

        <div className="sa-articles-grid">
          {solarAgricultureArticles.map((article) => (
            <article
              className="sa-article-card"
              key={article.id}
            >
              <div className="sa-article-image-wrap">
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                />

                <div className="sa-article-overlay" />

                <span className="sa-article-image-icon">
                  <BookOpen size={16} />
                </span>
              </div>

              <div className="sa-article-content">
                <span className="sa-article-date">
                  {article.date}
                </span>

                <h3>
                  {article.title}
                </h3>

                <p>
                  {article.excerpt}
                </p>

                <a
                  href={article.link}
                  className="sa-article-link"
                >
                  Read More
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

export default SolarAgricultureArticles;