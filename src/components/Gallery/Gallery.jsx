import { useState } from "react";
import "./Gallery.scss";
import Photo1 from "../../assets/pictures/IMG_2826.jpg";
import Photo2 from "../../assets/pictures/IMG_8347.jpg";
import Photo3 from "../../assets/pictures/IMG_2829.jpg";
import Photo4 from "../../assets/pictures/IMG_2661.jpg";
import Photo5 from "../../assets/pictures/IMG_2606.jpg";

const Gallery = () => {
  // Gallery images - to be replaced with actual project photos
  const galleryImages = [
    {
      id: 1,
      src: Photo1,
      alt: "Residential roof installation",
      category: "residential",
    },
    {
      id: 2,
      src: Photo2,
      alt: "Commercial roofing project",
      category: "commercial",
    },
    {
      id: 3,
      src: Photo3,
      alt: "Shingle roof replacement",
      category: "residential",
    },
    {
      id: 4,
      src: Photo4,
      alt: "Metal roof installation",
      category: "commercial",
    },
    {
      id: 5,
      src: Photo5,
      alt: "Roof repair project",
      category: "repair",
    },
    // {
    //   id: 6,
    //   src: { Photo6 },
    //   alt: "Gutter installation",
    //   category: "gutters",
    // },
    // {
    //   id: 7,
    //   src: "https://images.pexels.com/photos/5874117/pexels-photo-5874117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //   alt: "Roof inspection",
    //   category: "inspection",
    // },
    // {
    //   id: 8,
    //   src: "https://images.pexels.com/photos/12339352/pexels-photo-12339352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //   alt: "Emergency roof repair",
    //   category: "repair",
    // },
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "residential", name: "Residential" },
    { id: "commercial", name: "Commercial" },
    { id: "repair", name: "Repairs" },
    { id: "gutters", name: "Gutters" },
  ];

  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((image) => image.category === activeCategory);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-title">
          <h2>Our Work</h2>
          <p>Take a look at some of our recent roofing projects</p>
        </div>

        <div className="gallery-filters">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${
                activeCategory === category.id ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="gallery-item"
              onClick={() => openLightbox(image)}
            >
              <img src={image.src} alt={image.alt} />
              <div className="gallery-overlay">
                <div className="gallery-overlay-content">
                  <span className="gallery-icon">+</span>
                  <p>{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="no-images">
            <p>No projects available in this category.</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            ×
          </button>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <div className="lightbox-caption">
              <p>{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
