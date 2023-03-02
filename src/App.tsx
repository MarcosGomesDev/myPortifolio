import React from 'react';
import Header from './components/Header';
import About from './pages/About';
import Highlight from './pages/Highlight';
import Home from './pages/Home';
import Qualifications from './pages/Qualifications';
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  const home = React.useRef<HTMLElement | null>(null)
  const about = React.useRef<HTMLElement | null>(null)
  const qualifications = React.useRef<HTMLElement | null>(null)


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
        onClickToService={() => {}}
      />
      <Home ref={home} onClick={() => scrollToSection(about)} />
      <About ref={about} />
      <Highlight />
      <Qualifications ref={qualifications} />
    </>
  );
}

export default App