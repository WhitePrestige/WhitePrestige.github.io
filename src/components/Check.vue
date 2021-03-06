<template>
  <div class="check" @click="$emit('check')">
    <input class="checkbox" type="checkbox" :checked="check">
  </div>
</template>
<script>

export default {
  name: 'Check',
  props: {
    check: Boolean,
  },
};
</script>

<style scoped lang="scss">
.check {
  .checkbox {
    height: 12px;
    outline:none;
  }
}

</style>


