<template>
  <div class="td-message">
    <div v-if="!editMode" class="message">
      <span :class="{'message_checked': task.checked}"  @click="editMessage">{{ task.message }}</span>
    </div>
    <div v-else>
      <input ref='input' type="text" class="input" v-model="message">
      <span @click="saveMessage" class="message_save">
        save
      </span>
    </div>

  </div>
</template>
<script>

export default {
  name: 'ToDoMessage',
  props: {
    task: Object,
  },
  data() {
    return {
      message: this.task.message || '',
      editMode: false,
    }
  },
  methods: {
    editMessage() {
      if (this.task.checked) {
        return;
      }

      this.editMode = true;
      setTimeout(() => {
        this.$refs.input.focus();
      }, 100)
    },
    saveMessage() {
      this.task.message = this.message;
      this.editMode = false;

      this.$emit('update-tasks')
    }
  }
};

</script>
<style scoped lang="scss">
.td-message {
  width: 100%;
  display: flex;
}

.message {

  &_checked {
    text-decoration: line-through;
  }

  &_save {
    font-weight: bold;
    cursor: pointer;
    outline: none;
  }
}

.input {
  border: none;
  outline: none;
  height: 26px;
  font-size: 16px;
  width: 380px;
}

</style>
