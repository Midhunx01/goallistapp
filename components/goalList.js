import { StyleSheet, Text, View, Pressable } from "react-native";

function GoalList(props) {
    return (
        <Pressable onPress={props.onDelete.bind(this, props.id)}>
        <View style={styles.goalView}> 
            <Text style={styles.goalText}>{props.text}</Text> 
        </View>
        </Pressable>
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