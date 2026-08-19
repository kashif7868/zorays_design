import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import "../../assets/css/home/BlogSection.css";
import { blogSectionData } from "../../Data/home/blogSectionData";

const BlogSection = () => {
  return (
    <section className="blog-section">
      <div className="blog-container">

        <div className="blog-header-row">
          <div className="blog-header">
            <span className="blog-badge">
              ✹ Solar Knowledge Hub
            </span>

            <h2>
              Latest Solar <span>Insights</span>
            </h2>

            <p>
              Practical solar guides, net metering updates, and backup planning
              advice for homes and businesses in Pakistan.
            </p>
          </div>

          <Link to="/blog" className="blog-header-view-all">
            View All Posts
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="blog-grid">
          {blogSectionData.map((post) => (
            <article className="blog-card" key={post.id}>
              <Link to={post.link} className="blog-card-link">
                <div className="blog-image-wrap">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                  />

                  <span className="blog-category">
                    {post.category}
                  </span>
                </div>

                <div className="blog-content">
                  <p className="blog-date">
                    {post.meta}
                  </p>

                  <h3>{post.title}</h3>

                  <p className="blog-excerpt">
                    {post.excerpt}
                  </p>

                  <span className="blog-read-more">
                    Read More
                    <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="blog-button-wrap">
          <Link to="/blog" className="view-all-posts-btn">
            View All Posts
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default BlogSection;