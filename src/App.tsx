import EventListScreen from "./main/components/EventListScreen";
import ContextInitializer, {CONTEXT, setContext} from "./main/backend/ContextInitializer";
import {DARK} from "./main/components/DefaultStyles";
import {signIn} from "./main/backend/api/LoginRequests";
import {queryEvents} from "./main/backend/api/EventRequests";
import LoginView from "./main/components/LoginView";
import WelcomeScreen from "./main/components/WelcomeScreen";
import EventListView from "./main/components/EventListView";
import React,{Component} from "react";
import {StyleSheet, View} from "react-native";


type Props = {};
export default class App extends Component<Props> {

    constructor(props) {
        super(props);

        //this.testThings(ctx);
    }


    public render() {

        return (
            <View style={styles.defaultContainer}>
                {this.getInitialScreen()}
            </View>

        );

    }

    private getInitialScreen() {

        if (CONTEXT) {
            //TODO: Return event list
        }

        return (
            <View style={styles.defaultContainer}>
                <WelcomeScreen onFinishedStartupRoutine={() => this.onFinishedStartupRoutine()}/>
            </View>
        );
    }

    private onFinishedStartupRoutine() {
        //navigate to event list
    }


    private testThings() {


        signIn("werner@web.de", "1234567", true).then(data => {
            console.log(data);
            return data;
        }).catch(error => {
            console.log("Error", error);
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

