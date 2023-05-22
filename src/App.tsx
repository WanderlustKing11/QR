import React from 'react';
import './resources/styles.css';

// import Header from './components/Header';
import Footer from './components/Footer';
import HeadTest from './components/Header-Test';

const App: React.FC = () => {
  return (
    <div className='App'>
      {/* <Header /> */}
      <HeadTest />

      <div style={{backgroundColor: 'hsl(195, 74%, 50%)', height:'600px' }}></div>
      <div style={{backgroundColor: 'hsl(155, 100%, 70%)', height:'600px' }}></div>
      <div style={{backgroundColor: 'hsl(288, 44%, 58%)', height:'600px' }}></div>
      <div style={{backgroundColor: 'hsl(67, 100%, 80%)', height:'600px' }}></div>

      <Footer />
    </div>
  )
};

export default App;