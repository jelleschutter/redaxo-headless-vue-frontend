<template>
  <router-link :to="link">{{ name }}</router-link>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
      default: ""
    },
    link: {
      type: String,
      required: true,
      default: ""
    },
    active: {
      type: Boolean,
      required: true,
      default: false
    },
    children: {
      required: true,
      default: []
    }
  }
};
</script>
