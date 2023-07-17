import React, { useState, useEffect } from 'react';
import '../styles/App.css'; 

const reviewsData = [
    {
        id: 1,
        image:
          'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
        name: 'maria ferguson',
        title: 'office manager',
        quote:
          'Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.',
      },
      {
        id: 2,
        image:
          'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
        name: 'john doe',
        title: 'regular guy',
        quote:
          'Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.',
      },
      {
        id: 3,
        image:
          'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg',
        name: 'peter smith',
        title: 'product designer',
        quote:
          'Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.',
      },
      {
        id: 4,
        image:
          'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
        name: 'susan andersen',
        title: 'the boss',
        quote:
          'Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag. ',
      },
];

const App = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % reviewsData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? reviewsData.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const sliderInterval = setInterval(nextSlide, 3000);
    return () => clearInterval(sliderInterval);
  }, []);

  return (
    <div>
      <h1 id="review-heading">Reviews</h1>
      <div id="review-container" className="slider-container">
        {reviewsData.map((review, index) => (
          <div
            key={review.id}
            id={`person-${index}`} 
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img
              src={review.image}
              alt={`Person ${index}`}
              id={`person-${index}-image`}
            />
            <h2 id={`person-${index}-index`}>{review.name}</h2>
            <p>{review.title}</p>
            <p>{review.quote}</p>
          </div>
        ))}
      </div>
      <button className="prev" onClick={prevSlide}>
        Previous
      </button>
      <button className="next" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
};

export default App;
