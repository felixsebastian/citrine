import { css } from "@emotion/css";
import PageBlock from "../components/PageBlock";

export default {
  id: "topBar",

  component: (props) => (
    <PageBlock
      backgroundColor={props.theme.colors.grey.xLight}
      width={props.theme.pageWidth}
    >
      <div
        className={css`
          padding: 15px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        `}
      >
        <div className={css(props.theme.text)}>{props.site.subtitle}</div>
        <div>f i g e</div>
      </div>
    </PageBlock>
  )
};
