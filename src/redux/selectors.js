import { createSelector } from "@reduxjs/toolkit";
import { filterCampers } from "../utils/filterCampers";

export const selectCampers = (state) => state.campers.items;
export const selectCurrentCamper = (state) => state.campers.currentCamper;
export const selectIsLoading = (state) => state.campers.isLoading;
export const selectError = (state) => state.campers.error;

export const selectVisibleCount = (state) => state.campers.visibleCount;
export const selectHasMore = (state) => state.campers.visibleCount < state.campers.items.length;

export const selectAppliedFilters = (state) => state.filters.applied;

export const selectFilteredCampers = createSelector(
    [selectCampers, selectAppliedFilters],
    (campers, filters) => {
        const result = filterCampers(campers, filters);
        return result;
    }
);