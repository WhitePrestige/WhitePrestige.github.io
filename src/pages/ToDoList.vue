<template>
  <div class="tdl-page">
    <div class="tdl-page__container">
      <div class="tdl-page__counter">
        <span class="tdl-page__counter_wrapper">
          <span class="from">{{ getCheckedTasks() }}</span>
          <span class="column">
            <div class="text">tasks</div>
            <span class="to">/ {{ tasks.length }}</span>
          </span>
        </span>
      </div>
      <div class="tdl-page__header">
        <span class="tdl-page__input-wrapper">
          <span class="input_label">Your toDo</span>
          <input type="text" class="input" v-model="message">
        </span>
        <span class="add-button" @click="addMessage">+</span>
      </div>
      <div class="tdl-page__sort">
        сортировать по:
        <span class="my-btn" @click="sort('byDone')">
          выполненному ▲
        </span>
        <span class="my-btn" @click="sort('byDoneDescending')">
          выполненному ▼
        </span>
        <span class="my-btn" @click="sort('byMessage')">
          сообщению
        </span>
      </div>
      <div class="task__container">
        <div class="task" v-for="task in tasks">
          <check class="task__id" @check="checkTask(task)" :check="task.checked"></check>
          <to-do-message :task="task" @update-tasks="updateTasks"></to-do-message>
          <span @click="deleteTask(task.id)" class="task__delete">
            удалить
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import ToDoMessage from '@/components/toDo/ToDoMessage.vue'
import Check from '@/components/Check.vue'

export default {
  name: 'ToDoList',
  components: {
    Check,
    ToDoMessage
  },
  data() {
    return {
      tasks: this.getTasksFromLS() || [],
      message: '',
      id: 0
    }
  },
  methods: {
    addMessage() {
      const data = { id: this.id, message: this.message, checked: false }

      if (!this.message) {
        return;
      }

      this.tasks.push(data)
      this.id += 1
      this.message = ''

      localStorage.setItem('to-do-list', JSON.stringify(this.tasks));
    },
    getTasksFromLS() {
      return JSON.parse(localStorage.getItem('to-do-list'))
    },
    deleteTask(id) {
      const taskIndex = this.tasks.findIndex(task => task.id === id);
      if (taskIndex !== -1) {
        this.tasks.splice(taskIndex, 1);
      }

      localStorage.setItem('to-do-list', JSON.stringify(this.tasks));
    },
    sort(sortParam) {
      switch(sortParam) {
        case 'byDone':
          return this.tasks.sort(function (a, b) {
            if (a.checked < b.checked) {
              return 1;
            }
            if (a.checked > b.checked) {
              return -1;
            }

            return 0;
          })
        case 'byDoneDescending':
          return this.tasks.sort(function (a, b) {
            if (a.checked > b.checked) {
              return 1;
            }
            if (a.checked < b.checked) {
              return -1;
            }

            return 0;
          })
        case 'byMessage':
          return this.tasks.sort(function (a, b) {
            if (a.message > b.message) {
              return 1;
            }
            if (a.message < b.message) {
              return -1;
            }

            return 0;
          })
      }
    },
    checkTask(task) {
      task.checked = !task.checked;
      localStorage.setItem('to-do-list', JSON.stringify(this.tasks));
    },
    updateTasks() {
      localStorage.setItem('to-do-list', JSON.stringify(this.tasks));
    },
    getCheckedTasks() {
      return this.tasks.filter( t => Boolean(t.checked) ).length
    }
  },
};

</script>

<style scoped lang="scss">
.tdl-page {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: antiquewhite;

  &__container {
    width: 600px;
    max-height: 600px;
    height: 600px;
    background-color: peachpuff;
  }

  &__header {
    height: 100px;
    background-color: Moccasin;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  &__sort {
    display: flex;
  }

  &__input-wrapper {
    flex: 0 0 70%;

    .input {
      border: none;
      height: 30px;
      padding: 0 16px;
      width: 100%;
      outline:none;

      &_label {
        display: flex;
      }
    }
  }

  &__counter {
    height: 40px;
    background-color: PapayaWhip;

    &_wrapper {
      display: flex;
      padding: 0 24px;
      align-items: center;
      height: 46px;
    }

    .from {
      font-size: 50px;
    }

    .column {
      display: flex;
      flex-direction: column;
    }
  }
}

.add-button {
  height: 70px;
  width: 70px;
  border-radius: 50%;
  background-color: PapayaWhip;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select:none;
  font-size: 48px;

  &:active {
    transition: all 0.2s;
    background: #F1E3CB;
  }
}

.task {
  display: flex;
  height: 36px;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  border-bottom: 1px solid #a4a4a4;

  &__container {
    height: 460px;
    overflow: scroll;
  }

  &__id {
    flex: 0 0 10%;
    cursor: pointer;
    user-select:none;
  }

  &__message {
    flex: 0 0 80%;
    text-align: initial;

    &_checked {
      text-decoration: line-through;
    }
  }

  &__delete {
    flex: 0 0 10%;
    cursor: pointer;
    outline: none;

    &_img {
      display: block;
      height: 20px;
      width: 20px;
    }
  }
}

.my-btn {
  height: 20px;
  width: fit-content;
  padding: 0 10px;
  display: block;
  background-color: PapayaWhip;
  border-radius: 10px;
  cursor: pointer;
  user-select:none;
  margin-left: 10px;
}

</style>
