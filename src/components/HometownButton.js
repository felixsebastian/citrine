import { css } from "@emotion/css";

const HometownButton = (props) => (
  <button
    className={
      props.className +
      " " +
      css`
        padding: 10px 15px;
        border-radius: 3px;
        background-color: ${props.color};
        color: white;
        border: none;
        font-size: 1.2rem;
      `
    }
  >
    {props.children}
  </button>
);

export default HometownButton;
