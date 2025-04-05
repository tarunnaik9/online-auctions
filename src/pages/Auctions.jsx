import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { io } from "socket.io-client";

import duke250 from "../images/duke250.jpeg";
import duke390 from "../images/duke390.jpeg";
import passion from "../images/passion.jpeg";
import xpulse from "../images/xpulse.jpeg";
import ns200 from "../images/ns200.jpeg";
import royal from "../images/royal.jpeg";
import activa from "../images/activa.jpeg";
import jupiter from "../images/jupiter.jpeg";
import ola from "../images/ola.jpeg";
import yamaha from "../images/yamaha.jpeg";
import aprilla from "../images/aprilla.jpeg";
import suzuki from "../images/suzuki.jpeg";
import swift from "../images/swift.jpeg";
import creta from "../images/creta.jpeg";
import thar from "../images/thar.jpeg";
import socorpio from "../images/socorpio.jpeg";
import nexon from "../images/nexon.jpeg";
import octavia from "../images/octavia.jpeg";

const socket = io("http://localhost:5000");

const initialAuctionData = [
  {
    category: "Bikes",
    vehicles: [
      { name: "GT 650", img: duke250, year: 2024, km: "15,000 km", bid: "₹4,10,000" },
      { name: "Hero Passion", img: passion, year: 2019, km: "25,000 km", bid: "₹48,000" },
      { name: "Duke 390", img: duke390, year: 2021, km: "10,000 km", bid: "₹2,00,000" },
      { name: "Hero Xpulse", img: xpulse, year: 2022, km: "7,000 km", bid: "₹1,10,000" },
      { name: "Ns 200", img: ns200, year: 2023, km: "25,000 km", bid: "₹68,000" },
      { name: "Royal Enfield Classic 350", img: royal, year: 2024, km: "8,000 km", bid: "₹2,90,000" }
    ]
  },
  {
    category: "Scooters",
    vehicles: [
      { name: "Activa 6G", img: activa, year: 2023, km: "5,000 km", bid: "₹75,000" },
      { name: "Jupiter", img: jupiter, year: 2022, km: "8,000 km", bid: "₹68,000" },
      { name: "Ola Electric S1 Pro", img: ola, year: 2022, km: "8,000 km", bid: "₹78,000" },
      { name: "Yamaha Fascino 125", img: yamaha, year: 2022, km: "8,000 km", bid: "₹60,000" },
      { name: "Aprilia SR 125", img: aprilla, year: 2022, km: "8,000 km", bid: "₹1,00,000" },
      { name: "Suzuki Access 125", img: suzuki, year: 2022, km: "8,000 km", bid: "₹55,000" }
    ]
  },
  {
    category: "Cars",
    vehicles: [
      { name: "Swift", img: swift, year: 2020, km: "40,000 km", bid: "₹4,50,000" },
      { name: "Creta", img: creta, year: 2019, km: "60,000 km", bid: "₹8,00,000" },
      { name: "Mahindra Thar 4*4", img: thar, year: 2023, km: "40,000 km", bid: "₹13,50,000" },
      { name: "Mahindra Scorpio N", img: socorpio, year: 2023, km: "60,000 km", bid: "₹14,00,000" },
      { name: "TATA Nexon", img: nexon, year: 2024, km: "40,000 km", bid: "₹10,50,000" },
      { name: "Skoda Octavia", img: octavia, year: 2022, km: "60,000 km", bid: "₹9,00,000" }
    ]
  }
];

const Auctions = () => {
  const [selectedCategory, setSelectedCategory] = useState("Bikes");
  const [bids, setBids] = useState(initialAuctionData);

  useEffect(() => {
    socket.on("updateBid", (updatedData) => {
      setBids((prevBids) => {
        return prevBids.map((category) => {
          if (category.category === updatedData.category) {
            return {
              ...category,
              vehicles: category.vehicles.map((vehicle) =>
                vehicle.name === updatedData.vehicleName
                  ? { ...vehicle, bid: `₹${updatedData.bidAmount}` }
                  : vehicle
              )
            };
          }
          return category;
        });
      });
    });

    return () => {
      socket.off("updateBid");
    };
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handlePlaceBid = (vehicleName) => {
    const bidAmount = prompt(`Enter your bid amount for ${vehicleName}:`);
    if (!bidAmount || isNaN(bidAmount)) {
      alert("Invalid bid amount!");
      return;
    }

    socket.emit("placeBid", { category: selectedCategory, vehicleName, bidAmount });
    console.log(`Bid placed on ${vehicleName} for ₹${bidAmount}`);
  };

  const filteredVehicles = bids.find((cat) => cat.category === selectedCategory)?.vehicles || [];

  return (
    <Container className="mt-5">
      <h1 className="text-center">Live Auctions</h1>
      <h3 className="text-center">Browse Ongoing Auctions and Start Bidding!</h3>

      <div className="d-flex justify-content-center gap-3 my-4">
        {bids.map((cat, index) => (
          <Button
            key={index}
            variant={selectedCategory === cat.category ? "primary" : "outline-primary"}
            onClick={() => handleCategoryClick(cat.category)}
          >
            {cat.category}
          </Button>
        ))}
      </div>

      <Row>
        {filteredVehicles.map((vehicle, idx) => (
          <Col key={idx} md={4} className="mb-4">
            <Card className="h-100 d-flex flex-column">
              <Card.Img
                variant="top"
                src={vehicle.img}
                alt={vehicle.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{vehicle.name}</Card.Title>
                <Card.Text className="flex-grow-1">
                  Year: {vehicle.year} <br />
                  Kilometers: {vehicle.km} <br />
                  Current Bid: {vehicle.bid}
                </Card.Text>
                <Button variant="primary" onClick={() => handlePlaceBid(vehicle.name)}>
                  Place Bid
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Auctions;
