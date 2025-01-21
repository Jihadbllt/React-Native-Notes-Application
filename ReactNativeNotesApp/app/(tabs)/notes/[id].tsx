import { useLocalSearchParams } from "expo-router"
import { View, Text, StyleSheet } from "react-native"
import { items } from "../../../assets/data"
export default function NoteDetails() {
    const { id } = useLocalSearchParams()
    const noteId = Array.isArray(id) ? id[0] : id
    const index = parseInt(noteId, 10) - 1

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#121212",
            padding: 20,
        },
        title: { fontSize: 24, color: "white", marginBottom: 10 },
        body: { fontSize: 16, color: "#ccc", textAlign: "center" },
    })

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{items[index].title}</Text>
            <Text style= {styles.body}>{items[index].body}</Text>
        </View>
    )
}