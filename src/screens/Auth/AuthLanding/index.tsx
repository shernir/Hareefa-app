import React from 'react';
import AppText from '../../../components/AppText';
import {ImageBackground, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import {themeSelector} from '../../../redux/slices/theme/theme.selector';
import generateStyle from './style';
import bg from '../../../assets/imgs/auth-landing.png';
import Logo from '../../../assets/imgs/logo-primary.svg';
import {Button} from 'components';
import AppleLogo from '../../../assets/imgs/apple-logo.svg';
import GoogleLogo from '../../../assets/imgs/google-logo.svg';
import {Routes} from 'constants/Routes';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
interface RootStackParamList extends ParamListBase {
  [Routes.Tabs]: undefined;
}
function AuthLanding() {
  const theme = useSelector(themeSelector);
  const styles = generateStyle(theme);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.bgImage} source={bg}>
        <View style={styles.skipWrapper}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(Routes.Tabs);
            }}>
            <AppText size="caption" variant="medium" style={styles.skipText}>
              Skip for now
            </AppText>
          </TouchableOpacity>
        </View>
        <Logo width={70} height={70} style={styles.logo} />
        <AppText size="heading" style={styles.title} variant="semiBold">
          Your ultimate game companion
        </AppText>
        <AppText size="body" style={styles.description} variant="medium">
          Stay engaged and elevate your skills with Hareefa’s intuitive features
          and real-time updates, all from the palm of your hand.
        </AppText>
        <View style={styles.btnContainer}>
          <Button
            title="Continue with google"
            onPress={() => {}}
            type="outline"
            icon={<GoogleLogo width={20} height={20} />}
          />
          <Button
            title="Continue with Apple"
            onPress={() => {}}
            type="outline"
            icon={<AppleLogo width={20} height={20} />}
          />
          <Button
            title="Sign-in with Email"
            onPress={() => {}}
            type="outline"
          />
        </View>
      </ImageBackground>
    </View>
  );
}

export default AuthLanding;
