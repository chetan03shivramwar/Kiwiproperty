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
  TouchableWithoutFeedback,
  Linking
} from 'react-native';
import React, { useRef, useState } from 'react';
import { Colors, fonts, images } from '../../../constant/Indes';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import { authstyles } from '../../Auth/AuthStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CountryPicker from 'react-native-country-picker-modal';
import Fontisto from 'react-native-vector-icons/Fontisto';
const Affiliate_Member = ({ navigation }) => {
  const [onchange, setOnChange] = useState('1');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Tree'); // Default option
  const [expandedCardId, setExpandedCardId] = useState(null);
  const [selected, setSelected] = useState(null);
  const options = [
      { id: '1', points: '100', cost: '10.00' },
      { id: '2', points: '200', cost: '18.00' },
      { id: '3', points: '300', cost: '25.00' },
      { id: '4', points: '400', cost: '32.00' },
      { id: '5', points: '500', cost: '38.00' },
  ];

  const handleSelect = (id) => {
      setSelected(id);
  };

  const toggleModal = () => {
      setIsModalVisible(!isModalVisible);
  };

  const handleOptionSelect = (option) => {
      setSelectedOption(option);
      setIsModalVisible(false);
  };

  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const [selectedOption2, setSelectedOption2] = useState('10 Items'); // Default option

  const toggleModal2 = () => {
      setIsModalVisible2(!isModalVisible2);
  };

  const handleOptionSelect2 = (option) => {
      setSelectedOption2(option);
      setIsModalVisible2(false);
  };
  const data = [
      {
          id: 1,
          //   image: require('../../assets/masterpic.png'),
          point: '12',
          entry: 'points purchase',
          dlId: '100102',
          comm_earning: '0.24',
          date: '2022-08-17 09:38:24',
          payRequest: 'Requested',
      },
      {
          id: 2,
          point: '12',
          entry: 'points purchase',
          dlId: '100102',
          comm_earning: '0.24',
          date: '2022-08-17 09:38:24',
          payRequest: 'Requested',
      },
      {
          id: 3,
          point: '12',
          entry: 'points purchase',
          dlId: '100102',
          comm_earning: '0.24',
          date: '2022-08-17 09:38:24',
          payRequest: 'Requested',
      },
      {
          id: 4,
          point: '12',
          entry: 'points purchase',
          dlId: '100102',
          comm_earning: '0.24',
          date: '2022-08-17 09:38:24',
          payRequest: 'Requested',
      },
  ];
  const pointsdata = [
      {
          id: '1', points: '1500', cost: '1.0',
          image: images.blankImage,
          type: 'Amature',
          save: 'Save $3.05',
          listreal: 'List Real Estate News',
          days: 'For 90 Days, Re-List 1X',
          upload: 'Upload Floor Plan',
          link: 'Easy Link to your Video'
      },
      {
          id: '2', points: '3000', cost: '2.0',
          image: images.blankImage,
          type: 'Advanced',
          save: 'Save $5.53',
          listreal: 'List Real Estate News',
          days: 'For 90 Days, Re-List 1X',
          upload: 'Upload Floor Plan',
          link: 'Easy Link to your Video'
      },
      {
          id: '3', points: '9000', cost: '3.0',
          image: images.blankImage,
          type: 'Executive',
          save: 'Save $14.88',
          listreal: 'List Real Estate News',
          days: 'For 90 Days, Re-List 1X',
          upload: 'Upload Floor Plan',
          link: 'Easy Link to your Video'
      },
      {
          id: '4', points: '18000', cost: '4.0',
          image: images.blankImage,
          type: 'Professional',
          save: 'Save $26.33',
          listreal: 'List Real Estate News',
          days: 'For 90 Days, Re-List 1X',
          upload: 'Upload Floor Plan',
          link: 'Easy Link to your Video'
      },

  ];
  const data22 = [
      {
          id: 1,
          point: '-80',
          date: 'March 29, 2024 5:37 am',
          entry: 'Payment for listing Add - Invoice #31855',
      },
      {
          id: 2,
          point: '90',
          date: 'March 29, 2024 5:37 am',
          entry: 'Bonus from points purchased by chingching!',
      },
      {
          id: 3,
          point: '150',
          date: 'March 29, 2024 5:37 am',
          entry: 'Bonus from points purchased by chingching!',
      },
      {
          id: 4,
          point: '120',
          date: 'March 29, 2024 5:37 am',
          entry: 'Bonus from points purchased by chingching!',
      },
      {
          id: 5,
          point: '60',
          date: 'March 29, 2024 5:37 am',
          entry: 'Bonus from points purchased by chingching!',
      },
      {
          id: 6,
          point: '60',
          date: 'March 29, 2024 5:37 am',
          entry: 'Bonus from points purchased by chingching!',
      },
      {
          id: 7,
          point: '60',
          date: 'March 29, 2024 5:37 am',
          entry: 'Bonus from points purchased by chingching!',
      },
  ];
  const openLink = () => {
      const url = 'https://www.kiwi.sg/ref/100076';
      Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };
  const renderItem = ({ item }) => (
      <View >
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginHorizontal: wp(4), borderBottomWidth: 0.3, borderBottomColor: 'lightgrey', paddingVertical: wp(3), borderTopWidth: 0.3, borderTopColor: 'lightgrey' }}>
              {/* Radio Button */}
              <TouchableOpacity style={{ marginRight: wp(4) }} onPress={() => handleSelect(item.id)}>
                  {selected === item.id ? (
                      <Fontisto name='radio-btn-active' color={'#0075ff'} size={15} />
                  ) : (
                      <Fontisto name='radio-btn-passive' color={Colors.gray} size={15} />

                  )}
              </TouchableOpacity>

              {/* No. of Points */}
              <Text style={{ fontSize: 14, fontFamily: fonts.Medium, color: Colors.black }}>
                  {item.points}
              </Text>

              {/* Cost SGD */}
              <Text style={{ fontSize: 14, fontFamily: fonts.Medium, color: Colors.black }}>
                  {item.cost}
              </Text>
          </View>
          <View>
              <Image source={item.image} resizeMode='contain' style={{ width: wp(40), height: wp(40), alignSelf: 'center', marginTop: wp(2) }} />
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: wp(2) }}>
              <Text style={{ fontSize: 14, fontFamily: fonts.Medium, color: Colors.black, lineHeight: 20 }}>{item.type}</Text>
              <Text style={{ fontSize: 14, fontFamily: fonts.Regular, color: Colors.black, lineHeight: 20 }}>{item.save}</Text>
              <Text style={{ fontSize: 14, fontFamily: fonts.Regular, color: Colors.black, lineHeight: 20 }}>{item.listreal}</Text>
              <Text style={{ fontSize: 14, fontFamily: fonts.Regular, color: Colors.black, lineHeight: 20 }}>{item.days}</Text>
              <Text style={{ fontSize: 14, fontFamily: fonts.Regular, color: Colors.black, lineHeight: 20 }}>{item.upload}</Text>
              <Text style={{ fontSize: 14, fontFamily: fonts.Regular, color: Colors.black, lineHeight: 20 }}>{item.link}</Text>


          </View>
      </View>
  );
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
              <Text style={authstyles.headertext}>My Affiliate</Text>
              <View></View>
          </View>
          <ScrollView>
              <View style={{ width: wp(100), height: wp(12), backgroundColor: '#00365E', marginTop: wp(3), justifyContent: 'center', paddingHorizontal: wp(5) }}>
                  <Text style={{ fontSize: 14, fontFamily: fonts.Medium, color: Colors.white }}>Hi, Gerald P</Text>
              </View>
              <View style={{ marginTop: wp(2), marginHorizontal: wp(5) }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Text style={{ fontSize: 14, fontFamily: fonts.Regular, color: Colors.black }}>UserName:</Text>
                      <Text style={{ fontSize: 14, fontFamily: fonts.Regular, color: '#4700ff' }}>Peterg</Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Text style={{ fontSize: 14, fontFamily: fonts.Regular, color: Colors.black }}>Affiliate ID:</Text>
                      <Text style={{ fontSize: 14, fontFamily: fonts.Regular, color: '#4700ff' }}>100076</Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Text style={{ fontSize: 14, fontFamily: fonts.Regular, color: Colors.black }}>My Point Balance:</Text>
                      <Text style={{ fontSize: 14, fontFamily: fonts.Regular, color: '#4700ff' }}>16907 Pts</Text>
                  </View>
              </View>
              <View style={styles.buttonsContainer}>
                  {/* First Row */}
                  <View style={styles.buttonRow}>
                      <TouchableOpacity
                          style={[
                              styles.button,
                              onchange === '1' && styles.activeButton,
                          ]}
                          onPress={() => setOnChange('1')}>
                          <Text
                              style={[
                                  styles.header_text,
                                  onchange === '1' && styles.activeButtonText,
                              ]}>
                              Affiliate URLs
                          </Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                          style={[
                              styles.button,
                              onchange === '2' && styles.activeButton,
                          ]}
                          onPress={() => setOnChange('2')}>
                          <Text
                              style={[
                                  styles.header_text,
                                  onchange === '2' && styles.activeButtonText,
                              ]}>
                              Settings
                          </Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                          style={[
                              styles.button,
                              onchange === '3' && styles.activeButton,
                          ]}
                          onPress={() => setOnChange('3')}>
                          <Text
                              style={[
                                  styles.header_text,
                                  onchange === '3' && styles.activeButtonText,
                              ]}>
                              Sub Affiliates
                          </Text>
                      </TouchableOpacity>
                  </View>

                  {/* Second Row */}
                  <View style={styles.buttonRow}>
                      <TouchableOpacity
                          style={[
                              styles.button,
                              onchange === '4' && styles.activeButton,
                          ]}
                          onPress={() => setOnChange('4')}>
                          <Text
                              style={[
                                  styles.header_text,
                                  onchange === '4' && styles.activeButtonText,
                              ]}>
                              Points
                          </Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                          style={[
                              styles.button,
                              onchange === '5' && styles.activeButton,
                          ]}
                          onPress={() => setOnChange('5')}>
                          <Text
                              style={[
                                  styles.header_text,
                                  onchange === '5' && styles.activeButtonText,
                              ]}>
                              Buy Points
                          </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                          style={[
                              styles.button,
                              onchange === '6' && styles.activeButton,
                          ]}
                          onPress={() => setOnChange('6')}>
                          <Text
                              style={[
                                  styles.header_text,
                                  onchange === '6' && styles.activeButtonText,
                              ]}>
                              Commission
                          </Text>
                      </TouchableOpacity>
                  </View>

              </View>
              {onchange == '1' ? (
                  <View style={{ flex: 1, marginHorizontal: wp(5), marginTop: wp(4) }}>
                      <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:wp(2)}}>
                          <Text style={styles.textStyletop}>Your Referral URLs 'ID' is </Text>
                          <TouchableOpacity style={{width:wp(40)}} onPress={openLink}>
                              <Text style={[styles.textStyletop,{color:'#472AFF'}]} numberOfLines={1}>"https://www.kiwi.sg/ref/100076"</Text>
                          </TouchableOpacity>
                      </View>
                      <View style={{ marginTop: wp(3) }}>
                          <Text style={styles.textStyletop}>Click on this link; then ask your "Sub-Affiliate" to Register now, otherwise copy this link, sent to your "Sub-Affiliate" email, to click on it to Register,so that once they Register,you'll obtain "Free" points.</Text>
                      </View>
                      <View style={{ marginTop: wp(3) }}>
                          <Text style={[styles.textStyletop, { fontSize: 16, }]}>Campaign Name (optional)</Text>
                          <View style={{ marginTop: wp(2),marginBottom:wp(2) }}>
                              <TextInput
                                  style={{ width: wp(90), height: wp(11), backgroundColor: Colors.white, elevation: 2, borderRadius: wp(2), paddingHorizontal: wp(3), color: Colors.black }}
                              />
                          </View>
                      </View>

                  </View>
              ) : onchange == '2' ? (
                  <View style={{ flex: 1, marginHorizontal: wp(5), marginTop: wp(4) }}>
                      <View >
                          <Text style={{ fontSize: 12, fontFamily: fonts.Regular, color: Colors.black }}>Profile Settings</Text>
                      </View>
                      <View style={{ marginTop: wp(3), flexDirection: 'row' }}>
                          <Text style={styles.textStyletop}>
                              Display Sub Affiliates in a Tree or a List?</Text>
                          <TouchableOpacity
                              style={styles.dropdownContainer}
                              onPress={toggleModal}
                          >
                              <Text style={styles.optionText}>{selectedOption}</Text>
                              <AntDesign
                                  name={isModalVisible ? 'up' : 'down'}
                                  size={14}
                                  color={Colors.black}
                              />
                          </TouchableOpacity>
                      </View>
                      <TouchableOpacity style={{ width: wp(50), height: wp(12), backgroundColor: '#00365e', elevation: 3, borderRadius: wp(1), marginTop: wp(5), justifyContent: 'center', alignItems: 'center', }}>
                          <Text style={{ fontSize: 14, fontFamily: fonts.Medium, color: Colors.white }}>Save Profile Settings</Text>
                      </TouchableOpacity>
                      {isModalVisible && (
                          <Modal
                              transparent={true}
                              visible={isModalVisible}
                              animationType="none"
                              onRequestClose={toggleModal}
                          >
                              <TouchableWithoutFeedback onPress={toggleModal}>
                                  <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,.2)' }}>
                                      <TouchableOpacity
                                          style={styles.modalOverlay}
                                          onPress={toggleModal}
                                      >
                                          <View style={styles.modalContainer}>
                                              <TouchableOpacity
                                                  style={styles.modalOption}
                                                  onPress={() => handleOptionSelect('Tree')}
                                              >
                                                  <Text style={styles.modalText}>Tree</Text>
                                              </TouchableOpacity>
                                              <TouchableOpacity
                                                  style={styles.modalOption}
                                                  onPress={() => handleOptionSelect('List')}
                                              >
                                                  <Text style={styles.modalText}>List</Text>
                                              </TouchableOpacity>
                                          </View>
                                      </TouchableOpacity>
                                  </View>
                              </TouchableWithoutFeedback>
                          </Modal>
                      )}
                  </View>
              ) : onchange == '3' ? (
                  <View></View>
              ) : onchange == '4' ? (
                  <View style={{ marginHorizontal: wp(5) }}>
                      <View >
                          <Text style={{ fontSize: 12, fontFamily: fonts.Regular, color: Colors.black }}>My Points: 16,907</Text>
                      </View>
                      <View style={{ marginTop: wp(2) }}>
                          <Text style={{ fontSize: 12, fontFamily: fonts.Regular, color: Colors.black }}>History</Text>
                      </View>
                      <View style={{ width: wp(90), borderWidth: 0.7, borderColor: 'lightgrey', alignSelf: 'center', }}>
                          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: wp(3), paddingVertical: wp(2) }}>
                              <Text style={{ fontSize: fonts.Medium, color: Colors.black, fontSize: 14 }}>Date</Text>
                              <Text style={{ fontSize: fonts.Medium, color: Colors.black, fontSize: 14 }}>Points</Text>
                              <Text style={{ fontSize: fonts.Medium, color: Colors.black, fontSize: 14 }}>Entry</Text>
                          </View>
                          <View>
                              <FlatList
                                  data={data22}
                                  keyExtractor={item => item.id.toString()}
                                  renderItem={({ item }) => {
                                      return (
                                          <View style={{ width: wp(90), justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', borderTopWidth: 0.5, borderTopColor: 'lightgrey', paddingVertical: wp(1.5) }}>
                                              <View style={{ width: wp(40), paddingLeft: wp(2) }}>
                                                  <Text style={{ fontSize: fonts.Regular, color: Colors.black, fontSize: 12 }}>{item.date}</Text>
                                              </View>
                                              <View style={{ width: wp(10) }}>

                                                  <Text style={{ fontSize: fonts.Regular, color: Colors.black, fontSize: 12 }}>{item.point}</Text>
                                              </View>

                                              <View style={{ width: wp(40), paddingRight: wp(2) }}>

                                                  <Text style={{ fontSize: fonts.Regular, color: Colors.black, fontSize: 12 }}>{item.entry}</Text>
                                              </View>

                                          </View>
                                      )
                                  }}
                              />
                          </View>
                      </View>
                  </View>
              ) : onchange == '5' ? (
                  <View style={{ flex: 1 }}>
                      <View style={{ marginHorizontal: wp(4), marginTop: wp(2) }}>
                          <Text style={{ fontSize: 12, fontFamily: fonts.Regular, color: Colors.black }}>Points Type</Text>
                      </View>
                      <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: wp(2), marginHorizontal: wp(5) }}>
                          <Text style={{ fontSize: 14, fontFamily: fonts.Medium, color: Colors.black, textDecorationLine: 'underline' }}>
                              Select
                          </Text>
                          <Text style={{ fontSize: 14, fontFamily: fonts.Medium, color: Colors.black, textDecorationLine: 'underline' }}>
                              No, Of Points
                          </Text>
                          <Text style={{ fontSize: 14, fontFamily: fonts.Medium, color: Colors.black, textDecorationLine: 'underline' }}>
                              Cost SGD
                          </Text>
                      </View>
                      <View style={{ marginTop: wp(1), marginBottom: wp(3) }}>
                          <FlatList
                              data={pointsdata}
                              renderItem={renderItem}
                              keyExtractor={(item) => item.id}
                              extraData={selected} // Ensure FlatList re-renders when the selected option changes
                          />
                      </View>
                  </View>
              ) : onchange == '6' ? (
                  <View style={{ flex: 1 }}>
                      <View style={{ marginHorizontal: wp(5) }}>
                          <View >
                              <Text style={{ fontSize: 12, fontFamily: fonts.Regular, color: Colors.black }}>My Commission</Text>
                          </View>
                          <View style={{ marginTop: wp(2) }}>
                              <Text style={{ fontSize: 12, fontFamily: fonts.Regular, color: Colors.black }}>$Commission LVL 1:50%</Text>
                          </View>
                          <View style={{ marginTop: wp(3), flexDirection: 'row' }}>
                              <Text style={styles.textStyletop}>
                                  View Page By</Text>
                              <TouchableOpacity
                                  style={{
                                      paddingHorizontal: wp(3),
                                      height: wp(6),
                                      borderRadius: wp(1),
                                      backgroundColor: Colors.white,
                                      elevation: 2,
                                      marginLeft: wp(2),
                                      flexDirection: 'row',
                                      alignItems: 'center',
                                      justifyContent: 'space-between',
                                      paddingHorizontal: wp(1),
                                  }}
                                  onPress={toggleModal2}
                              >
                                  <Text style={styles.optionText}>{selectedOption2}</Text>
                                  <AntDesign
                                      name={isModalVisible2 ? 'up' : 'down'}
                                      size={14}
                                      color={Colors.black}
                                  />
                              </TouchableOpacity>
                          </View>
                      </View>
                      <View
                          style={{
                              marginBottom: wp(2),
                              marginTop: wp(4),
                              marginHorizontal: wp(4),
                          }}>
                          <View style={{ borderBottomWidth: 0.3, borderBottomColor: Colors.gray, width: wp(83), alignSelf: 'center', }}>
                              <Text style={[styles.textStyletop, { color: Colors.main }]}>Date</Text>
                          </View>
                          <FlatList
                              data={data}
                              keyExtractor={item => item.id.toString()}
                              renderItem={({ item }) => {
                                  const isExpanded = item.id === expandedCardId;
                                  return (
                                      <View style={styles.MastercardView}>
                                          <View
                                              style={{
                                                  flexDirection: 'row',
                                                  justifyContent: 'space-between',
                                                  marginHorizontal: wp(2),
                                                  alignItems: 'center',
                                                  // marginVertical: wp(4),
                                              }}>

                                              <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                                  <View style={{ marginLeft: wp(3) }}>
                                                      <Text
                                                          style={{
                                                              fontSize: 12,
                                                              fontFamily: fonts.Medium,
                                                              color: Colors.black,
                                                          }}
                                                          numberOfLines={1}>
                                                          {item.date}
                                                      </Text>
                                                      {isExpanded && (
                                                          <View>

                                                              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomColor: 'lightgrey', borderBottomWidth: 0.3, width: wp(82), paddingVertical: wp(1), borderTopWidth: 0.3, borderTopColor: 'lightgrey', marginTop: wp(3) }}>
                                                                  <View style={{ width: wp(30) }}>
                                                                      <Text
                                                                          style={{
                                                                              fontSize: 12,
                                                                              fontFamily: fonts.Regular,
                                                                              color: Colors.black,
                                                                              lineHeight: 19,
                                                                          }}>
                                                                          Points :
                                                                      </Text>
                                                                  </View>
                                                                  <View style={{ width: wp(50), }}>
                                                                      <Text
                                                                          style={{
                                                                              fontSize: 12,
                                                                              fontFamily: fonts.Regular,
                                                                              color: Colors.black,
                                                                              lineHeight: 19,
                                                                          }}>
                                                                          {item.point}
                                                                      </Text>
                                                                  </View>
                                                              </View>
                                                              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomColor: 'lightgrey', borderBottomWidth: 0.3, width: wp(82), paddingVertical: wp(1) }}>
                                                                  <View style={{ width: wp(30) }}>
                                                                      <Text
                                                                          style={{
                                                                              fontSize: 12,
                                                                              fontFamily: fonts.Regular,
                                                                              color: Colors.black,
                                                                              lineHeight: 19,
                                                                          }}>
                                                                          Entry :
                                                                      </Text>
                                                                  </View>
                                                                  <View style={{ width: wp(50), }}>
                                                                      <Text
                                                                          style={{
                                                                              fontSize: 12,
                                                                              fontFamily: fonts.Regular,
                                                                              color: Colors.black,
                                                                              lineHeight: 19,
                                                                          }}>
                                                                          {item.entry}
                                                                      </Text>
                                                                  </View>
                                                              </View>
                                                              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomColor: 'lightgrey', borderBottomWidth: 0.3, width: wp(82), paddingVertical: wp(1) }}>
                                                                  <View style={{ width: wp(30) }}>
                                                                      <Text
                                                                          style={{
                                                                              fontSize: 12,
                                                                              fontFamily: fonts.Regular,
                                                                              color: Colors.black,
                                                                              lineHeight: 19,
                                                                          }}>
                                                                          DL ID :
                                                                      </Text>
                                                                  </View>
                                                                  <View style={{ width: wp(50), }}>
                                                                      <Text
                                                                          style={{
                                                                              fontSize: 12,
                                                                              fontFamily: fonts.Regular,
                                                                              color: Colors.black,
                                                                              lineHeight: 19,
                                                                          }}>
                                                                          {item.dlId}
                                                                      </Text>
                                                                  </View>
                                                              </View>
                                                              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: wp(82), paddingTop: wp(1) }}>
                                                                  <View style={{ width: wp(30) }}>
                                                                      <Text
                                                                          style={{
                                                                              fontSize: 12,
                                                                              fontFamily: fonts.Regular,
                                                                              color: Colors.black,
                                                                              lineHeight: 19,
                                                                          }}>
                                                                          Comm Earning :
                                                                      </Text>
                                                                  </View>
                                                                  <View style={{ width: wp(50), }}>
                                                                      <Text
                                                                          style={{
                                                                              fontSize: 12,
                                                                              fontFamily: fonts.Regular,
                                                                              color: Colors.black,
                                                                              lineHeight: 19,
                                                                          }}>
                                                                          {item.comm_earning}
                                                                      </Text>
                                                                  </View>
                                                              </View>
                                                          </View>
                                                      )}
                                                  </View>
                                              </View>

                                              <TouchableOpacity
                                                  style={{ paddingRight: wp(3), position: 'absolute', top: wp(0), right: wp(0) }}
                                                  onPress={() => {
                                                      setExpandedCardId(isExpanded ? null : item.id);
                                                  }}>
                                                  <AntDesign
                                                      name={
                                                          isExpanded
                                                              ? 'caretup'
                                                              : 'caretdown'
                                                      }
                                                      color={Colors.black}
                                                      size={12}
                                                  />
                                              </TouchableOpacity>
                                          </View>
                                      </View>
                                  );
                              }}
                          />
                      </View>
                  </View>
              ) : null}

              {isModalVisible2 && (
                  <Modal
                      transparent={true}
                      visible={isModalVisible2}
                      animationType="none"
                      onRequestClose={toggleModal2}
                  >
                      <TouchableWithoutFeedback onPress={toggleModal2}>
                          <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,.2)' }}>
                              <TouchableOpacity
                                  style={styles.modalOverlay2}
                                  onPress={toggleModal2}
                              >
                                  <View style={styles.modalContainer}>
                                      <TouchableOpacity
                                          style={styles.modalOption}
                                          onPress={() => handleOptionSelect2('10 Items')}
                                      >
                                          <Text style={styles.modalText}>10 Items</Text>
                                      </TouchableOpacity>
                                      <TouchableOpacity
                                          style={styles.modalOption}
                                          onPress={() => handleOptionSelect2('20 Items')}
                                      >
                                          <Text style={styles.modalText}>20 Items</Text>
                                      </TouchableOpacity>
                                      <TouchableOpacity
                                          style={styles.modalOption}
                                          onPress={() => handleOptionSelect2('30 Items')}
                                      >
                                          <Text style={styles.modalText}>30 Items</Text>
                                      </TouchableOpacity>
                                      <TouchableOpacity
                                          style={styles.modalOption}
                                          onPress={() => handleOptionSelect2('40 Items')}
                                      >
                                          <Text style={styles.modalText}>40 Items</Text>
                                      </TouchableOpacity>
                                  </View>
                              </TouchableOpacity>
                          </View>
                      </TouchableWithoutFeedback>
                  </Modal>
              )}
          </ScrollView>
      </View>
  )
}

