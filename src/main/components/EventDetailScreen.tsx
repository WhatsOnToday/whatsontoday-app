import {Component, default as React} from "react";
import {Image, View, StyleSheet, Text} from "react-native";
import Event from "../backend/model/Event";
import * as DefaultStyles from "./DefaultStyles";

type Props = { event };
export default class EventDetails extends Component<Props> {

    state = {
        event: null,
    };

    constructor(props) {
        super(props);
        this.state.event = props.event;

        //Refresh event in interval of 10 seconds
    }

    render() {


        let children = [];
        //Add optionals to children

        let categories = [];
        this.state.event.categories.forEach( (category) => {
            categories.push(DefaultStyles.getCategory(category))
            }
        );

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    {/*<Image source={}></Image>*/}
                </View>
                <View style={styles.importantArea}>
                    {/*Date*/}
                    {/*Time*/}
                    {/*Location (Adress,Name)*/}
                </View>

                {/*OPTIONAL: Packages like contests*/}
                {/*OPTIONAL: Promo codes*/}

                <View style={styles.categories}>
                    {categories}
                </View>

            </View>


        )
    }
}

const styles = StyleSheet.create({
    container: {},
    header: {},
    importantArea: {},
    categories: {},

});