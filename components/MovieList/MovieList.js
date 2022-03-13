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
            <Text style={styles.textList}>{titleCategory}</Text>
            <Text style={styles.buttonList} onPress={() => navigation.navigate('Movies', { category: titleCategory })}> Voir plus ..</Text>
            <FlatList
                style={styles.list}
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
  textList: {
    position: 'absolute',
    top: 0,
    left: 10,
    fontWeight: "900"
  },
  buttonList: {
    position: 'absolute',
    top: 0,
    right: 10,
    fontWeight: "900"
  },
  list: {
    marginTop: 20
  },
  container: {
    position: 'relative',
    marginTop: 15
  }
})