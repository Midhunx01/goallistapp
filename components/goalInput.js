import { useState } from "react";
import { StyleSheet, TextInput, Button, View} from "react-native";

function GoalInput (props) {

    const [enteredGoal, setEnteredGoal] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoal(enteredText);
    
    }

    function onAddGoalHandler() {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    

    return (
        <View style= {styles.inputContainer}>
        <TextInput  style= {{borderColor: '#cccccc', borderWidth: 1, width: '70%', padding: 4.5}} placeholder='Enter Your Goals' value={enteredGoal} onChangeText={goalInputHandler} />
        <Button title= 'ADD GOAL' onPress={onAddGoalHandler} />
        </View>

    );
}

export default GoalInput;

const styles= StyleSheet.create({

    inputContainer: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        marginBottom: 20,
        paddingBottom: 30,
        alignItems: 'center',
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1,
      },
})


