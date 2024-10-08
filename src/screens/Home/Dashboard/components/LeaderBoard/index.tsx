import React from 'react';
import {Image, View} from 'react-native';
import {useSelector} from 'react-redux';
import {themeSelector} from 'redux/slices/theme/theme.selector';
import generateStyle from './style';
import SectionHeader from '../SectionHeader';
import {AppText} from 'components';
import Avatar from '../../../../../assets/imgs/player-avatar.png';
import Medal1 from '../../../../../assets/imgs/leader-board-icon-1.png';
import Medal2 from '../../../../../assets/imgs/leader-board-icon-2.png';
import Medal3 from '../../../../../assets/imgs/leader-board-icon-3.png';

function LeaderBoard() {
  const theme = useSelector(themeSelector);
  const styles = generateStyle(theme);
  const Medals = [Medal1, Medal2, Medal3];
  return (
    <View>
      <SectionHeader title="Leaderboard" tailText="See all" />
      <View style={styles.container}>
        {[1, 2, 3].map((item, index) => (
          <View key={index} style={styles.item}>
            <View style={styles.metaData}>
              <Image source={Medals[index]} style={styles.medalImg} />
              <Image source={Avatar} style={styles.avatarImg} />
              <View>
                <AppText size="caption" variant="medium">
                  Player Name
                </AppText>
                <AppText
                  size="smallText"
                  variant="normal"
                  style={styles.points}>
                  Points: 100
                </AppText>
              </View>
            </View>
            <View>
              <AppText size="caption" style={styles.level} variant="medium">
                Lvl {index + 1}
              </AppText>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

export default LeaderBoard;
