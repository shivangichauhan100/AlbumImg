import React, { useState } from 'react';
import ImgGrid from './pages/ImgGrid';
import Pagination from './pages/Pagination';
import './App.css';

function App() {
  const staticImages = [
    '/img/car.png',
    '/img/portfolio.png',
    '/img/portfoli1.png',
    '/img/portfolio2.png',
    '/img/portfolio3.png',
    '/img/spotify.png',
    '/img/password.png', 
    '/img/fitness.png',
    '/img/expense.png', 
    '/img/password.png',
    '/img/fitness.png',
    '/img/expense.png',
    
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 6;

  const startIndex = (currentPage - 1) * imagesPerPage;
  const currentImages = staticImages.slice(startIndex, startIndex + imagesPerPage);
  const totalPages = Math.ceil(staticImages.length / imagesPerPage);

  return (
    <div className="App">
      <h1>Static React Photo Album (3 Left + 3 Right)</h1>
      <ImgGrid images={currentImages} />
      <Pagination current={currentPage} total={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
}

export default App;
