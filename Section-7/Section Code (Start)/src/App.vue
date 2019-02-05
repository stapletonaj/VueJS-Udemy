<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Components</h1>
                <p> {{status}} </p>
            </div>
        </div>
    <app-servers></app-servers>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                status: 'Critical'
            }
        }
    }
</script>

<style>

</style>
