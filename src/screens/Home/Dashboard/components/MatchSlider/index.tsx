import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {themeSelector} from 'redux/slices/theme/theme.selector';
import generateStyle from './style';
import AppSlider from 'components/AppSlider';
import MatchCard from 'components/MatchCard';
import {Match} from 'global/type';
import SectionHeader from '../SectionHeader';

function MatchSlider() {
  const theme = useSelector(themeSelector);
  const styles = generateStyle(theme);

  // Sample match data
  const matches: Match[] = [
    {
      id: 1,
      name: 'Morning Football Match',
      time: '10:00 AM',
      mile: 5,
      address: '150 Furman St, Brooklyn, NY',
      dateTime: 'Wed, July 12, 10:00am',
    },
    {
      id: 2,
      name: 'Evening Paddle Game',
      time: '6:00 PM',
      mile: 12,
      address: '200 River St, Hoboken, NJ',
      dateTime: 'Wed, July 12, 10:00am',
    },
    {
      id: 3,
      name: 'Friendly Football Match',
      time: '4:00 PM',
      mile: 8,
      address: '100 Park Ave, Manhattan, NY',
      dateTime: 'Wed, July 12, 10:00am',
    },
    {
      id: 4,
      name: 'Weekend Paddle Tournament',
      time: '2:00 PM',
      mile: 15,
      address: '300 Ocean Ave, Long Beach, NY',
      dateTime: 'Wed, July 12, 10:00am',
    },
  ];

  return (
    <View style={styles.container}>
      <SectionHeader title="Ongoing Matches" tailText="See all" />
      {/* Pass match data and MatchCard component to AppSlider */}
      <AppSlider<Match> data={matches} height={140} RenderItem={MatchCard} />
    </View>
  );
}

export default MatchSlider;
