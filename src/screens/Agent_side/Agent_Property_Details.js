import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Colors, fonts, images} from '../../constant/Indes';
import ReadMore from '@fawazahmed/react-native-read-more';
import {useNavigation} from '@react-navigation/native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {authstyles} from '../Auth/AuthStyles';
const Agent_Property_Details = () => {
  const navigation = useNavigation();
  const Images = [images.prop1, images.prop2, images.prop3];
  const feature = [
    'Air Conditioning',
    'Barbeque',
    'Dryer',
    'Fully Furnished',
    'Laundry',
    'Lawn',
    'Microwave',
    'Network Cable',
    'Refrigerator',
    'TV Cable',
    'Washer',
    'WiFi',
    'Window Coverings',
  ];

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

  const [Bath, setBath] = useState(false);
  const [selectedBath, setselectedBath] = useState('');
  const BathData = ['1', '2', '3', '4'];

  const [Beds, setBeds] = useState(false);
  const [selectedBeds, setselectedBeds] = useState('');
  const BedsData = ['1', '2', '3', '4'];

  const [Types, setTypes] = useState(false);
  const [selectedTypes, setselectedTypes] = useState('');
  const TypesData = ['All Cities', 'Miami', 'New York', 'Los Angles'];

  const [Status, setStatus] = useState(false);
  const [selectedStatus, setselectedStatus] = useState('');
  const StatusData = ['All', 'Mortgage', 'Foe Rent', 'For Sale'];

  const [MinPrice, setMinPrice] = useState(false);
  const [selectedMinPrice, setselectedMinPrice] = useState('');
  const MinPriceData = ['SDG $1200', 'SDG $1200', 'SDG $1200', 'SDG $1200'];

  const [MaxPrice, setMaxPrice] = useState(false);
  const [selectedMaxPrice, setselectedMaxPrice] = useState('');
  const MaxPriceData = ['SDG $1200', 'SDG $1200', 'SDG $1200', 'SDG $1200'];
  const [showfeatures, setshowfeatures] = useState(false);
  const [selectedFeatures, setSelectedFeatures] = useState([]);

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
  return (
    <View style={[authstyles.container]}>
      <View style={authstyles.header}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            navigation.goBack();
          }}>
          <AntDesign name="arrowleft" size={22} color={Colors.black} />
        </TouchableOpacity>
        <Text style={authstyles.headertext}>Property Detail</Text>
        <View></View>
      </View>
      <ScrollView>
        <View style={{marginTop: wp(4)}}>
          <View style={{paddingHorizontal: wp(5), marginBottom: wp(3)}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={styles.headings1}>Core Of the heart</Text>
              <Text style={[styles.headings1, {alignSelf: 'flex-end'}]}>
                SGD $127,493,007
              </Text>
            </View>
            <Text numberOfLines={1} style={[styles.desc, {width: wp(85)}]}>
              New York
            </Text>
          </View>
        </View>

        <View style={{marginTop: wp(2)}}>
          <View style={[styles.addbox]}>
            <View
              style={[styles.addressrow, {justifyContent: 'space-between'}]}>
              <Text style={styles.headings1}>Address</Text>

              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  numberOfLines={2}
                  style={[
                    styles.address,
                    {color: Colors.main, fontSize: 12, marginRight: wp(2)},
                  ]}>
                  Open On Google Map
                </Text>
                <Ionicons name="location-sharp" size={12} color={Colors.main} />
              </View>
            </View>

            <View style={styles.line}></View>

            <View style={styles.addressrow}>
              <Text style={styles.headings1}>Address</Text>

              <Text numberOfLines={2} style={styles.desc}>
                Thomson, Singapore, Central,
              </Text>
            </View>
            <View style={styles.addressrow}>
              <Text style={styles.headings1}>State/county</Text>

              <Text numberOfLines={2} style={styles.desc}>
                Thomson, Singapore, Central,
              </Text>
            </View>

            <View style={styles.addressrow}>
              <Text style={styles.headings1}>Neighborhood</Text>

              <Text numberOfLines={1} style={styles.desc}>
                Near by mall
              </Text>
            </View>

            <View style={styles.addressrow}>
              <Text style={styles.headings1}>Country</Text>

              <Text numberOfLines={1} style={styles.desc}>
                Singapur
              </Text>
            </View>

            <View style={styles.addressrow}>
              <Text style={styles.headings1}>Zip/Postal Code:</Text>

              <Text numberOfLines={1} style={styles.desc}>
                123344
              </Text>
            </View>
          </View>
        </View>

        <View style={{marginTop: wp(4)}}>
          <View style={styles.addbox}>
            <View
              style={[styles.addressrow, {justifyContent: 'space-between'}]}>
              <Text style={styles.headings1}>Detail</Text>

              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  numberOfLines={2}
                  style={[
                    styles.address,
                    {
                      color: Colors.graish,
                      fontSize: 12,
                      marginRight: wp(2),
                      fontFamily: fonts.Regular,
                    },
                  ]}>
                  Updated on july 1, 2024 at 08:00 AM
                </Text>
              </View>
            </View>

            <View style={styles.line}></View>
            <View
              style={{
                // padding: wp(2),
                borderWidth: 1,
                borderColor: Colors.main,
                width: wp(85),
                alignSelf: 'center',
                paddingLeft: wp(8),
                backgroundColor: 'rgba(80,194,243,.2)',
              }}>
              <View style={styles.addressrow}>
                <Text style={styles.headings1}>Property ID: </Text>

                <Text numberOfLines={2} style={styles.desc}>
                  LD1245
                </Text>
              </View>

              <View style={styles.addressrow}>
                <Text style={styles.headings1}>Year Of Bulid</Text>

                <Text numberOfLines={1} style={styles.desc}>
                  2014
                </Text>
              </View>

              <View style={styles.addressrow}>
                <Text style={styles.headings1}>Bedrooms</Text>

                <Text numberOfLines={1} style={styles.desc}>
                  3
                </Text>
              </View>

              <View style={styles.addressrow}>
                <Text style={styles.headings1}>Bathrooms</Text>

                <Text numberOfLines={1} style={styles.desc}>
                  2
                </Text>
              </View>

              <View style={styles.addressrow}>
                <Text style={styles.headings1}>Garage Size:</Text>

                <Text numberOfLines={1} style={styles.desc}>
                  12000 sqft
                </Text>
              </View>

              <View style={styles.addressrow}>
                <Text style={styles.headings1}>Price</Text>

                <Text numberOfLines={1} style={styles.desc}>
                  SGD $230,032,008
                </Text>
              </View>

              <View style={styles.addressrow}>
                <Text style={styles.headings1}>Property Size:</Text>

                <Text numberOfLines={1} style={styles.desc}>
                  2121
                </Text>
              </View>

              <View style={styles.addressrow}>
                <Text style={styles.headings1}>Land Area:</Text>

                <Text numberOfLines={1} style={styles.desc}>
                  45888
                </Text>
              </View>

              <View style={styles.addressrow}>
                <Text style={styles.headings1}>Garage</Text>

                <Text numberOfLines={1} style={styles.desc}>
                  3
                </Text>
              </View>

              <View style={styles.addressrow}>
                <Text style={styles.headings1}>Property Type</Text>

                <Text numberOfLines={1} style={styles.desc}>
                  Appartment
                </Text>
              </View>

              <View style={styles.addressrow}>
                <Text style={styles.headings1}>Property Status</Text>

                <Text numberOfLines={1} style={styles.desc}>
                  For sale
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{marginTop: wp(4)}}>
          <View style={styles.addbox}>
            <Text style={styles.headings}>Features</Text>
            <View style={styles.line}></View>
            <FlatList
              data={feature}
              // numColumns={3}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => (
                <View style={styles.featureItem1}>
                  <Ionicons
                    name="checkmark-outline"
                    size={16}
                    color={Colors.bahama}
                  />

                  <Text style={styles.featureText}>{item}</Text>
                </View>
              )}
            />
          </View>
        </View>

        <View style={{marginTop: wp(4)}}>
          <View style={styles.addbox}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingRight: wp(3),
              }}>
              <Text style={styles.headings}>Floor Plan 1</Text>
              <Text style={styles.headings1}>Property ID: 1200 </Text>
            </View>

            <View style={styles.line}></View>

            <View
              style={{
                width: wp(85),
                paddingVertical: wp(4),
                backgroundColor: '#EEEEEE',
                alignSelf: 'center',
                paddingHorizontal: wp(5),
                borderTopWidth: 1,
                borderTopColor: '#e2e2e2',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: wp(5),
                }}>
                <Text style={styles.head}>
                  Size:
                  <Text style={{fontFamily: fonts.Medium, color: 'black'}}>
                    1200 sqft
                  </Text>
                </Text>

                <Text style={styles.head}>
                  Bedrooms:
                  <Text style={{fontFamily: fonts.Medium, color: 'black'}}>
                    5
                  </Text>
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: wp(5),
                }}>
                <Text style={styles.head}>
                  Bathrooms:
                  <Text style={{fontFamily: fonts.Medium, color: 'black'}}>
                    6
                  </Text>
                </Text>

                <Text style={styles.head}>
                  Price:
                  <Text style={{fontFamily: fonts.Medium, color: 'black'}}>
                    SGD $123,233,4
                  </Text>
                </Text>
              </View>
            </View>

            <View style={{marginTop: wp(4)}}>
              <Text style={styles.headings}>Plan Description</Text>
              <Text style={styles.description}>
                Set in the Green Mountains of Vermont, Board + Batten meant for
                guesthouse designed by professional architecture. The home's
                exterior is a combination of windows, painted board, and
                mirror-polished stainless steel, putting a modern twist on its
                namesake, a popular type of siding in the region. Part of the
                interiors were designed to feel open to the landscape. The
                master bathroom is clad in teak and features forest views from
                the soaking tub.
              </Text>
            </View>

            <View
              style={{
                width: wp(85),
                paddingVertical: wp(4),
                alignSelf: 'center',
                paddingHorizontal: wp(5),
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: wp(5),
                }}>
                <View>
                  <Text
                    style={{
                      fontFamily: fonts.Medium,
                      color: 'black',
                      fontSize: 12,
                    }}>
                    Appartment
                  </Text>
                  <Text style={styles.head}>Property Type</Text>
                </View>

                <View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <FontAwesome name="bed" size={16} color={'black'} />
                    <Text
                      style={{
                        fontFamily: fonts.Medium,
                        color: 'black',
                        fontSize: 12,
                        marginLeft: wp(2),
                      }}>
                      4
                    </Text>
                  </View>
                  <Text style={styles.head}>Bedrooms</Text>
                </View>

                <View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <FontAwesome name="shower" size={16} color={'black'} />
                    <Text
                      style={{
                        fontFamily: fonts.Medium,
                        color: 'black',
                        fontSize: 12,
                        marginLeft: wp(2),
                      }}>
                      4
                    </Text>
                  </View>
                  <Text style={styles.head}>Bathrooms</Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: wp(5),
                  marginTop: wp(2),
                }}>
                <View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <FontAwesome name="car" size={16} color={'black'} />
                    <Text
                      style={{
                        fontFamily: fonts.Medium,
                        color: 'black',
                        fontSize: 12,
                        marginLeft: wp(2),
                      }}>
                      4
                    </Text>
                  </View>
                  <Text style={styles.head}>Garage</Text>
                </View>

                <View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <FontAwesome name="arrows-h" size={16} color={'black'} />
                    <Text
                      style={{
                        fontFamily: fonts.Medium,
                        color: 'black',
                        fontSize: 12,
                        marginLeft: wp(2),
                      }}>
                      1200
                    </Text>
                  </View>
                  <Text style={styles.head}>sq Ft</Text>
                </View>

                <View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <FontAwesome name="calendar" size={16} color={'black'} />
                    <Text
                      style={{
                        fontFamily: fonts.Medium,
                        color: 'black',
                        fontSize: 12,
                        marginLeft: wp(2),
                      }}>
                      2013
                    </Text>
                  </View>
                  <Text style={styles.head}>Year Built</Text>
                </View>
              </View>
            </View>

            <View style={{marginTop: wp(4)}}>
              <Image
                source={images.floorplan}
                style={{
                  width: wp(60),
                  height: wp(45),
                  resizeMode: 'contain',
                  alignSelf: 'center',
                  // backgroundColor: 'red',
                }}
              />
            </View>

            <View style={{marginTop: wp(4)}}>
              <Text style={styles.headings}>Additional Details</Text>
              <Text style={styles.description}>
                guesthouse designed by professional architecture. The home's
                exterior is a combination of windows, painted board, and
                mirror-polished stainless steel, putting a modern twist on its
                namesake, a popular type of siding in the region. Part of the
                interiors were designed to feel open to the landscape. The
                master bathroom is clad in teak and features forest views from
                the soaking tub.
              </Text>
            </View>
          </View>
        </View>

        <View style={{marginTop: wp(4), marginBottom: wp(4)}}>
          <View style={[styles.addbox, {paddingHorizontal: wp(3)}]}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={[styles.headings, {marginLeft: 0}]}>
                Contact Info
              </Text>
              <TouchableOpacity>
                <Text
                  style={[
                    styles.headings,
                    {marginLeft: 0, fontSize: 12, color: Colors.main},
                  ]}>
                  View my listing
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.line}></View>

            <Image source={images.agentprofile} style={styles.agentImage} />
            <View style={styles.agentInfo}>
              <View style={styles.contactRow}>
                <FontAwesome name="user" size={16} color={Colors.black} />

                <Text style={styles.agentName}>John Doe</Text>
              </View>
              <View style={styles.contactRow}>
                <AntDesign name="mobile1" size={14} color={Colors.black} />
                <Text style={[styles.contactText, {color: 'blue'}]}>
                  +65 1234 5678
                </Text>
              </View>
              <View style={styles.socialRow}>
                <FontAwesome name="facebook" size={16} color={Colors.black} />
                <Text style={styles.socialText}>Facebook</Text>
                <FontAwesome name="linkedin" size={16} color={Colors.black} />
                <Text style={styles.socialText}>LinkedIn</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{marginTop: wp(6)}}>
          <Text style={authstyles.heading}>Enquire about this property</Text>
          <View style={authstyles.inputview}>
            <TextInput
              placeholder="Your Name"
              placeholderTextColor={Colors.graish}
              style={authstyles.inputtext}
            />
          </View>

          <View style={authstyles.inputview}>
            <TextInput
              placeholder="Phone"
              placeholderTextColor={Colors.graish}
              style={authstyles.inputtext}
            />
          </View>
          <View style={authstyles.inputview}>
            <TextInput
              placeholder="Email"
              placeholderTextColor={Colors.graish}
              style={authstyles.inputtext}
            />
          </View>

          <View style={authstyles.inputview}>
            <TextInput
              placeholder="Message"
              placeholderTextColor={Colors.graish}
              style={authstyles.inputtext}
            />
          </View>
          <View
            style={{
              marginVertical: wp(4),
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: wp(90),
              alignSelf: 'center',
            }}>
            <TouchableOpacity
              style={{
                width: wp(38),
                height: wp(12),
                backgroundColor: 'orange',
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: fonts.Medium,
                  color: 'white',
                }}>
                Request Info
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: wp(50),
                height: wp(12),
                borderColor: 'orange',
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: fonts.Medium,
                  color: 'orange',
                }}>
                Send Direct Message
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.addbox}>
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

        <View style={styles.addbox}>
          <Text style={styles.headings}>Contact us</Text>
          <ImageBackground
            source={images.logo}
            resizeMode="contain"
            style={styles.featureimage}></ImageBackground>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: wp(5),
              marginTop: wp(6),
            }}>
            <Text
              style={{
                fontSize: 12,
                fontFamily: fonts.Medium,
                color: Colors.main,
              }}>
              Contact us
            </Text>
            <MaterialIcons name="play-arrow" size={14} color={Colors.main} />
          </TouchableOpacity>
        </View>

        <View style={styles.addbox}>
          <Text style={styles.headings}> Property Status</Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: wp(5),
              marginTop: wp(6),
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <MaterialIcons name="play-arrow" size={14} color={Colors.main} />

              <Text
                style={{
                  fontSize: 12,
                  fontFamily: fonts.Medium,
                  color: Colors.main,
                  marginLeft: wp(2),
                }}>
                For Rent
              </Text>
            </TouchableOpacity>

            <Text
              style={{
                fontSize: 12,
                fontFamily: fonts.Regular,
                color: Colors.graish,
              }}>
              (4)
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: wp(5),
              marginTop: wp(2),
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <MaterialIcons name="play-arrow" size={14} color={Colors.main} />

              <Text
                style={{
                  fontSize: 12,
                  fontFamily: fonts.Medium,
                  color: Colors.main,
                  marginLeft: wp(2),
                }}>
                For Slae
              </Text>
            </TouchableOpacity>

            <Text
              style={{
                fontSize: 12,
                fontFamily: fonts.Regular,
                color: Colors.graish,
              }}>
              (41)
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: wp(5),
              marginTop: wp(2),
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <MaterialIcons name="play-arrow" size={14} color={Colors.main} />

              <Text
                style={{
                  fontSize: 12,
                  fontFamily: fonts.Medium,
                  color: Colors.main,
                  marginLeft: wp(2),
                }}>
                MORTGAGE
              </Text>
            </TouchableOpacity>

            <Text
              style={{
                fontSize: 12,
                fontFamily: fonts.Regular,
                color: Colors.graish,
              }}>
              (14)
            </Text>
          </View>
        </View>

        <View style={styles.addbox}>
          <Text style={styles.headings}> Property Type</Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: wp(5),
              marginTop: wp(6),
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <MaterialIcons name="play-arrow" size={14} color={Colors.main} />

              <Text
                style={{
                  fontSize: 12,
                  fontFamily: fonts.Medium,
                  color: Colors.main,
                  marginLeft: wp(2),
                }}>
                Appartment
              </Text>
            </TouchableOpacity>

            <Text
              style={{
                fontSize: 12,
                fontFamily: fonts.Regular,
                color: Colors.graish,
              }}>
              (4)
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: wp(5),
              marginTop: wp(2),
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <MaterialIcons name="play-arrow" size={14} color={Colors.main} />

              <Text
                style={{
                  fontSize: 12,
                  fontFamily: fonts.Medium,
                  color: Colors.main,
                  marginLeft: wp(2),
                }}>
                Bangalow
              </Text>
            </TouchableOpacity>

            <Text
              style={{
                fontSize: 12,
                fontFamily: fonts.Regular,
                color: Colors.graish,
              }}>
              (41)
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: wp(5),
              marginTop: wp(2),
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <MaterialIcons name="play-arrow" size={14} color={Colors.main} />

              <Text
                style={{
                  fontSize: 12,
                  fontFamily: fonts.Medium,
                  color: Colors.main,
                  marginLeft: wp(2),
                }}>
                Commercial
              </Text>
            </TouchableOpacity>

            <Text
              style={{
                fontSize: 12,
                fontFamily: fonts.Regular,
                color: Colors.graish,
              }}>
              (14)
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: wp(5),
              marginTop: wp(2),
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <MaterialIcons name="play-arrow" size={14} color={Colors.main} />

              <Text
                style={{
                  fontSize: 12,
                  fontFamily: fonts.Medium,
                  color: Colors.main,
                  marginLeft: wp(2),
                }}>
                Condominium / Apartment
              </Text>
            </TouchableOpacity>

            <Text
              style={{
                fontSize: 12,
                fontFamily: fonts.Regular,
                color: Colors.graish,
              }}>
              (14)
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: wp(5),
              marginTop: wp(2),
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <MaterialIcons name="play-arrow" size={14} color={Colors.main} />

              <Text
                style={{
                  fontSize: 12,
                  fontFamily: fonts.Medium,
                  color: Colors.main,
                  marginLeft: wp(2),
                }}>
                Hot Listing (Selling Hot)
              </Text>
            </TouchableOpacity>

            <Text
              style={{
                fontSize: 12,
                fontFamily: fonts.Regular,
                color: Colors.graish,
              }}>
              (14)
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: wp(5),
              marginTop: wp(2),
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <MaterialIcons name="play-arrow" size={14} color={Colors.main} />

              <Text
                style={{
                  fontSize: 12,
                  fontFamily: fonts.Medium,
                  color: Colors.main,
                  marginLeft: wp(2),
                }}>
                Others
              </Text>
            </TouchableOpacity>

            <Text
              style={{
                fontSize: 12,
                fontFamily: fonts.Regular,
                color: Colors.graish,
              }}>
              (14)
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: wp(5),
              marginTop: wp(2),
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <MaterialIcons name="play-arrow" size={14} color={Colors.main} />

              <Text
                style={{
                  fontSize: 12,
                  fontFamily: fonts.Medium,
                  color: Colors.main,
                  marginLeft: wp(2),
                }}>
                Semi-Detached
              </Text>
            </TouchableOpacity>

            <Text
              style={{
                fontSize: 12,
                fontFamily: fonts.Regular,
                color: Colors.graish,
              }}>
              (14)
            </Text>
          </View>
        </View>

        <View style={styles.addbox}>
          <Text style={styles.headings}>Latest Properties</Text>

          <View style={{marginTop: wp(2)}}>
            <FlatList
              data={[1, 2, 3, 4]}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      width: wp(85),
                      paddingHorizontal: wp(5),
                      marginVertical: wp(2),
                    }}>
                    <Image
                      source={images.prop1}
                      style={{width: wp(25), height: wp(20)}}
                    />
                    <View style={{marginLeft: wp(3)}}>
                      <Text
                        numberOfLines={1}
                        style={[styles.headings, {marginLeft: 0}]}>
                        For export Service call
                      </Text>
                      <Text
                        style={[
                          styles.desc,
                          {marginLeft: 0, marginTop: wp(1)},
                        ]}>
                        GSD $4668
                      </Text>
                      <Text
                        style={[
                          styles.desc,
                          {marginLeft: 0, marginTop: wp(1)},
                        ]}>
                        5 beds, 5 baths. 2390 sqft
                      </Text>
                      <Text
                        style={[
                          styles.desc,
                          {marginLeft: 0, marginTop: wp(1)},
                        ]}>
                        Bangalow
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>

        <View style={styles.addbox}>
          <Text style={styles.headings}>Find Your Home</Text>
          <View style={[authstyles.inputview, styles.boder]}>
            <TextInput
              placeholder="Enter an address,town,street,zip or property name"
              placeholderTextColor={'gray'}
              style={authstyles.inputtext}
            />
          </View>

          <TouchableOpacity
            onPress={() => {
              // setselectedcitydata(item);
              setCities(!Cities);
            }}
            activeOpacity={0.8}
            style={[authstyles.inputview, styles.boder]}>
            <Text style={styles.text}>
              {' '}
              {selectedcitydata ? selectedcitydata : 'Select City'}
            </Text>
            <Entypo name="select-arrows" size={14} color={Colors.graish} />
          </TouchableOpacity>
          {Cities && (
            <View style={styles.modalopenflat}>
              <FlatList
                data={cityData}
                renderItem={({item}) => {
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
            onPress={() => {
              setArea(!Area);
            }}
            activeOpacity={0.8}
            style={[authstyles.inputview, styles.boder]}>
            <Text style={styles.text}>
              {' '}
              {selectedarea ? selectedarea : 'Select area'}
            </Text>
            <Entypo name="select-arrows" size={14} color={Colors.graish} />
          </TouchableOpacity>
          {Area && (
            <View style={styles.modalopenflat}>
              <FlatList
                data={areaData}
                renderItem={({item}) => {
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
            onPress={() => {
              setBath(!Bath);
            }}
            activeOpacity={0.8}
            style={[authstyles.inputview, styles.boder]}>
            <Text style={styles.text}>
              {' '}
              {selectedBath ? selectedBath : 'Select Bath'}
            </Text>
            <Entypo name="select-arrows" size={14} color={Colors.graish} />
          </TouchableOpacity>
          {Bath && (
            <View style={styles.modalopenflat}>
              <FlatList
                data={BathData}
                renderItem={({item}) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        setselectedBath(item);
                        setBath(!Bath);
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
            onPress={() => {
              setBeds(!Beds);
            }}
            activeOpacity={0.8}
            style={[authstyles.inputview, styles.boder]}>
            <Text style={styles.text}>
              {' '}
              {selectedBeds ? selectedBeds : 'Select Beds'}
            </Text>
            <Entypo name="select-arrows" size={14} color={Colors.graish} />
          </TouchableOpacity>
          {Beds && (
            <View style={styles.modalopenflat}>
              <FlatList
                data={BedsData}
                renderItem={({item}) => {
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
            onPress={() => {
              setTypes(!Types);
            }}
            activeOpacity={0.8}
            style={[authstyles.inputview, styles.boder]}>
            <Text style={styles.text}>
              {' '}
              {selectedTypes ? selectedTypes : 'Select Types'}
            </Text>
            <Entypo name="select-arrows" size={14} color={Colors.graish} />
          </TouchableOpacity>
          {Types && (
            <View style={styles.modalopenflat}>
              <FlatList
                data={TypesData}
                renderItem={({item}) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        setselectedTypes(item);
                        setTypes(!Types);
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
            onPress={() => {
              setStatus(!Status);
            }}
            activeOpacity={0.8}
            style={[authstyles.inputview, styles.boder]}>
            <Text style={styles.text}>
              {' '}
              {selectedStatus ? selectedStatus : 'Select Status'}
            </Text>
            <Entypo name="select-arrows" size={14} color={Colors.graish} />
          </TouchableOpacity>
          {Status && (
            <View style={styles.modalopenflat}>
              <FlatList
                data={StatusData}
                renderItem={({item}) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        setselectedStatus(item);
                        setStatus(!Status);
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
            onPress={() => {
              setMinPrice(!MinPrice);
            }}
            activeOpacity={0.8}
            style={[authstyles.inputview, styles.boder]}>
            <Text style={styles.text}>
              {' '}
              {selectedMinPrice ? selectedMinPrice : 'Minimum Price'}
            </Text>
            <Entypo name="select-arrows" size={14} color={Colors.graish} />
          </TouchableOpacity>
          {MinPrice && (
            <View style={styles.modalopenflat}>
              <FlatList
                data={MinPriceData}
                renderItem={({item}) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        setselectedMinPrice(item);
                        setMinPrice(!MinPrice);
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
            onPress={() => {
              setMaxPrice(!MaxPrice);
            }}
            activeOpacity={0.8}
            style={[authstyles.inputview, styles.boder]}>
            <Text style={styles.text}>
              {' '}
              {selectedMaxPrice ? selectedMaxPrice : 'Maximum Price'}
            </Text>
            <Entypo name="select-arrows" size={14} color={Colors.graish} />
          </TouchableOpacity>
          {MaxPrice && (
            <View style={styles.modalopenflat}>
              <FlatList
                data={MinPriceData}
                renderItem={({item}) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        setselectedMaxPrice(item);
                        setMaxPrice(!MaxPrice);
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
          <View style={styles.line}></View>
          <Text style={[styles.desc, {marginLeft: wp(5), fontSize: 14}]}>
            Area Size
          </Text>
          <Image
            source={require('../../assets/loader.png')}
            resizeMode="contain"
            style={{width: wp(90), height: wp(10)}}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={[styles.desc, {marginLeft: wp(5), fontSize: 12}]}>
              10 sqft
            </Text>
            <Text style={[styles.desc, {fontSize: 12, marginLeft: wp(10)}]}>
              10000 sqft
            </Text>
          </View>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: wp(3.5),
              marginTop: wp(5),
              marginBottom: wp(4),
            }}
            onPress={() => {
              setshowfeatures(!showfeatures);
            }}>
            <AntDesign
              name={showfeatures ? 'minussquare' : 'plussquare'}
              size={18}
              color={Colors.black}
            />
            <Text style={[styles.headings, {marginLeft: wp(2)}]}>
              Other Features
            </Text>
          </TouchableOpacity>

          {showfeatures && (
            <View>
              <FlatList
                data={features}
                numColumns={2}
                renderItem={({item}) => (
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
                        selectedFeatures.includes(item) ? Colors.main : 'black'
                      }
                    />
                    <Text style={styles.featureText}>{item}</Text>
                  </TouchableOpacity>
                )}
                keyExtractor={item => item}
                // contentContainerStyle={styles.featureList}
              />
            </View>
          )}
          <TouchableOpacity
            style={{
              width: wp(80),
              height: wp(12),
              backgroundColor: 'orange',
              alignSelf: 'center',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: wp(4),
              flexDirection: 'row',
            }}>
            <AntDesign name="search1" size={22} color={'white'} />
            <Text
              style={{
                fontSize: 14,
                color: 'white',
                fontFamily: fonts.Bold,
                marginLeft: wp(2),
              }}>
              Search
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Agent_Property_Details;

const styles = StyleSheet.create({
  images: {
    width: wp(40),
    height: wp(30),
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
    marginLeft: wp(5),
  },
  addressrow: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    paddingVertical: wp(1),
    // borderBottomWidth: 0.4,
    width: wp(85),
    alignSelf: 'center',
    // borderBlockColor: Colors.,
  },
  address: {
    fontSize: 14,
    fontFamily: fonts.Regular,
    color: Colors.graish,
  },
  desc: {
    fontSize: 12,
    fontFamily: fonts.Regular,
    color: Colors.graish,
    width: wp(55),
    // backgroundColor: 'red',
    marginLeft: wp(2),
    // textAlign: 'right',
  },
  headings1: {
    fontSize: 14,
    fontFamily: fonts.Medium,
    color: Colors.black,
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
  description: {
    fontSize: 14,
    fontFamily: fonts.Regular,
    color: Colors.black,
    lineHeight: 24,
    alignSelf: 'center',
    paddingHorizontal: wp(5),
    marginTop: wp(2),
  },
  agentDetailsBox: {
    width: wp(90),
    flexDirection: 'row',
    padding: wp(3),
    backgroundColor: Colors.white,
    elevation: 2,
    alignSelf: 'center',
    borderRadius: 12,
    alignItems: 'center',
    marginTop: wp(2),
  },
  agentImage: {
    width: wp(20),
    height: wp(20),
    // borderRadius: wp(10),
    marginRight: wp(4),
  },
  agentInfo: {
    flex: 1,
  },
  agentName: {
    fontSize: 16,
    fontFamily: fonts.Regular,
    color: Colors.black,
    marginLeft: wp(2),
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: wp(2),
  },
  contactText: {
    fontSize: 14,
    fontFamily: fonts.Regular,
    color: Colors.black,
    marginLeft: wp(2),
  },
  socialRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: wp(2),
  },
  socialText: {
    fontSize: 14,
    fontFamily: fonts.Regular,
    color: Colors.black,
    marginLeft: wp(2),
    marginRight: wp(4),
  },
  box: {
    padding: wp(2.5),
    backgroundColor: 'rgba(0,0,0,.5)',
    borderRadius: 10,
  },
  line: {
    width: wp(85),
    height: wp(0.3),
    backgroundColor: '#e2e2e2',
    alignSelf: 'center',
    marginTop: wp(6),
    marginBottom: wp(4),
  },
  head: {
    fontSize: 12,
    fontFamily: fonts.Regular,
    color: Colors.graish,
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
  boder: {
    width: wp(80),
    elevation: 0,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 8,
    marginTop: wp(2),
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.Regular,
    color: Colors.graish,
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
});
