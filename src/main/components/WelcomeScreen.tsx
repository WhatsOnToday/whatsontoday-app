import React, {Component} from "react";
import {View, StyleSheet, Image, Animated} from "react-native";
import ContextInitializer, {CONTEXT, setContext} from "../backend/ContextInitializer";
import LoginView from "./LoginView";

type Props = { onFinishedStartupRoutine };
export default class WelcomeScreen extends Component<Props> {

    state = {
        showLoginView: false,
        logoContainerAnim: new Animated.Value(400),
        loginOpacityAnim: new Animated.Value(0)
    };

    constructor(props) {
        super(props);
    }

    onStart() {
        if (!CONTEXT) {
            ContextInitializer.initialize().then(ctx => {
                setContext(ctx);
                this.onContextInitialized();
            });
        }
    }

    render() {
        this.onStart();
        return (
            <View style={styles.container}>
                <Animated.View  style={[styles.logoContainer, {height: this.state.logoContainerAnim}]}>
                    <Image source={require("../../resources/images/wo_logo.png")}
                           style={styles.logo}
                    />
                </Animated.View>
                <LoginView opacity={this.state.loginOpacityAnim}/>

            </View>
        );
    }



    onContextInitialized() {

        this.requestPermissions();

        //TODO: change to -> if user did not checked box "continue without account" and could not loginFromToken
        let showLogin = true;

        if (showLogin) {
            this.switchToLogin();
        }
        else {
            this.props.onFinishedStartupRoutine();
        }
    }

    requestPermissions() {
        //TODO: Implement!
    }


    switchToLogin() {
        Animated.timing(
            this.state.logoContainerAnim,
            {
                toValue: 150,
                duration: 2000,
            }
        ).start(() => {
            Animated.timing(
                this.state.loginOpacityAnim,
                {
                    toValue: 1,
                    duration: 10000,
                }
            ).start();
        });


        //TODO: Fade in loginView
    }

}



const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: "column",
        height: "100%",
        width: "100%",
    },
    logoContainer: {
        width: "100%",
        marginTop: 10,
        marginBottom: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    logo: {
        height: 150,
        width: 150,
    },
});
