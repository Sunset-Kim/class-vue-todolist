<template>
  <div id="task-input">
      <form action="" v-on:submit="submitInput">
          <input type="text" v-model="inputValue" placeholder="Enter your task">
          <button type="submit">
              <i class="fa fa-arrow-right" aria-hidden="true"></i>
          </button>
      </form>
  </div>
</template>

<script>
export default {
    data() {
        return{
            inputValue: '',     
        }
    },
    methods: {
        submitInput(e) {
            e.preventDefault();
            if(this.inputValue === '') {
                return
            }
            this.$store.commit('addNewTask',this.inputValue);
            this.inputValue = '';
        }
    }
}
</script>

<style scoped>
form {
    position: relative;
    max-width: 300px;
}
input {
    width: 100%;
    height: 3rem;
    border: 1px solid red;
    padding-left: 1rem;
    font-size: 1rem;
}
input::placeholder {
    color: #999;
    opacity: 1;
    transition: 0.3s;
}
input:focus::placeholder {
    opacity: 0;
}
button {
    position: absolute;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    right: .5rem;
    top: 50%;
    width: 1.5rem;
    height: 1.5rem;
    transform: translateY(-50%);
    border-radius: 50%;   
}
button i {
    font-size: 1rem;
}
</style>