export default Affiliate_Member

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: Colors.white,
  },
  buttonsContainer: {
      alignItems: 'center',
      paddingHorizontal: wp(5),
      marginTop: wp(5),

  },
  buttonRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: wp(95),
      marginBottom: wp(3), // Add space between rows,

  },
  button: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.white,
      paddingHorizontal: wp(4),
      paddingVertical: wp(1.4),
      borderRadius: wp(2),
      borderWidth: 1.5,
      borderColor: '#00E800',

  },
  activeButton: {
      backgroundColor: '#00E800',
      borderWidth: 0,
  },
  header_text: {
      fontSize: 14,
      color: Colors.gray,
      fontFamily: fonts.Medium,
  },
  activeButtonText: {
      color: Colors.white,
      fontFamily: fonts.semibold,
  },
  textStyletop: {
      fontSize: 14, color: Colors.black, fontFamily: fonts.Regular
  },
  dropdownContainer: {
      width: wp(12),
      height: wp(6),
      borderRadius: wp(1),
      backgroundColor: Colors.white,
      elevation: 2,
      marginLeft: wp(2),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: wp(1),
  },
  optionText: {
      fontSize: 12,
      color: Colors.black,
      fontFamily: fonts.Regular,
  },
  modalOverlay: {
      width: wp(30),
      paddingVertical: wp(2),
      backgroundColor: 'white',
      alignSelf: 'flex-end',
      marginRight: wp(12),
      marginTop: wp(100),
      borderRadius: 10,
  },
  modalOverlay2: {
      width: wp(30),
      paddingVertical: wp(1),
      backgroundColor: 'white',
      alignSelf: 'center',
      marginTop: wp(103),
      borderRadius: 10,

  },
  modalContainer: {
      width: wp(30),
      backgroundColor: Colors.white,
      borderRadius: wp(2),
      padding: wp(2),
  },
  modalOption: {
      paddingVertical: wp(2),
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
  },
  modalText: {
      fontSize: 14,
      color: Colors.black,
      fontFamily: fonts.Regular,
      alignSelf: 'center'
  },
  MastercardView: {
      width: wp(90),
      paddingVertical: wp(3),
      borderRadius: wp(4),
      backgroundColor: Colors.white,
      marginHorizontal: wp(1),
      borderBottomWidth: 0.5,
      borderBottomColor: 'lightgrey'

  },
})