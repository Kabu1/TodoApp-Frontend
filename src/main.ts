import { createApp } from 'vue';
import App from './App.vue';
import  VuePageTransition  from 'vue-page-transition';

import router from './router';
import store from './store';
import './assets/css/tailwind.css'

// import './assets/css/main.scss';

const app = createApp(App)
// app.config.productionTip = false
app.use(VuePageTransition)
// app.use(VuePageTransition)
app.use(router)
app.use(store)

app.mount('#app')
