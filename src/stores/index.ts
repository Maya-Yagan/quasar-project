import { store } from 'quasar/wrappers';
import { createPinia } from 'pinia';
import { Router } from 'vue-router';
import App from '../App.vue';
import { createApp } from 'vue';
import { auth } from '../boot/firebase';
/*
 * When adding new properties to stores, you should also
 * extend the `PiniaCustomProperties` interface.
 * @see https://pinia.vuejs.org/core-concepts/plugins.html#typing-new-store-properties
 */
auth.onAuthStateChanged(() => {
  createApp(App).mount('#app');
});
declare module 'pinia' {
  export interface PiniaCustomProperties {
    readonly router: Router;
  }
}
const app = createApp(App);
app.use(createPinia());

app.mount('#app');

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store((/* { ssrContext } */) => {
  const pinia = createPinia();

  // You can add Pinia plugins here
  // pinia.use(SomePiniaPlugin)

  return pinia;
});
