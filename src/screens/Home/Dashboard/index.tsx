import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Header from './components/Header';
import {useSelector} from 'react-redux';
import {themeSelector} from 'redux/slices/theme/theme.selector';
import generateStyle from './style';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import ScoreCard from './components/ScoreCard';
import MatchSlider from './components/MatchSlider';
import VenueSlider from './components/VenueSlider';
import LeaderBoard from './components/LeaderBoard';

function Dashbaord() {
  const theme = useSelector(themeSelector);
  const styles = generateStyle(theme);
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y;
  });
  const headerStyles = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value,
        [0, 70],
        [120, 60],
        Extrapolation.CLAMP,
      ),
      marginTop: interpolate(
        scrollY.value,
        [0, 70],
        [20, 0],
        Extrapolation.CLAMP,
      ),
    };
  });
  const inputWrapper = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollY.value, [0, 70], [1, 0], Extrapolation.CLAMP),
    };
  });
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrraper}>
        <View style={styles.headerWrapper}>
          <Header headerStyle={headerStyles} inputWrapper={inputWrapper} />
        </View>
        <Animated.ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={1}
          onScroll={scrollHandler}
          contentContainerStyle={styles.body}>
          <ScoreCard />
          <MatchSlider />
          <VenueSlider />
          <LeaderBoard />
        </Animated.ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default Dashbaord;
