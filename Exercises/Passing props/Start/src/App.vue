<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <servers></servers>
            <app-server-details></app-server-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from './components/Shared/Header.vue';
    import Footer from './components/Shared/Footer.vue';
    import Servers from './components/Server/Servers.vue';
    import ServerDetails from './components/Server/ServerDetails.vue';

    export default {
        components: {
            "appHeader": Header,
            "servers": Servers,
            'app-server-details': ServerDetails,
            'app-footer': Footer
        },
        methods:{
            updateDetails(event) {
                this.id = event.id;
                this.status = event.status;
            },
            setServer() {
                this.status = "Normal"
            }   
        }
    }
    
</script>

<style>

</style>
