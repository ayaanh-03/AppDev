import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Ayaan Hussain</h1>
      <p>B.S. of Computer Science at University of Maryland, College Park</p>
      <Link to="/about">Go to About Page</Link>
    </div>
  );
}

export default Home;
