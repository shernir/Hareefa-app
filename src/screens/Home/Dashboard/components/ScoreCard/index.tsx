import React from 'react';
import {useSelector} from 'react-redux';
import generateStyle from './style';
import {themeSelector} from 'redux/slices/theme/theme.selector';
import {View} from 'react-native';
import {AppText} from 'components';
import LinearGradient from 'react-native-linear-gradient';
import Logo from 'assets/imgs/logo.svg';
import ArrowRight from 'assets/imgs/arrow-right.svg';
function ScoreCard() {
  const theme = useSelector(themeSelector);
  const styles = generateStyle(theme);
  const renderItem = (title: string, subTitle: string) => {
    return (
      <View style={styles.item}>
        <AppText size="body" variant="medium">
          {title}
        </AppText>
        <AppText size="caption">{subTitle}</AppText>
      </View>
    );
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.body}>
          <Logo width={65} height={65} style={styles.logo} />
          <LinearGradient
            colors={['rgba(0,0,0,0.2)', 'transparent']} // Black to transparent gradient
            start={{x: 0, y: 0}}
            end={{x: 0.5, y: 0}} // Gradient from top to bottom
            style={styles.gradientOverlay}
          />
          <LinearGradient
            colors={['rgba(0,0,0,0.6)', 'transparent']} // Black to transparent gradient
            start={{x: 1, y: 0}}
            end={{x: 0, y: 0}} // Gradient from top to bottom
            style={styles.gradientOverlay}
          />
          <AppText style={styles.heading} variant="semiBold">
            Your score
          </AppText>
          <View style={styles.subHeading}>
            <AppText
              style={styles.subHeadingText}
              size="subheading"
              variant="semiBold">
              200
            </AppText>
            <AppText size="caption" variant="normal">
              Points
            </AppText>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.itemContainer}>
            {renderItem('100', 'Matches')}
            <View style={styles.verticalSeprator} />
            {renderItem('80', 'Wins')}
            <View style={styles.verticalSeprator} />

            {renderItem('20', 'Losses')}
          </View>
          <View>
            <ArrowRight />
          </View>
        </View>
      </View>
    </View>
  );
}

export default ScoreCard;
