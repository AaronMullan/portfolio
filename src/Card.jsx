import React from 'react';
import {
  Card as StyledCard, Button, Tooltip, OverlayTrigger,
} from 'react-bootstrap';

// function AMTooltip(props) {
//   return (
//     <Tooltip id="react-tooltip" {...props}>
//       hello
//     </Tooltip>
//   );
// }

export default function Card({
  image, title, text, link,
}) {
  return (
    <>
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 400 }}
        // overlay={AMTooltip(overLay)}
      >
        <StyledCard border="dark" style={{ width: '18rem' }}>
          <StyledCard.Img variant="top" src={image} />
          <StyledCard.Body>
            <StyledCard.Title>{title}</StyledCard.Title>
            <StyledCard.Text>
              {text}
            </StyledCard.Text>
          </StyledCard.Body>
          <StyledCard.Footer>
            <Button
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              variant="danger"
            >
              site
            </Button>
          </StyledCard.Footer>
        </StyledCard>
      </OverlayTrigger>
    </>
  );
}
