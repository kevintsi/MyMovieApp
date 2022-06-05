import { StyleSheet, FlatList, ActivityIndicator, View } from 'react-native'
import React, { useEffect, useState, useLayoutEffect } from 'react'
import { api_call } from '../api/api';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native'
import MovieItemCategory from '../components/MovieList/MovieItemCategory';


import LottieView from 'lottie-react-native';


const MoviesScreen = ({ route }) => {


    const { category } = route.params;

    const [page, setPage] = useState(1)
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)

    const navigation = useNavigation();

    const renderItem = (movie) => (
        <MovieItemCategory movie={movie} />
    )

    useLayoutEffect(() => {
        navigation.setOptions({
            title: category
        })
    }, [])

    const getPopularMovies = async () => {
        try {
            setLoading(true)
            let res = await api_call.getPopularMoviesAPI(page)
            //console.log(`Result call api getPopularMovies : ${res.results.slice(0, 5)}`)
            setMovies(movies => [...movies, ...res.results])
            setLoading(false)
        } catch (error) {
            console.log(`Error occured when getting popular movies`)
            console.log(`${error}`)
        }
    }

    const getTopsRatedMovies = async () => {
        try {

            setLoading(true)
            let res = await api_call.getTopsRatedMoviesAPI(page)
            setMovies(movies => [...movies, ...res.results])
            setLoading(false)
        } catch (error) {
            console.log(`Error occured when getting top rated movies`)
            console.log(`${error}`)
        }

    }

    const getUpcomingMovies = async () => {
        try {
            setLoading(true)
            let res = await api_call.getUpcomingMoviesAPI(page)
            setMovies(movies => [...movies, ...res.results])
            setLoading(false)
        } catch (error) {
            console.log(`Error occured when getting top rated movies`)
            console.log(`${error}`)
        }

    }

    useEffect(() => {
        switch (category) {
            case "Mieux notés": {
                getTopsRatedMovies()
                break;
            }
            case "Populaire": {
                getPopularMovies()
                break;
            }
            case "Films à venir": {
                getUpcomingMovies()
                break;
            }
        }
    }, [page])

    const fetchMoreData = () => {
        setPage(page + 1)
        console.log(`Page updated : ${page}`)
    }

    return loading ?
        <LottieView source={require("../assets/images/108069-yellow-loader.json")} autoPlay loop />
        :
        <SafeAreaView style={styles.container}>
            <FlatList
                style={styles.list}
                data={movies}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                onEndReachedThreshold={0.2}
                onEndReached={fetchMoreData}
                horizontal={false}
            />
        </SafeAreaView>
}

export default MoviesScreen

const styles = StyleSheet.create({
    container: {
        "backgroundColor": "white"
    }
})