<template>
    <div class="container">
        <header-component></header-component>
        <hr>
        <div class="row">
            <server-list></server-list>
            <side-bar></side-bar>
        </div>
        <hr>
        <footer-cmp></footer-cmp>
    </div>
</template>

<script>
//this imports compenents locally - I think...
//the global components are in the main.js file imported as Vue.Components...
import SideBar from './components/SideBar.vue';
import Footer from './components/Footer.vue';
export default {
    components: {
        'side-bar': SideBar,
        'footer-cmp': Footer
    }
}

</script>


<style>

</style>
