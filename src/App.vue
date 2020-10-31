<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Search/>
    <Movie/>
  </div>
</template>

<script>
import Movie from './components/Movie.vue'
import Search from './components/Search.vue'

export default {
  name: 'App',
  components: {
    Movie,
    Search
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.movie {
    display: flex;
    margin: auto;
    width: 1000px;
}
.movie img {
    width: auto;
    height: 500px;
    padding: 0 20px 40px 0;
}

.item-wrap h5 {
    margin: 0;
    padding: 0;
    font-size: 2rem;
    width: 100%;
}

.item-wrap p {
    margin: 10px 0;
    padding: 0;
    line-height: 1.5rem;
    font-size: 1rem;
    text-align: justify;
}
</style>
