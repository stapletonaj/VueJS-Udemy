<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User age: {{ age }}</p>
        <button v-on:click='editAge'>Edit Age</button>
    </div>
</template>

<script>
export default {
    props:{
        age: Number
    },
    methods: {
        editAge() {
            this.age = 30;
            this.$emit("ageWasChanged", this.age)
        }
    }
}
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
