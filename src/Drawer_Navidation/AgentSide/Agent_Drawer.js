import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../../screens/User_Side/Drawer_screens/Home';
import {Colors, fonts, images} from '../../constant/Indes';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Profile from '../../screens/User_Side/Drawer_screens/Profile';
import Calculator from '../../screens/User_Side/Drawer_screens/Calculator';
import Agents from '../../screens/User_Side/Drawer_screens/Agents';
import Properties_News from '../../screens/User_Side/Drawer_screens/Properties_News';
import Contact_Us from '../../screens/User_Side/Drawer_screens/Contact_Us';
import Favourite from '../../screens/User_Side/Drawer_screens/Favourite';
import Messages_List from '../../screens/User_Side/Drawer_screens/Messages_List';
import About_us from '../../screens/User_Side/Drawer_screens/About_us';
import Term_and_Conditions from '../../screens/User_Side/Drawer_screens/Term_and_Conditions';
import Privacy_Policy from '../../screens/User_Side/Drawer_screens/Privacy_Policy';
import Agent_Custom_Drawer from './Agent_Custom_Drawer';
import My_Property from '../../screens/Agent_side/Agent_Drawer_screens/My_Property';
import Add_New_Property from '../../screens/Agent_side/Agent_Drawer_screens/Add_New_Property';
import Add_News from '../../screens/Agent_side/Agent_Drawer_screens/Add_News';
import My_Prop_News from '../../screens/Agent_side/Agent_Drawer_screens/My_Prop_News';
import Agent_Favourite_Property from '../../screens/Agent_side/Agent_Drawer_screens/Agent_Favourite_Property';
import Agent_Profile from '../../screens/Agent_side/Agent_Drawer_screens/Agent_Profile';
import Agent_Messages from '../../screens/Agent_side/Agent_Drawer_screens/Agent_Messages';
import Invoices from '../../screens/Agent_side/Agent_Drawer_screens/Invoices';
import Agent_Favourite from '../../screens/Agent_side/Agent_Drawer_screens/Agent_Favourite';
import Affiliate_Member from '../../screens/User_Side/Drawer_screens/Affiliate_Member';
import Create_Listing from '../../screens/User_Side/Drawer_screens/Create_Listing';
import Most_Viewed_Properties from '../../screens/User_Side/Drawer_screens/Most_Viewed_Properties';
import Hot_Listing from '../../screens/User_Side/Drawer_screens/Hot_Listing';
import Agent_Home from '../../screens/Agent_side/Agent_Drawer_screens/Agent_Home';

const Tab = createDrawerNavigator();

