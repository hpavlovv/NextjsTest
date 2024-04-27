import { AgencySelection } from '../sections/AgencySelection/AgencySelection';
import Head from 'next/head';


const AgencySelectionProps = {
  image: {
    src: '/img/video.png',
    alt: 'video',
    width: 394,
    height: 550,
  },
  cardsData: [
    {
      id: 1,
      image: { src: '/img/brief.png', alt: '', width: 100, height: 80 },
      title: 'Brief',
      description:
        'Complete <b>brief writing or simple guidance</b> on what to include, we\'ve got you covered.',
    },
    {
      id: 2,
      image: { src: '/img/search.png', alt: '', width: 100, height: 90 },
      title: 'Search',
      description:
        'In-depth agency search covering; <b>criteria matching</b>, door knocking, and due-diligence vetting.',
    },
    {
      id: 3,
      image: { src: '/img/pitch.png', alt: '', width: 100, height: 80 },
      title: 'Pitch',
      description:
        'Comprehensive <b>pitch management</b> including comms, diary management, and pitch hosting.',
    },
  ],
};

export default function Home() {
  return (
    <>
      <Head>
        
        <link rel="preconnect" href="https://fonts.googleapis.com/" />
        <link rel="preconnect" href="https://fonts.gstatic.com/" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel='stylesheet'
        />
      </Head>
      <div>
        {/* Rendering AgencySelection with props */}
        <AgencySelection {...AgencySelectionProps} />
      </div>
    </>
  );
}
