<template>
  <div class="about">
    <h1>{{ data.title }}</h1>
    <main v-html="data.content"></main>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import axios from "axios";

const data = ref("");

export default {
  setup() {
    watch(data, data => {
      document.title = data.meta.title;
    });

    return {
      data
    };
  },
  beforeRouteEnter(to, from, next) {
    const path = to.fullPath.substr(1);

    axios
      .get(`http://redaxo.localhost/?rex-api-call=headless&path=${path}`)
      .then(response => (data.value = response.data));

    next();
  }
};
</script>
