import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Colors, fonts, images} from '../../constant/Indes';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {authstyles} from '../Auth/AuthStyles';

const All_Properties_Filtered = () => {
  const navigation = useNavigation();

  const Alldata = [
    {
      id: 1,
      agentname: 'Jon Doe',
      sgd: '$1200393',
      Beds: '2',
      bath: '1',
      sqft: '4500',
      type: 'Apartment',
      name: 'Vertue',
      location: 'New York',
      date: '6 months ago',
      image: images.prop1,
      salestaues: 'For Rent',
    },
    {
      id: 2,
      agentname: 'John Cena',
      sgd: '$1200213',
      Beds: '4',
      bath: '5',
      sqft: '5000',
      type: 'Bungalow',
      name: 'Wonderful Location',
      location: 'Chicago',
      date: '1 month ago',
      image: images.prop2,
      salestaues: 'Mortage',
    },
    {
      id: 3,
      agentname: 'Rock',
      sgd: '$1200213',
      Beds: '4',
      bath: '5',
      sqft: '5000',
      type: 'Bungalow',
      name: 'Wonderful Location',
      location: 'Chicago',
      date: '1 year ago',
      image: images.prop3,
      salestaues: 'For Sale',
    },
    {
      id: 4,
      agentname: 'Jon Doe',
      sgd: '$1200393',
      Beds: '2',
      bath: '1',
      sqft: '4500',
      type: 'Apartment',
      name: 'Vertue',
      location: 'New York',
      date: '6 months ago',
      image: images.prop1,
      salestaues: 'Mortage',
    },
    {
      id: 5,
      agentname: 'John Cena',
      sgd: '$1200213',
      Beds: '4',
      bath: '5',
      sqft: '5000',
      type: 'Bungalow',
      name: 'Wonderful Location',
      location: 'Chicago',
      date: '1 month ago',
      image: images.prop2,
      salestaues: 'Mortage',
    },
    {
      id: 6,
      agentname: 'Rock',
      sgd: '$1200213',
      Beds: '4',
      bath: '5',
      sqft: '5000',
      type: 'Bungalow',
      name: 'Wonderful Location',
      location: 'Chicago',
      date: '1 year ago',
      image: images.prop3,
      salestaues: 'For Rent',
    },
  ];

  const renderItem = ({item}) => (
    <View style={[styles.allflatbox]}>
      <Image source={item.image} style={styles.allimage} />
      <View style={{paddingHorizontal: wp(3)}}>
        <Text style={[styles.name, {marginBottom: wp(2)}]}>{item.name}</Text>
        <Text numberOfLines={1} style={styles.flatlocation}>
          {item.location}
        </Text>
        <Text style={styles.flatbeds}>
          <Text style={styles.flathighlighted}>Beds: </Text>
          {item.Beds} {'    '}
          <Text style={styles.flathighlighted}>Baths: </Text>
          {item.bath}
          {'    '}
          <Text style={styles.flathighlighted}>sqft: </Text>
          {item.sqft}
        </Text>
        <Text style={styles.flattypes}>{item.type}</Text>
        <View style={styles.line}></View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={styles.iconText}>
            <Ionicons name="person-outline" size={16} color={Colors.gray} />
            <Text style={[styles.agentname, {fontSize: 12}]}>
              {item.agentname}
            </Text>
          </View>
          <View style={[styles.iconText]}>
            <Ionicons name="calendar-outline" size={16} color={Colors.gray} />
            <Text style={[styles.agentname, {fontSize: 12}]}>{item.date}</Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={[authstyles.header, {marginBottom: wp(4)}]}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            navigation.goBack();
          }}>
          <AntDesign name="arrowleft" size={22} color={Colors.black} />
        </TouchableOpacity>
        <Text style={authstyles.headertext}>My Properties</Text>
        <View></View>
      </View>
      <FlatList
        data={Alldata}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default All_Properties_Filtered;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  slide: {
    width: wp(100),
    height: wp(60),
  },
  shadowview: {
    width: wp(100),
    height: wp(60),
    backgroundColor: 'rgba(0,0,0,.4)',
    justifyContent: 'flex-end',
    paddingBottom: wp(2),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.Bold,
    color: Colors.main,
  },
  sgd: {
    fontSize: 14,
    fontFamily: fonts.Medium,
    color: Colors.white,
  },
  location: {
    marginTop: wp(1),
    fontSize: 14,
    fontFamily: fonts.Regular,
    color: Colors.gray,
    width: wp(90),
    alignSelf: 'center',
  },
  beds: {
    fontSize: 14,
    fontFamily: fonts.Bold,
    color: Colors.white,
    marginLeft: wp(5),
    marginTop: wp(1),
  },
  highlighted: {
    color: Colors.white,
  },
  type: {
    fontSize: 14,
    fontFamily: fonts.Medium,
    color: Colors.white,
    marginLeft: wp(5),
    marginTop: wp(1),
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: wp(5),
    marginTop: wp(1),
  },
  iconText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  marginLeft: {
    marginLeft: wp(10),
  },
  agentname: {
    fontSize: 14,
    fontFamily: fonts.Regular,
    color: Colors.gray,
    marginLeft: wp(2),
  },
  heading: {
    fontSize: 14,
    fontFamily: fonts.Medium,
    color: Colors.black,
    marginLeft: wp(5),
  },
  flatbox: {
    width: wp(60),
    paddingBottom: wp(4),
    backgroundColor: Colors.white,
    elevation: 2,
    marginVertical: wp(2),
    borderRadius: 12,
  },
  image: {
    width: wp(60),
    height: wp(30),
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  flatlocation: {
    fontSize: 12,
    fontFamily: fonts.Regular,
    color: Colors.gray,
    marginTop: 1,
  },
  flatbeds: {
    fontSize: 12,
    fontFamily: fonts.Bold,
    color: Colors.black,
    marginTop: wp(1),
  },
  flathighlighted: {
    color: Colors.graish,
  },
  flattypes: {
    fontSize: 14,
    fontFamily: fonts.Regular,
    color: Colors.black,
  },
  line: {
    width: wp(55),
    backgroundColor: Colors.graish,
    height: wp(0.3),
    marginVertical: wp(3),
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(5),
    marginVertical: wp(2),
  },
  filterButton: {
    padding: wp(2),
    backgroundColor: Colors.white,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.main,
  },
  selectedFilter: {
    backgroundColor: Colors.main,
  },
  filterButtonText: {
    color: Colors.main,
  },
  selectedFilterText: {
    color: Colors.white,
  },
  seeAllContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: wp(5),
  },
  seeAll: {
    color: Colors.main,
    textDecorationLine: 'underline',
  },
  allflatbox: {
    width: wp(90),
    height: wp(40),
    backgroundColor: Colors.white,
    elevation: 2,
    marginVertical: wp(2),
    borderRadius: 12,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  allimage: {
    width: wp(30),
    height: wp(40),
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
});
