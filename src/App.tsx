import React from 'react';
import './resources/styles.css';

// import Header from './components/Header';
import Footer from './components/Footer';
import Btest from './components/Btest';

const App: React.FC = () => {
  return (
    <div className='App'>
      {/* <Header /> */}
      <Btest />

      {/* Intro Section */}
      <div style={{
        backgroundColor: 'hsl(195, 74%, 50%)', 
        height:'450px', 
        width:'100%', 
        display: 'flex'
      }}>
        <h1 style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          flexGrow: 1}}>
            Slider
        </h1>
      </div>

      {/* Parallax Section */}
      <div style={{backgroundColor: 'hsl(155, 100%, 70%)', height:'450px', width:'100%', display: 'flex' }}>
        <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexGrow: 1}}>
          Parallax
        </h1>
      </div>

      {/* Flex Box Features */}
      <div className='wrapper'>
        <div className='feature-1'>1</div>
        <div className='feature-2'>2</div>
      </div>
      <div className='wrapper'>
        <div className='feature-3'>3</div>
        <div className='feature-4'>4</div>
      </div>
      <div style={{backgroundColor: 'hsl(67, 100%, 80%)', height:'600px' }}></div>

      <Footer />
    </div>
  )
};

export default App;