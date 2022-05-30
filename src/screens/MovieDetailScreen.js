import { StyleSheet, Text, View, ScrollView, Image, Dimensions } from 'react-native'
import { useRoute } from "@react-navigation/native"
import { api_call } from '../api/api';
import { useNavigation } from '@react-navigation/native'
import RatingStars from '../components/RatingStars/RatingStars';
import React, { useState, useEffect, useLayoutEffect } from 'react'

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

    return (
        loading ? (<Text>Loading...</Text>) :
            (<View style={styles.container}>
                <ScrollView style={styles.scrollview} contentContainerStyle={{ flexGrow: 1 }} bounces={false}>
                    <View style={{ display: "flex", flexDirection: "column", height: 400, backgroundColor: "black" }}>
                        <Image style={styles.imageItem} source={{ uri: 'https://image.tmdb.org/t/p/original' + movieDetail.backdrop_path }} />
                        <View style={styles.movieTitleContainer}>
                            <Text style={styles.movieTitle}>{movieDetail.title}</Text>
                            <View style={styles.rateContainer}>
                                <RatingStars
                                    note={movieDetail.vote_average / 2}
                                />
                                <Text style={{ color: "white" }}>{movieDetail.vote_average / 2}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ display: "flex", flexDirection: "column" }}>
                        <ScrollView horizontal={true}>
                            {movieDetail.genres.map(genre => (<Text style={styles.genreStyle}>{genre.name}</Text>))}
                        </ScrollView>
                        <View>
                            <Text style={{ fontWeight: "bold" }}>Résumé</Text>
                            <Text>{movieDetail.overview}</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>)
    )
}

export default MovieDetailScreen

const styles = StyleSheet.create({
    genreStyle: {
        padding: 10,
        marginRight: 5,
        marginLeft: 5,
        borderRadius: 5,
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 20,
        height: 45
    },
    scrollview: {
        backgroundColor: "white",
    },
    container: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white"
    },
    imageItem: {
        height: 400
    },
    movieTitleContainer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        margin: 16,
        width: "95%",
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