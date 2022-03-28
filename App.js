import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Profile from "./screens/Profile";
const Stack = createStackNavigator();
const horizontalAnimation = {
gestureDirection: "horizontal",
cardStyleInterpolator: ({ current, layouts }) => {
return {
cardStyle: {
transform: [
{
translateX: current.progress.interpolate({
inputRange: [0, 1],
outputRange: [layouts.screen.width, 0],
}),
},
],
},
};
},
};
const App = () => {
return (
<NavigationContainer>
<Stack.Navigator screenOptions={horizontalAnimation}>
<Stack.Screen
name="Home"
component={Home}
options={{
headerShown: true,
title: "หน้าแรก",
headerStyle: {
backgroundColor: "#FF4500",
},
}}
/>
<Stack.Screen
name="Profile"
component={Profile}
options={{
headerShown: true,
title: "โปรไฟล์",
headerStyle: {
backgroundColor: "#FF4500",
},
}}
/>
<Stack.Screen
name="Register"
component={Register}
options={{
headerShown: true,
title: "สมัครสมาชิก",
headerStyle: {
backgroundColor: "#FF4500",
},
}}
/>
<Stack.Screen
name="Login"
component={Login}
options={{
headerShown: true,
title: "เข้าสู่ระบบ",
headerStyle: {
backgroundColor: "#FF4500",
},
}}
/>
</Stack.Navigator>
</NavigationContainer>
);
};
export default App;