<template>
    <div class="search">
        <input type="search" v-model="search" placeholder="Search Movie"/>
        <button v-on:click="searchBtn">Search</button>
    </div>
</template>

<script>
export default {
    name: 'Search',
    data() {
        return{
            search: ''
        }
    },
    created(){
    this.$store.dispatch('searchMovie')
    },
    computed: {
        movie() {
            return this.$store.state.movies
        }
    },
    methods: {
        searchBtn: function() {
            this.$store.dispatch('searchMovie', this.search)
        }
    },
    // watch: {
    // search: function (val) {
    //   this.$store.dispatch('searchMovie', val)
    // }
    // }
}
</script>

<style>
</style>