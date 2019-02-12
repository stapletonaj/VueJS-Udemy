<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
                    class="list-group-item"
                    v-for="server in servers"
                    @click = "serverClicked(server)">
                Server #{{ server.id }},
                Status = {{ server.status }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                servers: [
                    {id: 1, status: 'Normal'},
                    {id: 2, status: 'Critical'},
                    {id: 3, status: 'Unknown'},
                    {id: 4, status: 'Normal'},
                ]
            }
        },
        methods: {
            serverClicked(server){
                this.$emit("serverDetailsChanged", server);
            }
        }
    }
</script>

<style>

</style>
