import React from 'react';
import {View, ImageBackground, SafeAreaView} from 'react-native';
import generateStyle from './style';
import {useSelector} from 'react-redux';
import {themeSelector} from '../../redux/slices/theme/theme.selector';
import bgImg from '../../assets/imgs/walkthrough1.png';
import Logo from '../../components/Logo';
import Slide from './components/Slide';
import Swiper from 'react-native-swiper';
import Button from '../../components/Button';
import {slides} from './slideData';
import {Routes} from '../../constants/Routes';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {ParamListBase} from '@react-navigation/native';

interface RootStackParamList extends ParamListBase {
  [Routes.AuthStack]: undefined;
  [Routes.Tabs]: undefined;
}
function WalkthroughScreen() {
  const theme = useSelector(themeSelector);
  const styles = generateStyle(theme);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const renderPagination = (index: number, total: number) => {
    return (
      <View style={styles.paginationContainer}>
        {Array.from({length: total}, (_, i) => (
          <View
            key={i}
            style={
              i === index
                ? {...styles.swiperActiveDot, width: 30}
                : styles.swiperDot
            }
          />
        ))}
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.sliderHeaderContainer}>
        <ImageBackground source={bgImg} style={styles.bgImage}>
          <SafeAreaView>
            <View style={styles.logoContainer}>
              <Logo />
            </View>
          </SafeAreaView>
        </ImageBackground>
      </View>
      <View style={styles.sliderfooterContainer}>
        <Swiper
          renderPagination={renderPagination}
          showsButtons={false}
          activeDotStyle={{backgroundColor: theme.colors.primary, width: 50}}>
          {slides.map((slide, index) => (
            <View key={index}>
              <Slide title={slide.title} description={slide.description} />
            </View>
          ))}
        </Swiper>
        <View>
          <Button
            title="Get Started"
            onPress={() => navigation.navigate(Routes.Tabs)}
          />
          <Button
            type="outline"
            title="Login"
            onPress={() => navigation.navigate(Routes.AuthStack)}
          />
        </View>
      </View>
    </View>
  );
}

export default WalkthroughScreen;
