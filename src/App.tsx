import React, {Component} from "react";
import {StyleSheet, View} from "react-native";

import EventListScreen from "./main/components/EventListScreen";
import ContextInitializer, {CONTEXT, setContext} from "./main/backend/ContextInitializer";
import {DARK} from "./main/components/DefaultStyles";
import {signIn} from "./main/backend/api/LoginRequests";
import {queryEvents} from "./main/backend/api/EventRequests";
import LoginScreen from "./main/components/LoginScreen";


type Props = {};
export default class App extends Component<Props> {

    state = {
        loggedIn : false,
    };

    constructor(props) {
        super(props);

        //this.testThings(ctx);
    }


    public render() {

        return (
            <View style={styles.defaultContainer}>
                <LoginScreen/>
            </View>

        );

    }



    private testThings() {


        signIn("werner@web.de","1234567",true).then(data=> {
            console.log(data);
            return data;
        }).catch(error=> {
            console.log("Error",error);
        });

        /*
        queryEvents(null,null,null,null,new Date(),null,null,null).then(data => {
            console.log(data);
        }).catch(error=> {
            console.log(error);
        });
        */





    }


}
const styles = StyleSheet.create({
    defaultContainer: {
        backgroundColor: DARK,
        height: "100%",
        width: "100%",
    }
});

