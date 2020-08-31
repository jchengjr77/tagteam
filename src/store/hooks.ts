import { createTypedHooks } from 'easy-peasy';
import { StoreInterface } from './index';

// provide model to the helper
const typedHooks = createTypedHooks<StoreInterface>();

// export typed hooks
export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;
