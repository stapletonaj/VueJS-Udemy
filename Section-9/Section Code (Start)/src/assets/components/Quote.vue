<template>
    <div>
        <!-- This is a way to pass data from a prent using slots slot is a special name from vue and is reserved for this use-->
        <!-- The styling of the child applies to the slot i.e put it here NOT in the parent-->
        <div class="title">
            <!-- if we want to pass multiple slots we can nuse the 'name' parameter to selectively display data -->
            <slot name="title"></slot>
            <!-- default slot content can be created and plased in the slot tags it'll then be overwritten when data is passed from the parent-->
            <span><slot name='subtitle'>The Subtitle</slot></span>
        </div>
        <hr>
        <div>
            <slot name="content"></slot>
        </div>
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

    .title {
        font-style: italic;

    }
</style>
