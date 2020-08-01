<template>
  <div id="app">
    <div id="nav">
      <NavItem
        v-for="item in nav"
        v-bind:key="item.id"
        :name="item.name"
        :link="item.link"
      ></NavItem>
    </div>
    <router-view />
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import NavItem from "./components/NavItem";

const nav = ref([]);

export default {
  setup() {
    return {
      nav
    };
  },
  mounted() {
    const path = this.$root.$route.fullPath.substr(1);

    axios
      .get(
        `http://redaxo.localhost/?rex-api-call=headless_nav&path=${path}&levels=1`
      )
      .then(response => (nav.value = response.data));
  },
  components: {
    NavItem
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a:not(:last-child) {
  margin-right: 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
