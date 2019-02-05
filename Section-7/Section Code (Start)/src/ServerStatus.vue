<template>
    <div>
        <hr>
        <p>Server = {{ status }}</p>
        <button v-on:click="changeStatus">Change Status</button>
        <br>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            status: 'critical'
        }
    },
    methods: {
        changeStatus: function(){
            this.status = "Normal"
        }
    }
}
</script>
