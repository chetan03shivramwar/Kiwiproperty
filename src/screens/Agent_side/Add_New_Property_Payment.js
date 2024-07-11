import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Colors, fonts, images} from '../../constant/Indes';
import {useNavigation} from '@react-navigation/native';
import {authstyles} from '../Auth/AuthStyles';
import CheckBox from '@react-native-community/checkbox';
import Button from '../../components/Button';

const Add_New_Property_Payment = () => {
  const navigation = useNavigation();
  const [payOption, setPayOption] = useState('payByPts'); // Default to 'payByPts'
  const [selectedAttentionImage, setSelectedAttentionImage] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = [
    {
      id: 1,
      title: 'General Listing',
      days: 90,
      cashPrice: 'SGD$ 0.03',
      points: 30,
      image: images.chat,
    },
    {
      id: 2,
      title: 'Top Slider (Rotating)',
      days: 90,
      cashPrice: 'SGD$ 0.03',
      points: 30,
      image: images.agents,
    },
    {
      id: 3,
      title: 'Boost Ad’s Listing',
      days: 90,
      cashPrice: 'SGD$ 0.03',
      points: 30,
      image: images.add,
    },
    {
      id: 4,
      title: 'Attention Images',
      cashPrice: 'SGD$ 0.03',
      points: 30,
    },
  ];

  const attentionImages = [
    {id: 1, title: 'Negotiable'},
    {id: 2, title: 'Selling Hot'},
    {id: 3, title: 'Free Viewing'},
    {id: 4, title: 'Best Offer'},
    {id: 5, title: 'Near To Amenities'},
  ];

  const handleOptionChange = id => {
    setSelectedOptions(prev =>
      prev.includes(id)
        ? prev.filter(optionId => optionId !== id)
        : [...prev, id],
    );
  };

  const handleAttentionImageSelect = id => {
    setSelectedAttentionImage(id);
  };

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
        <Text style={authstyles.headertext}>Payment</Text>
        <View></View>
      </View>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: wp(5),
            marginVertical: 10,
            marginTop: wp(8),
          }}>
          <Text style={[authstyles.heading, {marginLeft: 0}]}>
            My UPoints Available Now (Balance):
          </Text>
          <Text style={[authstyles.heading, {marginLeft: 0}]}>7300</Text>
        </View>
        <View style={styles.paymentOptionsContainer}>
          <Text style={styles.tableHeader}>No. Of Days</Text>
          <Text style={styles.tableHeader}>Pay By Cash</Text>
          <Text style={styles.tableHeader}>Pay By Pts</Text>
          <Text style={styles.tableHeader}>Default</Text>
        </View>
        <View style={styles.checkBoxRow}>
          <View style={[styles.checkBoxContainer, {left: 100}]}>
            <CheckBox
              value={payOption === 'payByCash'}
              onValueChange={() => setPayOption('payByCash')}
              tintColors={{
                true: Colors.main,
                false: Colors.pearl_lusta,
              }}
            />
            <Text>Pay By Cash</Text>
          </View>
          <View style={styles.checkBoxContainer}>
            <CheckBox
              value={payOption === 'payByPts'}
              onValueChange={() => setPayOption('payByPts')}
              tintColors={{
                true: Colors.main,
                false: Colors.pearl_lusta,
              }}
            />
            <Text>Pay By Pts</Text>
          </View>
        </View>
        {options.map(option => (
          <View key={option.id} style={styles.optionContainer}>
            <CheckBox
              value={selectedOptions.includes(option.id)}
              onValueChange={() => handleOptionChange(option.id)}
              tintColors={{
                true: Colors.main,
                false: Colors.pearl_lusta,
              }}
            />
            <Text style={styles.optionTitle}>{option.title}</Text>
            <Text style={styles.optionText}>{option.days}</Text>
            <Text style={styles.optionText}>{option.cashPrice}</Text>
            <Text style={styles.optionText}>{option.points} Pts</Text>
            {option.image && (
              <Image source={option.image} style={styles.optionImage} />
            )}
          </View>
        ))}
        {selectedOptions.includes(4) && (
          <View style={styles.attentionImagesContainer}>
            {attentionImages.map(img => (
              <TouchableOpacity
                key={img.id}
                style={[
                  styles.attentionImage,
                  selectedAttentionImage === img.id
                    ? {backgroundColor: Colors.main}
                    : {backgroundColor: 'white'},
                ]}
                onPress={() => handleAttentionImageSelect(img.id)}>
                <Text
                  style={[
                    styles.attentionImageText,
                    selectedAttentionImage === img.id
                      ? {color: 'white'}
                      : {color: 'black'},
                  ]}>
                  {img.title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        <View style={{marginTop: wp(16)}}>
          <Button title="But Points Now" />
        </View>
        <View style={{marginTop: wp(4)}}>
          <Button title="Save Draft" />
        </View>
        <View style={{marginTop: wp(4), marginBottom: wp(6)}}>
          <Button title="Done" />
        </View>

        <View
          style={{
            width: wp(90),
            paddingVertical: wp(4),
            backgroundColor: 'white',
            elevation: 2,
            alignSelf: 'center',
            marginTop: wp(5),
            marginBottom: wp(6),
          }}>
          <Text style={authstyles.heading}>Property Listing Summery</Text>
          <View style={[styles.view, {marginTop: wp(6)}]}>
            <Text style={styles.listing}>General Listing</Text>
            <Text style={styles.listing}>KPL 30</Text>
          </View>

          <View style={[styles.view, {marginTop: wp(0)}]}>
            <Text style={styles.listing}>Features Listing</Text>
            <Text style={styles.listing}>KPL 30</Text>
          </View>

          <View style={[styles.view, {marginTop: wp(0)}]}>
            <Text style={styles.listing}>Attention Image</Text>
            <Text style={styles.listing}>KPL 30</Text>
          </View>

          <View
            style={[
              styles.view,
              {marginTop: wp(2), borderTopWidth: 2, borderTopColor: 'black'},
            ]}>
            <Text style={[styles.listing, {fontFamily: fonts.Bold}]}>
              Total
            </Text>
            <Text style={[styles.listing, {fontFamily: fonts.Bold}]}>90</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Add_New_Property_Payment;

const styles = StyleSheet.create({
  paymentOptionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 10,
  },
  tableHeader: {
    fontSize: 14,
    color: 'black',
    fontFamily: fonts.Medium,
  },
  checkBoxRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 10,
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 14,
    color: 'black',
    fontFamily: fonts.Medium,
  },
  optionText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 14,
    color: 'black',
    fontFamily: fonts.Regular,
  },
  optionImage: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },
  attentionImagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  attentionImage: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  attentionImageText: {
    fontSize: 14,
    fontFamily: fonts.Medium,
  },
  view: {
    width: wp(80),
    paddingVertical: wp(4),
    alignSelf: 'center',
    borderTopWidth: 1,
    borderTopColor: 'gray',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  listing: {
    fontSize: 14,
    fontFamily: fonts.Regular,
    color: Colors.black,
  },
});
