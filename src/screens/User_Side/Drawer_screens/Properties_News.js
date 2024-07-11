import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
  ImageBackground,
  TextInput,
} from 'react-native';
import React from 'react';
import {authstyles} from '../../Auth/AuthStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {Colors, fonts, images} from '../../../constant/Indes';
import ReadMore from '@fawazahmed/react-native-read-more';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Button from '../../../components/Button';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Properties_News = () => {
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
        <Text style={authstyles.headertext}>Property News</Text>
        <View></View>
      </View>
      <ScrollView>
        <View
          style={{
            width: wp(90),
            marginVertical: wp(2),
            backgroundColor: '#FFF',
            elevation: 1,
            alignSelf: 'center',
          }}>
          <View style={[styles.row, {marginTop: wp(0)}]}>
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
                    style={styles.flatbox3}
                    onPress={() => {
                      navigation.navigate('Property_news_Detail');
                    }}>
                    <Image source={images.prop1} style={styles.image3} />
                    <View style={{marginLeft: wp(2)}}>
                      <Text style={styles.name3}>Your Realtor for Life!</Text>
                      <View
                        style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                        <Text numberOfLines={3} style={styles.description3}>
                          Your Realtor for Life! Your Realtor for Life! Your
                          Realtor for Life! Your Realtor for Life! Your Realtor
                          for Life! Your Realtor for Life! Your Realtor for
                          Life! Your Realtor for Life! Your Realtor for Life!
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          alignSelf: 'flex-end',
                        }}>
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
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>

        <View
          style={{
            width: wp(90),
            paddingVertical: wp(4),
            backgroundColor: 'white',
            alignSelf: 'center',
          }}>
          <View style={{marginTop: wp(0)}}>
            <View style={styles.row}>
              <Text style={[styles.heading, {marginLeft: wp(2)}]}>
                Most View Properties
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

        <View
          style={{
            width: wp(90),
            marginVertical: wp(2),
            backgroundColor: '#FFF',
            elevation: 1,
            alignSelf: 'center',
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
      </ScrollView>
    </View>
  );
};

export default Properties_News;

const styles = StyleSheet.create({
  flatbox3: {
    width: wp(85),
    paddingVertical: wp(1),
    backgroundColor: Colors.white,
    alignSelf: 'center',
    // elevation: 2,
    flexDirection: 'row',

    marginVertical: wp(2),
    paddingRight: wp(3),
    borderRadius: 12,
    // alignItems: 'center',
  },
  image3: {
    width: wp(25),
    height: wp(20),
  },
  name3: {
    fontSize: 14,
    fontFamily: fonts.Medium,
    color: Colors.black,
  },

  description3: {
    fontSize: 12,
    fontFamily: fonts.Regular,
    color: Colors.gray,
    marginTop: wp(2),
    width: wp(57),
    // backgroundColor: 'red',
    lineHeight: 22,
    marginRight: 5,
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingHorizontal: wp(5),
  },
  heading: {
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
});
