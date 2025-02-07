import React from 'react';

const Footer = () => (
  <footer className="bg-navy-blue text-white py-4 mt-16">
    <div className="container mx-auto text-center">
      <p>&copy; 2025 ShelfWise. All rights reserved.</p>
    </div>
  </footer>
);

export default function About() {
  return (
    <div style={{ paddingTop: '60px', minHeight: '100vh' }}>
      <section className="bg-cream-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-navy-blue">
            About ShelfWise
          </h1>
          <p className="text-lg sm:text-xl text-navy-blue mt-4">
            ShelfWise is your go-to platform for discovering and sharing books. Our mission is to connect book lovers and help them find their next great read.
          </p>
        </div>
      </section>

      <section className="bg-navy-blue py-16">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-cream-white">
            Our Story
          </h2>
          <p className="text-lg sm:text-xl text-cream-white mt-4 text-center">
            ShelfWise was founded by a group of avid readers who wanted to create a community where people could easily discover and share books. We believe that books have the power to change lives, and we are passionate about making it easier for everyone to find books that inspire and educate.
          </p>
        </div>
      </section>

      <section className="bg-cream-white py-16">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-navy-blue">
            Our Team
          </h2>
          <p className="text-lg sm:text-xl text-navy-blue mt-4 text-center">
            Our team is made up of book enthusiasts, developers, and designers who are dedicated to creating the best possible experience for our users. We are constantly working to improve ShelfWise and add new features that make it easier for you to find and share books.
          </p>
        </div>
      </section>

      <section className="bg-navy-blue py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-cream-white">
            Join Us
          </h2>
          <p className="text-lg sm:text-xl text-cream-white mt-4">
            We are always looking for passionate individuals to join our team. If you love books and want to help us build the best book discovery platform, we would love to hear from you.
          </p>
          <a href="mailto:contact@shelfwise.com" className="mt-8 inline-block bg-vibrant-orange text-white font-semibold py-3 px-8 rounded-full hover:bg-orange-600 transition duration-300">
            Contact Us
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
}