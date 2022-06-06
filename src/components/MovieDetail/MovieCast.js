import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { api_call } from '../../api/api'


import LottieView from 'lottie-react-native';

const MovieCast = ({ movie_id }) => {

    const [casts, setCasts] = useState([])
    const [loading, setIsLoading] = useState(true)

    const getCasts = async () => {
        try {
            let res = await api_call.getMovieCreditsAPI(movie_id)
            setCasts(res.cast.slice(0, 10))
            setIsLoading(false)
        } catch (error) {
            console.log(`Error occured when getting casts movies`)
            console.log(`${error}`)

        }
    }

    const movieCasts = () => {
        console.log(`Casts : `, casts)

        return casts.map(cast => (
            <View style={styles.containerCast}>
                <Image style={styles.castPhoto} source={{ uri: cast.profile_path ? `https://image.tmdb.org/t/p/original${cast.profile_path}` : null }} />
                <Text>{cast.name}</Text>
            </View>
        ))
    }

    useEffect(() => {
        getCasts()
    }, [])

    return loading ? (<LottieView source={require("../../assets/images/108069-yellow-loader.json")} autoPlay loop />) : (
        <View style={styles.container}>
            <Text style={styles.castTitle}>Acteurs</Text>
            <ScrollView horizontal>
                {movieCasts()}
            </ScrollView>
        </View>
    )
}

export default MovieCast

const styles = StyleSheet.create({
    containerCast: {
        display: 'flex',
        flexDirection: 'column',
        paddingRight: 10
    },
    castPhoto: {
        height: 100
    },
    castTitle: {
        fontWeight: "bold",
        paddingBottom: 10
    },
    container: {
        padding: 10
    }
})