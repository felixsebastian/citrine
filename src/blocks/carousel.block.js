import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { css } from "@emotion/css";
import { Helmet } from "react-helmet";

export default {
  id: "carousel",

  component: (props) => (
    <div>
      <Helmet>
        <style>
          {
            ".slick-prev { left: 100px; z-index: 1; }.slick-next {right: 100px;}"
          }
        </style>
      </Helmet>
      <Slider
        {...{
          dots: false,
          arrows: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          ...props.options.slick
        }}
      >
        {props.options.items.map((item) => (
          <div
            className={css`
              background-image: url('${item}');
              background-position: center;
              background-size: cover;
              height: 500px;
              display: inline-block;
            `}
          />
        ))}
      </Slider>
    </div>
  )
};
