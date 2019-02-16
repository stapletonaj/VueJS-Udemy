<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
               <!-- We can use "slots" to pass data to a child component -->
               <app-quote>
                   <h1>{{ quoteTitle }}</h1>
                   <p>What a wonderful Quote</p>
               </app-quote>
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './assets/components/Quote.vue'

    export default {
        data: function() {
            return {
                quoteTitle: "A Quote",
                quote : "Such a Wonderful Quote"
                }
        },
        components: {
            "app-quote": Quote, 
        },
        
    }
</script>

<style>
</style>
