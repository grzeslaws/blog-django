import { createGlobalStyle } from "..";

export const GlobalStyle = createGlobalStyle`
    body {
        color: ${p => p.theme.colors.colorBlack()};
    }
`;
