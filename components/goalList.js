import { StyleSheet, Text, View } from "react-native";

function GoalList(props) {
    return (
        <View style={styles.goalView}> 
            <Text style={styles.goalText}>{props.text}</Text> 
        </View>
    );
}

export default GoalList;


const styles= StyleSheet.create({
    goalView: {
        margin: 8,
        padding: 8,
        borderRadius: 10,
        backgroundColor: '#5e0acc',
      },
      goalText: {
        color: 'white',
      }
})