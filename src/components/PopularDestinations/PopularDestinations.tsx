import React, { useState, useEffect, useRef } from "react";
import "./PopularDestinations.css";

interface Destination {
  id: number;
  country: string;
  description: string;
  tours: number;
  flag: string; // SVG or image URL
  image: string;
}

const TravelCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [isPaused, setIsPaused] = useState(false);

 const destinations: Destination[] = [
{
  id: 1,
  country: "Brazil",
  description:
    "Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna.",
  tours: 15,
  flag: "https://flagcdn.com/br.svg",
  image:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80",
},
{
  id: 2,
  country: "Cyprus",
  description:
    "Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna.",
  tours: 15,
  flag: "https://flagcdn.com/cy.svg",
  image:
    "https://images.unsplash.com/photo-1526481280691-3e33d6f8c51b?auto=format&fit=crop&w=900&q=80",
},
  {
    id: 3,
    country: "America",
    description:
      "Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna.",
    tours: 15,
    flag: "https://flagcdn.com/us.svg",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80", // NYC skyline
  },
  {
    id: 4,
    country: "Russia",
    description:
      "Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna.",
    tours: 15,
    flag: "https://flagcdn.com/ru.svg",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=80", // Moscow Red Square
  },
  {
    id: 5,
    country: "England",
    description:
      "Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna.",
    tours: 15,
    flag: "https://flagcdn.com/gb.svg",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=80", // London Tower Bridge
  },
  {
    id: 6,
    country: "Turkey",
    description:
      "Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna.",
    tours: 15,
    flag: "https://flagcdn.com/tr.svg",
    image:
      "https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&w=900&q=80", // Istanbul
  },
{
  id: 7,
  country: "Egypt",
  description:
    "Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna.",
  tours: 15,
  flag: "https://flagcdn.com/eg.svg",
  image:
    "https://images.unsplash.com/photo-1587740896339-338a4303d94d?auto=format&fit=crop&w=900&q=80",
},
];


  useEffect(() => {
    startAutoSlide();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentIndex, isPaused]);

  const startAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      if (!isPaused) {
        handleNext();
      }
    }, 4000);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % destinations.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? destinations.length - 1 : prevIndex - 1
    );
  };

  const getVisibleCards = () => {
    const cards: Destination[] = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % destinations.length;
      cards.push(destinations[index]);
    }
    return cards;
  };

  return (
    <div className="carousel-container4">
      <div className="carousel-header4">
        <div className="header-left4">
          <span className="header-label4">TRUE NOW</span>
          <h1 className="header-title4">Popular Destinations</h1>
        </div>
        <div className="header-right4">
          <button className="view-all-btn4">View all destinations</button>
          <div className="nav-buttons4">
            <button className="nav-button4" onClick={handlePrev}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18L9 12L15 6"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="nav-button4" onClick={handleNext}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 18L15 12L9 6"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className="cards-container4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {getVisibleCards().map((dest, index) => (
          <div
            key={`${dest.id}-${currentIndex}-${index}`}
            className="card4"
          >
            <div className="card-image4">
              <img src={dest.image} alt={dest.country} />
            </div>
             <div className="flag-circle44">
                <img src={dest.flag} alt={`${dest.country} Flag`} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
            <div className="card-content4">
              <h2 className="country-name4">{dest.country}</h2>
              <p className="description4">{dest.description}</p>
              <div className="card-footer4">
                <span className="tours-badge4">{dest.tours} tours</span>
                <a href="#" className="view-tours-link4">
                  View all tours
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelCarousel;