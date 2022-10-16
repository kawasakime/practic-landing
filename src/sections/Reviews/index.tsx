import React from "react";

import * as S from "./styles";
import * as C from "../../styles/components";

import { config } from "../../configs/config";

import {
  AiFillStar,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";

const Reviews: React.FC = () => {
  const [activeSlide, setActiveSlide] = React.useState(0);

  const reviewsItems = config.reviews.items;

  function prevSlide() {
    setActiveSlide((prev) => --prev);
  }

  function nextSlide() {
    setActiveSlide((prev) => ++prev);
    console.log("ok");
  }

  function onBlur(e: React.FocusEvent<HTMLInputElement>) {
    console.log(e.target.name);
    switch (e.target.name) {
      case "test":
        console.log("test");
        break;
      case "hello":
        console.log("hello");
        break;
    }
  }

  return (
    <S.Reviews>
      <S.ReviewsWrapper>
        <C.Title className="title">{config.reviews.title}</C.Title>
        <S.ReviewsContainer
          slidesCount={reviewsItems.length}
          leftPosition={100 * activeSlide}
        >
          {reviewsItems.map((item, i) => (
            <S.ReviewItem
              key={i}
              className={activeSlide === i ? "active" : undefined}
            >
              <img src={`./assets/img/reviews/${i + 1}.png`} alt="" />
              <S.ItemWrapper>
                <S.Rating>
                  {[...Array(5)].map((_, i) => (
                    <AiFillStar
                      key={i}
                      className={i < item.rating ? "active" : undefined}
                    />
                  ))}
                </S.Rating>
                <h3>{item.name}</h3>
                <p>{item.text}</p>
              </S.ItemWrapper>
            </S.ReviewItem>
          ))}
        </S.ReviewsContainer>
        <S.Arrows>
          <AiOutlineArrowLeft
            className={activeSlide === 0 ? "disabled" : undefined}
            onClick={prevSlide}
          />
          <AiOutlineArrowRight
            className={
              activeSlide === reviewsItems.length - 1 ? "disabled" : undefined
            }
            onClick={nextSlide}
          />
        </S.Arrows>
      </S.ReviewsWrapper>
      <input name="hello" type="text" onBlur={onBlur} />
    </S.Reviews>
  );
};

export default Reviews;