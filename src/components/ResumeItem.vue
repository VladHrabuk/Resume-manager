<template>
  <div class="resume">
    <my-dialog v-model:show="dialogVisible">
      <dialog-content :resume="resume" />
    </my-dialog>
    <div class="resume-item">
      <svg
        class="resume-icon"
        fill="rgb(0, 161, 255)"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
      >
        <path
          d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 
                      35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"
        />
      </svg>
      <span class="resume-header"
        >Resume {{ resumeIndex + 1 }} ({{ resume.nameAndSurname }})</span
      >
    </div>
    <div>
      <my-button @click="showResume">Show</my-button>
      <my-button @click="$emit('remove', resume)">Delete</my-button>
    </div>
  </div>
</template>

<script>
import DialogContent from "./ResumeSections/DialogContent.vue";
export default {
  components: { DialogContent },
  data() {
    return {
      dialogVisible: false,
    };
  },
  props: {
    resume: {
      type: Object,
      required: true,
    },
    resumeIndex: {
      type: Number,
      required: true,
    },
  },
  methods: {
    showResume() {
      this.dialogVisible = true;
    },
  },
};
</script>

<style scoped>
.resume {
  padding: 15px;
  border: 2px solid #00bfff;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.resume-icon {
  display: inline-block;
  width: 30px;
}

.resume-item {
  display: flex;
  align-items: center;
}

.resume-header {
  padding-left: 10px;
  font-size: 20px;
  font-weight: 700;
}
</style>
