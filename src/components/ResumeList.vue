<template>
  <div v-if="resumes && resumes.length > 0">
    <h2>Resume list</h2>
    <transition-group name="resume-list">
      <resume-item
        :resume="resume"
        :resumeIndex="index"
        v-for="(resume, index) in resumes"
        :key="resume.id"
        @remove="$emit('remove', resume)"
      />
    </transition-group>
  </div>
  <h2 v-else>Resume list is empty!</h2>
</template>

<script>
import ResumeItem from "@/components/ResumeItem";
export default {
  components: { ResumeItem },
  props: {
    resumes: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 10px 0;
}

.resume-list-enter-active,
.resume-list-leave-active {
  transition: all 0.5s ease;
}
.resume-list-enter-from,
.resume-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.resume-list-move,
.resume-list-enter-active,
.resume-list-leave-active {
  transition: all 0.5s ease;
}
</style>
