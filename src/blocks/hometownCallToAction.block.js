import { css } from "@emotion/css";
import PageBlock from "../components/PageBlock";
import HometownButton from "../components/HometownButton";

export default {
  id: "topBar",

  component: (props) => (
    <PageBlock
      backgroundColor={props.theme.colors.grey.xLight}
      backgroundImage={props.options.image}
      width={props.theme.pageWidth}
      padding={props.theme.size.xxxxxxl}
    >
      <div
        className={css`
          display: flex;
          gap: ${props.theme.size.l}px;
          flex-direction: column;
          align-items: center;
        `}
      >
        <h3
          className={
            css(props.theme.text) +
            " " +
            css`
              font-size: 2.5rem;
              text-transform: uppercase;
              margin: 0;
            `
          }
        >
          {props.options.title}
        </h3>
        <h4
          className={
            css(props.theme.text) +
            " " +
            css`
              font-size: 1.5rem;
              color: ${props.theme.colors.grey.light};
              margin: 0;
            `
          }
        >
          {props.options.subtitle}
        </h4>
        <div>
          <HometownButton
            className={css(props.theme.text)}
            color={props.theme.colors.grey.mid}
          >
            {props.options.button.text}
          </HometownButton>
        </div>
      </div>
    </PageBlock>
  )
};
