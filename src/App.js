import './App.css';
import React, { useState } from 'react';
import NavBar from './Component/NavBar';
import News from './Component/News';
import { Routes, Route } from 'react-router-dom';
import NotFound from './Component/NotFound';
import LoadingBar from 'react-top-loading-bar';
import Footer from './Component/Footer';

const App = () => {
  const [progress, setProgress] = useState(0);
  const apikey = process.env.REACT_APP_MY_API;

  return (
    <div>
      <LoadingBar color='#ffbb33' progress={progress} height={3} />
      <NavBar />
      <Routes>
        <Route 
          exact path="/" 
          element={<News apikey={apikey} key="home" pageSize={21} country="us" category="general" setProgress={setProgress} />} 
        />
        <Route 
          exact path="/business" 
          element={<News apikey={apikey} key="business" pageSize={21} country="us" category="business" setProgress={setProgress} />} 
        />
        <Route 
          exact path="/entertainment" 
          element={<News apikey={apikey} key="entertainment" pageSize={21} country="us" category="entertainment" setProgress={setProgress} />} 
        />
        <Route 
          exact path="/general" 
          element={<News apikey={apikey} key="general" pageSize={21} country="us" category="general" setProgress={setProgress} />} 
        />
        <Route 
          exact path="/health" 
          element={<News apikey={apikey} key="health" pageSize={21} country="us" category="health" setProgress={setProgress} />} 
        />
        <Route 
          exact path="/science" 
          element={<News apikey={apikey} key="science" pageSize={21} country="us" category="science" setProgress={setProgress} />} 
        />
        <Route 
          exact path="/sports" 
          element={<News apikey={apikey} key="sports" pageSize={21} country="us" category="sports" setProgress={setProgress} />} 
        />
        <Route 
          exact path="/technology" 
          element={<News apikey={apikey} key="technology" pageSize={21} country="us" category="technology" setProgress={setProgress} />} 
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
