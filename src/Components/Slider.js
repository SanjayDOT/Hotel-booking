import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import banner1 from './images/banner1.jpg';
import banner2 from './images/banner2.jpg';
import banner3 from './images/banner3.jpg';

class Slider extends Component {
  render() {
    return (
        <Carousel className="Carousel">
            <div>
                <img src={banner1} alt="banner1" />
                <p className="legend">banner 1</p>
            </div>
            <div>
                <img src={banner2} alt="banner2" />
                <p className="legend">banner 2</p>
            </div>
            <div>
                <img src={banner3} alt="banner3" />
                <p className="legend">banner 3</p>
            </div>
        </Carousel>
    );
  }
}

export default Slider;



