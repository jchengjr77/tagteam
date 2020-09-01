import { action, Action } from 'easy-peasy';

type DisplaySizeType = string | undefined;

export interface DisplaySizeInterface {
  size: DisplaySizeType;
  setSize: Action<DisplaySizeInterface, DisplaySizeType>;
}

const displaySizeModel: DisplaySizeInterface = {
  // state
  size: 'large',

  // actions
  setSize: action((state, payload) => {
    state.size = payload;
  }),
};

export default displaySizeModel;
