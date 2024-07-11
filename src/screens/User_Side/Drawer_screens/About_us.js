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
import {Calendar} from 'react-native-calendars';
const About_us = () => {
  const navigation = useNavigation();
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
  return (
    <View style={authstyles.container}>
      <View style={authstyles.header}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            navigation.openDrawer();
          }}>
          <AntDesign name="bars" color={Colors.black} size={24} />
        </TouchableOpacity>
        <Text style={authstyles.headertext}>About Us</Text>
        <View></View>
      </View>

      <ScrollView>
        <View>
          <FlatList
            data={[1, 2, 3, 4]}
            renderItem={() => {
              return (
                <View
                  style={{
                    width: wp(90),
                    paddingVertical: wp(4),
                    backgroundColor: 'white',
                    alignSelf: 'center',
                    marginVertical: wp(4),
                    elevation: 2,
                    paddingHorizontal: wp(4),
                  }}>
                  <Text style={styles.name}>
                    Donec maximus pretium facilisis.
                  </Text>
                  <Text style={styles.desc}>
                    Donec maximus pretium facilisis. Sed mollis dolor ac iaculis
                    interdum. Donec pretium dui eget magna luctus, vitae
                    ultricies risus rhoncus. Interdum et malesuada fames ac ante
                    ipsum primis in faucibus. Mauris tempor vel mi e
                  </Text>
                  <View
                    style={{
                      width: wp(80),
                      height: wp(0.3),
                      backgroundColor: Colors.gray,
                      marginVertical: wp(6),
                    }}></View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <Text style={styles.text}>By KiwiOne</Text>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginLeft: wp(10),
                      }}>
                      <AntDesign
                        name="calendar"
                        size={16}
                        color={Colors.gray}
                      />
                      <Text style={styles.text}>10 July,2024</Text>
                    </View>
                  </View>
                  <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                      navigation.navigate('About_Detail');
                    }}>
                    <Text style={styles.btntext}>Read More</Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>

        <View style={styles.addbox}>
          <Text style={styles.headings}>Recent Posts</Text>

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
                Appartment at 13 road
              </Text>
            </TouchableOpacity>
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
                Bangalow at new street
              </Text>
            </TouchableOpacity>
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
                Commercial Building at new york
              </Text>
            </TouchableOpacity>
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
                Hot Selling at
              </Text>
            </TouchableOpacity>
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
                Appartment at new city side
              </Text>
            </TouchableOpacity>
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
          </View>
        </View>

        <View style={styles.addbox}>
          <Text style={styles.headings}>Topics</Text>
        </View>
        <View style={styles.addbox}>
          <Text style={styles.headings}>Calendar</Text>
          <Calendar
            current={'2023-07-13'}
            minDate={'2020-05-10'}
            maxDate={'2023-12-31'}
            onDayPress={day => {
              console.log('selected day', day);
            }}
            monthFormat={'yyyy MM'}
            onMonthChange={month => {
              console.log('month changed', month);
            }}
            hideArrows={false}
            hideExtraDays={true}
            disableMonthChange={true}
            enableSwipeMonths={true}
          />
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

        <View
          style={{
            width: wp(90),
            marginVertical: wp(2),
            backgroundColor: '#FFF',
            elevation: 1,
            alignSelf: 'center',
          }}>
          <View style={[styles.row, {marginTop: wp(4)}]}>
            <Text style={styles.heading}>Property News</Text>
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

        <View
          style={{
            width: wp(100),
            marginVertical: wp(2),
            backgroundColor: '#F7F9F9',
            elevation: 1,
          }}>
          <View style={[styles.row, {marginTop: wp(2)}]}>
            <Text style={[styles.heading, {marginLeft: wp(5)}]}>
              Calculator
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('All_Propperties');
              }}></TouchableOpacity>
          </View>
          <View style={{marginTop: wp(2)}}>
            <View style={{marginTop: wp(2)}}>
              <Text style={authstyles.heading}>Total Amount ($)</Text>
              <View style={authstyles.inputview}>
                <TextInput
                  placeholder="Enter amount"
                  placeholderTextColor={Colors.gray}
                  style={authstyles.inputtext}
                />
              </View>
            </View>
            <View style={{marginTop: wp(2)}}>
              <Text style={authstyles.heading}>Down Payment ($)</Text>
              <View style={authstyles.inputview}>
                <TextInput
                  placeholder="Enter down payment"
                  placeholderTextColor={Colors.gray}
                  style={authstyles.inputtext}
                />
              </View>
            </View>

            <View style={{marginTop: wp(2)}}>
              <Text style={authstyles.heading}>Interest Rate (%)</Text>
              <View style={authstyles.inputview}>
                <TextInput
                  placeholder="Interest Rate (%)"
                  placeholderTextColor={Colors.gray}
                  style={authstyles.inputtext}
                />
              </View>
            </View>

            <View style={{marginTop: wp(2)}}>
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

          <View style={{marginTop: wp(6), marginBottom: wp(6)}}>
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

        <View style={styles.addbox}>
          <View style={{marginTop: wp(4)}}>
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
        </View>
      </ScrollView>
    </View>
  );
};

export default About_us;

const styles = StyleSheet.create({
  About_us: {
    fontSize: 14,
    fontFamily: fonts.Regular,
    color: Colors.black,
    lineHeight: 24,
    paddingHorizontal: wp(5),
    textAlign: 'center',
    marginTop: wp(10),
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.Bold,
    color: Colors.black,
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.Regular,
    color: Colors.graish,
    marginTop: wp(4),
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.Light,
    color: Colors.graish,
  },
  btn: {
    width: wp(60),
    height: wp(12),
    backgroundColor: Colors.main,
    alignSelf: 'center',
    marginTop: wp(6),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btntext: {
    fontSize: 14,
    fontFamily: fonts.Bold,
    color: Colors.white,
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
  heading: {
    fontSize: 14,
    fontFamily: fonts.Medium,
    color: Colors.black,
    marginLeft: wp(2),
  },
});
