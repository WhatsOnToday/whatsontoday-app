import React, { Component } from "react";
import {
    StyleSheet,
} from "react-native";


import CustomScreen from "./CustomScreen";
import EventListView from "./EventListView";


type Props = {};
export default class EventListScreen extends CustomScreen<Props> {

    onClickEventListener : any = null;

    constructor(props) {
        super(props);
        this.onClickEventListener = props.onClickEventListener;
    }

    render() {
        let list = [];
        for (let i=0;i<10;i = i +1) {
            list.push( {
                id: i,
                name: "Event " + i,
                date: (18 + i) + ".08.2021",
                location: {
                    name: "Funpark",
                    street: "Reichenbachstraße 205",
                    city: "Dresden",
                    country: "Deutschland"
                },
                image: "IMAGE"
            });
        }


        return (
            <EventListView events={list}/>
        );


    }


}



const styles = StyleSheet.create({
    container: {

    },

});
