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
import {authstyles} from '../Auth/AuthStyles';
import Button from '../../components/Button';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

authstyles;
const Agents_Detail = () => {
  const navigation = useNavigation();
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
  return (
    <View style={authstyles.container}>
      <View style={authstyles.header}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            navigation.goBack();
          }}>
          <AntDesign name="arrowleft" size={22} color={Colors.black} />
        </TouchableOpacity>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            numberOfLines={1}
            style={[authstyles.headertext, {marginLeft: wp(2), width: wp(25)}]}>
            John Doe
          </Text>
        </View>
        {/* <TouchableOpacity
          onPress={() => {
            navigation.navigate('Messages');
          }}>
          <AntDesign size={22} color={Colors.black} name="message1" />
        </TouchableOpacity> */}
        <View></View>
      </View>
      <ScrollView>
        <ImageBackground
          source={images.agentprofile}
          style={{
            width: wp(80),
            height: wp(60),
            alignSelf: 'center',
            marginTop: wp(5),
          }}>
          <Image
            source={images.logo}
            style={{
              position: 'absolute',
              width: wp(10),
              height: wp(10),
              bottom: wp(2),
              left: wp(3),
            }}
          />
        </ImageBackground>
        <Text style={[styles.name, {marginTop: wp(6)}]}>John Doe</Text>
        <Text style={[styles.name, {marginTop: wp(2)}]}>
          Marketing Director at Company
        </Text>

        <Text style={styles.description}>
          Set in the Green Mountains of Vermont, Board + Batten meant for
          guesthouse designed by professional architecture. The home's exterior
          is a combination of windows, painted board, and mirror-polished
          stainless steel, putting a modern twist on its namesake, a popular
          type of siding in the region. Part of the interiors were designed to
          feel open to the landscape. The master bathroom is clad in teak and
          features forest views from the soaking tub.
        </Text>

        <View style={{marginTop: wp(4)}}>
          {/* <Text style={styles.headings}>Detail</Text> */}
          <View style={styles.addbox}>
            <View style={styles.addressrow}>
              <Text style={styles.headings1}>Agent Name</Text>

              <Text numberOfLines={2} style={styles.desc}>
                John Doe
              </Text>
            </View>

            <View style={styles.addressrow}>
              <Text style={styles.headings1}>Title / Position</Text>

              <Text numberOfLines={1} style={styles.desc}>
                Marketing Director
              </Text>
            </View>

            <View style={styles.addressrow}>
              <Text style={styles.headings1}>Company Name.</Text>

              <Text numberOfLines={1} style={styles.desc}>
                Kiwi Properties Pte Ltd
              </Text>
            </View>

            <View style={styles.addressrow}>
              <Text style={styles.headings1}>License No. / Ref No.</Text>

              <Text numberOfLines={1} style={styles.desc}>
                2ea3q2
              </Text>
            </View>

            <View style={styles.addressrow}>
              <Text style={styles.headings1}>Contact.</Text>

              <Text numberOfLines={1} style={styles.desc}>
                137316391763
              </Text>
            </View>

            <View style={styles.addressrow}>
              <Text style={styles.headings1}>Email.</Text>

              <Text numberOfLines={1} style={styles.desc}>
                abc@gmail.com
              </Text>
            </View>
          </View>
        </View>

        <View style={{marginTop: wp(6)}}>
          <Text style={authstyles.heading}>Contact John Doe</Text>
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
          <View style={{marginVertical: wp(4)}}>
            <Button title="Send Message" />
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: wp(10),
            marginLeft: wp(5),
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
              {selectedfilter ? selectedfilter : 'Default Order'}
            </Text>
            <Entypo
              name="select-arrows"
              size={14}
              color={filter ? 'black' : Colors.main}
            />
          </TouchableOpacity>
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
                        color: selectedfilter === item ? Colors.main : 'black',
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
        <Text
          style={{
            fontSize: 14,
            fontFamily: fonts.Regular,
            color: Colors.black,
            marginLeft: wp(5),
            marginTop: wp(6),
          }}>
          K12Kju
        </Text>
        <View>
          <FlatList
            data={Alldata}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.9}
                  style={[styles.allflatbox]}
                  onPress={() => {
                    navigation.navigate('Property_Detail');
                  }}>
                  <ImageBackground
                    borderTopLeftRadius={12}
                    borderTopRightRadius={12}
                    source={item.image}
                    style={styles.allimage}>
                    <TouchableOpacity
                      style={{
                        position: 'absolute',
                        right: wp(5),
                        bottom: wp(3),
                        padding: wp(2),
                        backgroundColor: 'rgba(0,0,0,.7)',
                        borderRadius: 8,
                      }}>
                      <AntDesign name="hearto" color={Colors.white} size={22} />
                    </TouchableOpacity>
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
                </TouchableOpacity>
              );
            }}
          />
        </View>

        <View
          style={{
            width: wp(90),
            height: wp(0.3),
            backgroundColor: '#e2e2e2',
            alignSelf: 'center',
            marginVertical: wp(6),
          }}></View>

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
          <Text style={styles.headings}>Latest Post</Text>

          <View style={{marginTop: wp(2)}}>
            <FlatList
              data={[1, 2, 3, 4]}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Property_news_Detail');
                    }}
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
                        numberOfLines={2}
                        style={[
                          styles.desc,
                          {marginLeft: 0, marginTop: wp(1)},
                        ]}>
                        hshhd dhodhsaohdas ashdohasodhoasd sadoashdohasod
                        dhasodhoashd
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'flex-start',
                          alignSelf: 'flex-start',
                        }}>
                        <Text
                          numberOfLines={1}
                          style={[
                            {
                              color: Colors.main,
                              fontFamily: fonts.Medium,
                              fontSize: 14,
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

export default Agents_Detail;

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
    borderRadius: 12,
  },
  headings: {
    fontSize: 14,
    fontFamily: fonts.Medium,
    color: Colors.black,
    marginLeft: wp(5),
  },
  addressrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: wp(1),
    width: wp(85),
    alignSelf: 'center',
    borderBlockColor: Colors.graish,
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
    // width: wp(55),
    textAlign: 'right',
    // backgroundColor: 'red',
  },
  headings1: {
    fontSize: 14,
    fontFamily: fonts.Medium,
    color: Colors.black,
  },
  featureItem: {
    flex: 1,
    margin: wp(1),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: wp(2),
  },
  featureText: {
    fontSize: 12,
    fontFamily: fonts.Regular,
    color: Colors.black,
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
    borderRadius: wp(10),
    marginRight: wp(4),
  },
  agentInfo: {
    flex: 1,
  },
  agentName: {
    fontSize: 16,
    fontFamily: fonts.Medium,
    color: Colors.black,
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
  name: {
    fontSize: 14,
    fontFamily: fonts.Bold,
    color: Colors.black,
    marginLeft: wp(5),
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
  iconText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  agentname: {
    fontSize: 14,
    fontFamily: fonts.Regular,
    color: Colors.gray,
    marginLeft: wp(2),
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
  line: {
    width: wp(85),
    height: wp(0.3),
    backgroundColor: '#e2e2e2',
    alignSelf: 'center',
    marginTop: wp(6),
    marginBottom: wp(4),
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
  box: {
    padding: wp(2.5),
    backgroundColor: 'rgba(0,0,0,.5)',
    borderRadius: 10,
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
});
