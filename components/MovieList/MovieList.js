import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MovieItem from './MovieItem'

const MovieList = ({ movies, titleCategory }) => {
    console.log(`Movies : ${movies} and title : ${titleCategory} ${new Date().toISOString()}`)
    return (
        <View>
            <Text>{titleCategory}</Text>
            {movies.map(movie => (<MovieItem key={movie.id} movie={movie} />))}
        </View>
    )
}

export default MovieList

const styles = StyleSheet.create({})