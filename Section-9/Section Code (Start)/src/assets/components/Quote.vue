<template>
    <div>
        <!-- This is a way to pass data from a prent using slots -->
        <!-- The styling of the child applies to the slot i.e put it here NOT in the parent-->
        <slot></slot>
    </div>
    
</template>

<script>
export default {
    props: ['quote'],
}
</script>

<style scoped>
    div {
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: 30px auto;
        text-align: center;
    }
</style>
