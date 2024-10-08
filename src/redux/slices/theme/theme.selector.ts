import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../../store';

export const themeSelector = createSelector(
  (state: RootState) => state,
  items => items.theme.theme,
);
