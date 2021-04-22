<template>
  <div id="app">
    <div class="background">
      <div class="row-10">
        <app-header></app-header>
      </div>
      <div class="row-20">
        <app-greeting></app-greeting>
      </div>
      <div class="row-10">
        <app-title></app-title>
      </div>
      <div class="row-10">
        <app-input></app-input>
      </div>
    </div>
    
    <div class="row-10">
      <app-control></app-control>
    </div>
    <div class="row-10">
      <app-list></app-list>
    </div>
    <div class="row-10">
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
import {store} from './store/store.js'
import AppHeader from './components/AppHeader'
import AppGreeting from './components/AppGreeting'
import AppTitle from './components/AppTitle'
import AppInput from './components/AppInput'
import AppControl from './components/AppControl'
import AppList from './components/AppList'
import AppFooter from './components/AppFooter'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppGreeting,
    AppInput,
    AppControl,
    AppList,
    AppTitle,
    AppFooter
  },
  store,
}
</script>

<style>
.row-10 {
  margin: 10px 0;
}
.row-20 {
  margin: 20px 0;
}
.background {
  border: 1px solid black;
  padding: 1rem;
}
#app {
  max-width: 500px;
  margin: 0 auto;
  padding: 0 1rem;
}
</style>
