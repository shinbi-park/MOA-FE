import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import "./Main.css";
import { Testdatacontext } from "../../App";

const Main = () => {
  const data = useContext(Testdatacontext);
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  const nameValue = localStorage.getItem("name");

  useEffect(() => {
    const nameValue = localStorage.getItem("name");

    // name === null ? navigate("/signup") : navigate("/"); - 내가 쓴 방식

    //멘토님 피드백 방식
    if (!nameValue) navigate("/signup");
  }, [navigate]);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={id}>
              <img
                src={image}
                alt={name}
                className="person-img"
                onClick={() => {
                  navigate(`/detail/${id}`);
                }}
              />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Main;

// const navigate = useNavigate();
// const name = localStorage.getItem("name");
// useEffect(() => {
//   const name = localStorage.getItem("name");

//   // name === null ? navigate("/signup") : navigate("/"); - 내가 쓴 방식

//   //멘토님 피드백 방식
//   if (!name) navigate("/signup");
// }, []);
