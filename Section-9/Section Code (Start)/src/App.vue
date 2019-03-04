<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent = 'app-quote'">Quote</button>
                <button @click="selectedComponent = 'appAuthor'">Author</button>
                <button @click="selectedComponent = 'appNew'">New</button>
                <hr>
                <p>{{selectedComponent}}</p>
               <!--  is keyword is used to dynamically show components like below: -->
                <keep-alive>
                    <component :is="selectedComponent"></component>
                </keep-alive>
               <!-- We can use "slots" to pass data to a child component -->
               <!-- <app-quote>
                   <h1 slot="title">{{ quoteTitle }}</h1>
                   <p slot="content">What a wonderful Quote</p>
               </app-quote> -->

            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './assets/components/Quote.vue';
    import Author from './assets/components/Author.vue';
    import New from './assets/components/New.vue';

    export default {
        data: function() {
            return {
                quoteTitle: "A Quote",
                quote : "Such a Wonderful Quote",
                selectedComponent: "app-quote"
                }
        },
        components: {
            "app-quote": Quote, 
            appAuthor: Author,
            appNew: New,
        },
        
    }
</script>

<style>
</style>
