import { css } from "@emotion/css";
import { Link } from "@reach/router";

export default {
  id: "hometownNav",

  component: (props) => (
    <div
      className={css`
        overflow: hidden;
        display: flex;
        justify-content: center;
        padding: 10px;
      `}
    >
      <div
        className={css`
          width: ${props.theme.pageWidth}px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-transform: uppercase;
        `}
      >
        <img
          className={css`
            flex-shrink: 1;
            max-width: 380px;
          `}
          src={props.site.logo}
          alt={`${props.site.title} - ${props.page.title}`}
        />
        <div
          className={css`
            display: flex;
            align-items: center;
            gap: 30px;
          `}
        >
          {props.site.pages.map((item) => (
            <Link
              className={
                css(props.theme.text) +
                " " +
                css`
                  display: block;
                  text-decoration: none;
                  &:hover {
                    color: ${props.theme.colors.primary};
                  }
                `
              }
              to={"/" + item.slug}
            >
              {item.title}
            </Link>
          ))}
          <div
            className={
              css({ ...props.theme.text, color: "#fff" }) +
              " " +
              css`
                padding: 5px 15px;
                border-radius: 999px;
                background-color: ${props.theme.colors.primary};
              `
            }
          >
            Call: {props.options.phone}
          </div>
        </div>
      </div>
    </div>
  )
};
