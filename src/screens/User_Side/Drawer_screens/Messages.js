import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import React from 'react';
import {authstyles} from '../../Auth/AuthStyles';
import {Colors, fonts} from '../../../constant/Indes';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Messages = () => {
  return (
    <View style={authstyles.container}>
      <View style={[authstyles.header, {marginBottom: wp(4)}]}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            navigation.goBack();
          }}>
          <AntDesign name="arrowleft" size={22} color={Colors.black} />
        </TouchableOpacity>
        <Text style={authstyles.headertext}>Messages</Text>
        <View></View>
      </View>

      <View style={{flex: 1}}>
        <FlatList
          data={[1]}
          inverted
          renderItem={({item}) => {
            return (
              <View>
                <View style={styles.recievemessages}>
                  <Text style={styles.recievetext}>Hi,How Are you</Text>
                </View>
                <Text style={styles.receivetime}>12:10 PM</Text>

                <View style={styles.Sendmessages}>
                  <Text style={styles.Sendtext}>Hi,How Are you</Text>
                </View>
                <Text style={styles.sendtime}>12:10 PM</Text>
              </View>
            );
          }}
        />
      </View>
      <View style={styles.sendbox}>
        <View style={styles.inputbox}>
          <TextInput
            placeholder="Write Messages..."
            placeholderTextColor={Colors.graish}
            style={styles.inputtext}
          />
        </View>
        <TouchableOpacity activeOpacity={0.9} style={styles.searchbox}>
          <Ionicons name="send" color={Colors.main} size={26} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  recievemessages: {
    paddingHorizontal: wp(3),
    paddingVertical: wp(4),
    backgroundColor: Colors.white,
    alignSelf: 'flex-start',
    marginLeft: wp(5),
    elevation: 2,
    marginVertical: wp(2),
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    borderBottomRightRadius: 12,
    maxWidth: wp(80),
  },
  recievetext: {
    fontSize: 14,
    fontFamily: fonts.Regular,
    color: Colors.black,
  },
  receivetime: {
    fontSize: 12,
    fontFamily: fonts.Regular,
    color: Colors.graish,
    marginLeft: wp(5),
  },

  Sendmessages: {
    paddingHorizontal: wp(3),
    paddingVertical: wp(4),
    backgroundColor: Colors.white,
    alignSelf: 'flex-start',
    marginRight: wp(5),
    elevation: 2,
    marginVertical: wp(2),
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    maxWidth: wp(80),
    alignSelf: 'flex-end',
  },
  Sendtext: {
    fontSize: 14,
    fontFamily: fonts.Regular,
    color: Colors.black,
  },
  sendtime: {
    fontSize: 12,
    fontFamily: fonts.Regular,
    color: Colors.graish,
    marginRight: wp(5),
    alignSelf: 'flex-end',
  },
  sendbox: {
    width: wp(90),
    height: wp(16),
    backgroundColor: Colors.white,
    alignSelf: 'center',
    elevation: 2,
    marginVertical: wp(2),
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(2),
  },
  inputbox: {
    width: wp(72),
    height: wp(12),
    backgroundColor: Colors.white,
    alignSelf: 'center',
    elevation: 2,
    marginVertical: wp(2),
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(2),
  },
  inputtext: {
    color: Colors.black,
    fontFamily: fonts.Regular,
    flex: 1,
  },
  searchbox: {
    width: wp(12),
    height: wp(12),
    backgroundColor: Colors.white,
    elevation: 2,
    borderRadius: 1000,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
