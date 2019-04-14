<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="selectedComponent = 'app-blue'">Load Blue Template</button>
                <button class="btn btn-success" @click="selectedComponent = 'app-green'">Load Green Template</button>
                <button class="btn btn-danger" @click="selectedComponent = 'app-red'">Load Red Template</button>
                <hr>
                
                <component :is="selectedComponent">
                    <h1 slot="title">Title</h1>
                </component>
                
                <!-- <app-blue>
                    <h1 slot="title">Blue Title</h1>
                </app-blue>
                <app-green>
                    <h1 slot="title">Green Title</h1>
                </app-green>
                <app-red>
                    <h1 slot="title">Red Title</h1>
                </app-red> -->
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        },
        data: function() {
            return { 
                selectedComponent: "app-blue",
            }
        }
    }
</script>

<style>
</style>
