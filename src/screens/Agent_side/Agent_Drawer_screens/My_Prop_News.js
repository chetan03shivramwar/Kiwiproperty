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
import Feather from 'react-native-vector-icons/Feather';
import {authstyles} from '../../Auth/AuthStyles';
import ReadMore from '@fawazahmed/react-native-read-more';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CountryPicker from 'react-native-country-picker-modal';
import Button from '../../../components/Button';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
const My_Prop_News = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [showFilterModal, setShowFilterModal] = useState(false);
  const data = [
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
    },
  ];

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
      salestaues: 'FOR RENT',
      cond: 'Paid',
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
      salestaues: 'MORTGAGE',
      cond: 'Expire',
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
      salestaues: 'FOR RENT',
      cond: 'Paid',
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
      salestaues: 'MORTGAGE',
      cond: 'Paid',
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
      salestaues: 'MORTGAGE',
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
      salestaues: 'FOR RENT',
    },
    {
      id: 2,
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
      salestaues: 'FOR SALE',
    },
  ];
  const agentdata = [
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

  const [actionsView, setActionsView] = useState(null);

  const close = () => {
    setShowFilterModal(false);
    setSelect(false);
  };
  const [banglowview, setbanglowview] = useState(false);
  const [selectedbanglawdata, setselectedbanglawdata] = useState('');
  const banglawdata = ['Bungalow', 'Bungalow/Detached House', 'Link Bungalow'];

  const [Cities, setCities] = useState(false);
  const [selectedcitydata, setselectedcitydata] = useState('');
  const cityData = ['All Cities', 'Miami', 'New York', 'Los Angles'];

  const [Area, setArea] = useState(false);
  const [selectedarea, setselectedarea] = useState('');
  const areaData = [
    'Near to Mall',
    'near to highway',
    'near to hospital',
    'near to airport',
  ];

  const [filter, setfilter] = useState(false);
  const [selectedfilter, setselectedfilter] = useState('');
  const Pricedata = [
    'Default Order',
    'Price High to Low',
    'Price Low to High',
    'New To Old',
    'Old To New',
    'Featured First',
  ];

  const currency = ['CGD $', 'CNY', 'GBP', 'USD', 'MYR', 'GDP'];
  const CountryData = [
    'All',
    'China',
    'India',
    'USA',
    'Bangladesh',
    'Viet Nam',
    'Singapor',
  ];
  const [select, setSelect] = useState(false);
  const [country, setCountry] = useState('US');
  console.log('jdjahkdhkahdkhakhkdahkads', country);
  const [withCountryNameButton, setWithCountryNameButton] = useState(false);
  const [countryModal, setCountryModal] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [preferredCurrency, setPreferredCurrency] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('');
  const [countryFlag, setCountryFlag] = useState(null);
  return (
    <View style={authstyles.container}>
      <View style={authstyles.header}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            navigation.goBack();
          }}>
          <AntDesign name="arrowleft" color={Colors.black} size={24} />
        </TouchableOpacity>
        <Text style={authstyles.headertext}>My Property News</Text>
        <View></View>
      </View>
      <View
        style={[
          styles.searchbox,
          {width: wp(90), alignSelf: 'center', marginVertical: wp(4)},
        ]}>
        <TextInput
          placeholder="Search Listing"
          placeholderTextColor={Colors.gray}
          style={authstyles.inputtext}
        />
        <Feather name="search" size={22} color={Colors.graish} />
      </View>
      <ScrollView>
        <View style={{marginTop: wp(4)}}>
          <View style={styles.seeAllContainer}>
            <View></View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                // marginVertical: wp(2),
              }}>
              <Text
                style={{
                  fontSize: 12,
                  color: Colors.graish,
                  fontFamily: fonts.Light,
                }}>
                Sort by:
              </Text>
              <TouchableOpacity
                style={{flexDirection: 'row', alignItems: 'center'}}
                onPress={() => {
                  setfilter(!filter);
                }}>
                <Text
                  style={[
                    styles.sorttext,
                    {color: filter ? 'black' : Colors.main},
                  ]}>
                  {selectedfilter ? selectedfilter : 'Select Filter'}
                </Text>
                <Entypo
                  name="select-arrows"
                  size={14}
                  color={filter ? 'black' : Colors.main}
                />
              </TouchableOpacity>
            </View>
          </View>
          {filter && (
            <View style={styles.filterDropdown}>
              <FlatList
                data={Pricedata}
                nestedScrollEnabled
                renderItem={({item}) => (
                  <View style={styles.flterview}>
                    <TouchableOpacity
                      style={styles.seletedfiletrview}
                      onPress={() => {
                        setselectedfilter(item);
                        setfilter(false);
                      }}>
                      <Text
                        style={{
                          color:
                            selectedfilter === item ? Colors.main : 'black',
                          fontFamily: fonts.Regular,
                          fontSize: 14,
                        }}>
                        {item}
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
                keyExtractor={item => item}
              />
            </View>
          )}

          <View>
            <FlatList
              data={Alldata}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Agent_Property_News_Detail');
                    }}
                    activeOpacity={0.9}
                    style={[styles.allflatbox]}>
                    <ImageBackground
                      borderTopLeftRadius={12}
                      borderTopRightRadius={12}
                      source={item.image}
                      style={styles.allimage}></ImageBackground>
                    <View style={{paddingHorizontal: wp(3)}}>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                          marginBottom: wp(2),
                          marginTop: wp(4),
                          paddingHorizontal: wp(5),
                        }}>
                        <Text
                          numberOfLines={1}
                          style={[
                            styles.name,
                            {
                              marginTop: wp(2),
                              // backgroundColor: 'red',
                              maxWidth: wp(60),
                              marginTop: 0,
                              color: 'black',
                            },
                          ]}>
                          {item.name}
                        </Text>

                        <Text
                          numberOfLines={1}
                          style={{
                            paddingHorizontal: wp(2),
                            backgroundColor: 'green',
                            borderRadius: 5,
                            paddingVertical: wp(1),
                            color: 'white',
                            fontFamily: fonts.Regular,
                            marginLeft: wp(2),
                          }}>
                          Paid
                        </Text>
                      </View>
                      <Text
                        style={{
                          fontSize: 14,
                          fontFamily: fonts.Medium,
                          color: '#fcb900',
                          paddingHorizontal: wp(10),
                          marginVertical: wp(2),
                          lineHeight: 22,
                        }}>
                        Donec maximus pretium facilisis. Sed mollis dolor ac
                        iaculis interdum. Donec pretium dui eget magna luctus,
                      </Text>

                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <View>
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                            }}>
                            <Text style={styles.flatbeds}>
                              <Text style={styles.flathighlighted}>
                                Status:{' '}
                              </Text>
                              For Sale
                            </Text>

                            <Text
                              style={[styles.flatbeds, {marginLeft: wp(10)}]}>
                              <Text style={styles.flathighlighted}>
                                Price:{' '}
                              </Text>
                              SGD $678,799,9
                            </Text>
                          </View>

                          <Text style={[styles.flatbeds, {marginLeft: wp(0)}]}>
                            <Text style={styles.flathighlighted}>sqft: </Text>
                            1000
                          </Text>
                        </View>
                      </View>
                      <TouchableOpacity
                        style={{
                          width: wp(80),
                          height: wp(12),
                          borderWidth: 1,
                          borderColor: Colors.graish,
                          borderRadius: 10,
                          marginTop: wp(6),
                          paddingHorizontal: wp(3),
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                        onPress={() => {
                          setActionsView(actionsView === index ? null : index);
                        }}>
                        <Text
                          style={{
                            fontSize: 14,
                            fontFamily: fonts.Medium,
                            color: 'gray',
                          }}>
                          Actions
                        </Text>
                        <SimpleLineIcons
                          name={
                            actionsView === index ? 'arrow-up' : 'arrow-down'
                          }
                          size={14}
                          color="gray"
                        />
                      </TouchableOpacity>
                      {actionsView === index && (
                        <View style={styles.modalbox}>
                          <TouchableOpacity
                            style={styles.pointsview}
                            onPress={() => {
                              navigation.navigate('Edit_Property');
                            }}>
                            <AntDesign
                              name="edit"
                              size={18}
                              color={Colors.graish}
                            />
                            <Text style={styles.pointtext}>Edit</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.pointsview}>
                            <AntDesign
                              name="delete"
                              size={18}
                              color={Colors.graish}
                            />
                            <Text style={styles.pointtext}>Delete</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.pointsview}>
                            <AntDesign
                              name="pausecircleo"
                              size={18}
                              color={Colors.graish}
                            />
                            <Text style={styles.pointtext}>Put on Hold</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.pointsview}>
                            <AntDesign
                              name="copy1"
                              size={18}
                              color={Colors.graish}
                            />
                            <Text style={styles.pointtext}>Duplicate</Text>
                          </TouchableOpacity>
                        </View>
                      )}
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

