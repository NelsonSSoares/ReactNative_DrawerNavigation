import { View, Text, StyleSheet } from "react-native";


export default function WelcomeScreen() {
    return (
        <View style={styles.rootContainer}>
            <Text>THIS IS THE <Text style={styles.highlight}>"WELCOME"</Text> SCREEN</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    highlight: {
        fontWeight: "bold",
        color: "#e91e63",
    }
});