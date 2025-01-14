import React from "react";
import { Row, Col } from "react-bootstrap";
import MultiRangeslider from "./multi-range-slider/MultiRangeSlider";
import arrowRight from "../icons/arrow-right.svg";

const Filters = () => {
  return (
    <>
      <div className="filters">
        <div className="title">Фильтры</div>

        <div className="filters__wrapper-price">
          <div className="filters__title">Цена</div>

          <MultiRangeslider
            min={0}
            max={1000}
            onChange={({ min, max }) =>
              console.log(`min = ${min}, max = ${max}`)
            }
          />
        </div>
        <div className="filters__btn">
          <button className="btn btn_border">
            <div className="btn__text">Очистить фильтры</div>
            <div className="btn__icon">
              <img src={arrowRight} alt="arrowWhite" />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Filters;
