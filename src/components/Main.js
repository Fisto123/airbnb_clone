import React, { useState } from "react";
import "./main.css";
import { FavoriteOutlined, HeartBroken, Star } from "@mui/icons-material";
import { useLocation } from "react-router-dom";
import { IconButton, Tooltip } from "@mui/material";
const Main = () => {
  const location = useLocation();
  const [likedItems, setLikedItems] = useState([]);

  const handleLike = (id) => {
    if (likedItems.includes(id)) {
      setLikedItems(likedItems.filter((item) => item !== id));
    } else {
      setLikedItems([...likedItems, id]);
    }
  };
  console.log(likedItems);
  const cat = location.state?.text;
  const cardDetails = [
    {
      id: 1,
      image: "../assets/om1.webp",
      location: "Sao Paoulo, Brazigl",
      desc: "Stay with Eloy",
      position: "Entrepreneur",
      date: "Aug 3-8",
      price: 33,
      time: "night",
      authorImg: "../assets/p2.avif",
      star: 4,
      cat: "OMG!",
    },
    {
      id: 2,
      image: "../assets/om1.webp",
      location: "Mexico City, Mexico",
      desc: "Stay with Riley",
      position: "Artist",
      date: "Aug 5-10",
      price: 61,
      time: "night",
      authorImg: "../assets/p2.avif",
      cat: "OMG!",
    },
    {
      id: 3,
      image: "/assets/p5.webp",
      location: "Ottawa , Canada",
      desc: "Stay with Christi-Anna. Carleton University",
      position: "Artist",
      date: "Jul 12-19",
      price: 47,
      time: "night",
      authorImg: "../assets/p2.avif",
      star: 4.86,
      cat: "Trending",
    },
    {
      id: 4,
      image: "/assets/p6.webp",
      location: "Nantes, France",
      desc: "Stay with Christi-Anna. Carleton University",
      position: "Artist",
      date: "Sep 2-7",
      price: 150,
      time: "night",
      authorImg: "../assets/p2.avif",
      star: 4.96,
      cat: "Mansions",
    },
    {
      id: 5,
      image: "/assets/p7.webp",
      location: "Lyon, France",
      desc: "Stay with Edouard. Coach trainer",
      position: "Artist",
      date: "Jul 16-21",
      price: 99,
      time: "night",
      authorImg: "../assets/p2.avif",
      star: 5.0,
      cat: "Islands",
    },
    {
      id: 6,
      image: "/assets/p8.webp",
      location: "Millan, Italy",
      desc: "Stay with Edouard. Coach trainer",
      position: "Artist",
      date: "Jul 28- Aug2",
      price: 101,
      time: "night",
      authorImg: "../assets/p2.avif",
      star: 5.0,
      cat: "Islands",
    },

    {
      id: 7,
      image: "/assets/card1.webp",
      location: "Sao Paoulo, Brazigl",
      desc: "Stay with Eloy",
      position: "Entrepreneur",
      date: "Aug 3-8",
      price: 33,
      time: "night",
      authorImg: "../assets/p2.avif",
      star: 4,
      cat: "TrendAmazing views",
    },
    {
      id: 8,
      image: "/assets/p4.webp",
      location: "Mexico City, Mexico",
      desc: "Stay with Riley",
      position: "Artist",
      date: "Aug 5-10",
      price: 61,
      time: "night",
      authorImg: "../assets/p2.avif",
    },
    {
      id: 9,
      image: "/assets/p5.webp",
      location: "Ottawa , Canada",
      desc: "Stay with Christi-Anna. Carleton University",
      position: "Artist",
      date: "Jul 12-19",
      price: 47,
      time: "night",
      authorImg: "../assets/p2.avif",
      star: 4.86,
      cat: "Iconic cities",
    },
    {
      id: 10,
      image: "/assets/p6.webp",
      location: "Nantes, France",
      desc: "Stay with Christi-Anna. Carleton University",
      position: "Artist",
      date: "Sep 2-7",
      price: 150,
      time: "night",
      authorImg: "../assets/p2.avif",
      star: 4.96,
      cat: "Trending",
    },
    {
      id: 11,
      image: "/assets/p7.webp",
      location: "Lyon, France",
      desc: "Stay with Edouard. Coach trainer",
      position: "Artist",
      date: "Jul 16-21",
      price: 99,
      time: "night",
      authorImg: "../assets/p2.avif",
      star: 5.0,
    },
    {
      id: 12,
      image: "/assets/p8.webp",
      location: "Millan, Italy",
      desc: "Stay with Edouard. Coach trainer",
      position: "Artist",
      date: "Jul 28- Aug2",
      price: 101,
      time: "night",
      authorImg: "../assets/p2.avif",
      star: 5.0,
      cat: "rooms",
    },
    {
      id: 13,
      image: "/assets/card1.webp",
      location: "Sao Paoulo, Brazigl",
      desc: "Stay with Eloy",
      position: "Entrepreneur",
      date: "Aug 3-8",
      price: 33,
      time: "night",
      authorImg: "../assets/p2.avif",
      star: 4,
      cat: "Domes",
    },
    {
      id: 14,
      image: "/assets/p4.webp",
      location: "Mexico City, Mexico",
      desc: "Stay with Riley",
      position: "Artist",
      date: "Aug 5-10",
      price: 61,
      time: "night",
      authorImg: "../assets/p2.avif",
      cat: "Boats",
    },
    {
      id: 15,
      image: "/assets/p5.webp",
      location: "Ottawa , Canada",
      desc: "Stay with Christi-Anna. Carleton University",
      position: "Artist",
      date: "Jul 12-19",
      price: 47,
      time: "night",
      authorImg: "../assets/p2.avif",
      star: 4.86,
      cat: "Desert",
    },
    {
      id: 16,
      image: "/assets/p6.webp",
      location: "Nantes, France",
      desc: "Stay with Christi-Anna. Carleton University",
      position: "Artist",
      date: "Sep 2-7",
      price: 150,
      time: "night",
      authorImg: "../assets/p2.avif",
      star: 4.96,
      cat: "Earth homes",
    },
    {
      id: 17,
      image: "/assets/p7.webp",
      location: "Lyon, France",
      desc: "Stay with Edouard. Coach trainer",
      position: "Artist",
      date: "Jul 16-21",
      price: 99,
      time: "night",
      authorImg: "../assets/p2.avif",
      star: 5.0,
      cat: "Design",
    },
    {
      id: 18,
      image: "/assets/p8.webp",
      location: "Millan, Italy",
      desc: "Stay with Edouard. Coach trainer",
      position: "Artist",
      date: "Jul 28- Aug2",
      price: 101,
      time: "night",
      authorImg: "../assets/p2.avif",
      star: 5.0,
      cat: "Trending",
    },
    {
      id: 19,
      image: "/assets/pool1.webp",
      location: "Ngaparou, Senegal",
      desc: "Stay with Edouard. Coach trainer",
      position: "Artist",
      date: "Sep 4- 9",
      price: 145,
      time: "night",
      authorImg: "../assets/p2.avif",
      star: 4.86,
      cat: "Amazing pools",
    },
    {
      id: 20,
      image: "/assets/pool2.webp",
      location: "El Pajar, Spain",
      desc: "Stay with Edouard. Coach trainer",
      position: "Artist",
      date: "Aug 28- Sep2",
      price: 569,
      time: "night",
      authorImg: "../assets/p2.avif",
      star: 4.89,
      cat: "Amazing pools",
    },
    {
      id: 21,
      image: "/assets/pool3.webp",
      location: "San Batlome, Spain",
      desc: "3101 Kilometers away",
      position: "Artist",
      date: "Jul 22 - 27",
      price: 62,
      time: "night",
      authorImg: "../assets/p2.avif",
      star: 4.89,
      cat: "Amazing pools",
    },
    {
      id: 22,
      image: "/assets/pool9.webp",
      location: "Lekki Nigeria",
      desc: "7km away",
      position: "Artist",
      date: "Aug 28- Sep2",
      price: 342,
      time: "night",
      authorImg: "../assets/p2.avif",
      cat: "Amazing pools",
    },
    {
      id: 23,
      image: "/assets/pool6.webp",
      location: "Accra Ghana",
      desc: "7km away",
      position: "Artist",
      date: "Jul 10- 17",
      price: 685,
      time: "night",
      authorImg: "../assets/p2.avif",
      cat: "Amazing pools",
    },
    {
      id: 24,
      image: "/assets/pool7.webp",
      location: "Fatick Senegal",
      desc: "2,354 km away",
      position: "Artist",
      date: "Jul 17- 23",
      price: 144,
      time: "night",
      authorImg: "../assets/p2.avif",
      cat: "Amazing pools",
    },
    {
      id: 25,
      image: "/assets/pool8.webp",
      location: "Maspalomas Spain",
      desc: "7km away",
      position: "Artist",
      date: "Jul 10- 17",
      price: 144,
      time: "night",
      authorImg: "../assets/p2.avif",
      cat: "Amazing pools",
    },
    {
      id: 26,
      image: "/assets/pool9.webp",
      location: "Arguinegiun Spain",
      desc: "7km away",
      position: "Artist",
      date: "Jul 10- 17",
      price: 685,
      time: "night",
      authorImg: "../assets/p2.avif",
      cat: "Amazing pools",
    },
    {
      id: 27,
      image: "/assets/pool2.webp",
      location: "Millan Italy",
      desc: "7km away",
      position: "Artist",
      date: "Jul 10- 17",
      price: 685,
      time: "night",
      authorImg: "../assets/p2.avif",
      cat: "Amazing pools",
    },
    {
      id: 28,
      image: "/assets/pool9.webp",
      location: "Madrid Spain",
      desc: "7km away",
      position: "Artist",
      date: "Jul 10- 17",
      price: 685,
      time: "night",
      authorImg: "../assets/p2.avif",
      cat: "Amazing pools",
    },
    {
      id: 29,
      image: "/assets/pool1.webp",
      location: "Barcelona Spain",
      desc: "7km away",
      position: "Artist",
      date: "Jul 10- 17",
      price: 685,
      time: "night",
      authorImg: "../assets/p2.avif",
      cat: "Amazing pools",
    },
    {
      id: 30,
      image: "/assets/pool9.webp",
      location: "El Pajar, Spain",
      desc: "7km away",
      position: "Artist",
      date: "Jul 10- 17",
      price: 685,
      time: "night",
      authorImg: "../assets/p2.avif",
      cat: "Amazing pools",
    },
    {
      id: 31,
      image: "/assets/pool6.webp",
      location: "Ibadan Nigeria",
      desc: "7km away",
      position: "Artist",
      date: "Jul 10- 17",
      price: 685,
      time: "night",
      authorImg: "../assets/p2.avif",
      cat: "Amazing pools",
    },
    {
      id: 32,
      image: "/assets/pool6.webp",
      location: "Accra Ghana",
      desc: "7km away",
      position: "Artist",
      date: "Jul 10- 17",
      price: 685,
      time: "night",
      authorImg: "../assets/p2.avif",
      cat: "Amazing pools",
    },
    {
      id: 33,
      image: "/assets/d1.webp",
      location: "Arguinegiun Spain",
      desc: "7km away",
      position: "Artist",
      date: "Jul 10- 17",
      price: 685,
      time: "night",
      authorImg: "../assets/p2.avif",
      cat: "Trending",
    },
    {
      id: 34,
      image: "/assets/d2.webp",
      location: "Millan Italy",
      desc: "7km away",
      position: "Artist",
      date: "Jul 10- 17",
      price: 685,
      time: "night",
      authorImg: "../assets/p2.avif",
      cat: "Trending",
    },
    {
      id: 33,
      image: "/assets/d3.webp",
      location: "Madrid Spain",
      desc: "7km away",
      position: "Artist",
      date: "Jul 10- 17",
      price: 685,
      time: "night",
      authorImg: "../assets/p2.avif",
      cat: "Trending",
    },
    {
      id: 34,
      image: "/assets/d4.webp",
      location: "Barcelona Spain",
      desc: "7km away",
      position: "Artist",
      date: "Jul 10- 17",
      price: 685,
      time: "night",
      authorImg: "../assets/p2.avif",
      cat: "Trending",
    },
    {
      id: 35,
      image: "/assets/d5.webp",
      location: "El Pajar, Spain",
      desc: "7km away",
      position: "Artist",
      date: "Jul 10- 17",
      price: 685,
      time: "night",
      authorImg: "../assets/p2.avif",
      cat: "Trending",
    },
    {
      id: 36,
      image: "/assets/d6.webp",
      location: "Ibadan Nigeria",
      desc: "7km away",
      position: "Artist",
      date: "Jul 10- 17",
      price: 685,
      time: "night",
      authorImg: "../assets/p2.avif",
      cat: "Trending",
    },
    {
      id: 37,
      image: "/assets/d3.webp",
      location: "Accra Ghana",
      desc: "7km away",
      position: "Artist",
      date: "Jul 10- 17",
      price: 685,
      time: "night",
      authorImg: "../assets/p2.avif",
      cat: "Trending",
    },
    {
      id: 38,
      image: "/assets/d1.webp",
      location: "Arguinegiun Spain",
      desc: "7km away",
      position: "Artist",
      date: "Jul 10- 17",
      price: 685,
      time: "night",
      authorImg: "../assets/p2.avif",
      cat: "Trending",
    },
    {
      id: 39,
      image: "/assets/d2.webp",
      location: "Millan Italy",
      desc: "7km away",
      position: "Artist",
      date: "Jul 10- 17",
      price: 685,
      time: "night",
      authorImg: "../assets/p2.avif",
      cat: "Trending",
    },
    {
      id: 40,
      image: "/assets/m1.webp",
      location: "Madrid Spain",
      desc: "7km away",
      position: "Artist",
      date: "Jul 10- 17",
      price: 685,
      time: "night",
      authorImg: "../assets/p2.avif",
      cat: "Mansions",
    },
    {
      id: 41,
      image: "/assets/m2.webp",
      location: "Barcelona Spain",
      desc: "7km away",
      position: "Artist",
      date: "Jul 10- 17",
      price: 685,
      time: "night",
      authorImg: "../assets/p2.avif",
      cat: "Mansions",
    },
    {
      id: 42,
      image: "/assets/m3.webp",
      location: "El Pajar, Spain",
      desc: "7km away",
      position: "Artist",
      date: "Jul 10- 17",
      price: 685,
      time: "night",
      authorImg: "../assets/p2.avif",
      cat: "Mansions",
    },
    {
      id: 43,
      image: "/assets/m4.webp",
      location: "Ibadan Nigeria",
      desc: "7km away",
      position: "Artist",
      date: "Jul 10- 17",
      price: 685,
      time: "night",
      authorImg: "../assets/p2.avif",
      cat: "Mansions",
    },
    {
      id: 44,
      image: "/assets/m5.webp",
      location: "Accra Ghana",
      desc: "7km away",
      position: "Artist",
      date: "Jul 10- 17",
      price: 685,
      time: "night",
      authorImg: "../assets/p2.avif",
      cat: "Mansions",
    },
    {
      id: 45,
      image: "/assets/m1.webp",
      location: "Madrid Spain",
      desc: "7km away",
      position: "Artist",
      date: "Jul 10- 17",
      price: 685,
      time: "night",
      authorImg: "../assets/p2.avif",
      cat: "Mansions",
    },
    {
      id: 46,
      image: "/assets/m2.webp",
      location: "Barcelona Spain",
      desc: "7km away",
      position: "Artist",
      date: "Jul 10- 17",
      price: 685,
      time: "night",
      authorImg: "../assets/p2.avif",
      cat: "Mansions",
    },
    {
      id: 47,
      image: "/assets/m3.webp",
      location: "El Pajar, Spain",
      desc: "7km away",
      position: "Artist",
      date: "Jul 10- 17",
      price: 685,
      time: "night",
      authorImg: "../assets/p2.avif",
      cat: "Mansions",
    },
    {
      id: 48,
      image: "/assets/m4.webp",
      location: "Ibadan Nigeria",
      desc: "7km away",
      position: "Artist",
      date: "Jul 10- 17",
      price: 685,
      time: "night",
      authorImg: "../assets/p2.avif",
      cat: "Mansions",
    },
    {
      id: 49,
      image: "/assets/m5.webp",
      location: "Accra Ghana",
      desc: "7km away",
      position: "Artist",
      date: "Jul 10- 17",
      price: 685,
      time: "night",
      authorImg: "../assets/p2.avif",
      cat: "Mansions",
    },
    {
      id: 50,
      image: "/assets/i1.jpeg",
      location: "Accra Ghana",
      desc: "7km away",
      position: "Artist",
      date: "Jul 10- 17",
      price: 685,
      time: "night",
      authorImg: "../assets/p2.avif",
      cat: "Islands",
    },
    {
      id: 51,
      image: "/assets/i2.jpg",
      location: "Accra Ghana",
      desc: "7km away",
      position: "Artist",
      date: "Jul 10- 17",
      price: 685,
      time: "night",
      authorImg: "../assets/p2.avif",
      cat: "Islands",
    },
    {
      id: 52,
      image: "/assets/i3.jpg",
      location: "Accra Ghana",
      desc: "7km away",
      position: "Artist",
      date: "Jul 10- 17",
      price: 685,
      time: "night",
      authorImg: "../assets/p2.avif",
      cat: "Islands",
    },
    {
      id: 53,
      image: "/assets/i4.jpg",
      location: "Accra Ghana",
      desc: "7km away",
      position: "Artist",
      date: "Jul 10- 17",
      price: 685,
      time: "night",
      authorImg: "../assets/p2.avif",
      cat: "Islands",
    },
    {
      id: 54,
      image: "/assets/i2.jpg",
      location: "Accra Ghana",
      desc: "7km away",
      position: "Artist",
      date: "Jul 10- 17",
      price: 685,
      time: "night",
      authorImg: "../assets/p2.avif",
      cat: "Islands",
    },
    {
      id: 55,
      image: "/assets/om1.webp",
      location: "Accra Ghana",
      desc: "7km away",
      position: "Artist",
      date: "Jul 10- 17",
      price: 685,
      time: "night",
      authorImg: "../assets/p2.avif",
      cat: "OMG!",
    },
    {
      id: 57,
      image: "/assets/om2.webp",
      location: "Accra Ghana",
      desc: "7km away",
      position: "Artist",
      date: "Jul 10- 17",
      price: 685,
      time: "night",
      authorImg: "../assets/p2.avif",
      cat: "OMG!",
    },
    {
      id: 58,
      image: "/assets/om3.webp",
      location: "Accra Ghana",
      desc: "7km away",
      position: "Artist",
      date: "Jul 10- 17",
      price: 685,
      time: "night",
      authorImg: "../assets/p2.avif",
      cat: "OMG!",
    },
    {
      id: 59,
      image: "/assets/om4.webp",
      location: "Accra Ghana",
      desc: "7km away",
      position: "Artist",
      date: "Jul 10- 17",
      price: 685,
      time: "night",
      authorImg: "../assets/p2.avif",
      cat: "OMG!",
    },
    {
      id: 60,
      image: "/assets/om5.webp",
      location: "Accra Ghana",
      desc: "7km away",
      position: "Artist",
      date: "Jul 10- 17",
      price: 685,
      time: "night",
      authorImg: "../assets/p2.avif",
      cat: "OMG!",
    },
    {
      id: 61,
      image: "/assets/om3.webp",
      location: "Accra Ghana",
      desc: "7km away",
      position: "Artist",
      date: "Jul 10- 17",
      price: 685,
      time: "night",
      authorImg: "../assets/p2.avif",
      cat: "OMG!",
    },
    {
      id: 62,
      image: "/assets/om1.webp",
      location: "Accra Ghana",
      desc: "7km away",
      position: "Artist",
      date: "Jul 10- 17",
      price: 685,
      time: "night",
      authorImg: "../assets/p2.avif",
      cat: "OMG!",
    },
  ];
  const filteredCard = cardDetails.filter((card) => card.cat === cat);
  return (
    <div className=" mx-10 gap-10 mt-10 grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2  ">
      {cat === "rooms" || cat === "undefined"
        ? cardDetails.map((item) => (
            <CustomizedCard
              key={item.id}
              image={item.image}
              location={item.location}
              description={item.desc}
              position={item.position}
              date={item.date}
              star={item.star}
              price={item.price}
              time={item.time}
              authorImg={item.authorImg}
              length={filteredCard.length}
              id={item.id}
              handleLike={handleLike}
              liked={likedItems.includes(item.id)}
            />
          ))
        : filteredCard.map((item) => (
            <CustomizedCard
              key={item.id}
              image={item.image}
              location={item.location}
              description={item.desc}
              position={item.position}
              date={item.date}
              star={item.star}
              price={item.price}
              time={item.time}
              authorImg={item.authorImg}
              length={filteredCard.length}
              id={item.id}
              handleLike={handleLike}
              liked={likedItems.includes(item.id)}
            />
          ))}
    </div>
  );
};

