import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import EventItemView from "./EventItemView";
import {DARK} from "./DefaultStyles";


type Props = {events};
export default class EventListView extends React.Component<Props> {

    state = {
        eventlist: null
    };

    constructor(props) {
        super(props);
        this.state = {
            eventlist: props.events,
        };

    }

    render() {
        if (!this.state || !this.state.eventlist) {
            return null;
        }

        let lines = [];
        this.state.eventlist.forEach((item) => {
            lines.push(<EventItemView event={item} onPress={this.onClickEvent()} key={item.id}/>);
        });

        return (
            <View style={styles.container}>
                <ScrollView>
                    {lines}
                </ScrollView>
            </View>

        );
    }

    onClickEvent() {

    }

    pushEvent(event) {
        this.state.eventlist.push(event);
        this.setState({
            eventlist: this.state.eventlist,
        });
    }

}

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 0,
    }
});
