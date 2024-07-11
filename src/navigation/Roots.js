import {StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Register from '../screens/Auth/Register';
import Login from '../screens/Auth/Login';
import Forgot_Password from '../screens/Auth/Forgot_Password';
import Verify from '../screens/Auth/Verify';
import Update from '../screens/Auth/Update';
import Verify_Agent from '../screens/Auth/Verify_Agent';
import User_Drawer from '../Drawer_Navidation/UserSide/User_Drawer';
import All_Properties_Filtered from '../screens/User_Side/Home_screens/All_Properties_Filtered';
import Property_Detail from '../screens/User_Side/Home_screens/Property_Detail';
import Agents_Property_List from '../screens/User_Side/Agents_Property_List';
import Property_news_Detail from '../screens/User_Side/Property_news_Detail';
import User_Edit_Profile from '../screens/User_Side/User_Edit_Profile';
import Change_Password from '../screens/User_Side/Change_Password';
import All_Propperties from '../screens/User_Side/Home_screens/All_Propperties';
import Messages from '../screens/User_Side/Drawer_screens/Messages';
import Agents_Detail from '../screens/User_Side/Agents_Detail';
import Agent_Drawer from '../Drawer_Navidation/AgentSide/Agent_Drawer';
import My_Properties_Filtered from '../screens/Agent_side/My_Properties_Filtered';
import Agent_Property_Details from '../screens/Agent_side/Agent_Property_Details';
import Add_New_Property_Payment from '../screens/Agent_side/Add_New_Property_Payment';
import Add_New_News_Payment from '../screens/Agent_side/Add_New_News_Payment';
import Agent_Property_News_Detail from '../screens/Agent_side/Agent_Property_News_Detail';
import Agent_Edit_Profile from '../screens/Agent_side/Agent_Edit_Profile';
import Agent_Change_Password from '../screens/Agent_side/Agent_Change_Password';
import Agent_Messages_Detail from '../screens/Agent_side/Agent_Messages_Detail';
import Edit_Property from '../screens/Agent_side/Edit_Property';
import Sub_Property from '../screens/Agent_side/Sub_Property';
import Floor_Plan from '../screens/Agent_side/Floor_Plan';
import About_Detail from '../screens/User_Side/About_Detail';
import Add_New_Property1 from '../screens/Agent_side/Agent_Drawer_screens/Add_New_Property1';
import Add_New_Property2 from '../screens/Agent_side/Agent_Drawer_screens/Add_New_Property2';
import Add_New_Property3 from '../screens/Agent_side/Agent_Drawer_screens/Add_New_Property3';
import Add_News1 from '../screens/Agent_side/Agent_Drawer_screens/Add_News1';
import Add_News2 from '../screens/Agent_side/Agent_Drawer_screens/Add_News2';
import Add_New3 from '../screens/Agent_side/Agent_Drawer_screens/Add_New3';
import Edit_Property1 from '../screens/Agent_side/Edit_Property1';
import Edit_Property2 from '../screens/Agent_side/Edit_Property2';
import Edit_Property3 from '../screens/Agent_side/Edit_Property3';
import Edit_Property_Payment from '../screens/Agent_side/Edit_Property_Payment';
import Invoices_detail from '../screens/Agent_side/Invoices_detail';
import User_Bottom from '../Bottom_Navigation/User_Bottom';
import Agent_Profile from '../screens/Agent_side/Agent_Drawer_screens/Agent_Profile';
import My_Property from '../screens/Agent_side/Agent_Drawer_screens/My_Property';
import My_Prop_News from '../screens/Agent_side/Agent_Drawer_screens/My_Prop_News';
import Add_New_Property from '../screens/Agent_side/Agent_Drawer_screens/Add_New_Property';
import Add_News from '../screens/Agent_side/Agent_Drawer_screens/Add_News';
import Agent_Favourite from '../screens/Agent_side/Agent_Drawer_screens/Agent_Favourite';
import Agent_Bottom from '../Bottom_Navigation/Agent_Bottom';
import My_Affiliate from '../screens/Agent_side/Agent_Drawer_screens/My_Affiliate';
import Saved_Searches from '../screens/Agent_side/Agent_Drawer_screens/Saved_Searches';
import Invoices from '../screens/Agent_side/Agent_Drawer_screens/Invoices';
import MessagesAgent from '../screens/Agent_side/Agent_Drawer_screens/MessagesAgent';
import AppartmentAgent from '../screens/Agent_side/AppartmentAgent';
import AgentBungalow from '../screens/Agent_side/Agent_Drawer_screens/AgentBungalow';
import AgentLinkBungalow from '../screens/Agent_side/AgentLinkBungalow';
import AgtCommercial from '../screens/Agent_side/AgtCommercial';
import AgentOffice from '../screens/Agent_side/AgentOffice';
import AgentRetailOffice from '../screens/Agent_side/AgentRetailOffice';
import AgentRetailSpace from '../screens/Agent_side/AgentRetailSpace';
import AgentShop from '../screens/Agent_side/AgentShop';
import AgentShopHouse from '../screens/Agent_side/AgentShopHouse';
import AgentShopOffice from '../screens/Agent_side/AgentShopOffice';
import AgentShowRoom from '../screens/Agent_side/AgentShowRoom';
import AgentSoho from '../screens/Agent_side/AgentSoho';
import AgentAppartment2 from '../screens/Agent_side/AgentAppartment2';
import AgentCodominium from '../screens/Agent_side/AgentCodominium';
import AgentDuplex from '../screens/Agent_side/AgentDuplex';
import AgentPentHouse from '../screens/Agent_side/AgentPentHouse';
import UserAppartment from '../screens/User_Side/Drawer_screens/UserAppartment';
import UserBungalow from '../screens/User_Side/Drawer_screens/UserBungalow';
import UserLinkBungalow from '../screens/User_Side/Drawer_screens/UserLinkBungalow';
import UserCommercialLand from '../screens/User_Side/Drawer_screens/UserCommercialLand';
import UserOffice from '../screens/User_Side/Drawer_screens/UserOffice';
import UserRetailOffice from '../screens/User_Side/Drawer_screens/UserRetailOffice';
import UserAppartment2 from '../screens/User_Side/Drawer_screens/UserAppartment2';
import UserCondominium from '../screens/User_Side/Drawer_screens/UserCondominium';
import UserDuplex from '../screens/User_Side/Drawer_screens/UserDuplex';
import UserPenthHouse from '../screens/User_Side/Drawer_screens/UserPenthHouse';
import Share from '../screens/User_Side/Footer_screen/Share';
import Personal_Data_Protection from '../screens/User_Side/Footer_screen/Personal_Data_Protection';
import Agentss2 from '../screens/User_Side/Footer_screen/Agentss2';
import View_More from '../screens/User_Side/Drawer_screens/View_More';
import Agents_A from '../screens/User_Side/Footer_screen/Agents_A';
import Advertise_U from '../screens/User_Side/Footer_screen/Advertise_U';
const Tab = createNativeStackNavigator();
const Roots = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen component={User_Bottom} name="User_Bottom" />

        <Tab.Screen component={Register} name="Register" />
        <Tab.Screen component={Forgot_Password} name="Forgot_Password" />
        <Tab.Screen component={Verify} name="Verify" />
        <Tab.Screen component={Update} name="Update" />
        <Tab.Screen component={Verify_Agent} name="Verify_Agent" />
        <Tab.Screen component={User_Edit_Profile} name="User_Edit_Profile" />
        <Tab.Screen
          component={All_Properties_Filtered}
          name="All_Properties_Filtered"
        />
        <Tab.Screen component={Property_Detail} name="Property_Detail" />
        <Tab.Screen
          component={Agents_Property_List}
          name="Agents_Property_List"
        />

        <Tab.Screen
          component={Property_news_Detail}
          name="Property_news_Detail"
        />
        <Tab.Screen component={Change_Password} name="Change_Password" />
        <Tab.Screen component={All_Propperties} name="All_Propperties" />
        <Tab.Screen component={Messages} name="Messages" />
        <Tab.Screen component={Agents_Detail} name="Agents_Detail" />
        <Tab.Screen component={About_Detail} name="About_Detail" />

        <Tab.Screen component={UserAppartment} name="UserAppartment" />
        <Tab.Screen component={UserBungalow} name="UserBungalow" />
        <Tab.Screen component={UserLinkBungalow} name="UserLinkBungalow" />
        <Tab.Screen component={UserCommercialLand} name="UserCommercialLand" />
        <Tab.Screen component={UserOffice} name="UserOffice" />
        <Tab.Screen component={UserRetailOffice} name="UserRetailOffice" />
        <Tab.Screen component={UserAppartment2} name="UserAppartment2" />
        <Tab.Screen component={UserCondominium} name="UserCondominium" />
        <Tab.Screen component={UserDuplex} name="UserDuplex" />
        <Tab.Screen component={UserPenthHouse} name="UserPenthHouse" />

        {/* ============================ agent side============================== */}
        <Tab.Screen component={Agent_Drawer} name="Agent_Drawer" />
        
        <Tab.Screen
          component={My_Properties_Filtered}
          name="My_Properties_Filtered"
        />
        <Tab.Screen
          component={Agent_Property_Details}
          name="Agent_Property_Details"
        />
        <Tab.Screen
          component={Add_New_Property_Payment}
          name="Add_New_Property_Payment"
        />
        <Tab.Screen
          component={Add_New_News_Payment}
          name="Add_New_News_Payment"
        />
        <Tab.Screen
          component={Agent_Property_News_Detail}
          name="Agent_Property_News_Detail"
        />
        <Tab.Screen component={Agent_Edit_Profile} name="Agent_Edit_Profile" />
        <Tab.Screen
          component={Agent_Change_Password}
          name="Agent_Change_Password"
        />
        <Tab.Screen
          component={Agent_Messages_Detail}
          name="Agent_Messages_Detail"
        />
        <Tab.Screen component={Edit_Property} name="Edit_Property" />
        <Tab.Screen component={Sub_Property} name="Sub_Property" />
        <Tab.Screen component={Floor_Plan} name="Floor_Plan" />
        <Tab.Screen component={Add_New_Property1} name="Add_New_Property1" />
        <Tab.Screen component={Add_New_Property2} name="Add_New_Property2" />
        <Tab.Screen component={Add_New_Property3} name="Add_New_Property3" />
        <Tab.Screen component={Add_News1} name="Add_News1" />
        <Tab.Screen component={Add_News2} name="Add_News2" />
        <Tab.Screen component={Add_New3} name="Add_New3" />
        <Tab.Screen component={Edit_Property1} name="Edit_Property1" />
        <Tab.Screen component={Edit_Property2} name="Edit_Property2" />
        <Tab.Screen component={Edit_Property3} name="Edit_Property3" />
        
        <Tab.Screen
          component={Edit_Property_Payment}
          name="Edit_Property_Payment"
        />
        <Tab.Screen component={AppartmentAgent} name="AppartmentAgent" />
        <Tab.Screen component={AgentBungalow} name="AgentBungalow" />
        <Tab.Screen component={AgentLinkBungalow} name="AgentLinkBungalow" />
        <Tab.Screen component={AgtCommercial} name="AgtCommercial" />
        <Tab.Screen component={AgentOffice} name="AgentOffice" />
        <Tab.Screen component={AgentRetailOffice} name="AgentRetailOffice" />
        <Tab.Screen component={AgentRetailSpace} name="AgentRetailSpace" />
        <Tab.Screen component={AgentShop} name="AgentShop" />
        <Tab.Screen component={AgentShopHouse} name="AgentShopHouse" />
        <Tab.Screen component={AgentShopOffice} name="AgentShopOffice" />
        <Tab.Screen component={AgentShowRoom} name="AgentShowRoom" />
        <Tab.Screen component={AgentSoho} name="AgentSoho" />
        <Tab.Screen component={AgentAppartment2} name="AgentAppartment2" />
        <Tab.Screen component={AgentCodominium} name="AgentCodominium" />
        <Tab.Screen component={AgentDuplex} name="AgentDuplex" />
        <Tab.Screen component={AgentPentHouse} name="AgentPentHouse" />

        <Tab.Screen component={Share} name="Share" />
        <Tab.Screen component={Personal_Data_Protection} name="Personal_Data_Protection" />

        <Tab.Screen component={Agentss2} name="Agentss2" />

        <Tab.Screen component={View_More} name="View_More" />

        <Tab.Screen component={Agents_A} name="Agents_A" />
        <Tab.Screen component={Advertise_U} name="Advertise_U" />





        <Tab.Screen component={Invoices_detail} name="Invoices_detail" />
        <Tab.Screen component={Agent_Profile} name="Agent_Profile" />
        <Tab.Screen component={My_Property} name="My_Property" />
        <Tab.Screen component={My_Prop_News} name="My_Prop_News" />
        <Tab.Screen component={Add_New_Property} name="Add_New_Property" />
        <Tab.Screen component={Add_News} name="Add_News" />
        <Tab.Screen component={My_Affiliate} name="My_Affiliate" />
        <Tab.Screen component={Saved_Searches} name="Saved_Searches" />
        <Tab.Screen component={Invoices} name="Invoices" />
        <Tab.Screen component={MessagesAgent} name="MessagesAgent" />


        <Tab.Screen component={Agent_Favourite} name="Agent_Favourite" />
        <Tab.Screen component={Agent_Bottom} name="Agent_Bottom" />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Roots;

const styles = StyleSheet.create({});
