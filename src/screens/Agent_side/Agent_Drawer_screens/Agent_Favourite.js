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
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
const Agent_Favourite = () => {
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

  const Propnewsdata = [
    {
      id: 1,
      name: 'Gerald P',
      stage: 'Marketing Director at Kiwi Properties Pte Ltd',

      des: 'We, Kiwi Properties Pte Ltd, a real estate advertising company with a team of professionals in business development, sales and marketing. In the new era of digital marketing, we...Read More',

      Company_Name: 'Kiwi Properties Pte Ltd',
      Contact: '+65ContactEmail',
      Email: 'peter.g@kiwi.sg',
    },
    {
      id: 2,
      name: 'Gerald',
      stage: 'Marketing Director at Kiwi Properties Pte Ltd',

      des: 'We, Kiwi Properties Pte Ltd, a real estate advertising company with a team of professionals in business development, sales and marketing. In the new era of digital marketing, we...Read More',

      Company_Name: 'Kiwi Properties Pte Ltd',
      Contact: '+65ContactEmail',
      Email: 'peter.g@kiwi.sg',
    },
  ];
  const swiperRef = useRef(null);

  return (
    <View style={styles.container}>
      <View style={authstyles.header}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            navigation.goBack();
          }}>
          <AntDesign name="arrowleft" color={Colors.black} size={24} />
        </TouchableOpacity>
        <Text style={authstyles.headertext}>Favourite</Text>
        <View></View>
      </View>
      <ScrollView>
        <View>
          <FlatList
            data={Alldata}
            renderItem={({item, index}) => {
              return (
                <View activeOpacity={0.9} style={[styles.allflatbox]}>
                  <ImageBackground
                    borderTopLeftRadius={12}
                    borderTopRightRadius={12}
                    source={item.image}
                    style={styles.allimage}></ImageBackground>
                  <View style={{paddingHorizontal: wp(3)}}>
                    <Text
                      numberOfLines={1}
                      style={[
                        styles.name,
                        {
                          color: Colors.black,
                          marginTop: wp(2),
                          textAlign: 'center',
                        },
                      ]}>
                      {item.name}
                    </Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text
                        style={[
                          styles.flatbeds,
                          {fontFamily: fonts.Regular, color: Colors.gray},
                        ]}>
                        <Text
                          style={[
                            styles.flathighlighted,
                            {fontFamily: fonts.Bold, color: 'black'},
                          ]}>
                          Status:{' '}
                        </Text>
                        For Sale
                      </Text>

                      <Text
                        style={[
                          styles.flatbeds,
                          {
                            fontFamily: fonts.Regular,
                            color: Colors.gray,
                            marginLeft: wp(10),
                          },
                        ]}>
                        <Text
                          style={[
                            styles.flathighlighted,
                            {fontFamily: fonts.Bold, color: 'black'},
                          ]}>
                          Price:{' '}
                        </Text>
                        SGD $7321797
                      </Text>
                    </View>
                    <Text
                      style={[
                        styles.flatbeds,
                        {
                          fontFamily: fonts.Regular,
                          color: Colors.gray,
                          // marginLeft: wp(10),
                        },
                      ]}>
                      <Text
                        style={[
                          styles.flathighlighted,
                          {fontFamily: fonts.Bold, color: 'black'},
                        ]}>
                        sqft:{' '}
                      </Text>
                      2000
                    </Text>
                    <Text style={styles.flattypes}>{item.type}</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Agent_Property_Details');
                    }}
                    style={{
                      width: wp(80),
                      height: wp(12),
                      backgroundColor: Colors.main,
                      alignSelf: 'center',
                      borderRadius: 12,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: wp(6),
                      flexDirection: 'row',
                    }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontFamily: fonts.Bold,
                        color: Colors.white,
                      }}>
                      Details
                    </Text>
                    <SimpleLineIcons
                      name="arrow-right"
                      size={12}
                      color={Colors.white}
                      style={{marginLeft: wp(5)}}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Property_Detail');
                    }}
                    style={{
                      width: wp(80),
                      height: wp(12),
                      borderColor: Colors.graish,
                      alignSelf: 'center',
                      borderRadius: 12,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: wp(2),
                      borderWidth: 1,
                    }}>
                    <Entypo name="cross" size={18} color={Colors.gray} />
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Agent_Favourite;

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
    paddingBottom: wp(4),
    backgroundColor: Colors.white,
    elevation: 2,
    marginVertical: wp(2),
    borderRadius: 12,
    alignSelf: 'center',
    // flexDirection: 'row',
    // alignItems: 'center',
  },
  allimage: {
    width: wp(90),
    height: wp(40),
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
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
  line2: {
    width: wp(85),
    backgroundColor: Colors.gray,
    height: wp(0.2),
    marginVertical: wp(3),
  },
  featureItem1: {
    flex: 1,
    margin: wp(1),
    // alignItems: 'center',
    // justifyContent: 'center',
    borderRadius: 10,
    // padding: wp(2),
    flexDirection: 'row',
    alignItems: 'center',
  },
  featureText: {
    fontSize: 12,
    fontFamily: fonts.Regular,
    color: Colors.black,
    marginLeft: wp(2),
  },
  featureimage: {
    width: wp(85),
    height: wp(50),
    alignSelf: 'center',
    marginTop: wp(4),
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingVertical: wp(2),
  },
  addbox: {
    width: wp(90),
    paddingVertical: wp(3),
    backgroundColor: Colors.white,
    elevation: 2,
    alignSelf: 'center',
    marginVertical: wp(2),
    // borderRadius: 12,
  },
  headings: {
    fontSize: 14,
    fontFamily: fonts.Medium,
    color: Colors.black,
    marginLeft: wp(3),
  },
  box: {
    padding: wp(2.5),
    backgroundColor: 'rgba(0,0,0,.5)',
    borderRadius: 10,
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
    width: wp(40),
    height: wp(25),
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
    width: wp(66),
    // backgroundColor: 'red',
    lineHeight: 22,
    marginRight: 5,
  },
});
