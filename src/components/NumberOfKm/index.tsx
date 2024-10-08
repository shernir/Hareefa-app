import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {themeSelector} from 'redux/slices/theme/theme.selector';
import generateStyle from './style';
import LocationIcon from '../../assets/imgs/location-icon.svg';
import AppText from 'components/AppText';
import {truncateWithEllipsis} from 'services/utils/helper';
interface ComponentProps {
  km: number;
  address: string;
  numberOfChar?: number;
}
function NumberOfKm({km, address, numberOfChar = 100}: ComponentProps) {
  const theme = useSelector(themeSelector);
  const styles = generateStyle(theme);
  return (
    <View style={styles.container}>
      <View style={styles.locationWrapper}>
        <LocationIcon />
        <AppText variant="semiBold" size="smallText" style={styles.kmText}>
          {km}
        </AppText>
      </View>
      <AppText variant="normal" size="smallText" style={styles.addressText}>
        {truncateWithEllipsis(address, numberOfChar)}
      </AppText>
    </View>
  );
}

export default NumberOfKm;
