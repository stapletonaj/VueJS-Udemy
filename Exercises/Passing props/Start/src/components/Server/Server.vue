<template>
        <li
        @click="serverSelected"
        class="list-group-item">
        Server #{{ server.id }}
        </li>
       
</template>

<script>
import { serverBus } from "../../main.js"

export default {
    props: ["server"],
    methods: {
        serverSelected(){
            serverBus.$emit("serverSelected", this.server)
        }
    }
}
   
</script>

<style>

</style>

