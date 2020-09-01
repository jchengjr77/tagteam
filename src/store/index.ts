import { createStore, persist } from 'easy-peasy';

// import models
import themeModel, { ThemeInterface } from './models/theme';
import displaySizeModel, { DisplaySizeInterface } from './models/displaySize';

export interface StoreInterface {
  theme: ThemeInterface;
  displaySize: DisplaySizeInterface;
}

const storeModel: StoreInterface = persist({
  theme: themeModel,
  displaySize: displaySizeModel,
});

const store = createStore(storeModel);

export default store;
