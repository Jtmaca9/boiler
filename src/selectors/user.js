import { createSelector } from 'reselect';

const user = state => state.user;

export const getName = createSelector(
  user,
  user => user.name,
);