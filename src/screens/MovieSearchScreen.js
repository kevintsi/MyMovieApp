import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { api_call } from '../api/api'

import { SafeAreaView } from 'react-native-safe-area-context';
import MovieItemCategory from '../components/MovieList/MovieItemCategory';

const MovieSearchScreen = () => {

    const [movieName, setMovieName] = useState("")
    const [movies, setMovies] = useState([])
    const [loadig, setLoading] = useState(false)
    const [page, setPage] = useState(1)

    const renderItem = (movie) => {
        return <MovieItemCategory movie={movie} />
    }

    const searchMovie = () => {
        if (movieName.length != 0) {
            getMovie()
        }
    }

    const getMovie = async () => {
        try {
            console.log("Begin getMovie")
            const res = await api_call.searchMovieAPI(movieName)
            console.log(res.results.length)
            setMovies(res.results)
        } catch (error) {
            console.log(`Error occured when getting movies`)
            console.log(`${error}`)
        }
    }

    return (
        <View>
            <Text>Rechercher un film</Text>
            <TextInput placeholder='Entrez le nom du film que vous cherchez' onChange={searchMovie} onChangeText={(text) => setMovieName(text)} />
            {movies.length != 0 ?
                <SafeAreaView style={styles.container}>
                    <FlatList
                        style={styles.list}
                        data={movies}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index}
                        onEndReachedThreshold={0.3}
                        horizontal={false}
                    />
                </SafeAreaView> : null

            }

        </View>
    )
}

export default MovieSearchScreen

const styles = StyleSheet.create({})