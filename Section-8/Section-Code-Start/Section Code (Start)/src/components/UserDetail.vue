<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{ myName }}</p>
    </div>
</template>

<script>
    export default {
        //validation with an object in the props object.
        //by adding validation I can check the data and throw an error if it is 
        props: {
            myName: {
                type: String,
                required: true,
                //default: "Andy" - can be used 
            }
        },
        methods: {
            switchName () {
                return this.myName.split("").reverse().join("")
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
