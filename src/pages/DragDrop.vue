<template>
  <div class="drag-drop-page">
    <div id='cube' v-drag-drop class="draggable"></div>
  </div>
</template>

<script>
export default {
  name: 'DragDrop',
}
</script>

<style>
.draggable {
  height: 50px;
  width: 50px;
  background-color: darkolivegreen;
}

</style>
