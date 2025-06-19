import "./About.scss";
import AboutImage from "../../assets/pictures/IMG_8353.jpg";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About Us</h2>
          <p>
            Learn why Master King Roofing is the trusted choice for quality
            roofing services
          </p>
        </div>

        <div className="about-content">
          <div className="about-image">
            <div className="image-wrapper">
              <img src={AboutImage} alt="Master King Roofing team" />
            </div>
          </div>

          <div className="about-text">
            <h3>
              Roofing Excellence Since{" "}
              <span className="text-primary">2010</span>
            </h3>
            <p>
              Master King Roofing is a family-owned business with over a decade
              of experience providing top-quality roofing services to homeowners
              and businesses. We take pride in our craftsmanship and commitment
              to customer satisfaction.
            </p>

            <div className="values">
              <div className="value-item">
                <div className="value-icon">
                  <i className="icon-quality"></i>
                </div>
                <div className="value-text">
                  <h4>Quality</h4>
                  <p>
                    We use only premium materials and the latest techniques to
                    ensure your roof is built to last.
                  </p>
                </div>
              </div>

              <div className="value-item">
                <div className="value-icon">
                  <i className="icon-integrity"></i>
                </div>
                <div className="value-text">
                  <h4>Integrity</h4>
                  <p>
                    We believe in transparent pricing, honest communication, and
                    doing the job right the first time.
                  </p>
                </div>
              </div>

              <div className="value-item">
                <div className="value-icon">
                  <i className="icon-reliability"></i>
                </div>
                <div className="value-text">
                  <h4>Reliability</h4>
                  <p>
                    Count on us to be there when you need us, with prompt
                    service and reliable workmanship.
                  </p>
                </div>
              </div>
            </div>

            <div className="about-cta">
              <p className="about-cta-text">
                Ready to experience the Master King difference?
              </p>
              <a href="#quote" className="btn btn-primary">
                Get a Free Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
