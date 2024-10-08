import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import generateStyle from './style';
import {themeSelector} from 'redux/slices/theme/theme.selector';
import VenueCover from '../../assets/imgs/venue-cover.png';
import {Image} from 'react-native';
import AppText from 'components/AppText';
import Seprator from 'screens/Home/Dashboard/components/Seprator';
import {truncateWithEllipsis} from 'services/utils/helper';
import Location from '../../assets/imgs/location-icon.svg';
function VenueCard() {
  const theme = useSelector(themeSelector);
  const styles = generateStyle(theme);
  return (
    <View style={styles.container}>
      <Image source={VenueCover} style={styles.coverImg} />
      <View style={styles.footer}>
        <AppText variant="semiBold">Venue Name</AppText>
        <AppText variant="normal" style={styles.desc} size="smallText">
          Dedicated - Outdoor
        </AppText>
        <Seprator type="horizontal" />
        <View style={styles.metaData}>
          <View style={styles.item}>
            <Location width={16} height={16} />
            <AppText style={styles.kbText} variant="semiBold" size="smallText">
              100 KM
            </AppText>
          </View>
          <Seprator type="vertical" />
          <View style={styles.item}>
            <AppText variant="normal" size="smallText">
              {truncateWithEllipsis(
                '150 Furman St, Brooklyn, NY 11201, USA',
                10,
              )}
            </AppText>
          </View>
        </View>
      </View>
    </View>
  );
}

export default VenueCard;
