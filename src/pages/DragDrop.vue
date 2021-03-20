<template>
  <div class="drag-drop-page">
    <div v-for="item in cubes">
      <div v-drag-drop class="draggable" :style="{ backgroundColor: item.color }">
        {{ item.id }}
      </div>
    </div>
    <button @click="addCube">Добавить кубик</button>
  </div>
</template>

<script>
import {colors} from '@/js/constants/colors.js'

export default {
  name: 'DragDrop',
  methods: {
    addCube() {
      this.cubes.push({id: this.id, color: colors[this.id]})
      this.id++
    }
  },
  data() {
    return {
      id: 0,
      cubes: [],
    }
  },
}
</script>

<style>
.drag-drop-page {
  outline: none;
}

.draggable {
  height: 50px;
  width: 50px;
  overflow: hidden;
  cursor: pointer;
}

button {
  position: absolute;
  bottom: 0;
  width: 180px;
  height: 50px;
}

</style>
