import "../../assets/css/home/BlogSection.css";

const blogPosts = [
  {
    title: "Net Metering in Pakistan: What Homeowners Should Know",
    category: "Net Metering",
    date: "Solar Guide",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80",
    excerpt:
      "Understand how net metering works, what documents are required, and how it helps reduce electricity bills.",
  },
  {
    title: "Hybrid Solar Backup: A Smarter Way to Handle Loadshedding",
    category: "Hybrid Backup",
    date: "Energy Backup",
    image:
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=900&q=80",
    excerpt:
      "Hybrid solar systems combine panels, inverters, and batteries to keep essential loads running during outages.",
  },
  {
    title: "How to Choose the Right Solar System Size for Your Home",
    category: "Solar Planning",
    date: "Residential Solar",
    image:
      "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=900&q=80",
    excerpt:
      "A practical guide to selecting system size based on your load, roof space, sanctioned load, and future usage.",
  },
];

const BlogSection = () => {
  return (
    <section className="blog-section">
      <div className="blog-container">
        <div className="blog-header">
          <span className="blog-badge">✹ Solar Knowledge Hub</span>

          <h2>
            Latest Solar <span>Insights</span>
          </h2>

          <p>
            Practical solar guides, net metering updates, and backup planning
            advice for homes and businesses in Pakistan.
          </p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <article className="blog-card" key={index}>
              <div className="blog-image-wrap">
                <img src={post.image} alt={post.title} />
                <span>{post.category}</span>
              </div>

              <div className="blog-content">
                <p className="blog-date">{post.date}</p>
                <h3>{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>

                <a href="/blog" className="blog-read-more">
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="blog-button-wrap">
          <a href="/blog" className="view-all-posts-btn">
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;