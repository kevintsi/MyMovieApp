import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { useRoute } from "@react-navigation/native"
import { api_call } from '../api/api';
import { useNavigation } from '@react-navigation/native'
import React, { useState, useEffect, useLayoutEffect } from 'react'
import MovieBackdrop from '../components/MovieDetail/MovieBackdrop';
import MovieTitle from '../components/MovieDetail/MovieTitle';
import MovieRating from '../components/MovieDetail/MovieRating';
import MovieOverview from '../components/MovieDetail/MovieOverview';
import MovieGenre from '../components/MovieDetail/MovieGenre';

const MovieDetailScreen = () => {

    const [loading, setLoading] = useState(true)
    const [movieDetail, setMovieDetail] = useState({})


    const { id } = useRoute().params
    const navigation = useNavigation();

    console.log(`Id movie : ${id}`)

    useLayoutEffect(() => {
        navigation.setOptions({
            title: movieDetail.title
        })
    })

    const getMovieDetail = async () => {
        try {
            console.log("API call getmoviedetail")
            let res = await api_call.getMovieDetailAPI(id)
            setMovieDetail(res)
            setLoading(false)
            console.log("End API call getmoviedetail")
        } catch (error) {
            console.log(`Error occured when getting popular movies`)
            console.log(`${error}`)
        }
    }

    useEffect(() => {
        console.log("Before getting movie details")
        getMovieDetail()
        console.log("After getting movie details")
    }, [])

    const movieInfoGeneral = () => {
        return (
            <MovieBackdrop backdrop={movieDetail.backdrop_path}>
                {!loading && (
                    <View style={styles.movieTitleContainer}>
                        <MovieTitle title={movieDetail.title} />
                        <MovieRating vote_average={movieDetail.vote_average} />
                    </View>
                )}
            </MovieBackdrop>
        )
    }

    const movieInfoDetail = () => {
        return (
            <View style={{ display: "flex", flexDirection: "column" }}>
                {!loading && (
                    <View>
                        <MovieGenre genres={movieDetail.genres} />
                        <MovieOverview overview={movieDetail.overview} />
                    </View>
                )}
            </View>
        )
    }

    return (
        loading ? (<Text>Loading...</Text>) :
            (<View style={styles.container}>
                <ScrollView style={styles.scrollview} contentContainerStyle={{ flexGrow: 1 }} bounces={false}>
                    {movieInfoGeneral()}
                    {movieInfoDetail()}
                </ScrollView>
            </View>)
    )
}

export default MovieDetailScreen

const styles = StyleSheet.create({
    scrollview: {
        backgroundColor: "white",
    },
    container: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white"
    },
    movieTitleContainer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        margin: 16,
        width: "95%",
    },
})