<template>
    <div v-if="resumes && resumes.length > 0">
        <h3>Resume list</h3>
        <transition-group name="resume-list">
            <resume-item 
                :resume="resume"
                v-for="resume in resumes"
                :key="resume.id"
                @remove="$emit('remove', resume)"
            />
        </transition-group>
        
    </div>
    <h2 v-else>Resumes are not found!</h2>
</template>

<script>
import ResumeItem from "@/components/ResumeItem";
export default {
    components: {ResumeItem},
    props: {
        resumes: {
            type: Array,
            required: true
        }

    }
}
</script>

<style>

.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.5s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.post-list-move, 
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.5s ease;
}

</style>