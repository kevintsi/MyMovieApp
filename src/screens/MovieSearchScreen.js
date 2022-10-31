import { FlatList, StyleSheet, Text, TextInput, View, StatusBar } from 'react-native'
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

    const renderEmpty = (
        <View style={{
            height: 100,
            width: "100%",
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text>Pas de films</Text>
        </View>
    )

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#E43A45" />
            <View style={styles.headerContainer}>
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
                    keyExtractor={(item) => item.id}
                    onEndReachedThreshold={0.3}
                    horizontal={false}
                    ListEmptyComponent={renderEmpty}
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
        borderWidth: 0.5,
        borderRadius: 10,
        padding: 5,
        margin: 20
    }

})