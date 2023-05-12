import React from 'react';
import '../dist/style.css';

import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Header />
      <Footer />
    </div>
  )
};

export default App;