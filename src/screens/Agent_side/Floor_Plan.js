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
import Entypo from 'react-native-vector-icons/Entypo';
import Button from '../../components/Button';
import {authstyles} from '../Auth/AuthStyles';
const Floor_Plan = () => {
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
          activeOpacity={0.9}
          onPress={() => {
            navigation.goBack();
          }}>
          <AntDesign name="arrowleft" size={22} color={Colors.black} />
        </TouchableOpacity>
        <Text style={authstyles.headertext}>Floor Plan</Text>
        <View></View>
      </View>
      <ScrollView>
        <View>
          <View>
            <View
              style={{
                height: wp(15),
                justifyContent: 'center',
                borderBottomWidth: 0.5,
                borderBlockColor: Colors.gray,
                paddingLeft: wp(5),
                marginBottom: wp(4),
              }}>
              <Text style={[authstyles.heading, {marginLeft: 0}]}>
                Floor Plans
              </Text>
            </View>

            <TouchableOpacity
              activeOpacity={0.9}
              style={[authstyles.inputview]}
              onPress={() => {
                setfloorplan(!floorplan);
              }}>
              <Text style={authstyles.inputtext}>
                {selectedplan ? selectedplan : 'Enable/Disable'}
              </Text>
              <Entypo name={'select-arrows'} size={20} color={Colors.black} />
            </TouchableOpacity>
            {floorplan && (
              <View style={styles.modalopenflat}>
                <FlatList
                  data={floorplandata}
                  renderItem={({item}) => {
                    return (
                      <TouchableOpacity
                        onPress={() => {
                          setselectedplan(item);
                          setfloorplan(!floorplan);
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
            {floorPlans.map((plan, index) => (
              <View key={index} style={{marginTop: 8}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginRight: wp(5),
                  }}>
                  <Text style={authstyles.heading}>
                    Floor Plan {index + 1} (Optional)
                  </Text>
                  <TouchableOpacity onPress={() => deleteFloorPlan(index)}>
                    <Entypo name="cross" size={22} color={Colors.black} />
                  </TouchableOpacity>
                </View>
                <View style={authstyles.desbox}>
                  <Text style={[authstyles.heading]}>Plan Title</Text>
                </View>
                <View style={authstyles.inputview}>
                  <TextInput
                    placeholder="Enter title"
                    placeholderTextColor={Colors.gray}
                    style={authstyles.inputtext}
                    value={plan.title}
                    onChangeText={text => updateFloorPlan(index, 'title', text)}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal: 20,
                  }}>
                  <View style={{marginTop: 8}}>
                    <Text style={[authstyles.heading, {marginLeft: 0}]}>
                      Plan Size (Sqft)
                    </Text>
                    <View style={[authstyles.inputview, {width: wp(40)}]}>
                      <TextInput
                        placeholder="Enter..."
                        placeholderTextColor={Colors.gray}
                        style={authstyles.inputtext}
                        keyboardType="numeric"
                        value={plan.size}
                        onChangeText={text =>
                          updateFloorPlan(index, 'size', text)
                        }
                      />
                    </View>
                  </View>
                  <View style={{marginTop: 8}}>
                    <Text style={[authstyles.heading, {marginLeft: 0}]}>
                      Bedrooms
                    </Text>
                    <View style={[authstyles.inputview, {width: wp(40)}]}>
                      <TextInput
                        placeholder="Enter..."
                        placeholderTextColor={Colors.gray}
                        style={authstyles.inputtext}
                        keyboardType="numeric"
                        value={plan.bedrooms}
                        onChangeText={text =>
                          updateFloorPlan(index, 'bedrooms', text)
                        }
                      />
                    </View>
                  </View>
                </View>
                <View style={{marginTop: 8}}>
                  <Text style={[authstyles.heading]}>Bathrooms</Text>
                  <View style={authstyles.inputview}>
                    <TextInput
                      placeholder="Enter..."
                      placeholderTextColor={Colors.gray}
                      style={authstyles.inputtext}
                      keyboardType="numeric"
                      value={plan.bathrooms}
                      onChangeText={text =>
                        updateFloorPlan(index, 'bathrooms', text)
                      }
                    />
                  </View>
                </View>
                <View style={{marginTop: 8}}>
                  <Text style={[authstyles.heading]}>Rooms</Text>
                  <View style={authstyles.inputview}>
                    <TextInput
                      placeholder="Enter..."
                      placeholderTextColor={Colors.gray}
                      style={authstyles.inputtext}
                      keyboardType="numeric"
                      value={plan.rooms}
                      onChangeText={text =>
                        updateFloorPlan(index, 'rooms', text)
                      }
                    />
                  </View>
                </View>
                <View style={{marginTop: 8}}>
                  <Text style={[authstyles.heading]}>Plan Price (USD)</Text>
                  <View style={authstyles.inputview}>
                    <TextInput
                      placeholder="Enter..."
                      placeholderTextColor={Colors.gray}
                      style={authstyles.inputtext}
                      keyboardType="numeric"
                      value={plan.price}
                      onChangeText={text =>
                        updateFloorPlan(index, 'price', text)
                      }
                    />
                  </View>
                </View>
                <View style={{marginTop: 8}}>
                  <Text style={authstyles.heading}>
                    Floor Plan {index + 1} Images
                    <Text style={{color: 'red'}}>*</Text>
                  </Text>
                  <View style={styles.addimageview}>
                    <TouchableOpacity>
                      <Image
                        resizeMode="contain"
                        style={{width: 80, height: 80}}
                        source={images.addimage}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}

            <TouchableOpacity
              style={{
                width: wp(60),
                height: wp(12),
                backgroundColor: Colors.main,
                alignSelf: 'center',
                marginRight: wp(5),
                borderRadius: 5,
                elevation: 2,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: wp(6),
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={addFloorPlan}>
              <Entypo name="plus" size={20} color={'white'} />
              <Text
                style={{
                  fontSize: 14,
                  color: Colors.white,
                  fontFamily: fonts.Bold,
                  marginLeft: 10,
                }}>
                Add More
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginTop: wp(16), marginBottom: wp(6)}}>
          <Button
            title="Submit"
            onPress={() => {
              // navigation.navigate('');
            }}
          />
        </View>
        <View style={{marginBottom: wp(20)}}></View>
      </ScrollView>
    </View>
  );
};

export default Floor_Plan;

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
