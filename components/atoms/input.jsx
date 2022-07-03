import { TextInput, View } from "react-native";

export function Input({ placeholder }) {
    return (
        <View>
            <TextInput
                style={{
                    backgroundColor: "white",
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    borderRadius: 30,
                }}
                placeholder={placeholder}
            />
        </View>
    );
}
