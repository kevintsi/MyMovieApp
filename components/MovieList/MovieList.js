import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import MovieItem from './MovieItem'

const MovieList = ({ movies, titleCategory }) => {

    const renderItem = (movie) => (
        <MovieItem movie={movie} />
    )

    //console.log(`Movies : ${movies} and title : ${titleCategory} ${new Date().toISOString()}`)
    return (
        <SafeAreaView style={styles.container}>
            <Text>{titleCategory}</Text>
            <FlatList
                data={movies}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal={true}
            />
            {/* {movies.map(movie => (<MovieItem key={movie.id} movie={movie} />))} */}
        </SafeAreaView>
    )
}

export default MovieList

const styles = StyleSheet.create({
    container: {
        height: 100
    }
})