import { StyleSheet, View, Image } from 'react-native'
import React from 'react'

const MovieBackdrop = ({ backdrop, children }) => {
    return (
        <View style={{ display: "flex", flexDirection: "column", height: 300, backgroundColor: "black" }}>
            <Image style={styles.imageItem} source={{ uri: 'https://image.tmdb.org/t/p/original' + backdrop }} />
            {children}
        </View>
    )
}

export default MovieBackdrop

const styles = StyleSheet.create({
    imageItem: {
        height: 300
    }
})