import React from 'react';
import cardData from './cardData';
import Card from './Card';

function Cards() {
  return (
    cardData.map((card) => {
      const {
        title, text, image, link, secondaryLink, secondaryLinkText, linkText,
      } = card;
      return (
        <Card
          title={title}
          text={text}
          image={image}
          link={link}
          linkText={linkText}
          secondaryLink={secondaryLink}
          secondaryLinkText={secondaryLinkText}
        />
      );
    })
  );
}

export default Cards;
