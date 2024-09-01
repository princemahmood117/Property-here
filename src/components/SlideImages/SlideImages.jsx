import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const sliderData = [
  {
    estate_title: "Downtown Office Tower",
    price: "$10,000,000",
    area: "50,000 sqft",
    image: "https://i.ibb.co/dm4rPQF/office.jpg",
  },
  {
    estate_title: "High-End Retail Space",
    price: "$15,000/month",
    area: "5,000 sqft",
    image: "https://i.ibb.co/sKxPMFB/retail.jpg",
  },
  {
    estate_title: "Spacious Warehouse",
    price: "$3,000,000",
    area: "100,000 sqft",
    image: "https://i.ibb.co/YRsZF8F/Warehousing.jpg",
  },
  {
    estate_title: "Industrial Facility",
    price: "$7,500,000",
    area: "200,000 sqft",
    image: "https://i.ibb.co/nfqpRQX/industrial.jpg",
  },
  {
    estate_title: "Gourmet Restaurant Space",
    price: "$20,000/month",
    area: "4,000 sqft",
    image: "https://i.ibb.co/1MGt7LY/restaurent.jpg",
  },
  {
    estate_title: "City Entertainment Venue",
    price: "$12,000,000",
    area: "60,000 sqft",
    image: "https://i.ibb.co/NjyBynZ/entertainment.jpg",
  },
];

const SlideImages = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
      };
    return (
        <div className="h-screen pt-10">
          <div className="m-auto ">
            <Slider {...settings}>
    
            {sliderData.map((item, index) => {
              return (
                <div key={index}>
                  <div className="flex space-x-2">
                    <img
                      className="h-60 w-60"
                      src={item.image}
                      alt=""
                    />
                  </div>
    
                  <div className="p-2 bg-blue-600">
                    <p className="font-semibold text-white">{item.estate_title}</p>
                    <p className="font-semibold text-white">{item.price}</p>
                  </div>
                </div>
              );
            })}
    
            </Slider>
          
          </div>
        </div>
      );
};

export default SlideImages;