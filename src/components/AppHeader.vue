<template>
  <div id="header"> 
    <div class="title">
      Focus on your Dream</div>
    <div class="date">
        <span>{{today}}</span>
    </div>
  </div>
</template>

<script>

export default {
    data() {
        return{
            today: `${this.$store.state.today.month}월 ${this.$store.state.today.date}일 ${this.$store.state.today.day}`,
        }
    },
}
</script>

<style>
#header {
    display: flex;
    justify-content: space-between;
}
.title {
  font-weight: bold;
}
</style>