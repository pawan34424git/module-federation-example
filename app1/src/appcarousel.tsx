import "bootstrap/dist/css/bootstrap.min.css";

import Carousel from "react-bootstrap/Carousel";

const AppOneCarousel = () => {
  return (
    <div style={{ backgroundColor: "#000", margin: 10 }}>
      <Carousel>
        <Carousel.Item>
          <img src="https://media.istockphoto.com/id/2123163117/photo/businessman-touching-digital-global-network-of-cloud-data-exchange-seamless-integration-on.webp?b=1&s=612x612&w=0&k=20&c=CT3DMVqe6zuMMcr2DHZJMQJh0kP8LITarhq69V5vWEc="></img>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://media.istockphoto.com/id/2031580709/photo/cloud-computing-and-technology-icons-safeguarding-lifestyle-and-confidential-information.webp?b=1&s=612x612&w=0&k=20&c=qbYlcFHsdna6O0C09Gcx4x_-XVibYfS3yWKHOFyZstA="></img>

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://media.istockphoto.com/id/1843798939/photo/cloud-computing-cloud-services-infrastructure-and-businessman-use-tablet-and-synchronize-the.webp?b=1&s=612x612&w=0&k=20&c=_Sr0n3RD3huepymKUulIL9mGOcbP-HmfenBr-AAS490="></img>

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default AppOneCarousel;
