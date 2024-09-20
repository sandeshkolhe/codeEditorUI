import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent.tsx';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default App;
