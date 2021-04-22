<template>
  <div id="greeting">
      <div class="greeting-group">
        <div class="time">
          <span>{{time}}</span>
        </div>
        <h2>{{messages}}</h2>
        <span class="username">name!</span>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      loop: '',
      hours: '',
      mins: '',
    }
  },
  computed: {
    time() {
      return `${this.hours < 10 ? '0' + this.hours : this.hours} : ${this.mins < 10 ? '0' + this.mins : this.mins}`
    },
    messages() {
      if(this.hours < 11 && this.hours > 5) {
        return `굳 아침`
      } else if(this.hours < 15) {
        return `굳 점심`
      } else if(this.hours < 22) {
        return `굳 저녁`
      } else {
        return `굳 잠`
      }
    }
  },
  created() {
    this.loop = setInterval(()=>{
      const date = new Date();
      this.hours = date.getHours() ;
      this.mins = date.getMinutes();
    } ,1000)
  }
}
</script>

<style>
#greeting .time {
    font-size: 1.3rem;
}
#greeting .greeting-group h2 {
    font-size: 1.5rem;
    display: inline-block;
}
#greeting .greeting-group .username {
    padding-left: 1rem;
    font-size:  1.2rem;
    text-decoration: underline;
    font-weight: bold;
}
</style>