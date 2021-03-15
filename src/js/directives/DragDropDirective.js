import Vue from 'vue';

Vue.directive('drag-drop', {
  bind: (el) => {
    console.log(el)
  },
});
