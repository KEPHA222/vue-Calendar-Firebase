import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({

  apiKey: "AIzaSyBC-lI8Xvrs821-blMJ9mSsOzAHuy6vhno",
  authDomain: "vue-calendar-af013.firebaseapp.com",
  databaseURL: "https://vue-calendar-af013.firebaseio.com",
  projectId: "vue-calendar-af013",
  storageBucket: "vue-calendar-af013.appspot.com",
  messagingSenderId: "295438437741",
  appId: "1:295438437741:web:f964b460878f0576e71e64"

});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
