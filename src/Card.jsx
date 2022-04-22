import React from 'react';
import { Card as StyledCard, Button } from 'react-bootstrap';

export default function Card({
  title, text, image, link, linkText = 'site', secondaryLink, secondaryLinkText = 'code',
}) {
  return (
    <>
      <StyledCard border="dark" style={{ width: '18rem' }}>
        <StyledCard.Img variant="top" src={image} />
        <StyledCard.Body>
          <StyledCard.Title>{title}</StyledCard.Title>
          <StyledCard.Text>
            {text}
          </StyledCard.Text>
        </StyledCard.Body>
        <StyledCard.Footer>
          {link
            && (
            <Button
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              variant="danger"
            >
              {linkText}
            </Button>
            )}
          {secondaryLink
            && (
            <Button
              href={secondaryLink}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              {secondaryLinkText}
            </Button>
            )}
        </StyledCard.Footer>
      </StyledCard>
    </>
  );
}
