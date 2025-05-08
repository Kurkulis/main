import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
import JsonData from './data/data.json';
import Navigation from './components/Navigation';
import Header from './pages/header/Header';
import Features from './pages/features/Features';
import AboutUs from './pages/aboutUs/aboutUs';
import Services from './pages/servicesPart/services';
import Gallery from './pages/gallery/gallery';
import Testimonials from './pages/testimonials/testimonials';
import Team from './pages/team/team';
import ContactUs from './pages/contactUs/contactUs';
import Footer from './components/footer/footer';

function App() {

  const [landingPageData, setLandingPageData] = useState(null);

  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <>
      {landingPageData && (
        <>
          <Navigation
            title={landingPageData.navigation.title}
            navigationItems={landingPageData.navigation.navigationItems}
          />
          <Header
            title={landingPageData.header.title}
            subtitle={landingPageData.header.subtitle}
            button={landingPageData.header.button}
          />
          <Features
            title={landingPageData.features.title}
            featuresItems={landingPageData.features.featuresItems}
          />
          <AboutUs
            title={landingPageData.about.title}
            paragraph={landingPageData.about.paragraph}
            whyChooseUsTitle={landingPageData.about.whyChooseUsTitle}
            reasonsLeft={landingPageData.about.reasonsLeft}
            reasonsRight={landingPageData.about.reasonsRight}
          />
          <Services
            title={landingPageData.services.title}
            subtitle={landingPageData.services.subtitle}
            items={landingPageData.services.items}
          />
          <Gallery
            title={landingPageData.gallery.title}
            subtitle={landingPageData.gallery.subtitle}
            images={landingPageData.gallery.images}
          />
          <Testimonials
            title={landingPageData.testimonials.title}
            items={landingPageData.testimonials.items}
          />
          <Team
            title={landingPageData.team.title}
            subtitle={landingPageData.team.subtitle}
            members={landingPageData.team.members}
          />
          <ContactUs
            title={landingPageData.contactUs.title}
            form={landingPageData.contactUs.form}
            subtitle={landingPageData.contactUs.subtitle}
            info={landingPageData.contactUs.info}
            socials={landingPageData.contactUs.socials}
          />
          <Footer
            text={landingPageData.footer.text}
          />
        </>
      )}
    </>
  )
}

export default App;
