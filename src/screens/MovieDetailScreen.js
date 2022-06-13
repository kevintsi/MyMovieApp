import { StyleSheet, View, ScrollView } from 'react-native'
import { useRoute } from "@react-navigation/native"
import { api_call } from '../api/api';
import { useNavigation } from '@react-navigation/native'
import React, { useState, useEffect, useLayoutEffect } from 'react'


import MovieBackdrop from '../components/MovieDetail/MovieBackdrop';
import MovieTitle from '../components/MovieDetail/MovieTitle';
import MovieRating from '../components/MovieDetail/MovieRating';
import MovieOverview from '../components/MovieDetail/MovieOverview';
import MovieGenre from '../components/MovieDetail/MovieGenre';
import MovieCast from '../components/MovieDetail/MovieCast';
import MovieImages from '../components/MovieDetail/MovieImages';

import LottieView from 'lottie-react-native';

const MovieDetailScreen = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [images, setImages] = useState([])
    const [casts, setCasts] = useState([])
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
            setIsLoading(true)
            console.log("API call getmoviedetail")
            let res = await api_call.getMovieDetailAPI(id)
            setMovieDetail(res)
            console.log("End API call getmoviedetail")
        } catch (error) {
            console.log(`Error occured when getting movie's detail`)
            console.log(`${error}`)
            setIsLoading(false)
        }
    }

    const getImages = async () => {
        try {
            let res = await api_call.getImagesAPI(id)
            setImages(res.backdrops)
            setIsLoading(false)
        } catch (error) {
            console.log(`Error occured when getting movie's images`)
            console.log(`${error}`)
            setIsLoading(false)
        }
    }

    const getCasts = async () => {
        try {
            let res = await api_call.getMovieCreditsAPI(id)
            setCasts(res.cast.slice(0, 10))
        } catch (error) {
            console.log(`Error occured when getting movie's cats`)
            console.log(`${error}`)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        console.log("Before getting movie details")
        getMovieDetail()
        getCasts()
        getImages()
        console.log("After getting movie details")

        return () => {
            setMovieDetail({})
            setImages({})
            setCasts([])
        }
    }, [id])

    const movieInfoGeneral = () => {
        return (
            <MovieBackdrop backdrop={movieDetail.backdrop_path}>
                <View style={styles.movieTitleContainer}>
                    <MovieTitle title={movieDetail.title} />
                    <MovieRating vote_average={movieDetail.vote_average} />
                </View>
            </MovieBackdrop>
        )
    }

    const movieInfoDetail = () => {
        return (
            <View style={{ display: "flex", flexDirection: "column" }}>
                <View>
                    <MovieGenre genres={movieDetail.genres} />
                    <MovieOverview overview={movieDetail.overview} />
                    <MovieCast casts={casts} />
                    <MovieImages images={images} />
                </View>
            </View>
        )
    }

    return (
        isLoading ? (<LottieView source={require("../assets/images/108069-yellow-loader.json")} autoPlay loop />) :
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