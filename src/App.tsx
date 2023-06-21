import React from 'react';
import './resources/styles.css';
// import Header from './components/Header_Footer/Header';
import Navbar from './components/Header_Footer/Navbar';
import Featured from './components/Featured/index';
import Intro from './components/Intro/Intro';
import Customers from './components/Customers/Customers';
import PageBreak_1 from './components/PageBreak/PageBreak1';
import Services from './components/Services/Services';
import PageBreak2 from './components/PageBreak/PageBreak2';
import Footer from './components/Header_Footer/Footer';

import CssBaseline from '@mui/material/CssBaseline';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const App: React.FC = () => {
  return (
    <div className='App'>
      <React.Fragment>
        <CssBaseline>
          <Parallax pages={3}>
            <ParallaxLayer
              className='top-layer'
              offset={0}
              speed={1}
              factor={1}
            >
              <Navbar />

              <Featured />

              <Intro />
            </ParallaxLayer>

            {/* Parallax Section 1 */}
            <ParallaxLayer
              className='prlx-layer'
              offset={0}
              speed={0}
              sticky={{ start: 0, end: 0.9 }}
              factor={3}
            >
              <div>
                <PageBreak_1 />
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className='bottom-layer'
              offset={1}
              speed={1}
              factor={1}
            >
              <Customers />
              <Services />
            </ParallaxLayer>

            {/* Parallax 2 */}
            <ParallaxLayer
              className='prlx-layer'
              offset={1.6}
              speed={0}
              sticky={{ start: 1.4, end: 2.5 }}
              factor={1}
            >
              <PageBreak2 />
            </ParallaxLayer>

            <ParallaxLayer
              className='footer-layer'
              offset={2.7}
              speed={1}
              factor={2}
            >
              <Footer />
            </ParallaxLayer>
          </Parallax>
        </CssBaseline>
      </React.Fragment>
    </div>
  );
};

export default App;
