<script setup>
import { ref } from 'vue'
import WebApp from '@twa-dev/sdk'
defineProps({
  msg: String,
})

const showAlert = () => {
  WebApp.showAlert(`调用TG的结果`)
}
</script>

<template>
  <button type="button" @click="showAlert">显示TG警告</button>

  <div class="container">
    <iframe frameborder="0" scrolling="no" width="100%" height="100%" src="http://43.134.134.90:8888/mini-game/piano">
    </iframe>
  </div>

</template>

<style scoped>
/* 去除 iframe 边框 */
iframe {
  border: none;
  width: 100vw;
  height: 100vh;
}

/* 让 iframe 充满父容器 */
.container {
  margin: 0 auto;
  position: relative;
  width: 100vw;
  height: 0;
  padding-top: 56.25%; /* 16:9 比例 */
}
.read-the-docs {
  color: #888;
}
</style>
