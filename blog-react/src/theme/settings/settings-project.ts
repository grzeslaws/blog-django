const colors = {
    colorBlack: (opacity = 1) => `rgba(51, 51, 51, ${opacity})`,
};

export { colors };

export interface ThemeProps {
    colors: typeof colors;
}
