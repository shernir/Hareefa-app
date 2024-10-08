import React from 'react';
import {TextInput, View} from 'react-native';
import {useSelector} from 'react-redux';
import generateStyle from './style';
import {themeSelector} from 'redux/slices/theme/theme.selector';
import Search from '../../assets/imgs/search-icon.svg';
function Input() {
  const theme = useSelector(themeSelector);
  const styles = generateStyle(theme);
  return (
    <View style={styles.container}>
      <Search />
      <TextInput
        style={styles.input}
        placeholderTextColor={theme.colors.inputTextColor}
        placeholder="Search match or court"
      />
    </View>
  );
}

export default Input;
