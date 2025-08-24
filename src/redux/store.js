import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { campersReducer } from "./campers/campersSlice";
import { filtersReducer } from "./filters/filtersSlice";
import { favoritesReducer } from "./favorites/favoritesSlice";
import { camperSliderReducer } from "./campers/camperSlidersSlice";

const filtersPersistConfig = {
    key: "filters",
    storage,
    whitelist: ["applied", "draft"],
};

const favoritesPersistConfig = {
    key: "favorites",
    storage,
};

const rootReducer = combineReducers({
    campers: campersReducer,
    filters: persistReducer(filtersPersistConfig, filtersReducer),
    favorites: persistReducer(favoritesPersistConfig, favoritesReducer),
    slider: camperSliderReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);