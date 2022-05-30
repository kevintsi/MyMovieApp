import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { useRoute } from "@react-navigation/native"
import { api_call } from '../api/api';
import { useNavigation } from '@react-navigation/native'
import RatingStars from '../components/RatingStars/RatingStars';
import React, { useState, useEffect, useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';

const MovieDetailScreen = () => {

    const [loading, setLoading] = useState(false)
    const [movieDetail, setMovieDetail] = useState({})


    const { id } = useRoute().params
    const navigation = useNavigation();

    let genres = []
    console.log(`Id movie : ${id}`)

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Détail film"
        })
    }, [])

    const getMovieDetail = async () => {
        try {
            let res = await api_call.getMovieDetailAPI(id)
            genres = res.genres.map((genre) => { return genre.name })
            setMovieDetail(res)

        } catch (error) {
            console.log(`Error occured when getting popular movies`)
            console.log(`${error}`)
        }
    }

    useEffect(() => {
        getMovieDetail()
        console.log("Movie detail : ", movieDetail)
    }, [])

    return (
        <View style={styles.container}>
            <FastImage style={styles.imageItem} source={{ uri: 'https://image.tmdb.org/t/p/original' + movieDetail.backdrop_path }} />
            <View style={styles.movieTitleContainer}>
                <Text style={styles.movieTitle}>{movieDetail.title}</Text>
                <View style={styles.rateContainer}>
                    <RatingStars
                        note={movieDetail.vote_average / 2}
                    />
                    <Text style={{ color: "white" }}>{movieDetail.vote_average / 2}</Text>
                </View>
            </View>
            <View style={{ backgroundColor: "red", height: "50%", borderRadius: 2, position: "absolute" }}></View>
        </View>
    )
}

export default MovieDetailScreen

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
    },
    imageItem: {
        width: "100%",
        height: "100%",
    },
    movieTitleContainer: {
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        width: "95%",
        height: 100,
        top: 220,
        left: 10,
    },
    movieTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
    },
    rateContainer: {
        display: 'flex',
        flexDirection: "row",
        width: 130,
        marginTop: 10
    },

})