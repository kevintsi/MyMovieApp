import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'


const MovieImages = ({ images }) => {

    const renderItem = (image) => {
        image = image.item
        return (
            <View style={styles.containerImages}>
                <Image style={styles.posterImage} source={{ uri: image.file_path ? `https://image.tmdb.org/t/p/original${image.file_path}` : null }} />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.imagesTitle}>Images</Text>
            <FlatList
                data={images}
                renderItem={renderItem}
                keyExtractor={item => item.file_path}
                horizontal
            />
        </View>
    )
}

export default MovieImages

const styles = StyleSheet.create({
    container: {
        padding: 10,
        height: 250
    },
    posterImage: {
        height: "100%",
        borderRadius: 10
    },
    containerImages: {
        width: 370,
        paddingTop: 10,
        paddingRight: 10
    },
    imagesTitle: {
        fontWeight: "bold",
        paddingBottom: 10
    },
})