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
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
const Hot_Listing = () => {
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
      featured:'Featured',

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
      featured:'Featured',

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
      featured:'Featured',

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
      featured:'Featured',

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
      featured:'Featured',

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
      featured:'Featured',

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
            navigation.openDrawer();
          }}>
          <AntDesign name="bars" color={Colors.black} size={24} />
        </TouchableOpacity>
        <Text style={authstyles.headertext}>Hot Listing</Text>
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
                    style={styles.allimage}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: wp(2), marginTop: wp(2) }}>
                                    <View style={{ paddingHorizontal: wp(2), paddingVertical: wp(1), borderRadius: wp(1), justifyContent: 'center', alignItems: 'center', backgroundColor: '#00E800' }}>
                                        <Text style={{ fontSize: 8, fontFamily: fonts.Medium, color: Colors.white }}>{item.featured}</Text>
                                    </View>
                                    <View style={{ paddingHorizontal: wp(2), paddingVertical: wp(1), borderRadius: wp(1), justifyContent: 'center', alignItems: 'center', backgroundColor: '#121214' }}>
                                        <Text style={{ fontSize: 8, fontFamily: fonts.Medium, color: Colors.white }}>{item.salestaues}</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: wp(2), marginBottom: wp(2) }}>
                                    <View style={{ paddingHorizontal: wp(2), paddingVertical: wp(1), borderRadius: wp(1), }}>
                                        <Text style={{ fontSize: 14, fontFamily: fonts.Medium, color: Colors.white }}>SGD {item.sgd}</Text>
                                    </View>
                                    <TouchableOpacity
                                         // Handle press event
                                        style={{ paddingHorizontal: wp(2), paddingVertical: wp(1), borderRadius: wp(1), justifyContent: 'center', alignItems: 'center',  backgroundColor: 'rgba(0,0,0,.7)',}}
                                    >
                                        <AntDesign
                                            name='hearto'
                                            size={18}
                                            color={ Colors.white} // Change color based on state
                                        />
                                    </TouchableOpacity>
                                </View>
                  </ImageBackground>
                  <View style={{paddingHorizontal: wp(3)}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: wp(2),
                        marginTop: wp(4),
                      }}>
                      <Text
                        numberOfLines={1}
                        style={[
                          styles.name,
                          {
                            marginTop: wp(2),
                            // backgroundColor: 'red',
                            maxWidth: wp(43),
                            marginTop: 0,
                            color: 'black',
                          },
                        ]}>
                        {item.name}
                      </Text>
                    </View>
                    <Text numberOfLines={1} style={styles.flatlocation}>
                      {item.location}
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <View>
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
                      </View>

                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('Property_Detail');
                        }}
                        style={{
                          width: wp(30),
                          height: wp(12),
                          backgroundColor: Colors.main,
                          alignSelf: 'center',
                          borderRadius: 12,
                          justifyContent: 'center',
                          alignItems: 'center',
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
                    </View>
                    <View style={[styles.line2]}></View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      <View style={styles.iconText}>
                        <Ionicons
                          name="person-outline"
                          size={16}
                          color={Colors.gray}
                        />
                        <Text style={[styles.agentname, {fontSize: 12}]}>
                          {item.agentname}
                        </Text>
                      </View>
                      <View style={[styles.iconText]}>
                        <Ionicons
                          name="calendar-outline"
                          size={16}
                          color={Colors.gray}
                        />
                        <Text style={[styles.agentname, {fontSize: 12}]}>
                          {item.date}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>

        <View
          style={[
            styles.addbox,
            {
              marginTop: wp(6),
            },
          ]}>
          <Text style={styles.headings}>Featured Properties</Text>
          <ImageBackground source={images.prop1} style={styles.featureimage}>
            <View></View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: wp(5),
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: fonts.Regular,
                  color: 'white',
                }}>
                SGD $5999
              </Text>
              <TouchableOpacity style={styles.box}>
                <Ionicons name="camera" size={20} color={Colors.white} />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>

        <View
          style={{
            width: wp(90),
            paddingVertical: wp(4),
            backgroundColor: 'white',
            alignSelf: 'center',
            elevation: 2,
            marginTop: wp(6),
          }}>
          <View style={{marginTop: wp(0)}}>
            <View style={styles.row}>
              <Text style={[styles.heading, {marginLeft: wp(0)}]}>
                Properties
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('All_Propperties');
                }}>
                {/* <Text style={styles.seeAll}>View All</Text> */}
              </TouchableOpacity>
            </View>
            <View>
              <View style={{marginTop: wp(2)}}>
                <FlatList
                  data={Propnewsdata}
                  renderItem={({item}) => {
                    return (
                      <TouchableOpacity
                        activeOpacity={0.9}
                        style={styles.flatbox2}
                        onPress={() => {
                          navigation.navigate('Property_Detail');
                        }}>
                        <Image source={images.prop1} style={styles.image2} />
                        <View style={{marginLeft: wp(0)}}>
                          <Text style={styles.name2}>
                            Your Realtor for Life!
                          </Text>
                          <Text style={[styles.name2, {fontSize: 12}]}>
                            SGD $1400000
                          </Text>

                          <View style={{}}>
                            <Text
                              style={{
                                fontSize: 12,
                                fontFamily: fonts.Regular,
                                color: 'gray',
                                marginTop: wp(1),
                              }}>
                              GSD $123434
                            </Text>
                            <Text
                              style={{
                                fontSize: 12,
                                fontFamily: fonts.Regular,
                                color: 'gray',
                                marginTop: wp(1),
                              }}>
                              5 beds. 5 baths. 4100 sqft
                            </Text>
                            <Text
                              style={{
                                fontSize: 12,
                                fontFamily: fonts.Regular,
                                color: 'gray',
                                marginTop: wp(1),
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
          </View>
        </View>

        <View
          style={{
            width: wp(90),
            marginVertical: wp(2),
            backgroundColor: '#FFF',
            elevation: 1,
            alignSelf: 'center',
            marginTop: wp(6),
          }}>
          <View style={[styles.row, {marginTop: wp(4)}]}>
            <Text style={[styles.heading, {marginLeft: wp(2)}]}>
              Property News
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('All_Propperties');
              }}>
              {/* <Text style={styles.seeAll}>See All</Text> */}
            </TouchableOpacity>
          </View>
          <View style={{marginTop: wp(2)}}>
            <FlatList
              data={Propnewsdata}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.9}
                    style={styles.flatbox2}
                    onPress={() => {
                      navigation.navigate('Property_news_Detail');
                    }}>
                    <Image source={images.prop1} style={styles.image2} />
                    <View style={{marginLeft: wp(0)}}>
                      <Text style={styles.name2}>Your Realtor for Life!</Text>
                      <View
                        style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                        <Text numberOfLines={2} style={styles.description2}>
                          Your Realtor for Life! Your Realtor for Life! Your
                          Realtor for Life! Your Realtor for Life! Your Realtor
                          for Life! Your Realtor for Life! Your Realtor for
                          Life! Your Realtor for Life! Your Realtor for Life!
                        </Text>
                        <View
                          style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Text
                            style={{
                              fontSize: 12,
                              fontFamily: fonts.Medium,
                              color: Colors.main,
                              textAlign: 'right',
                            }}>
                            Read more
                          </Text>
                          <MaterialIcons
                            name="play-arrow"
                            color={Colors.main}
                            size={12}
                          />
                        </View>
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

export default Hot_Listing;

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
    justifyContent:'space-between'
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
