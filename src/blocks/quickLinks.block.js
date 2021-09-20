import { css } from "@emotion/css";
import PageBlock from "../components/PageBlock";

export default {
  id: "quickLinks",

  component: (props) => (
    <PageBlock
      backgroundColor={props.theme.colors.primary}
      backgroundImage={props.options.image}
      padding={props.theme.size.xxxxxxl}
      width={props.theme.pageWidth}
    >
      <div
        className={css`
          display: flex;
          justify-content: center;
          gap: ${props.theme.size.xxl}px;
        `}
      >
        {props.options.items.map((item) => (
          <a
            className={css`
              margin: 10px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              text-decoration: none;
              gap: ${props.theme.size.xxl}px;
              flex: 1 0;
            `}
            href={item.location}
          >
            <div
              className={
                css(props.theme.text) +
                " " +
                css`
                  font-size: 1.5rem;
                  color: ${props.theme.colors.white};
                  text-transform: uppercase;
                `
              }
            >
              {item.title}
            </div>
            <div
              className={
                css(props.theme.text) +
                " " +
                css`
                  color: ${props.theme.colors.white};
                `
              }
            >
              {item.text}
            </div>
          </a>
        ))}
      </div>
    </PageBlock>
  )
};
