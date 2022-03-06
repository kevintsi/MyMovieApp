import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MovieItem = (movie) => {
    let base_movie = movie.movie
    console.log("Movie contents ", base_movie.poster_path)
    return (
        <View>
            <Text>{base_movie.title}</Text>
        </View>
    )
}

export default MovieItem

const styles = StyleSheet.create({})