export default Main;
const CustomizedCard = ({
  image,
  star,
  authorImg,
  location,
  description,
  position,
  date,
  price,
  time,
  length,
  liked,
  handleLike,
  id,
}) => {
  console.log(liked);
  return (
    <div className="sm:w-full xs:w-[350px]  h-[400px] mx-auto  ">
      {length === 0 ? (
        <h2 className="bg-black">No Listing yet</h2>
      ) : (
        <>
          <div className="relative ">
            <img src={image} alt="" className="rounded-lg h-[280px] " />
            <div className="book-cover m-5 ">
              <img src={authorImg} alt="" />
            </div>
            <div
              className={`absolute top-0 right-0 m-3 ${
                liked ? "text-red-500" : "text-gray-700"
              }`}
              onClick={() => handleLike(id)}
            >
              {liked ? (
                <Tooltip title="Dislike">
                  <IconButton>
                    <FavoriteOutlined className="text-green-500" />
                  </IconButton>
                </Tooltip>
              ) : (
                <Tooltip title="Like">
                  <IconButton>
                    <HeartBroken className="text-red-500" />
                  </IconButton>
                </Tooltip>
              )}
            </div>
          </div>

          <div className="flex flex-col mt-3">
            <div className="flex justify-between ">
              <div>
                <h2 className="font-bold">{location}</h2>
              </div>
              <div className="flex items-center">
                {star && (
                  <>
                    <Star fontSize="8" />
                    <h2 className="text-sm">{star}</h2>
                  </>
                )}
              </div>
            </div>
            <div className="flex gap-2 ">
              <h2 className="text-sm">
                {description}
                <span className="items-center justify-center">.</span>
              </h2>
              <h2 className="text-xs items-center mt-0.5">{position}</h2>
            </div>
            <div className="">
              <h3 className="text-xs">{date}</h3>
            </div>
            <div className="flex gap-1">
              <h3 className="font-bold text-md">${price}</h3>
              <span>{time}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
