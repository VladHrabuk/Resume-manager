<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button",
};
</script>

<style>
.btn {
  padding: 15px 20px;
  color: #333;
  background-color: rgb(0, 191, 255);
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 18px;
  font-weight: bold;
  margin: 5px;
}

.btn:hover {
  background-color: rgb(0, 161, 255);
}
</style>
