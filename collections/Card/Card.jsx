// // The Card to be exported goes here

import Image from 'next/image';
import {
  CardContainer,
  CardInfoContainer,
  CardInnerHeading,
  CardInnerText,
  ImageContainer,
} from './elements';

export const Card = ({ card }) => {
  
  const { image, title, description } = card;

  
  const sanitizedDescription = description.replace(
    /<b>(.*?)<\/b>/g,
    '<b>$1</b>'
  );

  return (
    <CardContainer>
      {/* Image section */}
      <ImageContainer>
        <Image
          src={image.src}
          alt={title}
          width={image.width}
          height={image.height}
        />
      </ImageContainer>

      {/* Information section */}
      <CardInfoContainer>
        <CardInnerHeading>{title}</CardInnerHeading>
        <CardInnerText
          dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
        />
      </CardInfoContainer>
    </CardContainer>
  );
};

