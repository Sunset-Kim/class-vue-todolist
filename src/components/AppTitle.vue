<template>
    <div id="task-group">
        <h2>You've got</h2>
        <span>{{this.$store.getters.totalTaskLength}} task {{this.$store.getters.remainTaskLength}} remain</span>
    </div>
</template>

<script>
export default {

}
</script>

<style>
#task-group h2{
    font-size: 1.8rem;
    display: inline-block;
    font-weight: normal;
}
#task-group span{
    display: block;
    font-weight: bold;
    font-size: 3.2rem;
}
</style>