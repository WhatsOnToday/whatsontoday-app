import {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import {DefaultStyles, MAINGREY} from "./DefaultStyles";

type Props = {text};
export default class Category extends Component<Props> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text style={DefaultStyles.category}>{this.props.text}</Text>
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