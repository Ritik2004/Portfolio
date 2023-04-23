import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";

import ImageOne from "../../images/p1.jpg";
import ImageTwo from "../../images/p2.jpg";
import ImageThree from "../../images/p3.jpg";
import ImageFour from "../../images/p4.jpg";
import ImageFive from "../../images/p5.jpg";
import ImageSix from "../../images/p6.jpg";
import "./styles.scss";
import { useState } from "react";
import { useNavigate,useEffect } from "react-router-dom";

const portfolioData = [
  {
    id: 2,
    name: "Find Movies",
    image: ImageFour,
    link: "https://movie-react-cqz5.vercel.app/",
  },
  {
    id: 2,
    name: "Notes App",
    link: "https://react-todo-front.vercel.app/login",
    image: ImageTwo,
  },
  {
    id: 3,
    name: "StopWatch",
    image: ImageSix,
    link: "https://stopwatch-tan.vercel.app/",
  },
  {
    id: 3,
    name: "Calulator",
    image: ImageThree,
    link: "https://ritik2004.github.io/calculator/",
  },
  {
    id: 3,
    name: "Todo App",
    image: ImageOne,
    link: "https://www.google.com/",
  },
  {
    id: 3,
    name: "Dog Tinder Website",
    image: ImageFive,
    link: "https://ritik2004.github.io/dogapp/",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Developement",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  //console.log(filteredvalue);

  function handleHover(index) {
    setHoveredValue(index);
  }
  let navigate = useNavigate(); 

  function moveTo(index){
     console.log(index)
    //let id = portfolioData.filter(item => item.name === index);
    //console.log(id)
    //let path = index.name
    //console.log(path)
    //window.location.href = index.link
    window.open(index.link, '_blank')
  }
 
  // console.log(hoveredValue);
  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  // console.log(filteredItems);
  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent headerText="Portfolio" />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">

          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              
              <div className="portfolio__content__cards__item__img-wrapper">
                <a target="_blank" href="https://www.linkedin.com/">
                  <img
                   alt="pro" src={item.image} 
                  />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button onClick={()=>moveTo(item)}>Visit</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
