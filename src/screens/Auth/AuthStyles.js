import {StyleSheet} from 'react-native';
import {Colors, fonts} from '../../constant/Indes';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const authstyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headertext: {
    fontSize: 18,
    color: Colors.black,
    fontFamily: fonts.Medium,
    marginRight:wp(4)
  },
  header: {
    width: wp(100),
    height: wp(20),
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(5),
    elevation: 2,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  avatar: {
    width: wp(25),
    height: wp(25),
    borderRadius: 100,
  },
  heading: {
    fontSize: 14,
    color: Colors.black,
    fontFamily: fonts.Medium,
    marginLeft: wp(5),
  },
  inputview: {
    width: wp(90),
    height: wp(14),
    backgroundColor: Colors.white,
    elevation: 2,
    marginVertical: wp(2),
    alignSelf: 'center',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(3),
  },
  inputtext: {
    color: Colors.black,
    fontFamily: fonts.Regular,
    flex: 1,
  },
  typerow: {
    width: wp(60),
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: wp(4),
  },
  selectedtext: {
    color: Colors.black,
    fontFamily: fonts.Regular,
    fontSize: 14,
    marginLeft: wp(2),
  },
  account: {color: Colors.black, fontFamily: fonts.Regular, fontSize: 14},
  sign: {
    color: Colors.bahama,
    fontFamily: fonts.Bold,
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  logo: {
    width: wp(35),
    height: wp(35),
    alignSelf: 'center',
    marginVertical: wp(10),
    resizeMode: 'contain',
  },
  welcometext: {
    color: Colors.black,
    fontFamily: fonts.Bold,
    fontSize: 14,
    marginLeft: wp(5),
  },
  fline: {
    color: Colors.black,
    fontFamily: fonts.Regular,
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: wp(10),
  },

  backcircle: {
    width: wp(9),
    height: wp(9),
    backgroundColor: Colors.main,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },

  cell: {
    fontFamily: fonts.Regular,
    textAlignVertical: 'center',
    color: Colors.black,
  },
  focusCell: {
    // fontSize:29
  },
  didntcode: {
    fontFamily: fonts.Regular,
    color: Colors.black,
    fontSize: 12,
  },
  resend: {
    fontFamily: fonts.SemiBold,
    color: Colors.main,
    fontSize: 12,
  },
  codeFieldRoot: {
    // backgroundColor: 'red',
    width: wp(90),
    alignSelf: 'center',
  },
  counter_txt: {
    fontFamily: fonts.Regular,
    color: Colors.black,
    fontSize: 12,
    marginLeft: wp(1),
  },
});

export {authstyles};
