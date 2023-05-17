import React from 'react';
import '../dist/styles.css';

import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Header />

      <div style={{backgroundColor: 'red', height:'600px' }}></div>
      <div style={{backgroundColor: 'blue', height:'600px' }}></div>
      <div style={{backgroundColor: 'green', height:'600px' }}></div>
      <div style={{backgroundColor: 'yellow', height:'600px' }}></div>

      <Footer />
    </div>
  )
};

export default App;