import { ImageBackground } from "react-native";

export function Screen({ children }) {
    return (
        <ImageBackground
            style={{
                flex: 1,
            }}
            source={require("../assets/bg_app.png")}
        >
            {children}
        </ImageBackground>
    );
}
