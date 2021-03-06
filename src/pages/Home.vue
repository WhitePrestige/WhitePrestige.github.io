<template>
  <div class="home-page">
    <div class="home-page__container">
      <h1>Привет</h1>
      <h2>Вот мои приложения:</h2>
      <app-list class="app-list"></app-list>
    </div>

    <span class="home-page__links">
      <a @click="openLink('https://www.instagram.com/white.prestige')">white.prestige</a>
    </span>
  </div>
</template>

<script>
// @ is an alias to /src
import AppList from '@/components/AppList.vue'

export default {
  name: 'Home',
  components: {
    AppList
  },
  methods: {
    openLink(link) {
      window.open(link);
    }
  }
}
</script>

<style scoped lang="scss">
.home-page {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: antiquewhite;

  &__container {
    width: 600px;
    height: 600px;
    background-color: #ffe1ba;
    display: flex;
    flex-direction: column;
  }

  &__links {
    cursor: pointer;
    position: absolute;
    bottom: 10px;
    transition-duration: 0.5s;

    &:hover {
      transform: scale(1.1);
    }

    a {
      text-decoration: none;
      color: black;

    }
  }
}

.app-list {
  display: flex;
  flex-grow: 1;
  background-color: #fdd8a8;
}
</style>
