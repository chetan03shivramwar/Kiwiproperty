import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Term_and_Conditions from '../screens/User_Side/Footer_screen/Term_and_Conditions';
import About_Us from '../screens/User_Side/Footer_screen/About_Us';
import Contact_Us from '../screens/User_Side/Drawer_screens/Contact_Us';
import {Colors, fonts, images} from '../constant/Indes';
const Tab = createBottomTabNavigator();
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import User_Drawer from '../Drawer_Navidation/UserSide/User_Drawer';
import Privacy_Policy from '../screens/User_Side/Drawer_screens/Privacy_Policy';
import Personal_Data_Protection from '../screens/User_Side/Footer_screen/Personal_Data_Protection';
import Share_With_Friends from '../screens/User_Side/Footer_screen/Share_With_Friends';
import About_Us_U from '../screens/User_Side/Footer_screen/About_Us_U';
import ContactUs_U from '../screens/User_Side/Footer_screen/ContactUs_U';
import Privacy_Policy_U from '../screens/User_Side/Footer_screen/Privacy_Policy_U';
import Career_U from '../screens/User_Side/Footer_screen/Career_U';
import Term_and_Condition_U from '../screens/User_Side/Footer_screen/Term_and_Condation_U';
import More_Tabs from '../screens/Agent_side/More_Tabs';
import More_Tabs_U from '../screens/User_Side/Footer_screen/More_Tabs_U';
import Hot_Listing from '../screens/User_Side/Drawer_screens/Hot_Listing';
import Agents from '../screens/User_Side/Drawer_screens/Agents';
import Advertise_U from '../screens/User_Side/Footer_screen/Advertise_U';
import My_Affiliate from '../screens/Agent_side/Agent_Drawer_screens/My_Affiliate';
import Affiliate_Member from '../screens/User_Side/Drawer_screens/Affiliate_Member';
import Add_New_News_Payment from '../screens/Agent_side/Add_New_News_Payment';

const User_Bottom = () => {
  function CustomBottomTabBar({state, descriptors, navigation}) {
    const getItemLayout = (data, index) => ({
      length: 80,
      offset: 80 * index,
      index,
    });
    return (
      <View style={styles.tabBarContainer}>
        <FlatList
          initialScrollIndex={state?.index - 1}
          horizontal
          data={state.routes}
          keyExtractor={item => item.key}
          showsHorizontalScrollIndicator={false}
          getItemLayout={getItemLayout}
          renderItem={({item, index}) => {
            const focused = state.index === index;

            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(item.name);
                }}
                style={styles.tabItem}>
                {tabIcons(item.name, focused)}
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
  const renderTabIcon = (name, icon, label, focused) => {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: wp(3.5),
        }}>
        <View style={{alignItems: 'center'}}>
          <View style={focused ? styles.activebox : styles.inactivebox}>
            <Image
              source={icon}
              style={focused ? styles.activeicon : styles.icon}
              resizeMode="contain"
            />
          </View>
          <Text
            style={[
              focused ? styles.active_Text : styles.inactive_Text,
              {width: wp(20), textAlign: 'center'},
            ]}
            numberOfLines={1}>
            {label}
          </Text>
        </View>
      </View>
    );
  };

  const tabIcons = (name, focused) => {
    switch (name) {
      case 'About_Us_U':
        return renderTabIcon(name, images.info, 'About Us', focused);
      case 'ContactUs_U':
        return renderTabIcon(name, images.contactmail, 'Contact Us', focused);
      case 'Privacy_Policy_U':
        return renderTabIcon(name, images.file, 'Privacy Policy', focused);
      case 'Career_U':
        return renderTabIcon(name, images.search, 'Career', focused);
      case 'Share_With_Friends':
        return renderTabIcon(name, images.share, 'Invite Friends', focused);
      case 'Hot_Listing':
        return renderTabIcon(name, images.srch, 'Hot Listing', focused);
      case 'Term_and_Condition_U':
        return renderTabIcon(name, images.term, 'Term and Conditions', focused);
      case 'Agentss2':
        return renderTabIcon(name, images.user1, 'Contact Our Agent', focused);
      case 'Add_New_News_Payment':
        return renderTabIcon(
          name,
          images.news,
          'Subscribe News Letter',
          focused,
        );
      case 'Advertise_U':
        return renderTabIcon(
          name,
          images.addimage,
          'Advertise With Us',
          focused,
        );
      case 'Personal_Data_Protection':
        return renderTabIcon(
          name,
          images.lock,
          'Personal Data Protection',
          focused,
        );
      case 'Affiliate_Member':
        return renderTabIcon(name, images.user, 'Affiliate Members', focused);
      default:
        return null;
    }
  };

  return (
    <Tab.Navigator
      tabBar={props => <CustomBottomTabBar {...props} />}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarLabel: '',
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          width: wp(100),
          height: wp(20),
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FEFAF6',
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          marginLeft: 20,
        },
      })}>
      <Tab.Screen name="User_Drawer" component={User_Drawer} />
      <Tab.Screen name="About_Us_U" component={About_Us_U} />
      <Tab.Screen name="Agentss2" component={Agents} />
      <Tab.Screen name="Share_With_Friends" component={Share_With_Friends} />
      <Tab.Screen name="Advertise_U" component={Advertise_U} />
      <Tab.Screen name="Hot_Listing" component={Hot_Listing} />
      <Tab.Screen name="Affiliate_Member" component={Affiliate_Member} />
      <Tab.Screen name="ContactUs_U" component={ContactUs_U} />
      <Tab.Screen
        name="Add_New_News_Payment"
        component={Add_New_News_Payment}
      />
      <Tab.Screen name="Career_U" component={Career_U} />
      <Tab.Screen name="Privacy_Policy_U" component={Privacy_Policy_U} />
      <Tab.Screen
        name="Term_and_Condition_U"
        component={Term_and_Condition_U}
      />
      <Tab.Screen
        name="Personal_Data_Protection"
        component={Personal_Data_Protection}
      />
    </Tab.Navigator>
  );
};

export default User_Bottom;

const styles = StyleSheet.create({
  icon: {
    width: wp(6),
    height: wp(6),
  },
  active_Text: {
    fontSize: 10,
    fontFamily: fonts.Medium,
    color: Colors.main,
    textAlign: 'center',
    marginTop: 4,
    width: 10,
  },
  inactive_Text: {
    fontSize: 10,
    fontFamily: fonts.Medium,
    color: Colors.black,
    textAlign: 'center',
    marginTop: 4,
  },
  activeicon: {
    width: wp(6),
    height: wp(6),
    tintColor: Colors.main,
  },
  tabBarContainer: {
    height: wp(20), // Set the height of the tab bar
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FEFAF6',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  tabItem: {
    height: '100%', // Make sure each tab item takes the full height
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: wp(2), // Add some space between items
  },
});
