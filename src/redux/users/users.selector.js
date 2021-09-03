// Selectores para el users store.

export const selectUsers = (state) => state.users.users;

export const selectLoadingUsers = (state) => state.users.usersLoading;

export const selectPendingUpdate = (state) => state.users.pendingUpdate;
