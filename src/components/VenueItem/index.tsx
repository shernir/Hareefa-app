import AppText from 'components/AppText';
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import {themeSelector} from 'redux/slices/theme/theme.selector';
import generateStyle from './style';
import MatchImg from '../../assets/imgs/match-thubnail.png';
import Location from '../../assets/imgs/location-icon.svg';
import {truncateWithEllipsis} from 'services/utils/helper';
import Seprator from 'screens/Home/Dashboard/components/Seprator';
import {useNavigation} from '@react-navigation/native';
import {ParamListBase} from '@react-navigation/native';
import {Routes} from 'constants/Routes';
import {StackNavigationProp} from '@react-navigation/stack';
interface RootStackParamList extends ParamListBase {
  [Routes.VenueDetails]: undefined;
}
function VenueItem() {
  const theme = useSelector(themeSelector);
  const styles = generateStyle(theme);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(Routes.VenueDetails);
        }}>
        <View style={styles.metaData}>
          <Image source={MatchImg} style={styles.matchImg} />
          <View style={styles.matchInfo}>
            <AppText variant="semiBold">{'Collins Pickle Venue'}</AppText>
            <View style={styles.addressContainer}>
              <AppText
                variant="normal"
                size="smallText"
                style={styles.addressText}>
                {'Football, Basketball, Volleyball'}
              </AppText>
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.footerItem}>
            <Location width={16} height={16} />
            <AppText variant="semiBold" size="smallText" style={styles.kmText}>
              100 KM
            </AppText>
            <Seprator type="vertical" />
            <AppText
              variant="normal"
              size="smallText"
              style={styles.addressText}>
              {truncateWithEllipsis(
                'King St and W State ST, Fayette, IA 52142',
                50,
              )}
            </AppText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default VenueItem;
