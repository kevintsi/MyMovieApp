import { StyleSheet, Text, View, SafeAreaView, FlatList, Button } from 'react-native'
import React from 'react'
import MovieItem from './MovieItem'
import { useNavigation } from '@react-navigation/native'


const MovieList = ({ movies, titleCategory }) => {

    const navigation = useNavigation();

    console.log("Navigate object : ", navigation)

    const renderItem = (movie) => (
        <MovieItem movie={movie} />
    )

    //console.log(`Movies : ${movies} and title : ${titleCategory} ${new Date().toISOString()}`)
    return (
        <SafeAreaView style={styles.container}>
            <Text>{titleCategory}</Text>
            <Button title='Voir plus' onPress={() => navigation.navigate('Movies', { category: titleCategory })} />
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