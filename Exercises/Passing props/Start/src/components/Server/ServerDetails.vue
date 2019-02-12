<template>
    <div class="col-xs-12 col-sm-6">
        <p>Server Details are currently not updated</p>
        <p>Server id: {{ id }}</p>
        <p>Current status: {{ status }}</p>
        <button>Click to set to Normal</button>


    </div>

</template>

<script>
export default {
    props: [
        'id',
        'status'
    ]
}
</script>

<style>

</style>
