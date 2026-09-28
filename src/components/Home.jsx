import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>

      <header>
        <div class="logo">WoodNest</div>

        <nav>
            <a href="#home">Home</a>
            <a href="#products">Products</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>

    <section id="home" class="hero">

        <div class="hero-content">
            <h1>Make Your Home Beautiful</h1>

            <p>
                Discover stylish and comfortable furniture
                designed for your beautiful home.
            </p>

            <a href="#products" class="btn">Shop Now</a>
        </div>

    </section>

    <section id="products" class="products">

        <h2>Our Furniture</h2>

        <p class="section-text">
            Explore our collection of modern and elegant furniture.
        </p>

        <div class="product-container">

            <div class="card">
                <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80"/>

                <h3>Modern Sofa</h3>

                <p>Comfortable and stylish sofa for your living room.</p>

                <h4>₹24,999</h4>

                <button>Buy Now</button>
            </div>


            <div class="card">
                <img src="https://images.unsplash.com/photo-1549497538-303791108f95?auto=format&fit=crop&w=600&q=80"/>

                <h3>Wooden Chair</h3>

                <p>Elegant wooden chair with a premium finish.</p>

                <h4>₹6,999</h4>

                <button>Buy Now</button>
            </div>


            <div class="card">
                <img src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=600&q=80"/>

                <h3>Luxury Table</h3>

                <p>Modern table perfect for dining and work spaces.</p>

                <h4>₹12,499</h4>

                <button>Buy Now</button>
            </div>

        </div>

    </section>

    <section id="about" class="about">

        <div>
            <h2>About WoodNest</h2>

            <p>
                WoodNest Furniture provides high-quality and stylish
                furniture for modern homes. Our products are designed
                with comfort, quality and beauty in mind.
            </p>

            <a href="#contact" class="btn">Learn More</a>
        </div>

    </section>

    <section id="contact" class="contact">

        <h2>Contact Us</h2>

        <p>Email: woodnest@gmail.com</p>

        <p>Phone: +91 98765 43210</p>

        <p>Location: Bangalore, India</p>

    </section>

    <footer>
        <p>© 2026 WoodNest Furniture. All Rights Reserved.</p>
    </footer>
    </>
  );
}
 
export default Home;
 
