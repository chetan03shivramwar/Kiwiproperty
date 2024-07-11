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
import {Calendar} from 'react-native-calendars';

authstyles;
const About_Detail = () => {
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
            About Detail
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
        <View
          style={{
            width: wp(90),
            paddingVertical: wp(4),
            backgroundColor: Colors.white,
            alignSelf: 'center',
            marginTop: wp(6),
            elevation: 2,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: fonts.Bold,
              color: Colors.black,
              paddingHorizontal: wp(10),
              marginTop: wp(5),
            }}>
            Donec maximus pretium facilisis. Sed mollis d
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: wp(80),
              alignSelf: 'center',
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
                marginLeft: wp(5),
              }}>
              <AntDesign name="calendar" size={16} color={Colors.gray} />
              <Text style={styles.text}>10 July,2024</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: wp(5),
              }}>
              <FontAwesome name="bookmark-o" size={16} color={Colors.gray} />
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: wp(5),
              marginTop: wp(2),
            }}>
            <Ionicons
              name="chatbubbles-outline"
              size={16}
              color={Colors.gray}
            />
            <Text style={styles.text}>(0)</Text>
          </View>
          <Text style={styles.desc}>
            Donec maximus pretium facilisis. Sed mollis dolor ac iaculis
            interdum. Donec pretium dui eget magna luctus, vitae ultricies risus
            rhoncus. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Mauris tempor vel mi eget aliquam. Integer porttitor
            suscipit blandit. Proin eleifend dolor augue, vel cursus est commodo
            eleifend. Vestibulum sed luctus nunc. Donec volutpat quam in euismod
            sollicitudin. Sed vulputate eleifend porttitor. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Proin condimentum
            est diam, vel dignissim quam hendrerit sed. Donec efficitur tortor
            id suscipit varius. Pellentesque habitant morbi tristique senectus
            et netus et malesuada fames ac turpis egestas. Vestibulum eget enim
            est. Mauris turpis sapien, tempus nec lacus id, egestas dictum orci.
            Nam viverra, arcu ornare vehicula
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: wp(90),
            alignSelf: 'center',
            alignItems: 'center',
            marginTop: wp(4),
          }}>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="arrow-back-circle" size={24} color={Colors.black} />
            <Text style={styles.btntext}>Previous Post</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.btntext}>Previous Post</Text>
            <Ionicons
              name="arrow-forward-circle"
              size={24}
              color={Colors.black}
            />
          </TouchableOpacity>
        </View>

        <View style={{marginTop: wp(2)}}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: fonts.Bold,
              color: Colors.black,
              marginVertical: wp(4),
              marginLeft: wp(5),
            }}>
            Related Posts
          </Text>
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
                    marginVertical: wp(2),
                    elevation: 2,
                    paddingHorizontal: wp(4),
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <AntDesign
                        name="calendar"
                        size={16}
                        color={Colors.gray}
                      />
                      <Text style={[styles.text, {marginLeft: wp(2)}]}>
                        10 July,2024
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <FontAwesome
                        name="bookmark-o"
                        size={16}
                        color={Colors.gray}
                      />
                      <Text
                        style={[
                          styles.text,
                          {color: Colors.main, marginLeft: wp(2)},
                        ]}>
                        Real State
                      </Text>
                    </View>
                  </View>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: fonts.Bold,
                      color: Colors.black,
                      marginTop: wp(5),
                    }}>
                    Donec maximus pretium facilisis.
                  </Text>
                  <Text
                    numberOfLines={3}
                    style={[styles.desc, {paddingHorizontal: 0}]}>
                    Donec maximus pretium facilisis. Sed mollis dolor ac iaculis
                    interdum. Donec pretium dui eget magna luctus, vitae
                    ultricies risus rhoncus. Interdum et malesuada fames ac ante
                    ipsum primis in faucibus. Mauris tempor vel mi e
                  </Text>

                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={[
                        styles.text,
                        {
                          color: Colors.main,
                          fontFamily: fonts.Medium,
                        },
                      ]}>
                      Continue reading
                    </Text>
                    <Entypo
                      name="controller-play"
                      size={16}
                      color={Colors.main}
                    />
                  </TouchableOpacity>
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
                      justifyContent: 'flex-start',
                    }}>
                    <Image
                      source={images.agentprofile}
                      style={{width: wp(10), height: wp(10), borderRadius: 100}}
                    />
                    <Text style={[styles.text, {marginLeft: wp(2)}]}>
                      By KiwiOne
                    </Text>
                  </View>
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
          <View style={{paddingHorizontal: wp(4), marginTop: wp(6)}}>
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
                Real State
              </Text>
            </TouchableOpacity>
          </View>
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

export default About_Detail;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontFamily: fonts.Light,
    color: Colors.graish,
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.Regular,
    color: Colors.black,
    paddingHorizontal: wp(5),
    lineHeight: 24,
    marginVertical: wp(4),
  },
  btntext: {
    fontSize: 14,
    fontFamily: fonts.Medium,
    color: Colors.black,
    marginHorizontal: wp(2),
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