const Agent_Drawer = () => {
  return (
    <Tab.Navigator
      drawerContent={props => <Agent_Custom_Drawer {...props} />}
      initialRouteName="Agent_Home"
      screenOptions={{
        drawerActiveBackgroundColor: Colors.main,
        drawerInactiveBackgroundColor: '#FFFAFA',
        drawerActiveTintColor: Colors.white,
        drawerInactiveTintColor: Colors.black,
        drawerItemStyle: {},
        headerShown: false,
        drawerLabelStyle: {
          fontFamily: fonts.Regular,
          fontSize: 14,
        },
      }}>
      <Tab.Screen
        name="Agent_Home"
        component={Agent_Home}
        options={{
          drawerLabel: ({focused}) => (
            <Text
              style={[
                styles.name,
                focused ? styles.focusedText : styles.unfocusedText,
              ]}>
              Home
            </Text>
          ),
          drawerIcon: ({focused}) => (
            <View style={styles.row}>
              <Image
                source={images.mainhome}
                resizeMode="contain"
                style={[
                  styles.icon,
                  focused ? styles.focusedIcon : styles.unfocusedIcon,
                ]}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Agents"
        component={Agents}
        options={{
          drawerLabel: ({focused}) => (
            <Text
              style={[
                styles.name,
                focused ? styles.focusedText : styles.unfocusedText,
              ]}>
              Agents
            </Text>
          ),
          drawerIcon: ({focused}) => (
            <View style={styles.row}>
              <Image
                source={images.agentsicon}
                resizeMode="contain"
                style={[
                  styles.icon,
                  focused ? styles.focusedIcon : styles.unfocusedIcon,
                ]}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Affiliate_Member"
        component={Affiliate_Member}
        options={{
          drawerLabel: ({focused}) => (
            <Text
              style={[
                styles.name,
                focused ? styles.focusedText : styles.unfocusedText,
              ]}>
              Affiliate Member
            </Text>
          ),
          drawerIcon: ({focused}) => (
            <View style={styles.row}>
              <Image
                source={images.affil}
                resizeMode="contain"
                style={[
                  styles.icon,
                  focused ? styles.focusedIcon : styles.unfocusedIcon,
                ]}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Calculator"
        component={Calculator}
        options={{
          drawerLabel: ({focused}) => (
            <Text
              style={[
                styles.name,
                focused ? styles.focusedText : styles.unfocusedText,
              ]}>
              Calculator
            </Text>
          ),
          drawerIcon: ({focused}) => (
            <View style={styles.row}>
              <Image
                source={images.cal}
                resizeMode="contain"
                style={[
                  styles.icon,
                  focused ? styles.focusedIcon : styles.unfocusedIcon,
                ]}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Properties_News"
        component={Properties_News}
        options={{
          drawerLabel: ({focused}) => (
            <Text
              style={[
                styles.name,
                focused ? styles.focusedText : styles.unfocusedText,
              ]}>
              Property News
            </Text>
          ),
          drawerIcon: ({focused}) => (
            <View style={styles.row}>
              <Image
                source={images.latestnews}
                resizeMode="contain"
                style={[
                  styles.icon,
                  focused ? styles.focusedIcon : styles.unfocusedIcon,
                ]}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Create_Listing"
        component={Create_Listing}
        options={{
          drawerLabel: ({focused}) => (
            <Text
              style={[
                styles.name,
                focused ? styles.focusedText : styles.unfocusedText,
              ]}>
              Create Listing
            </Text>
          ),
          drawerIcon: ({focused}) => (
            <View style={styles.row}>
              <Image
                source={images.clisting}
                resizeMode="contain"
                style={[
                  styles.icon,
                  focused ? styles.focusedIcon : styles.unfocusedIcon,
                ]}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Most_Viewed_Properties"
        component={Most_Viewed_Properties}
        options={{
          drawerLabel: ({focused}) => (
            <Text
              style={[
                styles.name,
                focused ? styles.focusedText : styles.unfocusedText,
              ]}>
              Most View Properties
            </Text>
          ),
          drawerIcon: ({focused}) => (
            <View style={styles.row}>
              <Image
                source={images.mvprop}
                resizeMode="contain"
                style={[
                  styles.icon,
                  focused ? styles.focusedIcon : styles.unfocusedIcon,
                ]}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Hot_Listing"
        component={Hot_Listing}
        options={{
          drawerLabel: ({focused}) => (
            <Text
              style={[
                styles.name,
                focused ? styles.focusedText : styles.unfocusedText,
              ]}>
              Hot Listing
            </Text>
          ),
          drawerIcon: ({focused}) => (
            <View style={styles.row}>
              <Image
                source={images.hot2}
                resizeMode="contain"
                style={[
                  styles.icon,
                  focused ? styles.focusedIcon : styles.unfocusedIcon,
                ]}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Agent_Drawer;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 14,
    fontFamily: fonts.Bold,
    marginLeft: wp(0),
  },
  focusedText: {
    color: Colors.white,
  },
  unfocusedText: {
    color: Colors.black,
    fontFamily: fonts.Regular,
  },
  icon: {
    width: wp(6),
    height: wp(6),
  },
  focusedIcon: {
    // tintColor: Colors.white,
  },
  unfocusedIcon: {
    // tintColor: Colors.black,
  },
});
