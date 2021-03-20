import Vue from 'vue';

Vue.directive('drag-drop', {
  bind: (el) => {
    el.onmousedown = function(e) { // 1. отследить нажатие

      // подготовить к перемещению
      // 2. разместить на том же месте, но в абсолютных координатах
      el.style.position = 'absolute';
      moveAt(e);
      // переместим в body, чтобы мяч был точно не внутри position:relative
      document.body.appendChild(el);

      el.style.zIndex = 1000; // показывать мяч над другими элементами

      // передвинуть мяч под координаты курсора
      // и сдвинуть на половину ширины/высоты для центрирования
      function moveAt(e) {
        el.style.left = e.pageX - el.offsetWidth / 2 + 'px';
        el.style.top = e.pageY - el.offsetHeight / 2 + 'px';
      }

      // 3, перемещать по экрану
      document.onmousemove = function(e) {
        moveAt(e);
      }

      // 4. отследить окончание переноса
      el.onmouseup = function() {
        document.onmousemove = null;
        el.onmouseup = null;
      }
    }
  },
});
