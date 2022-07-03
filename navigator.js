import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "react-native";
import { LoginScreen } from "./screens/login";
import { RegisterScreen } from "./screens/register";
import { SplashScreen } from "./screens/splash";

export function RootNavigator() {
    return <AppNavigator />;
}

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Dashboard" component={SplashScreen} />
        </Stack.Navigator>
    );
};
