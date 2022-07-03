import { View, Text as Typo } from "react-native";

export function Text({
    children,
    bold = false,
    size = 16,
    color = "black",
    align = "left",
}) {
    return (
        <View>
            <Typo
                style={{
                    fontWeight: bold ? "bold" : "normal",
                    fontSize: size,
                    color,
                    textAlign: align,
                }}
            >
                {children}
            </Typo>
        </View>
    );
}
