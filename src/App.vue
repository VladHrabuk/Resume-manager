<template>
  <div class="app">
    <h1 class="title">Resume Manager</h1>
    <hr style="border-color:#00bfff"> 
    <my-form @create="createResume"/>
    <resume-list 
            :resumes="resumes"
            @remove="removeResume"
        />
  
  </div>
</template>

<script>
import MyForm from "@/components/MyForm.vue";
import ResumeList from "@/components/ResumeList.vue";
export default {
  components: {MyForm, ResumeList},
  data() {
        return {
            resumes: [],
        }
  },
  methods: {
    updateResume(updatedResume) {
      this.resume = { ...this.resume, ...updatedResume };
    },
    createResume(resume) {
      console.log(resume);
      this.resumes.push(resume);
    },
    removeResume(resume) {
      this.resumes = this.resumes.filter(r => r.id !== resume.id)
    },
  },


}
</script>

<style>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.app {
    padding: 20px 50px;
}

.title {
  color: #333;
  text-align: center;
  margin-bottom: 10px;

}

</style>
