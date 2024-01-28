<template>
  <div class="input-container">
    <label :for="labelFor" class="label-input">
      {{ labelText }}
    </label>
    <input
      type="text"
      v-model="record"
      @keyup="addRecord"
      :placeholder="placeholder"
      :id="labelFor"
      class="input"
      :class="{ 'input-error': error && this.records.length === 0 }"
    />
    <div v-for="record in records" :key="record" class="input-record">
      <span @click="deleteRecord(record)">{{ record }}</span>
    </div>
    <p v-if="error && this.records.length === 0" class="message-error">
      {{ error }}
    </p>
  </div>
</template>

<script>
export default {
  name: "my-input-records",
  props: {
    value: [String, Number],
    labelText: {
      type: String,
    },
    labelFor: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    clearOnSubmit: {
      type: Boolean,
    },
    error: {
      type: String,
    },
  },
  data() {
    return {
      record: "",
      records: this.value || [],
    };
  },
  methods: {
    addRecord(event) {
      if (event.key === "," || (event.key === ";" && this.record.trim())) {
        if (!this.records.includes(this.record.slice(0, -1))) {
          this.records.push(this.record.slice(0, -1));
          this.$emit("input", this.records);
        }
        this.record = "";
      }
    },

    deleteRecord(record) {
      this.records = this.records.filter((item) => record !== item);
      this.$emit("input", this.records);
    },
  },
  watch: {
    clearOnSubmit(value) {
      if (value) {
        this.records = [];
        this.$emit("input", this.records);
      }
    },
  },
};
</script>

<style scoped>
.input-container {
  height: 80px;
}

.input-record {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: rgba(0, 191, 255, 0.2);
  border-radius: 20px;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
  color: #777;
  cursor: pointer;
}

.input {
  width: 100%;
  border: 1px solid #333;
  border-radius: 5px;
  padding: 10px 15px;
  margin-top: 5px;
  font-size: 16px;
  color: #333;
  outline: none;
}

.input:focus {
  border: 2px solid #00bfff;
}
</style>
