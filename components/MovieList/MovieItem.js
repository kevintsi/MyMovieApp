import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const MovieItem = (movie) => {
    let base_movie = movie.movie.item
    // console.log(`Movie : ${JSON.stringify(base_movie)}`)
    // console.log("Movie contents ", base_movie.title)

    return (
        <View>
            <Text>{base_movie.title}</Text>
        </View>
    )
}

export default MovieItem

const styles = StyleSheet.create({})