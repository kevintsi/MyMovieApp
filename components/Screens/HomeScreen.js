import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import MovieList from "../MovieList/MovieList"
import { api_call } from '../Api/Api';

const HomePage = () => {

    const [popularMovies, setPopularMovies] = useState([])
    const [topRatedMovies, setTopRatedMovies] = useState([])
    const [upcomingMovies, setTopUpcomingMovies] = useState([])


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
        getPopularMovies()
    }, [])

    useEffect(() => {
        getTopsRatedMovies()
    }, [])

    useEffect(() => {
        getUpcomingMovies()
    }, [])

    return (
        <View style={styles.container}>
            <Text>Films</Text>
            {popularMovies.length != 0 ? <MovieList movies={popularMovies} titleCategory="Populaire" /> : <Text>Pas de films pour cette catégorie</Text>}
            {topRatedMovies.length != 0 ? <MovieList movies={topRatedMovies} titleCategory="Mieux notés" /> : <Text>Pas de films pour cette catégorie</Text>}
            {upcomingMovies.length != 0 ? <MovieList movies={upcomingMovies} titleCategory="Films à venir" /> : <Text>Pas de films à venir</Text>}
        </View>
    )
}

export default HomePage

const styles = StyleSheet.create({})