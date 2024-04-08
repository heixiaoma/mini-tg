import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import WebApp from '@twa-dev/sdk'

/**
 * WebApp.ready() - 是一个方法，向 Telegram 应用程序通知小程序已准备好显示
 * 建议尽可能早地调用此方法，一旦加载了所有必要的接口元素。一旦调用此方法，加载的占位符将被隐藏，小程序将被显示。
 */
WebApp.ready();
createApp(App).mount('#app')
