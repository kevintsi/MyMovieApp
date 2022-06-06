import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const MovieOverview = ({ overview }) => {

    const [isReadMore, setisReadMore] = useState(true)

    const ReadMore = ({ children }) => {

        return (
            <View >
                {isReadMore ? <Text>{overview.slice(0, 150)}</Text> : <Text>{children}</Text>}
                <Text onPress={() => setisReadMore(!isReadMore)}>
                    {isReadMore ? "...lire plus" : " lire moins"}
                </Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontWeight: "bold" }}>Résumé</Text>
            <ReadMore>
                {overview}
            </ReadMore>
        </View>
    )
}

export default MovieOverview

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
})