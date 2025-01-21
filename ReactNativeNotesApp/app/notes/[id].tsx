import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet } from "react-native"

export default function NoteDetails() {
    const { id } = useLocalSearchParams()
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            width: "100%",
            height: "100%",
            alignItems: "center",
        },
        title: {
            color: "white",
            fontSize: 24,
        }
    })

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Note {id}</Text>
            <Text style= {styles.body}>This is the detail page for note {id}.</Text>
        </View>
    )
}