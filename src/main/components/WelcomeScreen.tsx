import {Component} from "react";
import {View,StyleSheet} from "react-native";
import ContextInitializer, {setContext} from "../backend/ContextInitializer";

type Props= {onInitialized};
class WelcomeScreen extends Component<Props> {

    constructor(props) {
        super(props);
        this.onStart();
    }

    render() {
        return (
            <View style={styles.container}>

            </View>
        );
    }

    onStart() {
        let ctx = ContextInitializer.initialize();
        setContext(ctx);
        ctx.gathering.tryLoginFromDatabaseToken().then(loggedIn => {
            this.props.onInitialized();
        });
    }
}
const styles = StyleSheet.create({
    container: {

    }
});
