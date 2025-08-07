import { Button, StyleSheet, Text, View } from "react-native";

export default function UserScreen({route, navigation}: any) {

    function openDrawer() {
        navigation.toggleDrawer();
    }

    return (
        <View style={styles.rootContainer}>
            <Text>THIS IS THE <Text style={styles.heighlight}>"USER"</Text> SCREEN</Text>
            <Button title="Open Drawer" onPress={openDrawer} />
        </View>
        
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    heighlight:{
        fontWeight: "bold",
        color: "#e91e63",
    }
});


