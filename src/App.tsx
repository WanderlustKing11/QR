import React from 'react';
import './resources/styles.css';
// import Header from './components/Header';
import Footer from './components/Header_Footer/Footer';
import Navbar from './components/Header_Footer/Navbar';
import Featured from './components/Featured/index';
import Customers from './components/Customers/Customers';
import PageBreak_1 from './components/PageBreak/PageBreak1';

import CssBaseline from '@mui/material/CssBaseline';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const App: React.FC = () => {
  return (
    <div className='App'>
      <React.Fragment>
        <CssBaseline>
          <Parallax pages={3}>

            <ParallaxLayer
              className='prlx-layer'
              sticky={{ start: 0, end: 1 }}
              offset={0.3}
              speed={0}
            >
              {/* Parallax Section */}
              <PageBreak_1 />
            </ParallaxLayer>

            <ParallaxLayer
              className='top-layer'
              offset={0}
              speed={1}
              factor={3}
            >
              {/* <Header /> */}
              <Navbar />

              {/* Carousel Section */}
              <Featured />

              {/* Customers' logos Section */}
              <Customers />
            </ParallaxLayer>

            <ParallaxLayer
              className='bottom-layer'
              offset={1}
              speed={1}
              factor={1}
            >
              {/* Flex Box Features */}
              <div className='services_wrapper'>
                <div className='feature feature-1'>1</div>
                <div className='feature feature-2'>2</div>
              </div>
              <div className='services_wrapper'>
                <div className='feature feature-3'>3</div>
                <div className='feature feature-4'>4</div>
              </div>

              {/* New Section */}
              <div
                style={{
                  backgroundColor: 'hsl(67, 100%, 80%)',
                  height: '600px',
                }}
              ></div>

              {/* Footer */}
              <Footer />
            </ParallaxLayer>

          </Parallax>
        </CssBaseline>
      </React.Fragment>
    </div>
  );
};

export default App;
