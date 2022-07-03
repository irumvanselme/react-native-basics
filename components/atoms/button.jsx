import { TouchableOpacity, View } from "react-native";
import { Text } from "./text";

export function Button({ title, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View
                style={{
                    backgroundColor: "#96D0F0",
                    width: "100%",
                    height: 50,
                    justifyContent: "center",
                }}
            >
                <Text bold size={20} align="center">
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    );
}
