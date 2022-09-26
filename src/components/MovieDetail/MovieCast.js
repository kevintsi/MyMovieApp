import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'

const MovieCast = ({ casts }) => {

    const renderItem = (cast) => {
        cast = cast.item
        return (
            <View style={styles.containerCast}>
                <Image style={styles.castPhoto} source={{ uri: cast.profile_path ? `https://image.tmdb.org/t/p/original${cast.profile_path}` : null }} />
                <Text>{cast.name}</Text>
                <Text style={{ "fontStyle": "italic" }}>{cast.character}</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.castTitle}>Acteurs</Text>
            <FlatList
                data={casts}
                renderItem={renderItem}
                keyExtractor={item => item.character}
                horizontal
            />
        </View>
    )
}

export default MovieCast

const styles = StyleSheet.create({
    containerCast: {
        display: 'flex',
        flexDirection: 'column',
        paddingRight: 10,
        height: 200,
        width: 100
    },
    castPhoto: {
        height: 100,
        borderRadius: 10,
        maxWidth: "100%",
        maxHeight: "100%"
    },
    castTitle: {
        fontWeight: "bold",
        paddingBottom: 10
    },
    container: {
        padding: 10
    }
})