import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Updated import
import './App.css';
import Banner from './components/Banner';
import DataGrid from './components/DataGrid';
import SearchForm from './components/SearchForm';
function App(){
  const [currentPage, setCurrentPage] = useState(1);
  // Replace this with your mission data
  const missionData = [
    // Sample mission data
    {
      name: 'Mission 1',
      rocket: 'Falcon 9',
      // Add more mission details
    },
    // Add more missions
  ];

  const itemsPerPage = 10; // Number of items to show per page

  // Calculate the start and end indexes for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the mission data based on the current page
  const visibleMissions = missionData.slice(startIndex, endIndex);

  // Function to handle page changes
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <Router>
      <div>
      <div className="App">
    </div>
        <Banner />
        
        <div className="container mx-auto mt-8">
          <Routes> {/* Updated to Routes */}
            <Route path="/" element={<SearchForm />} /> {/* Updated to "element" */}
            <Route path="/search" element={<SearchForm />} />
            <Route path="/data" element={<DataGrid />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;
