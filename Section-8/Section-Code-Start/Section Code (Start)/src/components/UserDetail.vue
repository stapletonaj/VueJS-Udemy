<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ myName }}</p>
        <p>User Age: {{ age }}</p>
        <button v-on:click='resetName'>Reset</button>
        <button v-on:click='resetFn'>Reset passed from parent</button>
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
            },
            resetFn: Function, //this is a function that has been passed from the parent and we can put in to a button (above)
            age : Number
        },
        methods: {
            switchName () {
                return this.myName.split("").reverse().join("")
            },
            resetName: function() {
                this.myName = 'Reset Andy';
                this.$emit('nameWasReset', this.myName);
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
