import "./styles.css";
import hometownNav from "./blocks/hometownNav.block";
import quickLinks from "./blocks/quickLinks.block";
import carousel from "./blocks/carousel.block";
import topBar from "./blocks/topBar.block";
import hometownFooter from "./blocks/hometownFooter.block";
import hometownCallToAction from "./blocks/hometownCallToAction.block";
import hometown from "./themes/hometown.theme";
import condieCo from "./sites/condieCo.site";
import { ThemeProvider } from "@emotion/react";
import { Router } from "@reach/router";
import { merge } from "lodash";
import { createContext, useContext } from "react";
import { Helmet } from "react-helmet";

/**
 * GOALS
 *
 * client can edit basic settings
 * developer can edit through web UI
 * developer can edit source code with git and text editor
 * fast
 * ssr
 * editable via wysiwyg
 * flexible enough to have custom html block
 * flexible enough to have 2 phone numbers
 *
 */

const blocks = {
  hometownNav,
  quickLinks,
  carousel,
  topBar,
  hometownFooter,
  hometownCallToAction
};

const themes = { hometown };
const sites = { condieCo };
const siteContext = createContext();
const { Provider } = siteContext;

const Page = (props) => {
  const site = useContext(siteContext);
  const { before, after } = site.templates[props.page.template];

  return (
    <div>
      {[...before, ...props.page.content, ...after].map((b) => {
        const Block = blocks[b.id].component;

        return (
          <Block
            site={site}
            page={props.page}
            options={merge(site.blockOptions[b.id], b.options)}
            theme={merge(themes[site.themeBase], site.theme)}
          />
        );
      })}
    </div>
  );
};

const RenderSite = (props) => (
  <>
    <Helmet>
      <link rel="shortcut icon" type="image/x-icon" href={props.site.favicon} />
    </Helmet>
    <Provider value={sites[props.site]}>
      <ThemeProvider theme={merge(props.site.themeBase, props.site.theme)}>
        <Router>
          {sites[props.site].pages.map((page) => (
            <>
              <Page path={page.slug} page={page} />
              {page.aliases.map((alias) => (
                <Page path={alias} page={page} />
              ))}
            </>
          ))}
        </Router>
      </ThemeProvider>
    </Provider>
  </>
);

export default function App() {
  return <RenderSite site="condieCo" />;
}
