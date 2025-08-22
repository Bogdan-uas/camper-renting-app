export const selectCampers = (state) => state.campers.items;
export const selectCurrentCamper = (state) => state.campers.currentCamper;
export const selectIsLoading = (state) => state.campers.isLoading;
export const selectError = (state) => state.campers.error;

export const selectVisibleCount = (state) => state.campers.visibleCount;
export const selectHasMore = (state) => state.campers.visibleCount < state.campers.items.length;

export const selectSearch = (state) => state.filters.search;
export const selectSortBy = (state) => state.filters.sortBy;