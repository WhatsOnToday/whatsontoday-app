import {Component, default as React, ReactNode} from "react";
import {Text, View, StyleSheet} from "react-native";
import NavigationBarItem from "../backend/NavigationBarItem";

type Props = {children}
export default class NavigationBar extends Component<Props> {

    children : NavigationBarItem[];

    constructor(props) {
        super(props);
        this.children = props.children;
    }

    render() {
        return (
            <View style={styles.container}>
                {this.props.children}
            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: {

    }
});


class NavigationBarHeader extends Component<{}>{
    
}