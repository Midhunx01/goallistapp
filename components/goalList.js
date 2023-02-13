import { StyleSheet, Text, View, Pressable } from "react-native";

function GoalList(props) {
    return (
        
        <View style={styles.goalView}> 
        <Pressable android_ripple={{color: '#210644'}} onPress={props.onDelete.bind(this, props.id)} style={({pressed}) => pressed && styles.pressedItem}>
            <Text style={styles.goalText}>{props.text}</Text> 
        </Pressable>
        </View>
        
    );
}

export default GoalList;


const styles= StyleSheet.create({
    goalView: {
        margin: 8,
        borderRadius: 10,
        backgroundColor: '#5e0acc',
      },
      goalText: {
        color: 'white',
        padding: 8,
      },
      pressedItem: {
        opacity: 0.5,
      }
})