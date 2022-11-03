import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const MovieItem = ({ movie }) => {
    let base_movie = movie.item
    const navigation = useNavigation()
    // console.log(`Movie : ${JSON.stringify(base_movie)}`)
    // console.log("Movie contents ", base_movie.title)

    return (
        <TouchableOpacity onPress={() => navigation.navigate("MovieDetail", { id: base_movie.id })}>
            <Image style={styles.imageItem} source={{ uri: 'https://image.tmdb.org/t/p/w500' + base_movie.poster_path }} />
        </TouchableOpacity>
    )
}

export default MovieItem

const styles = StyleSheet.create({
    imageItem: {
        width: 100,
        height: 149,
        margin: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    }
})