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
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {authstyles} from '../../Auth/AuthStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CountryPicker from 'react-native-country-picker-modal';
import Button from '../../../components/Button';
import Entypo from 'react-native-vector-icons/Entypo';
const Invoices = () => {
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
  const statusdata = ['any', 'paid', 'unpaid'];
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
  const floorplandata = ['Any', 'Listing', 'Package', 'Listing with Feature'];

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
        <Text style={authstyles.headertext}>Invoices</Text>
        <View></View>
      </View>
      <ScrollView>
        <View
          style={{
            width: wp(95),
            paddingVertical: wp(4),
            elevation: 2,
            backgroundColor: 'white',
            marginVertical: wp(4),
            alignSelf: 'center',
          }}>
          <Text style={authstyles.heading}>Search Invoice</Text>
          <View style={{marginTop: wp(4)}}>
            <Text style={authstyles.heading}>Start Date</Text>

            <View style={authstyles.inputview}>
              <AntDesign name="calendar" size={18} color={'gray'} />
              <TextInput
                placeholder="Start Date"
                placeholderTextColor="gray"
                style={authstyles.inputtext}
              />
            </View>
          </View>

          <View style={{marginTop: wp(2)}}>
            <Text style={authstyles.heading}>Start Date</Text>

            <View style={authstyles.inputview}>
              <AntDesign name="calendar" size={18} color={'gray'} />
              <TextInput
                placeholder="End Date"
                placeholderTextColor="gray"
                style={authstyles.inputtext}
              />
            </View>
          </View>

          <View style={{marginTop: wp(2)}}>
            <Text style={authstyles.heading}>Type</Text>
            <TouchableOpacity
              activeOpacity={0.9}
              style={[authstyles.inputview]}
              onPress={() => {
                setfloorplan(!floorplan);
              }}>
              <Text style={authstyles.inputtext}>
                {selectedplan ? selectedplan : 'Select'}
              </Text>
              <SimpleLineIcons
                name={floorplan ? 'arrow-up' : 'arrow-down'}
                size={14}
                color={Colors.black}
              />
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
          </View>

          <View style={{marginTop: wp(2)}}>
            <Text style={authstyles.heading}>Status</Text>
            <TouchableOpacity
              activeOpacity={0.9}
              style={[authstyles.inputview]}
              onPress={() => {
                setstatus(!status);
              }}>
              <Text style={authstyles.inputtext}>
                {selectedstatus ? selectedstatus : 'Select'}
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
        </View>

        <View>
          <FlatList
            data={[1, 2, 3, 4]}
            renderItem={() => {
              return (
                <View
                  style={{
                    width: wp(95),
                    paddingVertical: wp(2),
                    backgroundColor: 'white',
                    elevation: 2,
                    marginVertical: wp(2),
                    alignSelf: 'center',
                  }}>
                  <View style={styles.textView}>
                    <Text style={styles.text}>#787B78H</Text>
                  </View>

                  <View style={styles.textView}>
                    <Text style={styles.text}>july 14,2024</Text>
                  </View>

                  <View style={styles.textView}>
                    <Text style={styles.text}>Publish free listing</Text>
                  </View>

                  <View style={styles.textView}>
                    <Text
                      style={[
                        styles.text,
                        {
                          paddingHorizontal: wp(2),
                          paddingVertical: wp(0.5),
                          backgroundColor: 'green',
                          alignSelf: 'flex-start',
                          borderRadius: 4,
                          color: 'white',
                        },
                      ]}>
                      PAID
                    </Text>
                  </View>

                  <View style={styles.textView}>
                    <Text style={styles.text}>free Credit</Text>
                  </View>
                  <View style={styles.textView}>
                    <Text style={styles.text}>free</Text>
                  </View>

                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Invoices_detail');
                    }}
                    style={{
                      width: wp(30),
                      height: wp(12),
                      backgroundColor: Colors.main,
                      alignSelf: 'flex-start',
                      borderRadius: 8,
                      justifyContent: 'center',

                      alignItems: 'center',
                      marginTop: wp(4),
                      marginLeft: wp(5),
                    }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: fonts.Bold,
                        color: Colors.white,
                      }}>
                      View Details
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
        <View style={{marginBottom: wp(20)}}></View>
      </ScrollView>
    </View>
  );
};

export default Invoices;

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
  textView: {
    paddingVertical: wp(2),
    // borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    // borderTopColor: 'gray',
    borderBottomColor: 'gray',
    paddingLeft: wp(5),
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.Regular,
    color: Colors.black,
  },
});
