<template>
  <div class="border">
    <h2>{{ title }}</h2>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
h2 {
  color: #333;
}

.border {
  border: 2px solid #00bfff;
  border-radius: 10px;
  padding: 15px;
  margin-top: 10px;
}

.message-error {
  color: red;
  margin-top: 3px;
}

.input-error {
  border: 2px solid #ff0000 !important;
}

.label-input {
  margin-top: 15px;
  display: block;
  font-weight: bold;
}

.input-error:focus {
  border: 2px solid #ff0000 !important;
}
</style>
