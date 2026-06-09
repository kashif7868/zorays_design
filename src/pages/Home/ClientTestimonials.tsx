import "../../assets/css/home/ClientTestimonials.css";

const testimonials = [
  {
    name: "General Dr. Anwar Ul Haq",
    role: "Homeowner, Lahore",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    text: "I am flabbergasted that Zorays Solar has provided the ultimate net metering solution for my household.",
  },
  {
    name: "Umair Ahsan",
    role: "Cattle Farmer, Kasur",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Customer service is a vital aspect of the solar industry. I have had the pleasure of maintaining my cattle farm in Kasur with Zorays.",
  },
  {
    name: "Khawaja Muhammad Asif",
    role: "Businessman, Sialkot",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    text: "I met Zorays at a wedding in a beloved friend circle. I said: what's in it for me. He proved me wrong.",
  },
  {
    name: "General Nasrullah Tahir Dogar (Retired)",
    role: "Retired Army Officer",
    image: "https://randomuser.me/api/portraits/men/71.jpg",
    text: "I am so happy with Zorays team that I extended my 10kW system with another 15kW increment within 8 months.",
  },
  {
    name: "Shehroze Malik",
    role: "Business Owner, Karachi",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    text: "It's been a while that we have taken Zorays Solar as our permanent green initiative partners.",
  },
  {
    name: "Dr. Acha Tariq Sajid",
    role: "Medical Professional, Multan",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    text: "I am trying them for the young team they are. I am going to refer them soon after getting good payback from my newly installed net metering system.",
  },
];

const ClientTestimonials = () => {
  return (
    <section className="client-testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <span className="testimonials-badge">✹ Trusted Across Pakistan</span>

          <h2>
            What Clients <span>Say</span>
          </h2>

          <p>
            Trusted by households, institutions, and commercial clients across
            Pakistan.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <article className="testimonial-card" key={index}>
              <div className="quote-icon">“</div>

              <div className="testimonial-content">
                <img src={item.image} alt={item.name} />

                <div>
                  <h3>{item.name}</h3>
                  <p className="testimonial-role">{item.role}</p>
                  <div className="yellow-line"></div>
                  <p className="testimonial-text">{item.text}</p>
                  <div className="stars">★★★★★</div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="testimonial-controls">
          <button type="button">‹</button>
          <span className="active-dot"></span>
          <span></span>
          <span></span>
          <button type="button">›</button>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;