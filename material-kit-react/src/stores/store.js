import { configureStore } from '@reduxjs/toolkit';

import { userSlice } from './slice/login/index';
import { consultantsSlice } from './slice/consultants/index';
import { consultantSlice } from './slice/consultant/index';

const store = configureStore({
  reducer: {
    login: userSlice.reducer,
    consultantList: consultantsSlice.reducer,
    consultant: consultantSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
