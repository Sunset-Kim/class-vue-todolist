<template>
  <div id="app-control">
    <select name="order" id="order" v-on:change="sortList">
      <option value="default">정렬순서</option>
      <option value="asc-date">asc-date</option>
      <option value="dec-date">dec-date</option>
    </select>
    <button v-on:click="clearAll()" class="btn-delete">Clear All</button>
  </div>
</template>

<script>
export default {
  methods: {
    sortList(e){
      this.$store.commit('sortList',e.target.value)
    },
    clearAll() {
      this.$store.commit('clearAll')
    }
  }

}
</script>

<style>
#app-control {
  display: flex;
  max-width: 500px;
  justify-content: space-between;
}

#app-control select {
  width: 100px;
  height: 25px;
  border: 1px solid black;
  font-size: 1rem;
}

#app-control .btn-delete {
  font-size: 1.1rem;
  transition: 0.3s;
}

#app-control .btn-delete:hover {
  color: red;
}

</style>