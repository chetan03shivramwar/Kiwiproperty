import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  Modal,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {Colors, fonts, images} from '../../../constant/Indes';
import SwiperFlatList from 'react-native-swiper-flatlist';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {authstyles} from '../../Auth/AuthStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Most_Viewed_Properties = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('All');

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
  const swiperRef = useRef(null);

  return (
    <View style={styles.container}>
      <View style={authstyles.header}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            navigation.openDrawer();
          }}>
          <AntDesign name="bars" color={Colors.black} size={24} />
        </TouchableOpacity>
        <Text style={authstyles.headertext}>Most View Properties</Text>
        <View></View>
      </View>
      <ScrollView>
        <View>
          <View style={{marginTop: wp(2)}}>
            <FlatList
              data={Alldata}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.9}
                    style={styles.flatbox2}
                    onPress={() => {
                      navigation.navigate('Property_Detail');
                    }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Image source={images.prop1} style={styles.image2} />
                      <View style={{marginLeft: wp(2)}}>
                        <Text numberOfLines={3} style={styles.description2}>
                          Donec maximus pretium facilisis. Sed mollis dolor ac
                          iaculis interdum. Donec pretium dui eget magna luctus,
                          vitae ultricies risus rhoncus. Interdum et malesuada
                          fames ac ante ipsum primis in faucibus. Mauris tempor
                          vel mi eget aliquam. Integer porttitor suscipit
                          blandit. Proin eleifend dolor augue, vel cursus est
                          commodo eleifend. Vestibulum sed luctus nunc. Donec
                          volutpat quam in euismod sollicitudin. Sed vulputate
                          eleifend porttitor
                        </Text>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            alignSelf: 'flex-end',
                          }}>
                          <Text
                            numberOfLines={1}
                            style={[
                              {
                                color: Colors.main,
                                fontFamily: fonts.Medium,
                                fontSize: 12,
                                // marginTop: wp(2),
                              },
                            ]}>
                            Read more
                          </Text>
                          <MaterialIcons
                            name="play-arrow"
                            size={14}
                            color={Colors.main}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={{marginLeft: wp(0)}}>
                      <Text style={styles.name2}>Your Realtor for Life!</Text>
                      <Text style={[styles.name2, {fontSize: 12}]}>
                        SGD $1400000
                      </Text>

                      <View style={{}}>
                        <Text
                          style={{
                            fontSize: 12,
                            fontFamily: fonts.Regular,
                            color: 'gray',
                            marginTop: wp(4),
                          }}>
                          5 beds. 5 baths. 4100 sqft
                        </Text>
                        <Text
                          style={{
                            fontSize: 12,
                            fontFamily: fonts.Regular,
                            color: 'gray',
                            marginTop: wp(4),
                          }}>
                          Bangalow
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Most_Viewed_Properties;

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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(5),
  },
  search_row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp(100),
    alignSelf: 'center',
    backgroundColor: Colors.white,
    paddingVertical: wp(2),
    // elevation: 2,
    // borderRadius: 12,
    // marginVertical: wp(4),
    paddingHorizontal: wp(5),
    marginTop: 2,
  },
  searchbox: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(75),
    backgroundColor: Colors.white,
    height: wp(12),
    elevation: 2,
    borderRadius: 12,
    paddingHorizontal: wp(3),
  },
  filterbox: {
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(12),
    backgroundColor: Colors.white,
    height: wp(12),
    elevation: 2,
    borderRadius: 12,
  },
  Modalbox: {
    width: wp(90),
    height: wp(100),
    backgroundColor: Colors.white,
    elevation: 2,
    borderRadius: 12,
    paddingTop: wp(4),
  },
  modalopenflat: {
    width: wp(80),
    paddingVertical: wp(3),
    backgroundColor: Colors.white,
    elevation: 2,
    borderRadius: 12,
    marginBottom: wp(1),
    alignSelf: 'center',
  },
  flattext: {
    fontSize: 14,
    fontFamily: fonts.Regular,
    color: Colors.black,
  },
  flattouch: {
    width: wp(75),
    // backgroundColor: 'red',
    paddingVertical: wp(2),
    borderBottomWidth: 0.5,
    alignSelf: 'center',
    paddingHorizontal: wp(3),
  },
  flatbox2: {
    width: wp(85),
    paddingVertical: wp(1),
    backgroundColor: Colors.white,
    alignSelf: 'center',
    // elevation: 2,

    marginVertical: wp(2),
    paddingRight: wp(3),
    borderRadius: 12,
    // alignItems: 'center',
  },
  image2: {
    width: wp(30),
    height: wp(20),
  },
  name2: {
    fontSize: 14,
    fontFamily: fonts.Medium,
    color: Colors.black,
  },
  stage2: {
    fontSize: 12,
    fontFamily: fonts.Regular,
    color: Colors.gray,
    // backgroundColor: 'red',
    maxWidth: wp(70),
    marginTop: wp(1),
  },
  description2: {
    fontSize: 12,
    fontFamily: fonts.Regular,
    color: Colors.gray,
    marginTop: wp(2),
    width: wp(56),
    // backgroundColor: 'red',
    lineHeight: 25,
    marginRight: 5,
    // lineHeight: 22,
  },
});
