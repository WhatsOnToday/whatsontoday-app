import React from "react";

import {Image, Text, TouchableOpacity, StyleSheet, View} from "react-native";
import TileContainer from "./TileContainer";
import {LIGHTFONT} from "./DefaultStyles";

type Props = {event : Event,onPress};
export default class EventItemView extends React.Component<Props> {

    onClickListener = null;
    state = {
        event: null
    };

    constructor(props) {
        super(props);
        this.state = {
            event: props.event
        };
        this.onClickListener = props.onPress;
        //auto
    }


    render() {
        if (!this.state || !this.state.event) {
            return null;
        }

        return (
            <TileContainer>
                <TouchableOpacity onPress={this.onClickEvent}>
                    <View style={styles.container}>

                        <View style={styles.imageContainer}>
                            <Image resizeMode="contain" source={require("../../resources/images/event_placeholder.png")}
                                   style={styles.image}/>
                        </View>

                        <View style={styles.textArea}>
                            <Text style={styles.name}>{this.state.event.name}</Text>
                            <View style={styles.details}>
                                <Text style={styles.detailsText}>{this.state.event.date}</Text>
                                <Text style={styles.detailsText}>{this.state.event.location.name}</Text>
                            </View>
                        </View>
                        <View style={styles.eventState}>

                        </View>

                    </View>

                </TouchableOpacity>
            </TileContainer>

        );
    }

    onClickEvent() {
        if (this.state) {
            this.onClickListener(this.state.event);
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        height: 80,
    },
    imageContainer: {
        marginLeft: 0,
        marginRight: 0,
    },
    image: {
        width: 80,
    },
    eventState: {
        width: 60,
    },
    textArea: {
        flexDirection: "column",
        marginLeft: 5,
        marginRight: 5,
    },
    name: {
        fontSize: 20,
        color: LIGHTFONT,
    },
    details: {
        flexDirection: "row",
        paddingVertical: 10,
    },
    detailsText: {
        color: LIGHTFONT,
    }
});
