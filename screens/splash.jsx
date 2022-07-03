import { Text, View } from "react-native";
import { Button } from "../components/atoms/button";
import { Screen } from "../layouts/screen";

export function SplashScreen({ navigation }) {
    return (
        <Screen>
            <View>
                <Text>Splash Screen</Text>
                <Button
                    title={"Get started"}
                    onPress={() => {
                        navigation.navigate("Register");
                    }}
                />
            </View>
        </Screen>
    );
}
