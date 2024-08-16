import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import '../Styles/Home.css';
import thali1 from '../imagess/thali.png';
import thali2 from '../imagess/thali2.png';
import right from '../imagess/right.png';

const contentArray = [
  {
    heading: (
      <>
        Deliciously Made<br />
        Just <span className="highlight">for You...</span>
      </>
    ),
    subheading: (
      <>
        'Sometimes you’ve got to break<br />
        <span className="highlight">the rules...</span>
      </>
    ),
    image: thali1
  },
  {
    heading: (
      <>
        Delicious Tiffins,<br />
        Just <span className="highlight">Delivered Daily!</span>
      </>
    ),
    subheading: (
      <>
        Brighten Your Meals, Boost Your Mood<br />
        <span className="highlight">Try Our Tiffins Today!</span>
      </>
    ),
    image: thali2
  },
];

export default function Home() {
  const [currentContent, setCurrentContent] = useState(contentArray[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(prevIndex => {
        const newIndex = (prevIndex + 1) % contentArray.length;
        setCurrentContent(contentArray[newIndex]);
        return newIndex;
      });
    }, 5000); // Change every 5 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <Nav />
      <div className="hero">
        <div className="contant">
          <div className="had">
            <h1>{currentContent.heading}</h1>
          </div>
          <div className="had2">
            <h3>{currentContent.subheading}</h3>
          </div>
          <div className="explore">
            <button>Explore food<img src={right} alt="Explore food" /></button>
          </div>
        </div>
        <div className="deg">
          <img src={currentContent.image} alt="Delicious food" />
        </div>
      </div>
    </div>
  );
}
