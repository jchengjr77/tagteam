import { createStore, persist } from 'easy-peasy';

// import models
import themeModel, { ThemeInterface } from './models/theme';

export interface StoreInterface {
  theme: ThemeInterface;
}

const storeModel: StoreInterface = persist({
  theme: themeModel,
});

const store = createStore(storeModel);

export default store;
