import React from 'react'
import startIcon from '../assets/star.svg'
import emptyStartIcon from '../assets/empty-star.svg'

export default function RatingStars({ratingSelected}) {
  const min = 1;
  const max = 5;
  const stars = {
    1: React.createRef(),
    2: React.createRef(),
    3: React.createRef(),
    4: React.createRef(),
    5: React.createRef(),
  };

  const rating = (rate) => {
    reset();
    for (let starIndex = min; starIndex <= rate; starIndex++) {
      stars[starIndex].current.src = startIcon;
    }
    ratingSelected(rate)
  };

  const reset = () => {
    for (let starIndex = min; starIndex <= max; starIndex++) {
      stars[starIndex].current.src = emptyStartIcon;
    }
  };
    return (
        <div className="rating-stars">
          <div className="stars">
            {[...Array(max)].map((e, i) => (
              <img
                src={emptyStartIcon}
                className="star"
                onClick={() => rating(i + 1)}
                ref={stars[i + 1]}
                key={i}
                alt="star"
              />
            ))}
          </div>
        </div>
      );
}
