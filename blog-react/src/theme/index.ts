import * as styledComponents from "styled-components";
import * as settings from "./settings/settings-project";

const { default: styled, css, keyframes, ThemeProvider, createGlobalStyle } = styledComponents as styledComponents.ThemedStyledComponentsModule<settings.ThemeProps>;

export default styled;
export { css, keyframes, ThemeProvider, createGlobalStyle };

export const themeProps = {
    colors: settings.colors,
};
