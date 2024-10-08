import {createSlice} from '@reduxjs/toolkit';
import {Theme} from '../../../theme/type';
import theme from '../../../theme/dark';

interface ThemeState {
  theme: Theme;
}

const initialState: ThemeState = {
  theme: theme, // Default theme
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {},
});

export const {} = themeSlice.actions;

export default themeSlice.reducer;
