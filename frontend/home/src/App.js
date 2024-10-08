import React from 'react';
import './App.css'
import Sidebar from '../src/components/sidebar.js';
import Header from '../src/components/Header.js'
import ReservationsTable from '../src/components/ReservationsTable.js';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <ReservationsTable />
      </div>
    </div>
  );
}

export default App;
