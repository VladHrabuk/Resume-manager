<template>
  <h3 class="resume-title">{{ title }}</h3>
  <ul>
    <li v-for="(item, index) in items" :key="index">
      <a v-if="isLink(item)" :href="item" target="_blank">{{ item }}</a>
      <span v-else>{{ item }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
  methods: {
    isLink(item) {
      return item.startsWith("http://") || item.startsWith("https://");
    },
  },
};
</script>

<style scoped>
ul {
  padding-left: 20px;
}

li::marker {
  color: rgb(0, 161, 255);
}
</style>
