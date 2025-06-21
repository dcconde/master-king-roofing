import "./Services.scss";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Roof Replacement/Installation",
      description:
        "Full roof replacement when repairs are no longer sufficient, with various material options to choose from for residential and commercial properties.",
      icon: "icon-installation",
      image:
        "https://images.pexels.com/photos/5969601/pexels-photo-5969601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      title: "Roof Repair",
      description:
        "Expert roof repair services to fix leaks, damaged shingles, and other issues to extend the life of your roof.",
      icon: "icon-repair",
      image:
        "https://images.pexels.com/photos/3584738/pexels-photo-3584738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    // {
    //   id: 3,
    //   title: "Roof Replacement",
    //   description:
    //     "Full roof replacement when repairs are no longer sufficient, with various material options to choose from.",
    //   icon: "icon-replacement",
    //   image:
    //     "https://images.pexels.com/photos/5589309/pexels-photo-5589309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    // },
    // {
    //   id: 4,
    //   title: "Roof Inspection",
    //   description:
    //     "Thorough roof inspections to identify potential issues before they become costly problems.",
    //   icon: "icon-inspection",
    //   image:
    //     "https://images.pexels.com/photos/8960528/pexels-photo-8960528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    // },
    // {
    //   id: 5,
    //   title: 'Gutter Installation',
    //   description: 'Professional gutter installation and maintenance to protect your home from water damage.',
    //   icon: 'icon-gutter',
    //   image: 'https://images.pexels.com/photos/7108246/pexels-photo-7108246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    // },
    {
      id: 6,
      title: "Emergency Repairs",
      description:
        "24/7 emergency roof repair services for unexpected damage from storms, fallen trees, and other hazards.",
      icon: "icon-emergency",
      image:
        "https://images.pexels.com/photos/5835362/pexels-photo-5835362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            We provide comprehensive roofing solutions to meet all your needs
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              {/* <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div> */}
              <div className="service-content">
                {/* <div className="service-icon">
                  <i className={service.icon}></i>
                </div> */}
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#quote" className="service-link">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <div className="services-cta-content">
            <h3>Not sure what you need?</h3>
            <p>
              Our roofing experts can help you determine the best solution for
              your specific situation.
            </p>
            <a href="#quote" className="btn btn-primary">
              Contact Us Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
