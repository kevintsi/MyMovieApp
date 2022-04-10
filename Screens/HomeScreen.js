import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import MovieList from "./components/MovieList/MovieList"
import { api_call } from '../Api/Api';

const HomePage = () => {

    const [popularMovies, setPopularMovies] = useState([])
    const [topRatedMovies, setTopRatedMovies] = useState([])
    const [upcomingMovies, setTopUpcomingMovies] = useState([])
    const [loading, setLoading] = useState(false)


    const getPopularMovies = async () => {
        try {
            let res = await api_call.getPopularMoviesAPI()
            //console.log(`Result call api getPopularMovies : ${res.results.slice(0, 5)}`)
            setPopularMovies(res.results.slice(0, 5))
        } catch (error) {
            console.log(`Error occured when getting popular movies`)
            console.log(`${error}`)
        }
    }

    const getTopsRatedMovies = async () => {
        try {
            let res = await api_call.getTopsRatedMoviesAPI()
            setTopRatedMovies(res.results.slice(0, 5))
        } catch (error) {
            console.log(`Error occured when getting top rated movies`)
            console.log(`${error}`)
        }

    }


    const getUpcomingMovies = async () => {
        try {
            let res = await api_call.getUpcomingMoviesAPI()
            setTopUpcomingMovies(res.results.slice(0, 5))
        } catch (error) {
            console.log(`Error occured when getting top rated movies`)
            console.log(`${error}`)
        }

    }

    useEffect(() => {
        setLoading(true)
        getPopularMovies()
        getTopsRatedMovies()
        getUpcomingMovies()
        setLoading(false)
    }, [])

    return loading ?
        <View style={{ "backgroundColor": "white", "height": "100%", "flex": 1, "justifyContent": 'center' }}><ActivityIndicator color='red' size="large" /></View>
        :
        <View style={styles.container}>
            {popularMovies.length != 0 ? <MovieList movies={popularMovies} titleCategory="Populaire" /> : <Text>Pas de films pour cette catégorie</Text>}
            {topRatedMovies.length != 0 ? <MovieList movies={topRatedMovies} titleCategory="Mieux notés" /> : <Text>Pas de films pour cette catégorie</Text>}
            {upcomingMovies.length != 0 ? <MovieList movies={upcomingMovies} titleCategory="Films à venir" /> : <Text>Pas de films à venir</Text>}
        </View>
}

export default HomePage

const styles = StyleSheet.create({
})