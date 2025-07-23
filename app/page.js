import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ViewEarthButton from './components/ViewEarthButton';
import EarthAttractionsMap from './components/EarthAttractionsMap';
import EarthCreaturesGuide from './components/EarthCreaturesGuide';
import AlienReviews from './components/AlienReviews';
import BookingForm from './components/BookingForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-black text-white">
      <HeroSection />
      <AboutSection />
      <ViewEarthButton />
      <EarthAttractionsMap />
      <EarthCreaturesGuide />
      <AlienReviews />
      <BookingForm />
    </div>
  );
}