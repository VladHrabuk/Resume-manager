<template>
  <label :for="labelFor" class="label-input">
    {{ labelText }}
  </label>
  <input
    :value="modelValue"
    @input="updateInput"
    :id="labelFor"
    class="input"
    :placeholder="placeholder"
    :class="{ 'input-error': error }"
  />
  <p v-if="error" class="message-error">{{ error }}</p>
</template>

<script>
export default {
  name: "my-input",
  props: {
    modelValue: [String, Number],
    labelText: {
      type: String,
    },
    labelFor: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    error: {
      type: String,
    },
    type: String,
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
.input {
  width: 100%;
  border: 1px solid #333;
  border-radius: 5px;
  padding: 10px 15px;
  margin-top: 5px;
  font-size: 16px;
  color: #333;
  outline: none;
  transition: border-color 0.3s;
}

.input:focus {
  border: 2px solid #00bfff;
}
</style>
