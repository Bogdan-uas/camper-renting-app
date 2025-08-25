export const selectCampers = (state) => state.campers.items;
export const selectCamperById = (id) => (state) => state.campers.items.find((camper) => camper.id === id);
export const selectIsLoading = (state) => state.campers.isLoading;
export const selectError = (state) => state.campers.error;

export const selectVisibleCount = (state) => state.campers.visibleCount;
export const selectHasMore = (state) => state.campers.visibleCount < state.campers.items.length;

export const selectAppliedFilters = (state) => state.filters.applied;

export const selectFilteredCampers = selectCampers;

export const selectFavorites = (state) => state.favorites.items;

export const selectCurrentIndex = (state) => state.slider.currentIndex;

export const selectActiveTab = (state) => state.camperTab.activeTab;

export const selectDraftFilters = (state) => state.filters.draft;
