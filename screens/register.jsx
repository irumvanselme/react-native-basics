import { useEffect } from "react";
import { Text, View } from "react-native";
import { Screen } from "../layouts/screen";
import { get } from "../utils/http";

export function RegisterScreen() {
    useEffect(() => {
        (async function () {
            let data = await get("https://jsonplaceholder.typicode.com/posts");
            console.log(data);
        })();
    }, []);

    return (
        <Screen>
            <View>
                <Text>Register Screen</Text>
            </View>
        </Screen>
    );
}
