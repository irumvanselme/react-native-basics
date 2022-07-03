import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View, StatusBar } from "react-native";
import { RootNavigator } from "./navigator";

export default function App() {
    return (
        <NavigationContainer>
            <View style={styles.container}>
                <RootNavigator />
                <StatusBar style="auto" />
            </View>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
});
