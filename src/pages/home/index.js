import React from "react";
import { Carousel, Card } from "react-bootstrap";
import Header from "../../components/Header/index";
import Img1 from "../../assets/1.png";
import Img2 from "../../assets/2.png";
import Img3 from "../../assets/3.png";
import "./styles.css";

const Home = () => {
  return (
    <>
      <Card className="bg-dark text-white">
        <div className="container" align="center">
          <Card.ImgOverlay>
            <Header />
            <br />
            <br />
            <div className="definiarmus">
              <table>
                <tr className="grid">
                  <Carousel className="my-6 mx-4">
                    <Carousel.Item>
                      <img className="d-flex w-100" src={Img1} alt="Card1 " />
                    </Carousel.Item>

                    <Carousel.Item>
                      <img className="d-flex w-100" src={Img2} alt="Card2" />
                    </Carousel.Item>

                    <Carousel.Item>
                      <img className="d-flex w-100" src={Img3} alt="Card3" />
                    </Carousel.Item>
                  </Carousel>
                </tr>
              </table>
            </div>{" "}
          </Card.ImgOverlay>
        </div>
      </Card>
    </>
  );
};

export default Home;
