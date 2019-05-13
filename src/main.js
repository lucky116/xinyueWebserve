import Vue from 'vue'
import App from './App.vue'
import Element from "element-ui";
import Cookies from "js-cookie";
import router from "./router";
import store from "./store";
import * as _ from "lodash";
import "@/styles/index.scss"; // global css
import * as filters from "./filter"; // global filters

Vue.use(Element, {
    size: Cookies.get("size") || "medium", // set element-ui default size
});

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key]);
});

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
