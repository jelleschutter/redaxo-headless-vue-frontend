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

const updateData = (to, from, next) => {
  const path = to.fullPath.substr(1);

  axios
    .get(
      `${process.env.VUE_APP_API_URL}/?rex-api-call=headless_content&path=${path}`
    )
    .then(response => (data.value = response.data));

  next();
};

export default {
  setup() {
    watch(data, data => {
      document.title = data.meta.title;
    });

    return {
      data
    };
  },
  beforeRouteEnter: updateData,
  beforeRouteUpdate: updateData
};
</script>
