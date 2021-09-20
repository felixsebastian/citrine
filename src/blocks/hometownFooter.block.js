import { css } from "@emotion/css";
import PageBlock from "../components/PageBlock";

const Heading = (props) => (
  <h3
    className={
      css(props.theme.text) +
      " " +
      css`
        text-transform: uppercase;
      `
    }
  >
    {props.text}
  </h3>
);

const Links = (props) => (
  <div>
    <Heading text={props.heading} theme={props.theme} />
    <ul
      className={css`
        list-style: none;
        padding: 0;
      `}
    >
      {props.items.map((item) => (
        <li
          className={css`
            margin-bottom: ${props.theme.size.s}px;
          `}
        >
          <a
            className={
              css(props.theme.text) +
              " " +
              css`
                text-transform: uppercase;
                text-decoration: none;
              `
            }
            href={item.location}
          >
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const FacebookWidget = () => <div>fb widget</div>;

const Text = (props) => (
  <div>
    <Heading text={props.heading} theme={props.theme} />
    <p className={css(props.theme.text)}>{props.body}</p>
  </div>
);

export default {
  id: "hometownFooter",

  component: (props) => (
    <div
      className={css`
        background-image: url("https://cdn.eaglesoftware.com.au/condieco/images/bg-crossword.png");
        background-repeat: repeat;
      `}
    >
      <PageBlock
        backgroundColor="transparent"
        width={props.theme.pageWidth}
        padding={props.theme.size.xl}
      >
        <div
          className={css`
            display: flex;
            justify-content: space-between;
            gap: ${props.theme.size.xl}px;
          `}
        >
          {props.options.items.map((item) => (
            <div
              className={css`
                flex: 1 0;
              `}
            >
              {item.type === "text" && (
                <Text {...item.content} theme={props.theme} />
              )}
              {item.type === "links" && (
                <Links {...item.content} theme={props.theme} />
              )}
              {item.type === "facebookWidget" && (
                <FacebookWidget {...item.content} />
              )}
            </div>
          ))}
        </div>
      </PageBlock>
      <PageBlock
        backgroundColor="rgba(0,0,0,0.05)"
        width={props.theme.pageWidth}
        padding={props.theme.size.xl}
      >
        <div
          className={css`
            padding: ${props.theme.size.xl}px;
            text-align: center;
            display: flex;
            flex-direction: column;
            gap: ${props.theme.size.m}px;
          `}
        >
          <p className={css(props.theme.text)}>
            Copyright © 2015 - 2021 Condie & Co Real Estate, All Rights
            Reserved.
          </p>
          <p className={css(props.theme.text)}>
            Privacy Policy | Powered by Eagle Software
          </p>
        </div>
      </PageBlock>
    </div>
  )
};
