import React from 'react';
import {View, SafeAreaView, TouchableOpacity, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import generateStyle from './style';
import {themeSelector} from 'redux/slices/theme/theme.selector';
import Header from 'components/Header';
import SearchIcon from '../../../assets/imgs/search-header-icon.svg';
import FilterIcon from '../../../assets/imgs/filter-icon.svg';
import VenueItem from 'components/VenueItem';

function VenueList() {
  const theme = useSelector(themeSelector);
  const styles = generateStyle(theme);

  // Example data for the FlatList
  const venueData = [
    {id: '1', name: 'Venue 1'},
    {id: '2', name: 'Venue 2'},
    {id: '3', name: 'Venue 3'},
    {id: '4', name: 'Venue 4'},
    {id: '5', name: 'Venue 4'},
    {id: '6', name: 'Venue 4'},
    {id: '7', name: 'Venue 4'},
    {id: '8', name: 'Venue 4'},
    // Add more items here as needed
  ];

  const searchIcon = (
    <TouchableOpacity>
      <SearchIcon />
    </TouchableOpacity>
  );
  const filterIcon = (
    <TouchableOpacity>
      <FilterIcon />
    </TouchableOpacity>
  );

  // Function to render each item in the list
  const renderVenueItem = ({item}) => {
    return <VenueItem />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Venue List" icons={[searchIcon, filterIcon]} />
      <FlatList
        showsVerticalScrollIndicator={false} // Hide vertical scrollbar
        showsHorizontalScrollIndicator={false} // Hide horizontal scrollbar
        data={venueData} // Pass the data array
        renderItem={renderVenueItem} // Function to render each item
        keyExtractor={item => item.id} // Unique key for each item
        contentContainerStyle={styles.flatListContainer} // Styling for FlatList
      />
    </SafeAreaView>
  );
}

export default VenueList;
