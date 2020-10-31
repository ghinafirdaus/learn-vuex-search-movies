<template>
    <div class="movie-list">
        <div class="movie-wrap" v-if="movie.results">
            <div class="movie"  v-for="item in movie.results" :key="item.id">
                <img :src="`https://image.tmdb.org/t/p/w500${item.poster_path}`" :alt="item.original_title" />
                <div class="item-wrap">
                    <h5>{{ item.original_title }}</h5>
                    <p><b>Ratings:</b> {{item.vote_average}}</p>
                    <p><b>Release Date:</b> {{item.release_date}}</p>
                    <p><b>Overview</b><br>{{ item.overview }}</p>
                </div>        
            </div>
        </div>
        <div v-else>Data Kosong</div>
    </div>
</template>

<script>
export default {
name: 'List',
computed:{
    movie(){
        return this.$store.state.movies
    }
},
created(){
    this.$store.dispatch('fetchMovie')
}
}
</script>

<style>
</style>