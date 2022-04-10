import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { api_call } from '../../../Api/Api';
import RatingStars from '../RatingStars/RatingStars';


const MovieItemCategory = ({ movie }) => {
    let base_movie = movie.item
    console.log(base_movie.vote_average)
    const [genres, setGenre] = useState([])

    const getMovieDetail = async () => {
        try {
            setGenre([])
            let res = await api_call.getMovieDetailAPI(base_movie.id)
            res.genres.map((genre) => {
                setGenre(genres => [...genres, genre.name])
            })
        } catch (error) {
            console.log(`Error occured when getting popular movies`)
            console.log(`${error}`)
        }
    }

    useEffect(() => {
        getMovieDetail()
    }, [])

    return (
        <View style={styles.container}>
            <Image style={styles.imageItem} source={{ uri: 'https://image.tmdb.org/t/p/w500' + base_movie.poster_path }} />
            <View style={styles.detailContainer}>
                <View>
                    <Text style={{ "fontWeight": "500" }}>{base_movie.title}</Text>
                    <View style={styles.starRating}>
                        <RatingStars
                            note={base_movie.vote_average / 2}
                        />
                    </View>
                    <Text style={{ "fontSize": 10 }}>{genres.toString()}</Text>
                </View>
            </View>
        </View>
    )
}

export default MovieItemCategory

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
    },
    starRating: {
        flex: 1,
        flexDirection: "column",
        width: "30%"
    },
    detailContainer: {
        width: "100%",
        paddingTop: 10
    },
    imageItem: {
        width: 100,
        height: 160,
        margin: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    }
})