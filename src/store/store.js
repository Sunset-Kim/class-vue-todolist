import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
// common js
import getDate from '../common/date.js'



const storage = {
  fetch(){
    let arr = [];
    for(let i = 0; i < localStorage.length; i++) {
      if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
        arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
      }
    }
    arr.sort((a,b)=> {
      return a.time - b.time;
    })
    return arr;
  }
}
  
export const store = new Vuex.Store({
    state: {
      task: storage.fetch(),
      today: {
        month: getDate().month,
        date: getDate().date,
        day: getDate().day,
      }
    },
    mutations: {
      addNewTask(state, inputValue) {
        localStorage.setItem(inputValue,inputValue)
        console.log(getDate())
        let obj = {
          name: inputValue,
          time: getDate().time,
          dateFomat: `${getDate().month}/${getDate().date} ${getDate().hour}:${getDate().min}`,
          completed: false
        }
        state.task.push(obj);
        localStorage.setItem(obj.name,JSON.stringify(obj));
      },

      removeTask(state,payload) {
        state.task.splice(payload.index,1);
        localStorage.removeItem(payload.item.name);
      },
      toggleComplete(state, payload){
        state.task[payload.index].completed = !state.task[payload.index].completed;
        localStorage.setItem(state.task[payload.index].name, JSON.stringify(state.task[payload.index]));
      },
      sortList(state, payload) {
        if(payload === 'dec-date') {
          console.log('내림차순');
          state.task.sort((a,b)=> {
            return a.time - b.time;
          })
        } else if (payload === 'asc-date') {
          console.log('오름차순');
          state.task.sort((a,b)=> {
            return b.time - a.time;
          })
        }
      },
      clearAll(state){
        state.task = [];
        localStorage.clear();
      }

    }
  })