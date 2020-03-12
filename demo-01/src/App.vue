<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import header from "./components/header/header.component";
import footer from "./components/footer/footer.component";
Vue.component("v-header", header);
Vue.component("v-footer", footer);
import "./assets/my-style.css";
@Component
export default class App extends Vue {}
</script>

