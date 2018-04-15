import React from "react";
import {Image, Button} from "react-native";

import {StyleSheet, View, Text, TextInput} from "react-native";
import SocialMediaButton from "./SocialMediaButton";
import CustomScreen from "./CustomScreen";
import WhatsOnApi from "../backend/api/WhatsOnApi";
import {LIGHTFONT, MAINGREEN} from "./DefaultStyles";
import {CONTEXT} from "../backend/ContextInitializer";
import {signIn} from "../backend/api/LoginRequests";


type Props = {};
export default class LoginView extends CustomScreen<Props> {

    state = {
        username: "",
        password: ""
    };

    constructor(props) {
        super(props);
        this.startLogoAnimation = this.startLogoAnimation.bind(this);
    }

    render() {
        let disabledLoginButton = (this.state.username === "") || (this.state.password === "");

        return (
            <View style={styles.container}>

                <Text style={styles.title}>Finde dein nächstes Event!</Text>

                <View style={styles.inputContainer}>
                    <View>
                        <Text style={styles.inputTitle}>Username</Text>
                        <TextInput underlineColorAndroid={MAINGREEN}
                                   style={styles.inputField}
                                   onChangeText={(username) => this.setState({username})}
                        />
                    </View>
                    <View>
                        <Text style={styles.inputTitle}>Password</Text>
                        <TextInput underlineColorAndroid={MAINGREEN}
                                   style={styles.inputField}
                                   onChangeText={(password) => this.setState({password})}
                                   secureTextEntry={true}
                        />
                    </View>
                </View>

                <View style={styles.loginButtonContainer}>
                    <Button title="Login"
                            onPress={() => this.onClickLogin()}
                            color={MAINGREEN}
                            disabled={disabledLoginButton}
                    />
                </View>

                <View style={styles.mediaButtonContainer}>
                    <SocialMediaButton/>
                    <SocialMediaButton/>
                    <SocialMediaButton/>
                </View>

            </View>
        );
    }

    onClickLogin() {
        console.log("logging in ...")
        this.startLogoAnimation();
        this.login(this.state.username, this.state.password);
    }


    login(username, password) {
        signIn(username, password, true).then(token => {
            console.log("Token=", token);
        }).catch(error => {
            console.log("Error=", error);
            this.stopLogoAnimation();
            //show error
        });
    }

    startLogoAnimation() {
        //TODO: animate logo
    }

    stopLogoAnimation() {
        //start
    }

}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: "column",
        height: "100%",
        width: "100%",
    },

    title: {
        marginTop: 30,
        fontSize: 30,
        color: LIGHTFONT,
        flexWrap: "wrap"
    },
    inputContainer: {
        width: 300,
        marginTop: 50,
    },
    inputTitle: {
        color: LIGHTFONT,
        flexWrap: "wrap",
    },
    inputField: {
        color: LIGHTFONT,
        fontSize: 20,
    },
    loginButtonContainer: {
        marginTop: 40,
        width: 200,
    },
    mediaButtonContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
    },

});
