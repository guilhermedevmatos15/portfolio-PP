import React, { useState } from 'react';

// * components
import Header from '../../components/shared/Header/Header';
import Menu from '../../components/shared/Menu/Menu';
import Hero from '../../components/section/Hero/Hero';
import About from '../../components/section/About/About';
import Skills from '../../components/section/Skills/Skills';
import Projects from '../../components/section/Projects/Projects';
import Contact from '../../components/section/Contact/Contact';
import Footer from '../../components/shared/Footer/Footer';

// * style
import './Home.scss';

// * scripts

// * contexts

// * img

// * icons

const Home = () => {
   const [openMenu, setOpenMenu] = useState(false);

   window.addEventListener('resize', () => {
      if (window.innerWidth > 640) {
         setOpenMenu(false);
      }
   });

   return (
      <div className="Home">
         <Header open={openMenu} setOpen={setOpenMenu} />
         <Hero />
         <About />
         <Skills />
         <Projects />
         <Contact />
         <Footer />

         {/* Menu */}
         <Menu open={openMenu} setOpen={setOpenMenu} />
      </div>
   );
};

export default Home;
