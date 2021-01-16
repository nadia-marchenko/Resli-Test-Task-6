import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './index.scss';

// Import images
function importAll(r) {
  r.keys().forEach(r);
}
importAll(require.context('../../assets', true, /\.jpg$/));

const MainPage = () => {
  return (
    <div className="content-wrapper">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/slider-1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/slider-2.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/slider-3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <h2 id='about-us'>About us</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus commodo finibus ante nec sagittis. Aenean a neque tempus, luctus nisl a, tincidunt neque. Duis euismod lectus eget urna vestibulum, in iaculis libero cursus. Nulla eu cursus orci. Nulla eleifend risus at fringilla ultrices. Fusce at mi ac felis sodales tincidunt quis sit amet lorem. Etiam consequat nulla a augue faucibus viverra. Integer vel pellentesque dui. Phasellus a nulla varius odio gravida scelerisque accumsan quis libero. In mattis enim id euismod molestie. Curabitur vitae purus ligula. Nam non augue lacinia odio feugiat tincidunt quis quis urna. In aliquet tellus sit amet dignissim sagittis. Ut ullamcorper, augue ac semper pharetra, est lacus imperdiet felis, sed rutrum sem elit quis odio. Quisque imperdiet est scelerisque, posuere mi non, eleifend erat.
      </p>
      <h2 id='contacts'>Contacts</h2>
      <ul>
        <li>E-mail: lorem@ipsum.com </li>
        <li>Phone: +273 878 67 78</li>
        <li>Location: Proin efficitur magna sed lacus semper vestibulum.</li>
        <li>Vivamus eu neque vehicula, tempus ligula et, consequat est.</li>
        <li>Quisque viverra justo in dolor varius tempor.</li>
      </ul>
    </div>
  );
};

export default MainPage;