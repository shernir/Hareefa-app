import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {themeSelector} from 'redux/slices/theme/theme.selector';
import generateStyle from './style';
import Header from 'components/Header';
import FavIcon from '../../../assets/imgs/fav-icon.svg';
import {AppText, Button} from 'components';
import NumberOfKm from 'components/NumberOfKm';
import VenueImg from '../../../assets/imgs/venue-image.png';
import Paddel from '../../../assets/imgs/paddel-img.png';
import Footbal from '../../../assets/imgs/football-img.png';
import MapImg from '../../../assets/imgs/map-img.png';
import {truncateWithEllipsis} from 'services/utils/helper';

function VenueDetails() {
  const theme = useSelector(themeSelector);
  const styles = generateStyle(theme);
  const icons = [<FavIcon />];
  const [isReadMore, setisReadMore] = useState(false);
  const desc =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donecmalesuada, lacus nec ultricies tempus, nunc purus luctus nunc, necaliquet nisl nunc non turpis. Nulla facilisi. Suspendisse potenti. Nullam ac est nec nunc ultricies tempus. Nullam ac est nec nunc';
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{height: 50}}>
        <Header title="Venue Details" isBack icons={icons} />
      </View>
      <View style={styles.bookContainer}>
        <View>
          <AppText variant="semiBold">Rent Price</AppText>
          <View style={styles.priceContainer}>
            <AppText
              style={styles.priceText}
              variant="semiBold"
              size="subheading">
              $100 - $200
            </AppText>
            <AppText style={styles.duration}> /hour</AppText>
          </View>
        </View>
        <View style={styles.btnContainer}>
          <Button title="Book Now" type="primary" onPress={() => {}} />
        </View>
      </View>

      <ScrollView style={styles.container}>
        <AppText variant="semiBold" size="heading">
          Sport of USA
        </AppText>
        <NumberOfKm km={100} address="150 Furman St, Brooklyn, NY 11201, USA" />
        <View style={styles.imgContainer}>
          <Image source={VenueImg} style={styles.venueImg} />
        </View>
        <View style={styles.courtTypeContainer}>
          <View style={styles.courtItem}>
            <Image source={Footbal} style={styles.courtItemImg} />
            <AppText variant="medium" size="caption">
              Football
            </AppText>
          </View>
          <View style={styles.courtItem}>
            <Image source={Paddel} style={styles.courtItemImg} />
            <AppText variant="medium" size="caption">
              Paddel
            </AppText>
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <AppText variant="semiBold" size="subheading">
            Description
          </AppText>
          <AppText style={styles.descriptionText} variant="normal">
            {isReadMore ? desc : truncateWithEllipsis(desc, 70)}
          </AppText>
          <View>
            <TouchableOpacity
              onPress={() => {
                setisReadMore(!isReadMore);
              }}>
              <AppText
                variant="semiBold"
                size="caption"
                style={styles.readMoreLabel}>
                Read {isReadMore ? 'Less' : 'More..'}
              </AppText>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.contactContainer}>
          <AppText variant="semiBold" size="subheading">
            +974 33577193
          </AppText>
          <TouchableOpacity>
            <View style={styles.contactBtn}>
              <AppText
                style={styles.contactBtnText}
                variant="medium"
                size="caption">
                Contact
              </AppText>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.mapContainer}>
          <Image source={MapImg} style={styles.mapImg} />
        </View>
        <View style={{height: 100}} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default VenueDetails;
