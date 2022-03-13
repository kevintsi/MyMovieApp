import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react'
import MovieList from "./components/MovieList/MovieList"
import { api_call } from './components/Api/Api';

export default function App() {

  const [popularMovies, setPopularMovies] = useState([])
  const [topRatedMovies, setTopRatedMovies] = useState([])

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

  useEffect(() => {
    getPopularMovies()
  }, [])

  useEffect(() => {
    getTopsRatedMovies()
  }, [])


  return (
    <View style={styles.container}>
      <Text>Films</Text>
      {popularMovies.length != 0 ? <MovieList movies={popularMovies} titleCategory="Populaire" /> : <Text>Pas de films pour cette catégorie</Text>}
      {topRatedMovies.length != 0 ? <MovieList movies={topRatedMovies} titleCategory="Mieux notés" /> : <Text>Pas de films pour cette catégorie</Text>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
