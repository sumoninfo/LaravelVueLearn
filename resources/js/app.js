require('./bootstrap');

window.Vue = require('vue');
import InfiniteLoading from 'vue-infinite-loading';

Vue.use(InfiniteLoading, { /* options */ });

//support vuex
import Vuex from 'vuex'
Vue.use(Vuex)
import storeData from "./store/index"


const store = new Vuex.Store(
    storeData
)
Vue.component('article-component', require('./components/ArticleComponent.vue').default);
// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
// Vue.component('post-component', require('./components/Post.vue').default);

const app = new Vue({
    el: '#app',
    store, //vuex

});