export default My_Prop_News;

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
    fontFamily: fonts.Regular,
    color: Colors.gray,
    marginTop: wp(1),
  },
  flathighlighted: {
    color: Colors.black,
    fontFamily: fonts.Bold,
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

  line2: {
    width: wp(85),
    backgroundColor: Colors.gray,
    height: wp(0.2),
    marginVertical: wp(3),
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
    paddingVertical: wp(2),
    backgroundColor: '#f1f1f1',
  },
  filterButton: {
    padding: wp(2),
    // backgroundColor: Colors.white,
    borderRadius: 5,
  },
  selectedFilter: {
    backgroundColor: Colors.main,
  },
  filterButtonText: {
    color: Colors.black,
  },
  selectedFilterText: {
    color: Colors.white,
  },
  seeAllContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
    marginVertical: wp(2),
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
  flatbox1: {
    width: wp(90),
    paddingBottom: wp(4),
    backgroundColor: Colors.white,
    alignSelf: 'center',
    elevation: 2,

    marginVertical: wp(2),
    paddingHorizontal: wp(3),
    borderRadius: 12,
  },
  image1: {
    width: wp(90),
    height: wp(60),
    // borderRadius: 100,
    alignSelf: 'center',
    // borderRadius: 10,
  },
  name1: {
    fontSize: 12,
    fontFamily: fonts.Regular,
    color: Colors.gray,
    width: wp(30),
    // backgroundColor: 'red',
  },
  stage1: {
    fontSize: 12,
    fontFamily: fonts.Regular,
    color: Colors.gray,
    // backgroundColor: 'red',
    maxWidth: wp(70),
    marginTop: wp(1),
  },
  description1: {
    fontSize: 12,
    fontFamily: fonts.Regular,
    color: Colors.gray,
    marginTop: wp(2),
    maxWidth: wp(75),
    // backgroundColor: 'red',
    lineHeight: 22,
  },
  button: {
    width: wp(80),
    height: wp(12),
    backgroundColor: Colors.main,
    marginTop: wp(5),
    alignSelf: 'center',
    borderRadius: 8,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btntext: {
    fontSize: 14,
    fontFamily: fonts.Bold,
    color: Colors.white,
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
  sorttext: {
    fontSize: 12,
    fontFamily: fonts.Regular,
    color: Colors.main,
    marginLeft: wp(2),
  },
  flterview: {
    width: wp(40),
    height: wp(40),
    backgroundColor: 'white',
    elevation: 2,
    borderRadius: 12,
    marginLeft: wp(10),
  },
  seletedfiletrview: {
    width: wp(35),
    paddingVertical: wp(2),
    borderBottomWidth: 0.6,
    borderBottomColor: Colors.red,
    // alignItems: 'center',
    backgroundColor: 'pink',
  },
  filterDropdown: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    // position: 'absolute',
    alignSelf: 'flex-end',
    marginRight: wp(5),
    marginTop: wp(2),
    height: wp(50),
  },
  flterview: {
    marginVertical: 5,
    borderBottomWidth: 0.6,
  },
  seletedfiletrview: {
    padding: 10,
  },
  sorttext: {
    color: Colors.main,
    marginLeft: 5,
    fontFamily: fonts.Bold,
  },
  text: {
    fontSize: 12,
    fontFamily: fonts.Regular,
    color: Colors.black,
  },
  vertline: {
    width: wp(0.3),
    height: wp(5),
    backgroundColor: Colors.graish,
    marginHorizontal: wp(1),
  },
  selectmodal: {
    width: wp(50),
    paddingVertical: wp(4),
    backgroundColor: Colors.white,
    position: 'absolute',
    right: wp(5),
    top: wp(14),
    elevation: 2,
    borderRadius: 12,
    alignItems: 'center',
  },
  selecttext: {
    fontSize: 12,
    fontFamily: fonts.Medium,
    color: Colors.black,
  },
  selectbox: {
    width: wp(40),
    height: wp(8),
    borderWidth: 1,
    borderColor: 'gray',
    marginVertical: wp(2),
    justifyContent: 'center',
    paddingHorizontal: wp(2),
  },
  selectbox1: {
    width: wp(40),
    paddingVertical: wp(1),
    borderWidth: 1,
    borderColor: 'gray',
    marginVertical: wp(2),
    justifyContent: 'center',
    paddingHorizontal: wp(2),
  },
  modaldropdwonview: {
    width: wp(40),
    height: wp(30),
    borderWidth: 1,
    borderColor: 'gray',
    marginVertical: wp(0),
    justifyContent: 'center',
    paddingHorizontal: wp(2),
  },
  modalbox: {
    width: wp(80),
    paddingVertical: wp(4),
    backgroundColor: Colors.white,
    elevation: 2,
    borderRadius: 7,

    marginTop: wp(2),
  },
  pointsview: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: wp(2),
    borderBlockColor: Colors.graish,
    // borderBottomWidth: 0.5,
    width: wp(80),
    // justifyContent: 'center',
    paddingLeft: wp(2),
  },
  pointtext: {
    fontSize: 14,
    fontFamily: fonts.Regular,
    color: Colors.black,
    marginLeft: wp(2),
  },
});
