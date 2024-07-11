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
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CountryPicker from 'react-native-country-picker-modal';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {authstyles} from '../Auth/AuthStyles';
const Edit_Property = () => {
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
          {/* <View style={{marginTop: wp(4)}}>
            <Text style={authstyles.heading}>
              I Would Like To Place A Property{' '}
              <Text style={{color: 'red'}}>*</Text>
            </Text>

            <TouchableOpacity
              activeOpacity={0.9}
              style={[authstyles.inputview]}
              onPress={() => {
                setproperty(!property);
              }}>
              <Text style={authstyles.inputtext}>
                {selectedproperty ? selectedproperty : 'Select area'}
              </Text>
              <SimpleLineIcons
                name={property ? 'arrow-up' : 'arrow-down'}
                size={14}
                color={Colors.black}
              />
            </TouchableOpacity>
            {property && (
              <View style={styles.modalopenflat}>
                <FlatList
                  data={propertydata}
                  renderItem={({item}) => {
                    return (
                      <TouchableOpacity
                        onPress={() => {
                          setselectedproperty(item);
                          setproperty(!property);
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
          </View> */}
          <View
            style={{
              height: wp(15),
              justifyContent: 'center',
              paddingLeft: wp(5),
              borderBottomWidth: 0.5,
              color: 'gray',
            }}>
            <Text style={[authstyles.heading, {marginLeft: 0}]}>
              Property Description and Price
            </Text>
          </View>

          <View style={{marginTop: wp(2)}}>
            <Text style={authstyles.heading}>
              Property Title
              <Text style={{color: 'red'}}>*</Text>
            </Text>

            <View style={authstyles.inputview}>
              <TextInput
                placeholder="Enter title"
                placeholderTextColor={Colors.gray}
                style={authstyles.inputtext}
              />
            </View>
          </View>

          <View style={{marginTop: wp(2)}}>
            <Text style={authstyles.heading}>Property Description</Text>
            <View
              style={[
                authstyles.inputview,
                {height: wp(30), alignItems: 'flex-start'},
              ]}>
              <TextInput
                placeholder="Write..."
                placeholderTextColor={Colors.gray}
                style={authstyles.inputtext}
                multiline
                textAlignVertical="top"
              />
            </View>
          </View>

          <View>
            <Text style={authstyles.heading}>
              Type
              <Text style={{color: 'red'}}>*</Text>
            </Text>
            <TouchableOpacity
              activeOpacity={0.9}
              style={[authstyles.inputview]}
              onPress={() => {
                setbanglowview(!banglowview);
              }}>
              <Text style={authstyles.inputtext}>
                {selectedbanglawdata ? selectedbanglawdata : 'Select Type'}
              </Text>
              <SimpleLineIcons
                name={banglowview ? 'arrow-up' : 'arrow-down'}
                size={14}
                color={Colors.black}
              />
            </TouchableOpacity>
            {banglowview && (
              <View style={styles.modalopenflat}>
                <FlatList
                  data={banglawdata}
                  renderItem={({item}) => {
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
          </View>

          <View>
            <Text style={authstyles.heading}>
              Status
              <Text style={{color: 'red'}}>*</Text>
            </Text>
            <TouchableOpacity
              activeOpacity={0.9}
              style={[authstyles.inputview]}
              onPress={() => {
                setstatus(!status);
              }}>
              <Text style={authstyles.inputtext}>
                {selectedstatus ? selectedstatus : 'Select status'}
              </Text>
              <SimpleLineIcons
                name={status ? 'arrow-up' : 'arrow-down'}
                size={14}
                color={Colors.black}
              />
            </TouchableOpacity>
            {status && (
              <View style={styles.modalopenflat}>
                <FlatList
                  data={statusdata}
                  renderItem={({item}) => {
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
          </View>

          <View style={{marginTop: wp(2)}}>
            <Text style={authstyles.heading}>
              Sales, Rent, Mortagage Price
              <Text style={{color: 'red'}}>*</Text>
              {'  '}In USD
            </Text>
            <View style={authstyles.inputview}>
              <TextInput
                placeholder="Enter Price"
                placeholderTextColor={Colors.gray}
                style={authstyles.inputtext}
              />
            </View>
          </View>

          <View style={{marginTop: wp(2)}}>
            <Text style={authstyles.heading}>
              Add Property Images
              <Text style={{color: 'red'}}>*</Text>
            </Text>
            <View style={styles.addimageview}>
              <TouchableOpacity>
                <Image
                  resizeMode="contain"
                  style={{width: wp(20), height: wp(20)}}
                  source={images.addimage}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Edit_Property1');
          }}
          style={{
            width: wp(25),
            height: wp(12),
            backgroundColor: '#23A455',
            elevation: 2,
            borderRadius: 8,
            alignSelf: 'flex-end',
            marginRight: wp(5),
            marginTop: wp(6),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 14, fontFamily: fonts.Bold, color: 'white'}}>
            Next
          </Text>
        </TouchableOpacity>
        <View style={{marginBottom: wp(25)}}></View>
      </ScrollView>
    </View>
  );
};

export default Edit_Property;

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
    paddingVertical: wp(2),
    paddingHorizontal: wp(2),
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedFeature: {
    backgroundColor: Colors.main,
    borderColor: Colors.main,
  },
  featureText: {
    fontSize: 14,
    fontFamily: fonts.Regular,
    color: Colors.black,
  },
  agretext: {
    fontSize: 12,
    fontFamily: fonts.Regular,
    color: Colors.black,
    marginLeft: wp(4),
  },
});
