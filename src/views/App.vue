<template>
  <div class="app">
    <h1 class="title">Resume Manager</h1>
    <hr style="border-color: #00bfff" />
    <resume-form @create="createResume" />
    <resume-list
      :resumes="resumes"
      @remove="removeResume"
      @editResume="editResume"
    />
  </div>
</template>

<script>
import ResumeForm from "../components/ResumeFormStructure/ResumeForm.vue";
import ResumeList from "../components/ResumeList.vue";
export default {
  components: { ResumeForm, ResumeList },
  data() {
    return {
      resumes: [
        {
          aboutme: `Hard-working, composed, consientious, creative, responsible, proactive, honest and goal-oriented. 
            I am constantly developing new skills and knowledge. I am a people person, strive to get my first, 
            commercial experience at IT sphere.`,
          contact: "0983295728",
          education: `Kyiv Politechnic Institute - The third-year Computer Engineering student. Hillel IT School - Courses Front-end Basic, 
            Front-end Pro. Green Forest English School - Upper-Intermediate cousre in English`,
          email: "hrabuk.vlad2004@gmail.com",
          experience: `I have not worked at any companies yet, but I have gained some experience cooperating, 
            solving different IT tasks in a team as well as individually at university and during courses.`,
          id: 1,
          linkedin: "https://www.linkedin.com/in/vladyslav-hrabyk-a8b612203/",
          nameAndSurname: "Vlad Hrabyk",
          languages: ["Ukrainian - native", "English - Upper-Intermediate"],
          skills: ["HTML", "CSS", "JavaScript", "React", "Git", "MySQL"],
          references: [
            "https://my.greenforest.com.ua/certificate/4e1b714145b21d4f19c03cfef35cd7fc762f36aa",
            "https://certificate.ithillel.ua/view/70100501",
          ],
          number: null,
        },
      ],

      resumeVisible: false,
      editedResume: {},
      isEditing: false,
    };
  },
  methods: {
    createResume(resume) {
      console.log(resume);
      this.resumes.push(resume);
    },
    removeResume(resume) {
      this.resumes = this.resumes.filter((r) => r.id !== resume.id);
    },
  },
};
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
