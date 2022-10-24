import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import MovieList from "../components/MovieList/MovieList"
import { api_call } from '../api/api';


import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

const HomePage = () => {

    const [popularMovies, setPopularMovies] = useState([])
    const [topRatedMovies, setTopRatedMovies] = useState([])
    const [upcomingMovies, setTopUpcomingMovies] = useState([])
    const [loading, setLoading] = useState(true)

    const navigation = useNavigation()


    const getPopularMovies = async () => {
        try {
            let res = await api_call.getPopularMoviesAPI()
            //console.log(`Result call api getPopularMovies : ${res.results.slice(0, 5)}`)
            setPopularMovies(res.results.slice(0, 5))
            setLoading(false)
        } catch (error) {
            console.log(`Error occured when getting popular movies`)
            console.log(`${error}`)
        }
    }

    const getTopsRatedMovies = async () => {
        try {
            let res = await api_call.getTopsRatedMoviesAPI()
            setTopRatedMovies(res.results.slice(0, 5))
            setLoading(false)
        } catch (error) {
            console.log(`Error occured when getting top rated movies`)
            console.log(`${error}`)
        }

    }


    const getUpcomingMovies = async () => {
        try {
            let res = await api_call.getUpcomingMoviesAPI()
            setTopUpcomingMovies(res.results.slice(0, 5))
            setLoading(false)
        } catch (error) {
            console.log(`Error occured when getting top rated movies`)
            console.log(`${error}`)
        }

    }

    useEffect(() => {
        console.log("Getting all movies")
        getPopularMovies()
        getTopsRatedMovies()
        getUpcomingMovies()
        console.log("End getting all movies")
        return () => {
            setPopularMovies([])
            setTopRatedMovies([])
            setTopUpcomingMovies([])
        }
    }, [navigation])

    return loading ?
        <LottieView source={require("../assets/images/108069-yellow-loader.json")} autoPlay loop />
        :
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#E43A45" />
            {popularMovies.length != 0 ? <MovieList movies={popularMovies} titleCategory="Populaire" /> : <Text>Pas de films pour cette catégorie</Text>}
            {topRatedMovies.length != 0 ? <MovieList movies={topRatedMovies} titleCategory="Mieux notés" /> : <Text>Pas de films pour cette catégorie</Text>}
            {upcomingMovies.length != 0 ? <MovieList movies={upcomingMovies} titleCategory="Films à venir" /> : <Text>Pas de films à venir</Text>}
        </View>
}

export default HomePage

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        height: "100%"
    }
})