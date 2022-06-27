import React, { Component } from "react";
import { Alert, Text, TouchableOpacity, View, StyleSheet } from "react-native";

class Barang extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jumlah: 0
        }
    }

    handleTambah = () => {
        this.setState({ jumlah: this.state.jumlah + 1 })
    }

    handleKurang = () => {
        if (this.state.jumlah > 0) {
            this.setState({ jumlah: this.state.jumlah - 1 })
        } else {
            Alert.alert("Jumlah tidak boleh kurang dari 0")
        }
    }

    render() {
        return (
            <View>
                <Text style={styles.jumlah}>Jumlah : {this.state.jumlah}</Text>
                <Text style={styles.info}>Silahkan Tekan Tombol Di Bawah</Text>
                <View style={styles.buttonWrapper}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.handleTambah}
                    >
                        <Text style={styles.textButton}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button2}
                        onPress={this.handleKurang}
                    >
                        <Text style={styles.textButton}>-</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.jumlahUtama}>{this.state.jumlah}</Text>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    info: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        textAlign: "center",
        margin: 20
    },
    jumlah: {
        textAlign: "right",
        marginRight : 20 
    },
    jumlahUtama : {
        fontSize : 50,
        color : "#6A67CE",
        alignSelf : "center",
        marginTop : 30
    },

    buttonWrapper: {
        flexDirection: "row",
        height: 50,
        justifyContent: "space-around",
        marginTop : 10,
    },
    button: {
        backgroundColor: "#53BF9D",
        width: "35%",
    },
    button2: {
        backgroundColor: "#F94C66",
        width: "35%",
    },
    textButton: {
        color: "#FFF",
        fontSize: 35,
        textAlign: "center"
    }
});


export default Barang;