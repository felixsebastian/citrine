import { css } from "@emotion/css";

const PageBlock = (props) => (
  <div
    className={css`
      background-color: ${props.backgroundColor};
      background-image: url('${props.backgroundImage}');
      background-size: cover;
      background-position: center;
      display: flex;
      justify-content: center;
      padding: ${props.padding}px 0;
    `}
  >
    <div
      className={css`
        width: ${props.width}px;
      `}
    >
      {props.children}
    </div>
  </div>
);

export default PageBlock;
