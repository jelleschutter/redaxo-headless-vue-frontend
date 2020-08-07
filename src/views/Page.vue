<template>
  <div class="page-content">
    <h1 class="article-title">{{ data.title }}</h1>
    <main v-html="data.content"></main>
    <footer>
      &copy; 2020 -
      <a href="https://github.com/jelleschutter">Jelle Schutter</a>
    </footer>
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

<style lang="scss" scoped>
.article-title {
  text-align: center;
}

.page-content {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;

  main {
    width: 100%;

    &::v-deep {
      figure {
        margin: 0 auto;
        max-width: 100%;

        img {
          margin: 0 auto;
          max-width: 100%;
        }

        figcaption {
          text-align: center;
        }
      }

      p {
        text-align: justify;
      }
    }
  }

  footer {
    text-align: center;
  }
}
</style>
