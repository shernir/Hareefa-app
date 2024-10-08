import AppText from 'components/AppText';
import React from 'react';
import {Image, View} from 'react-native';
import {useSelector} from 'react-redux';
import {themeSelector} from 'redux/slices/theme/theme.selector';
import generateStyle from './style';
import {Match} from '../../global/type';
import MatchImg from '../../assets/imgs/match-thubnail.png';
import Avatar from '../../assets/imgs/player-avatar.png';
import JoinIcon from '../../assets/imgs/join-icon.svg';
import NumberOfKm from 'components/NumberOfKm';
import Seprator from 'screens/Home/Dashboard/components/Seprator';
function MatchCard({item}: {item: Match}) {
  const theme = useSelector(themeSelector);
  const styles = generateStyle(theme);

  return (
    <View style={styles.container}>
      <View style={styles.metaData}>
        <Image source={MatchImg} style={styles.matchImg} />
        <View style={styles.matchInfo}>
          <AppText variant="semiBold">{item.dateTime}</AppText>
          <NumberOfKm km={100} address={item.address} numberOfChar={20} />
        </View>
      </View>
      <Seprator type="horizontal" />
      <View style={styles.footer}>
        <View style={styles.footerItem}>
          <Image source={Avatar} style={styles.avatar} />
          <AppText variant="semiBold">MY Team</AppText>
        </View>
        <Seprator type="vertical" />
        <View style={styles.footerItem}>
          <JoinIcon />
          <AppText variant="semiBold">Join</AppText>
        </View>
      </View>
    </View>
  );
}

export default MatchCard;
