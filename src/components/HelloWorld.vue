<script setup>
import { ref } from 'vue'
import WebApp from '@twa-dev/sdk'
defineProps({
  msg: String,
})

const showAlert = () => {
  WebApp.showAlert(`调用TG的结果`)
}

const goMame = () => {
 location.href="https://heixiaoma.github.io/mini-tg/piano/"
}
const goMame1 = () => {
  location.href="https://heixiaoma.github.io/mini-tg/knight/"
}

const data = ref(WebApp.initDataUnsafe)


</script>

<template>
  <button type="button" @click="showAlert">显示TG警告测试</button>

  <div><button type="button" @click="goMame">前往游戏</button></div>
  <div><button type="button" @click="goMame1">前往webgl游戏</button></div>
  <div>{{data}}</div>


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
