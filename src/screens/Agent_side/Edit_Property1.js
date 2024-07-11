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
import {Colors, fonts, images} from '../../constant/Indes';
import SwiperFlatList from 'react-native-swiper-flatlist';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CountryPicker from 'react-native-country-picker-modal';
import Button from '../../components/Button';
import Entypo from 'react-native-vector-icons/Entypo';
import {authstyles} from '../Auth/AuthStyles';
const Edit_Property1 = () => {
  const navigation = useNavigation();
  const [agree, setagree] = useState(false);
  const [property, setproperty] = useState(false);
  const [selectedproperty, setselectedproperty] = useState('');
  const propertydata = ['For Sale', 'For Rent', 'Mortage'];

  const [banglowview, setbanglowview] = useState(false);
  const [selectedbanglawdata, setselectedbanglawdata] = useState('');
  const banglawdata = ['Bungalow', 'Bungalow/Detached House', 'Link Bungalow'];

  const [status, setstatus] = useState(false);
  const [selectedstatus, setselectedstatus] = useState('');
  const statusdata = [
    'For Sale',
    'For Rent',
    'Mortage',
    'Foreclosures',
    'New Construction',
  ];
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

  const selectAllFeatures = () => {
    if (selectedFeatures.length === features.length) {
      setSelectedFeatures([]);
    } else {
      setSelectedFeatures(features);
    }
  };

  const [country, setCountry] = useState(null);
  const [withCountryNameButton, setWithCountryNameButton] = useState(true);

  const [floorplan, setfloorplan] = useState(false);
  const [selectedplan, setselectedplan] = useState('');
  const floorplandata = ['Enable', 'Disable'];

  const [floorPlans, setFloorPlans] = useState([
    {
      title: '',
      size: '',
      bedrooms: '',
      bathrooms: '',
      rooms: '',
      price: '',
      images: [],
    },
  ]);

  const addFloorPlan = () => {
    setFloorPlans([
      ...floorPlans,
      {
        title: '',
        size: '',
        bedrooms: '',
        bathrooms: '',
        rooms: '',
        price: '',
        images: [],
      },
    ]);
  };

  const updateFloorPlan = (index, key, value) => {
    const newFloorPlans = [...floorPlans];
    newFloorPlans[index][key] = value;
    setFloorPlans(newFloorPlans);
  };

  const addImageToFloorPlan = (index, image) => {
    const newFloorPlans = [...floorPlans];
    newFloorPlans[index].images.push(image);
    setFloorPlans(newFloorPlans);
  };

  const deleteFloorPlan = index => {
    const updatedFloorPlans = [...floorPlans];
    updatedFloorPlans.splice(index, 1);
    setFloorPlans(updatedFloorPlans);
  };
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
        <Text style={authstyles.headertext}>Edit Property</Text>
        <View></View>
      </View>
      <ScrollView>
        <View>
          <View
            style={{
              height: wp(20),
              borderBottomWidth: 0.5,
              borderBlockColor: 'gray',
              justifyContent: 'center',
              paddingLeft: wp(5),
            }}>
            <Text style={[authstyles.heading, {marginLeft: wp(0)}]}>
              Property Details
            </Text>
          </View>
          {/* <View style={{marginTop: wp(2)}}>
            <Text style={authstyles.heading}>
              Property ID (
              <Text style={{color: 'blue', fontFamily: fonts.Light}}>
                For Your Own References
              </Text>
              )<Text style={{color: 'red'}}>*</Text>
            </Text>
            <View style={authstyles.inputview}>
              <TextInput
                placeholder="Enter Id"
                placeholderTextColor={Colors.gray}
                style={authstyles.inputtext}
              />
            </View>
          </View> */}

          <View style={{marginTop: wp(2)}}>
            <Text style={[authstyles.heading, {marginLeft: wp(5)}]}>
              Area Size
              <Text style={{color: 'red'}}>*</Text>
            </Text>
            <View style={[authstyles.inputview]}>
              <TextInput
                placeholder="Enter area size"
                placeholderTextColor={Colors.gray}
                style={authstyles.inputtext}
                keyboardType="numeric"
              />
            </View>
          </View>
          <View style={{marginTop: wp(2)}}>
            <Text style={[authstyles.heading, {marginLeft: wp(5)}]}>
              Size Prefix
              <Text style={{color: 'red'}}>*</Text>
            </Text>
            <View style={[authstyles.inputview]}>
              <TextInput
                placeholder="sqft"
                placeholderTextColor={Colors.gray}
                style={authstyles.inputtext}
                keyboardType="numeric"
              />
            </View>

            <View style={{marginTop: wp(2)}}>
              <Text style={[authstyles.heading, {marginLeft: wp(5)}]}>
                Land Area
                <Text style={{color: 'red'}}>*</Text>
              </Text>
              <View style={[authstyles.inputview]}>
                <TextInput
                  placeholder="Enter area size"
                  placeholderTextColor={Colors.gray}
                  style={authstyles.inputtext}
                  keyboardType="numeric"
                />
              </View>
            </View>
            <View style={{marginTop: wp(2)}}>
              <Text style={[authstyles.heading, {marginLeft: wp(5)}]}>
                Size Prefix
                <Text style={{color: 'red'}}>*</Text>
              </Text>
              <View style={[authstyles.inputview]}>
                <TextInput
                  placeholder="sqft"
                  placeholderTextColor={Colors.gray}
                  style={authstyles.inputtext}
                  keyboardType="numeric"
                />
              </View>
            </View>

            <View style={{marginTop: wp(2)}}>
              <Text style={[authstyles.heading, {marginLeft: wp(5)}]}>
                Bedrooms
                <Text style={{color: 'red'}}>*</Text>
              </Text>
              <View style={[authstyles.inputview]}>
                <TextInput
                  placeholder="Enter number"
                  placeholderTextColor={Colors.gray}
                  style={authstyles.inputtext}
                  keyboardType="numeric"
                />
              </View>
            </View>
            <View style={{marginTop: wp(2)}}>
              <Text style={[authstyles.heading, {marginLeft: wp(5)}]}>
                Bathrooms
                <Text style={{color: 'red'}}>*</Text>
              </Text>
              <View style={[authstyles.inputview]}>
                <TextInput
                  placeholder="Enter number"
                  placeholderTextColor={Colors.gray}
                  style={authstyles.inputtext}
                  keyboardType="numeric"
                />
              </View>
            </View>
          </View>

          <View style={{marginTop: wp(2)}}>
            <Text style={[authstyles.heading, {marginLeft: wp(5)}]}>
              Garages
              <Text style={{color: 'red'}}>*</Text>
            </Text>
            <View style={[authstyles.inputview]}>
              <TextInput
                placeholder="Enter number"
                placeholderTextColor={Colors.gray}
                style={authstyles.inputtext}
                keyboardType="numeric"
              />
            </View>
          </View>
          <View style={{marginTop: wp(2)}}>
            <Text style={[authstyles.heading, {marginLeft: wp(5)}]}>
              Garages Size
              <Text style={{color: 'red'}}>*</Text>
            </Text>
            <View style={[authstyles.inputview]}>
              <TextInput
                placeholder="Enter number"
                placeholderTextColor={Colors.gray}
                style={authstyles.inputtext}
                keyboardType="numeric"
              />
            </View>
          </View>
        </View>

        <View style={{marginTop: wp(2)}}>
          <Text style={[authstyles.heading, {marginLeft: wp(5)}]}>
            Year Of Build
            <Text style={{color: 'red'}}>*</Text>
          </Text>
          <View style={[authstyles.inputview]}>
            <TextInput
              placeholder="Enter year"
              placeholderTextColor={Colors.gray}
              style={authstyles.inputtext}
              keyboardType="numeric"
            />
          </View>
        </View>
        <View style={{marginTop: wp(2)}}>
          <Text style={[authstyles.heading, {marginLeft: wp(5)}]}>
            Video Link if any
          </Text>
          <View style={[authstyles.inputview]}>
            <TextInput
              placeholder="Enter link"
              placeholderTextColor={Colors.gray}
              style={authstyles.inputtext}
              keyboardType="numeric"
            />
          </View>
        </View>
        {/* <View style={styles.desbox}>
                <Text style={[authstyles.heading, {marginLeft: wp(5)}]}>
                  Property Features
                </Text>
              </View> */}

        <View style={{marginTop: wp(4)}}>
          <Text style={[authstyles.heading]}>
            Property Features {'\n'}
            <Text
              style={{color: 'blue', fontFamily: fonts.Regular, fontSize: 12}}>
              (Select At Least One)
            </Text>
            <Text style={{color: 'red'}}>*</Text>
          </Text>
          <View style={{marginTop: wp(6)}}>
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
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
            marginVertical: wp(6),
            marginRight: wp(5),
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Edit_Property');
            }}
            style={{
              width: wp(25),
              height: wp(12),
              backgroundColor: '#23A455',
              elevation: 2,
              borderRadius: 8,
              marginRight: wp(5),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{fontSize: 14, fontFamily: fonts.Bold, color: 'white'}}>
              Back
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Edit_Property2');
            }}
            style={{
              width: wp(25),
              height: wp(12),
              backgroundColor: '#23A455',
              elevation: 2,
              borderRadius: 8,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{fontSize: 14, fontFamily: fonts.Bold, color: 'white'}}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginBottom: wp(20)}}></View>
      </ScrollView>
    </View>
  );
};

export default Edit_Property1;

const styles = StyleSheet.create({
  modalopenflat: {
    width: wp(90),
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
    width: wp(85),
    // backgroundColor: 'red',
    paddingVertical: wp(2),
    borderBottomWidth: 0.5,
    alignSelf: 'center',
    paddingHorizontal: wp(3),
  },
  addimageview: {
    width: wp(90),
    backgroundColor: 'white',
    paddingVertical: wp(4),
    alignSelf: 'center',
    paddingHorizontal: wp(3),
    elevation: 2,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: wp(2),
  },
  desbox: {
    marginTop: wp(2),
    paddingHorizontal: wp(2),
    paddingVertical: wp(2),
    borderWidth: 0.6,
    alignSelf: 'flex-start',
    marginLeft: wp(5),
    borderRadius: 10,
    borderColor: Colors.main,
    marginTop: wp(4),
  },
  featureList: {
    paddingHorizontal: wp(5),
    marginTop: wp(2),
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
