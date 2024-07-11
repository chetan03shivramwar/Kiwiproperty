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
import React, { useRef, useState } from 'react';
import { Colors, fonts, images } from '../../../constant/Indes';
import SwiperFlatList from 'react-native-swiper-flatlist';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import { authstyles } from '../../Auth/AuthStyles';
import ReadMore from '@fawazahmed/react-native-read-more';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CountryPicker from 'react-native-country-picker-modal';
import Button from '../../../components/Button';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Agent_Home = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [languageModal, setLanguageModal] = useState(false);

  const [selectedLanguage, setSelectedLanguage] = useState({
    name: 'Select Language',
    flag: images.englishflag
  });
  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setLanguageModal(false); // Close the language modal
  };
  const pageSize = 4; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);

  const languages = [
    { name: 'English', flag: images.englishflag },
    { name: 'Urdu', flag: images.pakflag },
    { name: 'Chinese', flag: images.chinaflag },
    { name: 'Hindi', flag: images.indiaflag },
  ];

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
      salestaues: 'FOR RENT',
      featured: 'Featured',
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
      salestaues: 'FOR SALE',
      featured: 'Featured',
    },
  ]
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
      featured: 'Featured',
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
      featured: 'Featured',

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
      featured: 'Featured',

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
      featured: 'Featured',

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
      featured: 'Featured',

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
      featured: 'Featured',

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

  const swiperRef2 = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < data.length - 1) {
      swiperRef2.current.scrollToIndex({ index: currentIndex + 1 });
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      swiperRef2.current.scrollToIndex({ index: currentIndex - 1 });
      setCurrentIndex(currentIndex - 1);
    }
  };
  const swiperRef = useRef(null);

  const filterData = () => {
    if (selectedCategory === 'ALL') {
      return Alldata;
    }
    return Alldata.filter(item => item.salestaues === selectedCategory);
  };

  const renderItem = ({ item }) => (
    <ImageBackground source={item.image} style={styles.slide}>
      <View
        style={{
          width: wp(70),
          height: wp(30),
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{ marginLeft: wp(2) }}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: fonts.Bold,
              color: Colors.black,
              width: wp(50),
            }}>
            For exceptional Service,call Agent Home
          </Text>
          <Text
            numberOfLines={1}
            style={{
              fontSize: 12,
              fontFamily: fonts.Light,
              color: Colors.black,
              width: wp(40),
              marginTop: wp(2),
            }}>
            Seragrad,south Singapur ,north america
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: fonts.Bold,
              color: Colors.black,
              width: wp(50),
              marginTop: wp(2),
            }}>
            GSD $786,789,12
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Property_Detail');
          }}
          activeOpacity={0.9}
          style={{
            width: wp(15),
            height: wp(30),
            backgroundColor: Colors.main,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <MaterialIcons name="arrow-forward-ios" size={22} color="white" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
  const close = () => {
    setShowFilterModal(false);
    setSelect(false);
    setMoreScreen(false);
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

  const [status, setstatus] = useState(false);
  const [selectedstatus, setselectedstatus] = useState('');
  const statusData = ['All', 'For Rent', 'For Sale', 'Mortgage'];

  const [Beds, setBeds] = useState(false);
  const [selectedBeds, setselectedBeds] = useState('');
  const BedsData = ['Beds', '1', '2', '3', '4'];

  const [Baths, setBaths] = useState(false);
  const [selectedBaths, setselectedBaths] = useState('');
  const BathsData = ['Baths', '1', '2', '3', '4'];

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

  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [showfeatureview, setshowfeatureview] = useState(false);
  const features = [
    'Air Conditioning',
    'Barbeque',
    'Dryer',
    'Fully Furnished',
    'Gym',
    'Laundry',
    'Lawn',
    'Microwave',
    'Network Cable',
    'Outdoor Shower',
    'Refrigerator',
    'Sauna',
    'Swimming Pool',
    'TV Cable',
    'Washer',
    'WiFi',
    'Window Coverings',
  ];

  const toggleFeature = feature => {
    if (selectedFeatures.includes(feature)) {
      setSelectedFeatures(selectedFeatures.filter(item => item !== feature));
    } else {
      setSelectedFeatures([...selectedFeatures, feature]);
    }
  };

  const selectAllFeatures = () => {
    if (selectedFeatures.length === features.length) {
      setSelectedFeatures([]);
    } else {
      setSelectedFeatures(features);
    }
  };

  const [moreScreen, setMoreScreen] = useState(false);
  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * pageSize;
    return filterData().slice(startIndex, startIndex + pageSize);
  };

  // Function to get total number of pages
  const totalPages = Math.ceil(filterData().length / pageSize);
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
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
        <Image
          source={images.logo}
          resizeMode="contain"
          style={{ width: wp(12), height: wp(12), left: wp(14) }}
        />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              //   backgroundColor: 'red',
            }}
            onPress={() => {
              setSelect(!select);
            }}>
            <Image source={selectedLanguage.flag} style={{ width: wp(6), height: wp(4), marginRight: wp(1) }} />


            <View style={styles.vertline}></View>
            <Text
              numberOfLines={1}
              style={[
                styles.text,
                {
                  fontSize: 12,
                  fontFamily: fonts.Regular,
                  color: 'black',
                  width: wp(6),
                },
              ]}>
              {' '}
              {selectedCountry ? selectedCountry : 'All'}
            </Text>
            <View style={styles.vertline}></View>
            <Text numberOfLines={1} style={[styles.text, { width: wp(6) }]}>
              {' '}
              {selectedCurrency ? selectedCurrency : 'USD'}
            </Text>
            <AntDesign
              name={select ? 'up' : 'down'}
              color="black"
              size={16}
              style={{ marginLeft: wp(2) }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setMoreScreen(!moreScreen);
            }}
            style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={images.pro}
              style={{ width: wp(8), height: wp(8), marginLeft: wp(2), borderRadius: 100 }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={styles.search_row}>
          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.filterbox}
            onPress={() => {
              setShowFilterModal(!showFilterModal);
            }}>
            <Ionicons name="settings" size={30} color={Colors.main} />
          </TouchableOpacity>
          <View style={styles.searchbox}>
            <TextInput
              placeholder="Search..."
              placeholderTextColor={Colors.gray}
              style={authstyles.inputtext}
            />
            <Feather name="search" size={22} color={Colors.graish} />
          </View>
        </View>
        <View>
          <SwiperFlatList
            ref={swiperRef}
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            showPagination={false}
            autoplay
            autoplayDelay={5}
            autoplayLoop
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: wp(90),
            alignSelf: 'center',
            marginVertical: wp(1),
            marginTop: wp(4),
          }}>
          <TouchableOpacity
            style={styles.rowbox}
            activeOpacity={0.9}
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Image source={images.log} style={styles.rowimages} />
            <Text numberOfLines={2} style={styles.rowtext}>
              Login/Register
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.rowbox}
            activeOpacity={0.9}
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Image source={images.mainhome} style={styles.rowimages} />
            <Text numberOfLines={2} style={styles.rowtext}>
              Home
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.rowbox}
            activeOpacity={0.9}
            onPress={() => {
              navigation.navigate('Agents');
            }}>
            <Image source={images.agentsicon} style={styles.rowimages} />
            <Text numberOfLines={2} style={styles.rowtext}>
              Agents
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.rowbox}
            activeOpacity={0.9}
            onPress={() => {
              setShowFilterModal(!showFilterModal);
            }}>
            <Image source={images.ptype} style={styles.rowimages} />
            <Text numberOfLines={2} style={styles.rowtext}>
              Property Type
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.rowbox}
            activeOpacity={0.9}
            onPress={() => {
              navigation.navigate('Affiliate_Member');
            }}>
            <Image source={images.affil} style={styles.rowimages} />
            <Text numberOfLines={2} style={styles.rowtext}>
              Affiliate Member
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: wp(90),
            alignSelf: 'center',
            marginVertical: wp(1),
          }}>
          <TouchableOpacity
            style={styles.rowbox}
            activeOpacity={0.9}
            onPress={() => {
              navigation.navigate('Calculator');
            }}>
            <Image source={images.cal} style={styles.rowimages} />
            <Text numberOfLines={2} style={styles.rowtext}>
              Calculator
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.rowbox}
            activeOpacity={0.9}
            onPress={() => {
              navigation.navigate('Properties_News');
            }}>
            <Image source={images.latestnews} style={styles.rowimages} />
            <Text numberOfLines={2} style={styles.rowtext}>
              Property News
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.rowbox}
            activeOpacity={0.9}
            onPress={() => {
              navigation.navigate('Add_New_Property');
            }}>
            <Image source={images.clisting} style={styles.rowimages} />
            <Text numberOfLines={2} style={styles.rowtext}>
              Create Listing
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.rowbox}
            activeOpacity={0.9}
            onPress={() => {
              navigation.navigate('Most_Viewed_Properties');
            }}>
            <Image source={images.mvprop} style={styles.rowimages} />
            <Text numberOfLines={2} style={styles.rowtext}>
              Most Viewed
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.rowbox}
            activeOpacity={0.9}
            onPress={() => {
              navigation.navigate('Hot_Listing');
            }}>
            <Image source={images.hot2} style={styles.rowimages} />
            <Text numberOfLines={2} style={styles.rowtext}>
              Hot Listing
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: wp(4) }}>
          <View style={styles.row}>
            <Text style={styles.heading}>Featured Properties</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('All_Propperties');
              }}>
              <Text style={styles.seeAll}>View All</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginHorizontal: wp(4),marginTop:wp(3) }}>
            <SwiperFlatList
              data={data}
              ref={swiperRef2}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.9}
                    style={{
                      // marginLeft: index === 0 ? wp(5) : 0,
                      // marginRight: wp(3),
                      justifyContent: 'center',  // Center horizontally
                      alignItems: 'center',  // Center vertically
                    }}
                    onPress={() => {
                      navigation.navigate('Property_Detail');
                    }}
                  >
                    <ImageBackground
                      source={item.image}
                      style={{
                        width: wp(92),
                        height: wp(55),
                        justifyContent: 'space-between',
                        paddingVertical: wp(2)
                      }}
                      imageStyle={{}} // Optional: To add rounded corners to the image
                    >
                      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: wp(2), marginTop: wp(2) }}>
                        <View style={{ paddingHorizontal: wp(2), paddingVertical: wp(1), borderRadius: wp(1), justifyContent: 'center', alignItems: 'center', backgroundColor: '#00E800' }}>
                          <Text style={{ fontSize: 8, fontFamily: fonts.Medium, color: Colors.white }}>{item.featured}</Text>
                        </View>
                        <View style={{ paddingHorizontal: wp(2), paddingVertical: wp(1), borderRadius: wp(1), justifyContent: 'center', alignItems: 'center', backgroundColor: '#121214' }}>
                          <Text style={{ fontSize: 8, fontFamily: fonts.Medium, color: Colors.white }}>{item.salestaues}</Text>
                        </View>
                      </View>
                      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: wp(2), marginBottom: wp(2) }}>
                        <TouchableOpacity
                          // Handle press event
                          style={{ paddingHorizontal: wp(2), paddingVertical: wp(1), borderRadius: wp(1), justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,.7)', }}
                        >
                          <AntDesign onPress={handlePrev}
                            name='left'
                            size={18}
                            color={Colors.white} // Change color based on state
                          />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleNext}
                          // Handle press event
                          style={{ paddingHorizontal: wp(2), paddingVertical: wp(1), borderRadius: wp(1), justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,.7)', }}
                        >
                          <AntDesign
                            name='right'
                            size={18}
                            color={Colors.white} // Change color based on state
                          />
                        </TouchableOpacity>
                      </View>
                      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: wp(2), marginBottom: wp(2) }}>
                        <View style={{ paddingHorizontal: wp(2), paddingVertical: wp(1), borderRadius: wp(1), }}>
                          <Text style={{ fontSize: 14, fontFamily: fonts.Medium, color: Colors.white }}>SGD {item.sgd}</Text>
                        </View>
                        <TouchableOpacity
                          // Handle press event
                          style={{ paddingHorizontal: wp(2), paddingVertical: wp(1), borderRadius: wp(1), justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,.7)', }}
                        >
                          <AntDesign
                            name='camera'
                            size={18}
                            color={Colors.white} // Change color based on state
                          />
                        </TouchableOpacity>
                      </View>
                    </ImageBackground>
                  </TouchableOpacity>
                );
              }}
              showPagination={false} // Optional: If you don't want to show pagination dots
            />

          </View>

          <View style={styles.filterContainer}>
            {['ALL', 'FOR SALE', 'FOR RENT', 'MORTGAGE'].map(category => (
              <TouchableOpacity
                key={category}
                onPress={() => setSelectedCategory(category)}
                style={[
                  styles.filterButton,
                  selectedCategory === category && styles.selectedFilter,
                ]}>
                <Text
                  style={[
                    styles.filterButtonText,
                    selectedCategory === category && styles.selectedFilterText,
                  ]}>
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.seeAllContainer}>
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
                style={{ flexDirection: 'row', alignItems: 'center' }}
                onPress={() => {
                  setfilter(!filter);
                }}>
                <Text
                  style={[
                    styles.sorttext,
                    { color: filter ? 'black' : Colors.main },
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
            <Text
              style={styles.seeAll}
              onPress={() =>
                navigation.navigate('All_Properties_Filtered', {
                  category: selectedCategory,
                })
              }>
              View All
            </Text>
          </View>
          {filter && (
            <View style={styles.filterDropdown}>
              <FlatList
                data={Pricedata}
                nestedScrollEnabled
                renderItem={({ item }) => (
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
              data={getPaginatedData()}
              renderItem={({ item, index }) => {
                return (
                  <View activeOpacity={0.9} style={[styles.allflatbox]}>
                    <ImageBackground

                      source={item.image}
                      style={styles.allimage}
                      borderTopLeftRadius={12}
                      borderTopRightRadius={12}
                    >
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
                          style={{ paddingHorizontal: wp(2), paddingVertical: wp(1), borderRadius: wp(1), justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,.7)', }}
                        >
                          <AntDesign
                            name='hearto'
                            size={18}
                            color={Colors.white} // Change color based on state
                          />
                        </TouchableOpacity>
                      </View>
                    </ImageBackground>
                    <View style={{ paddingHorizontal: wp(3) }}>
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
                            borderRadius: 6,
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
                            style={{ marginLeft: wp(5) }}
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
                          <Text style={[styles.agentname, { fontSize: 12 }]}>
                            {item.agentname}
                          </Text>
                        </View>
                        <View style={[styles.iconText]}>
                          <Ionicons
                            name="calendar-outline"
                            size={16}
                            color={Colors.gray}
                          />
                          <Text style={[styles.agentname, { fontSize: 12 }]}>
                            {item.date}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                );
              }}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: wp(4), alignItems: 'center' }}>
              <TouchableOpacity
                onPress={goToPreviousPage}
                disabled={currentPage === 1}
                style={{
                  padding: wp(2),
                  marginHorizontal: wp(1),
                  opacity: currentPage === 1 ? 0.5 : 1,
                }}>
                <AntDesign name="left" size={16} color={Colors.main} />
              </TouchableOpacity>

              {Array.from({ length: totalPages }, (_, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => setCurrentPage(index + 1)}
                  style={{
                    paddingHorizontal: wp(3),
                    paddingVertical: wp(2),
                    marginHorizontal: wp(1),
                    backgroundColor: currentPage === index + 1 ? Colors.main : Colors.white,
                    borderRadius: 4,
                  }}>
                  <Text style={{ color: currentPage === index + 1 ? 'white' : Colors.main }}>{index + 1}</Text>
                </TouchableOpacity>
              ))}

              <TouchableOpacity
                onPress={goToNextPage}
                disabled={currentPage === totalPages}
                style={{
                  padding: wp(2),
                  marginHorizontal: wp(1),
                  opacity: currentPage === totalPages ? 0.5 : 1,
                }}>
                <AntDesign name="right" size={16} color={Colors.main} />
              </TouchableOpacity>
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
          }}>
          <View style={[styles.row, { marginTop: wp(4) }]}>
            <Text style={styles.heading}>Property News</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('All_Propperties');
              }}>
              {/* <Text style={styles.seeAll}>See All</Text> */}
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: wp(2) }}>
            <FlatList
              data={Propnewsdata}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.9}
                    style={styles.flatbox2}
                    onPress={() => {
                      navigation.navigate('Property_news_Detail');
                    }}>
                    <Image source={images.prop1} style={styles.image2} />
                    <View style={{ marginLeft: wp(0) }}>
                      <Text style={styles.name2}>Your Realtor for Life!</Text>
                      <View
                        style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                        <Text numberOfLines={2} style={styles.description2}>
                          Your Realtor for Life! Your Realtor for Life! Your
                          Realtor for Life! Your Realtor for Life! Your Realtor
                          for Life! Your Realtor for Life! Your Realtor for
                          Life! Your Realtor for Life! Your Realtor for Life!
                        </Text>
                        <View
                          style={{ flexDirection: 'row', alignItems: 'center' }}>
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
        <View
          style={{
            width: wp(100),
            marginVertical: wp(2),
            backgroundColor: '#F7F9F9',
            elevation: 1,
          }}>
          <View style={[styles.row, { marginTop: wp(2) }]}>
            <Text style={styles.heading}>Calculator</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('All_Propperties');
              }}></TouchableOpacity>
          </View>
          <View style={{ marginTop: wp(2) }}>
            <View style={{ marginTop: wp(2) }}>
              <Text style={authstyles.heading}>Total Amount ($)</Text>
              <View style={authstyles.inputview}>
                <TextInput
                  placeholder="Enter amount"
                  placeholderTextColor={Colors.gray}
                  style={authstyles.inputtext}
                />
              </View>
            </View>
            <View style={{ marginTop: wp(2) }}>
              <Text style={authstyles.heading}>Down Payment ($)</Text>
              <View style={authstyles.inputview}>
                <TextInput
                  placeholder="Enter down payment"
                  placeholderTextColor={Colors.gray}
                  style={authstyles.inputtext}
                />
              </View>
            </View>

            <View style={{ marginTop: wp(2) }}>
              <Text style={authstyles.heading}>Interest Rate (%)</Text>
              <View style={authstyles.inputview}>
                <TextInput
                  placeholder="Interest Rate (%)"
                  placeholderTextColor={Colors.gray}
                  style={authstyles.inputtext}
                />
              </View>
            </View>

            <View style={{ marginTop: wp(2) }}>
              <Text style={authstyles.heading}>
                Amortization Period (years)
              </Text>
              <View style={authstyles.inputview}>
                <TextInput
                  placeholder="Enter number of years"
                  placeholderTextColor={Colors.gray}
                  style={authstyles.inputtext}
                />
              </View>
            </View>
          </View>

          <View style={{ marginTop: wp(6), marginBottom: wp(6) }}>
            <TouchableOpacity
              style={{
                width: wp(30),
                height: wp(10),
                borderWidth: 1,
                borderColor: 'black',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: wp(5),
                backgroundColor: '#e2e2e2',
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: fonts.Regular,
                  color: 'black',
                }}>
                Calculate
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ marginTop: wp(4) }}>
          <View style={styles.row}>
            <Text style={styles.heading}>Most View Properties</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('All_Propperties');
              }}>
              {/* <Text style={styles.seeAll}>View All</Text> */}
            </TouchableOpacity>
          </View>
          <View>
            <View style={{ marginTop: wp(2) }}>
              <FlatList
                data={Propnewsdata}
                renderItem={({ item }) => {
                  return (
                    <TouchableOpacity
                      activeOpacity={0.9}
                      style={styles.flatbox2}
                      onPress={() => {
                        navigation.navigate('Property_Detail');
                      }}>
                      <Image source={images.prop1} style={styles.image2} />
                      <View style={{ marginLeft: wp(0) }}>
                        <Text style={styles.name2}>Your Realtor for Life!</Text>
                        <Text style={[styles.name2, { fontSize: 12 }]}>
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
        </View>

        <View
          style={{
            width: wp(100),
            marginVertical: wp(2),
            backgroundColor: '#F7F9F9',
            elevation: 1,
          }}>
          <View style={[styles.row, { marginTop: wp(2) }]}>
            <Text style={styles.heading}>Kiwi Property Agents</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('All_Propperties');
              }}>
              {/* <Text style={styles.seeAll}>See All</Text> */}
            </TouchableOpacity>
          </View>
          <View>
            <FlatList
              data={agentdata}
              horizontal
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.9}
                    style={[
                      styles.flatbox1,
                      { marginLeft: index === 0 ? wp(5) : 0, marginRight: wp(5) },
                    ]}
                    onPress={() => {
                      navigation.navigate('Agents_Detail');
                    }}>
                    <ImageBackground
                      source={images.agentprofile}
                      style={[styles.image1, { justifyContent: 'flex-end' }]}>
                      <Image
                        source={images.logo}
                        resizeMode="contain"
                        style={{
                          width: wp(10),
                          height: wp(10),
                          marginBottom: 5,
                          marginLeft: 15,
                        }}
                      />
                    </ImageBackground>
                    <Text
                      style={[
                        styles.name1,
                        {
                          textAlign: 'center',
                          marginTop: wp(2),
                          alignSelf: 'center',
                          fontFamily: fonts.Bold,
                          color: Colors.black,
                        },
                      ]}>
                      {item.name}
                    </Text>
                    <ReadMore
                      seeMoreStyle={{
                        color: Colors.bahama,
                        fontFamily: fonts.Medium,
                      }}
                      seeLessStyle={{
                        color: Colors.bahama,
                        fontFamily: fonts.Medium,
                      }}
                      numberOfLines={2}
                      style={styles.description1}>
                      {item.des}
                    </ReadMore>

                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: wp(6),
                      }}>
                      <Text style={styles.name1}>Agent Name:</Text>
                      <Text
                        numberOfLines={1}
                        style={[
                          styles.stage1,
                          { marginLeft: wp(2), width: wp(50) },
                        ]}>
                        {item.name}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: wp(1),
                      }}>
                      <Text style={styles.name1}>Company Name:</Text>
                      <Text
                        numberOfLines={1}
                        style={[
                          styles.stage1,
                          { marginLeft: wp(2), width: wp(50) },
                        ]}>
                        {item.Company_Name}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: wp(1),
                      }}>
                      <Text style={styles.name1}>Title/Position:</Text>
                      <Text
                        numberOfLines={1}
                        style={[
                          styles.stage1,
                          { marginLeft: wp(2), width: wp(50) },
                        ]}>
                        {item.stage}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: wp(1),
                      }}>
                      <Text style={styles.name1}>Licance No:</Text>
                      <Text
                        numberOfLines={1}
                        style={[
                          styles.stage1,
                          { marginLeft: wp(2), width: wp(50) },
                        ]}>
                        218ndndN
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: wp(1),
                      }}>
                      <Text style={styles.name1}>Contact:</Text>
                      <Text
                        numberOfLines={1}
                        style={[
                          styles.stage1,
                          { marginLeft: wp(2), width: wp(50), color: 'blue' },
                        ]}>
                        {item.Contact}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: wp(1),
                      }}>
                      <Text style={styles.name1}>Emial:</Text>
                      <Text
                        numberOfLines={1}
                        style={[
                          styles.stage1,
                          { marginLeft: wp(2), width: wp(50), color: 'blue' },
                        ]}>
                        {item.Email}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        width: wp(80),
                        alignSelf: 'center',
                        marginTop: wp(6),
                      }}>
                      <TouchableOpacity>
                        <FontAwesome
                          name="phone-square"
                          size={24}
                          color="gray"
                        />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Ionicons name="mail" size={28} color="gray" />
                      </TouchableOpacity>

                      <TouchableOpacity>
                        <FontAwesome
                          name="facebook-square"
                          size={24}
                          color="gray"
                        />
                      </TouchableOpacity>

                      <TouchableOpacity>
                        <FontAwesome
                          name="twitter-square"
                          size={24}
                          color="gray"
                        />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <FontAwesome
                          name="linkedin-square"
                          size={24}
                          color="gray"
                        />
                      </TouchableOpacity>

                      <TouchableOpacity>
                        <FontAwesome
                          name="youtube-square"
                          size={24}
                          color="gray"
                        />
                      </TouchableOpacity>

                      <TouchableOpacity>
                        <FontAwesome name="instagram" size={24} color="gray" />
                      </TouchableOpacity>

                      <TouchableOpacity>
                        <FontAwesome
                          name="pinterest-square"
                          size={24}
                          color="gray"
                        />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <FontAwesome
                          name="vimeo-square"
                          size={24}
                          color="gray"
                        />
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                      activeOpacity={0.9}
                      style={styles.button}
                      onPress={() => {
                        navigation.navigate('Agents_Property_List');
                      }}>
                      <Text style={styles.btntext}>View My Properties</Text>
                    </TouchableOpacity>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
      <Modal
        visible={showFilterModal}
        transparent={true}
        onRequestClose={close}
        animationType="fade">
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,.6))',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={styles.Modalbox}>
            <ScrollView>
              <TouchableOpacity
                activeOpacity={0.9}
                style={[authstyles.inputview, { width: wp(80) }]}
                onPress={() => {
                  setCities(!Cities);
                }}>
                <Text style={authstyles.inputtext}>
                  {selectedcitydata ? selectedcitydata : 'All Cities'}
                </Text>
                <Entypo name="select-arrows" size={18} color={Colors.gray} />
              </TouchableOpacity>
              {Cities && (
                <View style={styles.modalopenflat}>
                  <FlatList
                    data={cityData}
                    renderItem={({ item }) => {
                      return (
                        <TouchableOpacity
                          onPress={() => {
                            setselectedcitydata(item);
                            setCities(!Cities);
                          }}
                          style={styles.flattouch}
                          activeOpacity={0.9}>
                          <Text style={styles.flattext}>{item}</Text>
                        </TouchableOpacity>
                      );
                    }}
                  />
                </View>
              )}

              <TouchableOpacity
                activeOpacity={0.9}
                style={[authstyles.inputview, { width: wp(80) }]}
                onPress={() => {
                  setArea(!Area);
                }}>
                <Text style={authstyles.inputtext}>
                  {selectedarea ? selectedarea : 'All Areas'}
                </Text>
                <Entypo name="select-arrows" size={18} color={Colors.gray} />
              </TouchableOpacity>
              {Area && (
                <View style={styles.modalopenflat}>
                  <FlatList
                    data={areaData}
                    renderItem={({ item }) => {
                      return (
                        <TouchableOpacity
                          onPress={() => {
                            setselectedarea(item);
                            setArea(!Area);
                          }}
                          style={styles.flattouch}
                          activeOpacity={0.9}>
                          <Text style={styles.flattext}>{item}</Text>
                        </TouchableOpacity>
                      );
                    }}
                  />
                </View>
              )}

              <TouchableOpacity
                activeOpacity={0.9}
                style={[authstyles.inputview, { width: wp(80) }]}
                onPress={() => {
                  setstatus(!status);
                }}>
                <Text style={authstyles.inputtext}>
                  {selectedstatus ? selectedstatus : 'All Status'}
                </Text>
                <Entypo name="select-arrows" size={18} color={Colors.gray} />
              </TouchableOpacity>
              {status && (
                <View style={styles.modalopenflat}>
                  <FlatList
                    data={statusData}
                    renderItem={({ item }) => {
                      return (
                        <TouchableOpacity
                          onPress={() => {
                            setselectedstatus(item);
                            setstatus(!status);
                          }}
                          style={styles.flattouch}
                          activeOpacity={0.9}>
                          <Text style={styles.flattext}>{item}</Text>
                        </TouchableOpacity>
                      );
                    }}
                  />
                </View>
              )}

              <TouchableOpacity
                activeOpacity={0.9}
                style={[authstyles.inputview, { width: wp(80) }]}
                onPress={() => {
                  setbanglowview(!banglowview);
                }}>
                <Text style={authstyles.inputtext}>
                  {selectedbanglawdata ? selectedbanglawdata : 'All Types'}
                </Text>
                <Entypo name="select-arrows" size={18} color={Colors.gray} />
              </TouchableOpacity>
              {banglowview && (
                <View style={styles.modalopenflat}>
                  <FlatList
                    data={banglawdata}
                    renderItem={({ item }) => {
                      return (
                        <TouchableOpacity
                          onPress={() => {
                            setselectedbanglawdata(item);
                            setbanglowview(!banglowview);
                          }}
                          style={styles.flattouch}
                          activeOpacity={0.9}>
                          <Text style={styles.flattext}>{item}</Text>
                        </TouchableOpacity>
                      );
                    }}
                  />
                </View>
              )}

              <TouchableOpacity
                activeOpacity={0.9}
                style={[authstyles.inputview, { width: wp(80) }]}
                onPress={() => {
                  setBeds(!Beds);
                }}>
                <Text style={authstyles.inputtext}>
                  {selectedBeds ? selectedBeds : 'All Beds'}
                </Text>
                <Entypo name="select-arrows" size={18} color={Colors.gray} />
              </TouchableOpacity>
              {Beds && (
                <View style={styles.modalopenflat}>
                  <FlatList
                    data={BedsData}
                    renderItem={({ item }) => {
                      return (
                        <TouchableOpacity
                          onPress={() => {
                            setselectedBeds(item);
                            setBeds(!Beds);
                          }}
                          style={styles.flattouch}
                          activeOpacity={0.9}>
                          <Text style={styles.flattext}>{item}</Text>
                        </TouchableOpacity>
                      );
                    }}
                  />
                </View>
              )}

              <TouchableOpacity
                activeOpacity={0.9}
                style={[authstyles.inputview, { width: wp(80) }]}
                onPress={() => {
                  setBaths(!Baths);
                }}>
                <Text style={authstyles.inputtext}>
                  {selectedBaths ? selectedBaths : 'All Baths'}
                </Text>
                <Entypo name="select-arrows" size={18} color={Colors.gray} />
              </TouchableOpacity>
              {Baths && (
                <View style={styles.modalopenflat}>
                  <FlatList
                    data={BathsData}
                    renderItem={({ item }) => {
                      return (
                        <TouchableOpacity
                          onPress={() => {
                            setselectedBaths(item);
                            setBaths(!Baths);
                          }}
                          style={styles.flattouch}
                          activeOpacity={0.9}>
                          <Text style={styles.flattext}>{item}</Text>
                        </TouchableOpacity>
                      );
                    }}
                  />
                </View>
              )}

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  width: wp(80),
                  alignSelf: 'center',
                }}>
                <View style={[authstyles.inputview, { width: wp(38) }]}>
                  <TextInput
                    placeholder="Min Area (sqft)"
                    placeholderTextColor="gray"
                    style={authstyles.inputtext}
                  />
                </View>

                <View style={[authstyles.inputview, { width: wp(38) }]}>
                  <TextInput
                    placeholder="Max Area (sqft)"
                    placeholderTextColor="gray"
                    style={authstyles.inputtext}
                  />
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  width: wp(80),
                  alignSelf: 'center',
                }}>
                <View style={[authstyles.inputview, { width: wp(38) }]}>
                  <TextInput
                    placeholder="Min Price"
                    placeholderTextColor="gray"
                    style={authstyles.inputtext}
                  />
                </View>

                <View style={[authstyles.inputview, { width: wp(38) }]}>
                  <TextInput
                    placeholder="Max Price"
                    placeholderTextColor="gray"
                    style={authstyles.inputtext}
                  />
                </View>
              </View>

              <TouchableOpacity
                onPress={() => {
                  setshowfeatureview(!showfeatureview);
                }}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: wp(10),
                  marginTop: wp(4),
                }}>
                <AntDesign name="plussquare" size={14} color="black" />
                <Text
                  style={{
                    flexShrink: 14,
                    fontFamily: fonts.Medium,
                    color: 'black',
                    marginLeft: wp(2),
                  }}>
                  Other Features
                </Text>
              </TouchableOpacity>
              {showfeatureview && (
                <View style={{ marginTop: wp(6), marginLeft: wp(10) }}>
                  <TouchableOpacity
                    style={[styles.featureItem]}
                    onPress={selectAllFeatures}
                    activeOpacity={0.8}>
                    <MaterialCommunityIcons
                      name={
                        selectedFeatures.length === features.length
                          ? 'checkbox-marked'
                          : 'checkbox-blank-outline'
                      }
                      size={22}
                      color={
                        selectedFeatures.length === features.length
                          ? Colors.main
                          : 'black'
                      }
                    />
                    <Text style={styles.featureText}>Select All</Text>
                  </TouchableOpacity>

                  <FlatList
                    data={features}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        style={[styles.featureItem]}
                        onPress={() => toggleFeature(item)}
                        activeOpacity={0.8}>
                        <MaterialCommunityIcons
                          name={
                            selectedFeatures.includes(item)
                              ? 'checkbox-marked'
                              : 'checkbox-blank-outline'
                          }
                          size={22}
                          color={
                            selectedFeatures.includes(item)
                              ? Colors.main
                              : 'black'
                          }
                        />
                        <Text style={styles.featureText}>{item}</Text>
                      </TouchableOpacity>
                    )}
                    keyExtractor={item => item}
                  />
                </View>
              )}

              <TouchableOpacity
                style={{
                  width: wp(80),
                  height: wp(12),
                  backgroundColor: '#ff6900',
                  borderRadius: 12,
                  elevation: 2,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                  marginTop: wp(8),
                  marginBottom: wp(4),
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: wp(3),
                }}>
                <AntDesign name="search1" size={16} color="white" />
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: fonts.Bold,
                    color: 'white',
                  }}>
                  Search
                </Text>
                <View></View>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>

      <Modal
        visible={select}
        transparent={true}
        onRequestClose={close}
        animationType="none">
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={close}
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,.5)',
          }}>
          <View style={styles.selectmodal}>
            <View>
              <Text style={styles.selecttext}>My Preferred Language</Text>
              <TouchableOpacity
                activeOpacity={0.8}
                style={[styles.selectbox, { flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }]}
                onPress={() => setLanguageModal(!languageModal)}
              >
                {selectedLanguage.flag && (
                  <Image
                    source={selectedLanguage.flag}
                    style={{ width: wp(6), height: wp(4), marginRight: wp(1) }}
                  />
                )}
                <Text style={styles.selecttext}>
                  {selectedLanguage.name}
                </Text>

              </TouchableOpacity>
              {languageModal && (
                <View style={styles.modaldropdwonview}>
                  <FlatList
                    data={languages} // Updated data structure
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          paddingVertical: wp(2),
                          width: wp(30),
                          borderBottomWidth: 0.5,
                          borderBottomColor: 'gray',
                        }}
                        onPress={() => handleLanguageSelect(item)} // Use the handler
                      >
                        <Image
                          source={item.flag} // Display the flag image
                          style={{ width: wp(6), height: wp(4), marginRight: wp(2) }}
                        />
                        <Text style={styles.selecttext}>{item.name}</Text>
                      </TouchableOpacity>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                  />
                </View>
              )}
            </View>

            <View>
              <Text style={styles.selecttext}>My Country</Text>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.selectbox}
                onPress={() => {
                  setCountryModal(!countryModal);
                }}>
                <Text style={styles.selecttext}>
                  {selectedCountry ? selectedCountry : 'All'}
                </Text>
              </TouchableOpacity>
              {countryModal && (
                <View style={styles.modaldropdwonview}>
                  <FlatList
                    data={CountryData}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        style={{
                          paddingVertical: wp(2),
                          width: wp(30),
                          borderBottomWidth: 0.5,
                          borderBlockColor: 'gray',
                        }}
                        onPress={() => {
                          setSelectedCountry(item);
                          setCountryModal(!countryModal);
                        }}>
                        <Text style={styles.selecttext}>{item}</Text>
                      </TouchableOpacity>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                  />
                </View>
              )}
            </View>

            <View>
              <Text style={styles.selecttext}>My Preferred Currency</Text>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.selectbox}
                onPress={() => {
                  setPreferredCurrency(!preferredCurrency);
                }}>
                <Text style={styles.selecttext}>
                  {selectedCurrency ? selectedCurrency : 'USD'}
                </Text>
              </TouchableOpacity>
              {preferredCurrency && (
                <View style={styles.modaldropdwonview}>
                  <FlatList
                    data={currency}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        style={{
                          paddingVertical: wp(2),
                          width: wp(30),
                          borderBottomWidth: 0.5,
                          borderBlockColor: 'gray',
                        }}
                        onPress={() => {
                          setSelectedCurrency(item);
                          setPreferredCurrency(!preferredCurrency);
                        }}>
                        <Text style={styles.selecttext}>{item}</Text>
                      </TouchableOpacity>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                  />
                </View>
              )}
            </View>

            <TouchableOpacity
              onPress={close}
              style={{
                width: wp(40),
                height: wp(12),
                backgroundColor: Colors.main,
                borderRadius: 12,
                marginTop: wp(4),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: 'white',
                  fontFamily: fonts.Bold,
                }}>
                Save my settings
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>

      <Modal
        visible={moreScreen}
        transparent={true}
        onRequestClose={close}
        animationType="none">
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            close();
          }}
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,.7)',
          }}>
          <View
            style={{
              width: wp(60),
              paddingVertical: wp(6),
              backgroundColor: 'white',
              alignSelf: 'flex-end',
              marginRight: wp(7),
              marginTop: wp(15),
              borderRadius: 10,
            }}>
            <TouchableOpacity
              style={styles.screenback}
              onPress={() => {
                navigation.navigate('Agent_Profile');
              }}>
              <Image
                source={images.user1}
                resizeMode="contain"
                style={[styles.icon]}
              />
              <Text style={styles.screenname}>My Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.screenback}
              onPress={() => {
                navigation.navigate('My_Property');
              }}>
              <Image
                source={images.building}
                resizeMode="contain"
                style={[styles.icon]}
              />
              <Text style={styles.screenname}>My Properties</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.screenback}
              onPress={() => {
                navigation.navigate('My_Prop_News');
              }}>
              <Image
                source={images.building}
                resizeMode="contain"
                style={[styles.icon]}
              />
              <Text style={styles.screenname}>My Properties News</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.screenback}
              onPress={() => {
                navigation.navigate('Add_New_Property');
              }}>
              <Image
                source={images.plus}
                resizeMode="contain"
                style={[styles.icon]}
              />
              <Text style={styles.screenname}>Add New Property</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.screenback}
              onPress={() => {
                navigation.navigate('Add_News');
              }}>
              <Image
                source={images.plus}
                resizeMode="contain"
                style={[styles.icon]}
              />
              <Text style={styles.screenname}>Add Property News</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.screenback}
              onPress={() => {
                navigation.navigate('Agent_Favourite');
              }}>
              <Image
                source={images.fav}
                resizeMode="contain"
                style={[styles.icon]}
              />
              <Text style={styles.screenname}>Favourite Properties</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('My_Affiliate')} style={styles.screenback}>
              <FontAwesome name='users' color={Colors.black} size={16} />

              <Text style={styles.screenname}>My Affiliate</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.screenback} onPress={() => navigation.navigate('Saved_Searches')}>
              <Image
                source={images.srch}
                resizeMode="contain"
                style={[styles.icon]}
              />
              <Text style={styles.screenname}>Saved Searches</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.screenback}
              onPress={() => {
                navigation.navigate('Invoices');
              }}>
              <Image
                source={images.invoice}
                resizeMode="contain"
                style={[styles.icon]}
              />
              <Text style={styles.screenname}>Invoices</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.screenback} onPress={() => navigation.navigate('MessagesAgent')}>
              <Image
                source={images.msgs}
                resizeMode="contain"
                style={[styles.icon]}
              />
              <Text style={styles.screenname}>Messages</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.screenback}>
              <Image
                source={images.opnlock}
                resizeMode="contain"
                style={[styles.icon]}
              />
              <Text style={styles.screenname}>Logout</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default Agent_Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  slide: {
    width: wp(100),
    height: wp(60),
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: wp(10),
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
    justifyContent: 'space-between'
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
    flex: 1,
    backgroundColor: Colors.white,
    elevation: 2,
    borderRadius: 12,
    paddingTop: wp(4),
    width: wp(100),
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
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    // position: 'absolute',
    alignSelf: 'flex-start',
    marginLeft: wp(17),
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
  featureItem: {
    flex: 1,
    margin: wp(1),
    paddingVertical: wp(0),
    paddingHorizontal: wp(2),
    borderRadius: 8,
    // borderWidth: 1,
    borderColor: Colors.gray,
    // alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedFeature: {
    backgroundColor: Colors.main,
    borderColor: Colors.main,
  },
  featureText: {
    fontSize: 14,
    fontFamily: fonts.Regular,
    color: Colors.black,
    marginLeft: wp(2),
  },
  agretext: {
    fontSize: 12,
    fontFamily: fonts.Regular,
    color: Colors.black,
    marginLeft: wp(4),
  },
  rowbox: {
    width: wp(15),
    height: wp(15),
    alignItems: 'center',
    marginTop: wp(4),
  },
  rowimages: {
    width: wp(12),
    height: wp(12),
    resizeMode: 'contain',
    borderRadius: 8,
  },
  rowtext: {
    fontSize: 10,
    fontFamily: fonts.Medium,
    color: Colors.black,
  },
  screenback: {
    paddingVertical: wp(2),
    borderBottomWidth: 1,
    borderBlockColor: 'gray',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: wp(5),
  },
  screenname: {
    fontSize: 14,
    fontFamily: fonts.Medium,
    color: Colors.black,
    paddingLeft: wp(2),
  },
  icon: {
    width: wp(5),
    height: wp(5),
  },
});
