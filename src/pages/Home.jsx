import { Container, Row, Col, Card, Carousel, CarouselCaption } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

// Import Images
import slides from "../images/slides.jpeg";
import slides1 from "../images/slides1.jpeg";
import slides2 from "../images/slides2.jpeg";

const Home = () => {
  return (
    <Container className="text-center mt-5">
      {/* Hero Section */}
      <h2>Welcome to Online Auction</h2>
      <p>Bid on amazing products in real-time.</p>
{/* Image Slider (Carousel) */}
<Carousel className="mt-4">
  <Carousel.Item>
    <img 
      className="d-block mx-auto" 
      src={slides} 
      alt="First slide" 
      style={{ width: "100%", height: "400px", objectFit: "cover" }} 
    />
    <Carousel.Caption>
      <h2 className="fw-bold text-white">India’s Largest Pre-Owned Phygital Marketplace</h2>
      <p className="text-white">For Vehicles and Equipment</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img 
      className="d-block mx-auto" 
      src={slides1} 
      alt="Second slide" 
      style={{ width: "100%", height: "400px", objectFit: "cover" }} 
    />
    <Carousel.Caption>
      <h2 className="fw-bold text-white">Buy and Sell Vehicles with Confidence</h2>
      <p className="text-white">Seamless and Secure Auction Platform</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img 
      className="d-block mx-auto" 
      src={slides2} 
      alt="Third slide" 
      style={{ width: "100%", height: "400px", objectFit: "cover" }} 
    />
    <Carousel.Caption>
      <h2 className="fw-bold text-white">Join Our Community of 100K+ Users</h2>
      <p className="text-white">Start Bidding on Your Next Vehicle Today</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


      {/* Achievements Section */}
      <h3 className="mt-5">Our Achievements </h3>
      <Row className="mt-5">
        <Col md={4}>
          <Card className="p-3 shadow">
            <h3>100K+</h3>
            <p>Registered Users</p>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-3 shadow">
            <h3>500K+</h3>
            <p>Successful Bids</p>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-3 shadow">
            <h3>50+</h3>
            <p>Investors</p>
          </Card>
        </Col>
      </Row>

      {/* Investors Section */}
<h3 className="mt-5 text-center">Our Investors</h3>
<Row className="mt-5 justify-content-center">
  <Col md={6}>
    <Card className="p-3 shadow text-center">
      <h5>Cars24</h5>
      <p>Cars24 is a leading online automotive marketplace that simplifies the process of buying and selling used vehicles. Founded in 2015 and headquartered in Gurugram, India, Cars24 has revolutionized the auto industry with its tech-driven approach.</p>
    </Card>
  </Col>
  <Col md={6}>
    <Card className="p-3 shadow text-center">
      <h5>TrueCar</h5>
      <p>TrueCar is a prominent online automotive marketplace based in the United States.
        <br></br>
         It specializes in connecting car buyers with certified dealers, offering a transparent and hassle-free car-buying experience.</p>
    </Card>
  </Col>
</Row>


      {/* Client Reviews Section */}
      <h3 className="mt-5">Client Reviews</h3>
      <Row className="mt-5">
        <Col md={4}><Card className="p-3 shadow"><h5>Mr.Joosphen</h5>⭐⭐⭐⭐<p>"Excellent Platform!" The auction process was seamless, and I found exactly what I needed at a great price. Highly recommended!"</p></Card></Col>
        <Col md={4}><Card className="p-3 shadow"><h5>Ms.Swathi Naidu</h5>⭐⭐⭐⭐⭐<p>"Excellent Customer Support" The support team was very responsive and helped me with my queries throughout the bidding process.</p></Card></Col>
        <Col md={4}><Card className="p-3 shadow"><h5>Mr.Musraf</h5>⭐⭐⭐⭐⭐<p>"A Thrilling Experience" The auctions are so engaging! I enjoy the competitive spirit and the excitement of winning bids.</p></Card></Col>
      </Row>

  {/* Footer */}
  <footer className="mt-5 p-3 bg-dark text-white">
        <p>© 2025 Online Auction. All rights reserved.</p>
     
      </footer>


    </Container>
  );
};

export default Home;
