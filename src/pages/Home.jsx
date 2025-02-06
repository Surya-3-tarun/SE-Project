import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [homeBooks, setHomeBooks] = useState([]);

  useEffect(()=>{
    const fetchHomeBooks = async() => {
      try {
        const res = await fetch('/api/book/homeBooks');
        const data = await res.json();
        setHomeBooks(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchHomeBooks();
  }, []);

  return (
    <div className='home-container'>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container mx-auto text-center">
          <h1 className="hero-title">
            Welcome to ShelfWise
          </h1>
          <p className="hero-subtitle">
            Discover your next great read today!
          </p>
          <Link to="/allBooks" className="btn-primary">
            Browse Books
          </Link>
        </div>
      </section>

      {/* Featured Categories Section */}
      <section className="categories-section">
        <div className="p-6 container bg-rose-400 mx-auto">
          <h2 className="section-title">
            <span className='highlight'>Explore</span>
            <span className='mx-2'>Categories</span>
          </h2>
          <div className="categories-grid">
            <div className="category-card">
              <h3 className="category-title">Fiction</h3>
              <p className="category-description">Immerse yourself in stories that captivate and inspire.</p>
              <Link to="/category/fiction" className="category-link">
                Browse Fiction
              </Link>
            </div>
            <div className="category-card">
              <h3 className="category-title">Non-Fiction</h3>
              <p className="category-description">Explore real-world topics and enrich your knowledge.</p>
              <Link to="/category/non-fiction" className="category-link">
                Browse Non-Fiction
              </Link>
            </div>
            <div className="category-card">
              <h3 className="category-title">Science Fiction</h3>
              <p className="category-description">Discover futuristic worlds and advanced technologies.</p>
              <Link to="/category/sci-fi" className="category-link">
                Browse Sci-Fi
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Books Section */}
      <section className="popular-books-section">
        <div className='container mx-auto'>
        <h2 className="section-title">
            Popular Books
        </h2>
        <div className='books-grid'>
          {homeBooks.length > 0 ? (
            homeBooks.map((book) => (
              <div key={book._id} className='book-card'>
                <img src= {book.bookImage} className='book-image'/>
                <h3 className='book-title'>
                  {book.bookname}
                </h3>
                <p className="book-author">
                     Author : {book.author}
                </p>
                <Link
                    to={`/viewBook/${book._id}`} // Link to the book's detail page
                    className="btn-secondary"
                  >
                    View Details
                </Link>
              </div>
            ))
          ):(
            <p>Loading!!!</p>
          )}
        </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container mx-auto text-center">
          <h2 className="section-title">
            Ready to start your reading journey?
          </h2>
          <p className="cta-subtitle">
            Join our community of book lovers today!
          </p>
          <Link to="/signup" className="btn-primary">
            Sign Up Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
