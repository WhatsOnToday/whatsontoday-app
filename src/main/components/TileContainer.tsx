import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import {DefaultStyles, MAINGREY} from "./DefaultStyles";
type TileProps = {children};

export default class TileContainer extends React.Component<TileProps> {

    state = {
        children: []
    };

    constructor(props) {
        super(props);
        this.state.children = props.children;
    }

    render() {
        return (
            <View style={styles.tile}>
                {this.state.children}
            </View>
        );
    }


}


const styles = StyleSheet.create({
    tile: {
        /*
        borderBottomWidth: 1.2,
        borderTopWidth: 0.2,
        borderRightWidth: 1,
        borderLeftWidth: 0.2,
        borderBottomColor: "#FFFFFF",
        borderRightColor: "#FFFFFF",
        borderTopColor: "#FFFFFF",
        borderLeftColor: "#FFFFFF",
        */
        marginTop: 4,
        marginBottom: 4,
        padding: 5,
        backgroundColor: MAINGREY,
    }

});
