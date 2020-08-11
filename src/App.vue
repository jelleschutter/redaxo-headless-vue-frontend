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
        `${process.env.VUE_APP_API_URL}/?rex-api-call=headless_nav&path=${path}&levels=1`
      )
      .then(response => (nav.value = response.data));
  },
  components: {
    NavItem
  }
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  text-align: center;

  a {
    font-weight: bold;

    &:not(:last-child) {
      margin-right: 10px;
    }

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

::v-deep(a, a:active) {
  color: inherit;
}
</style>
