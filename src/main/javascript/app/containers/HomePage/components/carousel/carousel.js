import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

export default class CarouselComponent extends Component {
  render() {
    return (
      <Carousel >
        <Carousel.Item >
          <img
            className="d-block w-100"
            src="https://i.hizliresim.com/3ahoe9.png"
            alt="First slide"

          />
          <Carousel.Caption>
      <h3>A.A. Milne</h3>
      <p>"Some people talk to animals. Not many listen though. That's the problem."</p>
    </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block w-100"
            src="https://i.hizliresim.com/wdnYXG.png"
            alt="First slide"

          />
          <Carousel.Caption>
          <h3>Irene M. Pepperberg</h3>
          <p>"Clearly, animals know more than we think, and think a great deal more than we know." </p>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block w-100"
            src="https://i.hizliresim.com/28nq8m.png"
            alt="First slide"

          />
          <Carousel.Caption>
          <h3>Gregory Maguire</h3>
      <p>"Animals are born who they are, accept it, and that is that. They live with greater peace than people do."</p>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block w-100"
            src="https://i.hizliresim.com/mxqyA5.png"
            alt="First slide"

          />
          <Carousel.Caption>


          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block w-100"
            src="https://i.hizliresim.com/0MhU62.png"
            alt="First slide"

          />
          <Carousel.Caption>


          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block w-100"
            src="https://i.hizliresim.com/YKlDQv.png"
            alt="First slide"

          />
          <Carousel.Caption>


          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
