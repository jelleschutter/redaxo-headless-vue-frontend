<template>
  <div class="page-content">
    <h1 class="article-title">{{ data.title }}</h1>
    <main @click="click" v-html="data.content"></main>
    <footer>
      <hr />
      <p>
        Made with ❤️ by
        <a href="https://github.com/jelleschutter">Jelle Schutter</a>
      </p>
    </footer>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import axios from "axios";

const router = ref();
const data = ref("");

const updateData = (to, from, next) => {
  const path = to.fullPath.substr(1);

  axios
    .get(
      `${process.env.VUE_APP_API_URL}/?rex-api-call=headless_content&path=${path}`
    )
    .then((response) => (data.value = response.data));

  next();
};

export default {
  setup() {
    watch(data, (data) => {
      document.title = data.meta.title;
    });

    const click = (event) => {
      if (
        event.target.tagName === "A" &&
        event.target.attributes.href.value.substr(0, 1) === "/"
      ) {
        event.preventDefault();
        router.value.push({ path: event.target.attributes.href.value });
        return false;
      }
    };

    return {
      data,
      click,
    };
  },
  mounted() {
    router.value = this.$router;
  },
  beforeRouteEnter: updateData,
  beforeRouteUpdate: updateData,
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

  ::v-deep(main) {
    width: 100%;

    figure {
      margin: 0 auto;
      max-width: 100%;

      img {
        margin: 0 auto;
        max-width: 100%;
      }

      figcaption {
        text-align: center;
        font-style: italic;
        padding: 15px 0;
      }
    }

    p {
      text-align: justify;
    }
  }

  footer {
    padding: 20px 0;

    hr {
      border: none;
      border-top: 1px solid #2c3e50;
      margin: 0 auto;
      width: 16%;
    }

    p {
      text-align: center;
      margin-top: 23px;
    }
  }
}
</style>
