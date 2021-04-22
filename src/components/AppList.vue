<template>
  <div>
      <ul class="task-list">
          <li
           class="task-item"
           v-for="(item,index) in this.$store.state.task"
           :key="index"
           v-bind:class="{completed:item.completed}"
           >
              <span v-on:click="toggleComplete(item,index)" class="btn-completed"></span>
              <span class="task-content">{{item.name}}</span>
              <div class="task-info">
                  <div v-on:click="removeItem(item,index)" class="btn-delete">
                      <i class="fa fa-times" aria-hidden="true"></i>
                  </div>
                  <span class="task-date">{{item.dateFomat}}</span>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    methods: {
        removeItem(item,index) {
            this.$store.commit('removeTask', {item,index})
        },
        toggleComplete(item,index) {
            this.$store.commit('toggleComplete', {item,index})
        }
    }
}
</script>

<style>
.task-item {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 500px;
    height: 5rem;
    padding: 1rem;
    margin-bottom: 1rem;
    border: 1px solid black;
}
.task-item .btn-completed {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 2rem;
    border-radius: 50%;
    border: 1px solid black;
    cursor: pointer;
    transition: 0.3s ease-in-out;
}
.task-item .btn-completed:hover {
    background: red;
}
.task-item.completed .btn-completed {
    background: gray;
    border: 1px solid gray;
}
.task-item .task-content {
    flex: 1;
    max-width: 250px;
    font-size: 1.1rem;
}
.task-item.completed .task-content {
    text-decoration: line-through;
    color: #999;
    font-style: italic;
}
.task-item .task-info {
    text-align: right;
    right: 1rem;
}
.task-item .btn-delete {
    font-size: 1.2rem;
    cursor: pointer;
    transition: 0.3s ease-in-out;
}
.task-item .btn-delete:hover {
    color: red;
}
</style>