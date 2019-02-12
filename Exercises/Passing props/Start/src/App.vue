<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <servers></servers>
            <app-server-details
                :server = "server"
                @serverDetailsChanged = "updateDetails()">
            </app-server-details>
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
            appHeader: Header,
            servers: Servers,
            'app-server-details': ServerDetails,
            'app-footer': Footer
        },
        data: function() {
            return {server: {id: 0, status: "Normal"}}
        },
        methods:{
            updateDetails(e) {
                console.log(e);
            }
        }
    }
</script>

<style>

</style>
