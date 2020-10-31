import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        movies: {}
    },
    mutations: {
        addMovies(state, movie){
            state.movies = movie
        },
        filterMovie(state, movie){
            state.movies.results = movie
        }
    },
    actions:{
        fetchMovie({ commit }){
            axios('https://api.themoviedb.org/3/movie/now_playing?api_key=97647475ef93b1df64b746627b4b09e4')
                .then(res => {
                    console.log(res)
                    commit('addMovies', res.data)
                })
                .catch(err => console.log(err))
        },
        searchMovie({ commit }, payload){
            console.log(payload);
            //baca documentasi untuk search https://developers.themoviedb.org/3/search/search-movies
            axios(`https://api.themoviedb.org/3/search/movie?api_key=97647475ef93b1df64b746627b4b09e4&language=en-US&query=${payload}&page=1&include_adult=false`)
                .then(res => {
                    console.log(res)
                    commit('addMovies', res.data) 
                })
                .catch(err => console.log(err))
        },
        filtered({ commit, state}, payload) {
            console.log(state.movies.results)
            let i = state.movies.results.filter((item) => {
                return item.original_title.match(payload)
            });
            console.log(i)
            commit ('filterMovie', i)
        }
    }
})

export default store;