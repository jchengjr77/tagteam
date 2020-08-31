import { action, Action } from 'easy-peasy';

type ThemeModeType = 'dark' | 'light' | undefined;

export interface ThemeInterface {
  themeMode: ThemeModeType;
  switchTheme: Action<ThemeInterface, ThemeModeType>;
}

export const themeModel: ThemeInterface = {
  // state
  themeMode: 'light',

  // actions
  switchTheme: action((state, payload) => {
    state.themeMode = payload;
  }),
};

export default themeModel;
