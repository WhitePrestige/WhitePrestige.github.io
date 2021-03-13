<template>
  <div class="app-list">
    <router-link class="app-list__item" to="/to-do-list">to do list</router-link>
    <router-link class="app-list__item" to="/drag-drop">drag and drop</router-link>
  </div>
</template>

<script>
export default {
  name: 'AppList',
  props: {
    msg: String
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.app-list {
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;

  &__item {
    width: 50%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-decoration: none;
    color: black;
    font-size: 20px;
    transition-duration: 0.5s;

    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
