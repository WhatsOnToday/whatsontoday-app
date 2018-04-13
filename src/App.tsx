import React, {Component} from "react";
import {StyleSheet, View} from "react-native";

import EventListScreen from "./main/components/EventListScreen";
import ContextInitializer, {setContext} from "./main/backend/ContextInitializer";
import {DARK} from "./main/components/DefaultStyles";
import {signIn} from "./main/backend/api/LoginRequests";
import {queryEvents} from "./main/backend/api/EventRequests";
import LoginScreen from "./main/components/LoginScreen";
import Context from "./main/backend/Context";

type Props = {};
export default class App extends Component<Props> {


    public render() {
        let ctx = ContextInitializer.initialize();
        setContext(ctx);
        //this.testThings(ctx);

        return (
            <View style={styles.defaultContainer}>
                {this.getInitialScreen(ctx)}
            </View>

        );


    }

    private getInitialScreen(ctx : Context) {
        if (ctx.userLoggedIn) {
            return (<EventListScreen/>);
        }
        else {
            return (<LoginScreen/>);
        }
    }


    private testThings(ctx:Context) {


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
    }
});

