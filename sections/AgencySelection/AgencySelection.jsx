import Image from 'next/image';
import {
  AgencySelectionContainer,
  Heading,
  SubHeading,
  InfoContainer,
  CardsContainer,
  ImageWrapper,
} from './elements';
import { Card } from '../../collections/Card/Card';

export const AgencySelection = (props) => {
  
  const { image, cardsData } = props;

  return (
    <AgencySelectionContainer>
      
      <Heading>Managed Agency Selection</Heading>
      <SubHeading>Strengthen Your Onboarding Process</SubHeading>

      {/* Container for image and cards */}
      <InfoContainer>
        <ImageWrapper>
          
          <Image 
            src={image.src} 
            alt={image.alt} 
            width={image.width} 
            height={image.height} 
          />
        </ImageWrapper>
        <CardsContainer>
          {/* Loop through the cardsData to display Card components */}
          {cardsData.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </CardsContainer>
      </InfoContainer>
    </AgencySelectionContainer>
  );
};