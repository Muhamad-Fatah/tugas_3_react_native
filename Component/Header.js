import React from "react";
import { StyleSheet, Text, View } from "react-native"

const Header = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tugas 3 React Native</Text>
            <Text style={styles.header}>{props.data}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        height : 100
    },
    title: {
        backgroundColor: "#541690",
        color: "#B2A8B8",
        textAlign: "center",
        flex : 1,
        paddingTop: 15
    },
    header: {
        backgroundColor: "#541690",
        fontSize: 30,
        color: "#B2A8B8",
        textAlign: "center",
        flex : 2,
        paddingBottom: 15
    }
});


export default Header;