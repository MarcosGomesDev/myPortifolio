import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Highlight from './pages/Highlight';
import Home from './pages/Home';
import Qualifications from './pages/Qualifications';
import Service from './pages/Service';
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  const home = React.useRef<HTMLElement | null>(null)
  const about = React.useRef<HTMLElement | null>(null)
  const qualifications = React.useRef<HTMLElement | null>(null)
  const service = React.useRef<HTMLElement | null>(null)
  const knowledge = React.useRef<HTMLElement | null>(null)
  const projects = React.useRef<HTMLElement | null>(null)
  const contact = React.useRef<HTMLElement | null>(null)


  const scrollToSection = (elementRef: any) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth"
    })
  }

  return (
    <>
      <GlobalStyles />
      <Header
        onClickToHome={() => scrollToSection(home)}
        onClickToAbout={() => scrollToSection(about)}
        onClickToQuality={() => scrollToSection(qualifications)}
        onClickToService={() => scrollToSection(service)}
        onClickToKnowledge={() => scrollToSection(knowledge)}
        onClickToProjects={() => scrollToSection(projects)}
        onClickToContact={() => scrollToSection(contact)}
      />
      <Home ref={home} onClick={() => scrollToSection(about)} />
      <About ref={about} />
      <Highlight />
      <Qualifications ref={qualifications} />
      <Service ref={service} />
      <Footer />
    </>
  );
}

export default App