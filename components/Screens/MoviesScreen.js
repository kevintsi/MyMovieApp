import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { api_call } from '../Api/Api';

const MoviesScreen = ({ route }) => {


    const { category } = route.params;

    const [page, setPage] = useState(1)
    const [popularMovies, setPopularMovies] = useState([])
    const [topRatedMovies, setTopRatedMovies] = useState([])
    const [upcomingMovies, setTopUpcomingMovies] = useState([])

    console.log("Category " + category)

    const getPopularMovies = async () => {
        try {
            let res = await api_call.getPopularMoviesAPI(page)
            //console.log(`Result call api getPopularMovies : ${res.results.slice(0, 5)}`)
            setPopularMovies(res.results.slice(0, 5))
        } catch (error) {
            console.log(`Error occured when getting popular movies`)
            console.log(`${error}`)
        }
    }

    const getTopsRatedMovies = async () => {
        try {
            let res = await api_call.getTopsRatedMoviesAPI(page)
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
        switch (category) {
            case "Mieux notés": getTopsRatedMovies()
            case "Populaire": getPopularMovies()
            case "Film à venir": getUpcomingMovies()
        }
    }, [])

    return (
        <View>
            <Text>MoviesScreen</Text>
        </View>
    )
}

export default MoviesScreen

const styles = StyleSheet.create({})