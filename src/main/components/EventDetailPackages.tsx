import {Component, default as React} from "react";
import {Button, Text, TouchableOpacity} from "react-native";

type Props = {contest}
export class Contest extends Component<Props> {

    state = {
        contest: null
    };

    constructor(props) {
        super(props);
        this.state.contest = props.contest;
    }

    render() {
        return (
            <TouchableOpacity>
                <Text>VOTE</Text>
            </TouchableOpacity>
        )
    }

    onPressParticipate() {

    }
}