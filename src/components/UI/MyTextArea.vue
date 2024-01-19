<template>
    <label :for="labelFor" class="label-input">
        {{ labelText }}
    </label>
    <textarea 
        :value="modelValue" 
        @input="updateTextArea" 
        :id="labelFor" 
        class="textarea"
        :placeholder="placeholder"
        :class="{ 'input-error': error }">
    </textarea>
    <p v-if="error" class="message-error">{{ error }}</p>
</template>

<script>
export default {
    name: "my-textarea",
    props: {
        modelValue: String,
        labelText: String,
        labelFor: String,
        placeholder: String,
        error: String,
        type: String
    },
    methods: {
        updateTextArea(event) {
            this.$emit('update:modelValue', event.target.value);
        }
    }
}
</script>

<style>

.label-input {
    margin-top: 15px;
    display: block;
}

.textarea {
    width: 100%;
    height:120px;
    border: 1px solid #333;
    border-radius: 5px;
    padding: 10px 15px;
    margin-top: 5px;
    font-size: 16px;
    color: #333;
    outline: none;
}

.textarea:focus {
  border: 2px solid #00bfff;
}

.message-error {
    color: red;
    margin-top: 3px;
}

.input-error {
    border: 2px solid #ff0000 !important;
}

.input-error:focus  {
    border: 2px solid #ff0000 !important;
}


</style>