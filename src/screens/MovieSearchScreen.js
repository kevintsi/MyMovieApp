import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { api_call } from '../api/api'

import { SafeAreaView } from 'react-native-safe-area-context';
import MovieItemCategory from '../components/MovieList/MovieItemCategory';

const MovieSearchScreen = () => {

    const [movieName, setMovieName] = useState("")
    const [movies, setMovies] = useState([])

    const renderItem = (movie) => {
        return <MovieItemCategory movie={movie} />
    }

    const searchMovie = (text) => {
        setMovieName(text)
        getMovie()
    }

    const getMovie = async () => {
        try {
            console.log("Begin getMovie")
            const res = await api_call.searchMovieAPI(movieName)
            setMovies(res.results)
        } catch (error) {
            console.log(`Error occured when getting movies`)
            console.log(`${error}`)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text>Rechercher un film</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Entrez le nom du film que vous cherchez'
                    value={movieName}
                    onChangeText={(text) => searchMovie(text)}
                />
            </View>
            <SafeAreaView style={styles.container}>
                <FlatList
                    style={styles.list}
                    data={movies}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => item.id}
                    onEndReachedThreshold={0.3}
                    horizontal={false}
                />
            </SafeAreaView>
        </View>
    )
}

export default MovieSearchScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        height: "100%"
    },
    headerContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    textInput: {
        borderWidth: 1,
        padding: 5,
        margin: 5
    }

})