import styled from 'styled-components';
import { SectionSubheading } from '../../components/Typography/SectionSubheading';
import { StyledSectionContainer } from '../../components/Containers/SectionContainer/elements';
import { SectionHeading } from '../../components/Typography/SectionHeading';


export const AgencySelectionContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  margin: '5rem auto',
  backgroundImage: 'url(/img/background.png)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
});


export const Heading = styled(SectionHeading)({
  color: 'black',
  margin: 0,
  textAlign: 'center',
});


export const SubHeading = styled(SectionSubheading)({
  color: 'black',
  margin: 0,
  textAlign: 'center',
});


export const ImageWrapper = styled.div({
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
});


export const InfoContainer = styled(StyledSectionContainer)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  maxWidth: '1200px',
  width: '100%',
  marginTop: '2rem',
  alignItems: 'center',
  gap: '4rem',

  '@media screen and (max-width: 1024px)': {
    flexDirection: 'column',
  },
});


export const CardsContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '2rem',
  maxWidth: '500px',

  '& > :nth-child(1)': {
    width: '80%',
    backgroundColor: '#F9F9F9',
  },

  '& > :nth-child(2)': {
    width: '90%',
    backgroundColor: '#F4F4F4',
  },

  '& > :nth-child(3)': {
    width: '100%',
    backgroundColor: '#F1F1F1',
  },
});