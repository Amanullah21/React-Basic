import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Slider() {
  const image ='https://media-exp1.licdn.com/dms/image/C4E03AQGbUAgHggg7-Q/profile-displayphoto-shrink_200_200/0/1650224774901?e=1667433600&v=beta&t=JbkKmkqqO_NhBxwyVQiXNN0XHy_scDCkd3hdA7-EFL0'
  return (
    <div className="App">
      <Carousel>
        <div>
          <img src={image} alt='aman'/>
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={image} alt='aman' />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={image} alt='Aman'/>
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
}

export default Slider;
