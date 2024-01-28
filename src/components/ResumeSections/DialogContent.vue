<template>
  <div id="resume-pdf">
    <h2 class="name">{{ resume.nameAndSurname }}</h2>
    <hr style="border-color: rgb(0, 191, 255)" />
    <div class="container">
      <div class="left-column">
        <contact-section :resume="resume" />
        <h3 class="resume-title">About me</h3>
        <div>{{ resume.aboutme }}</div>
        <list-section :title="'Skills'" :items="resume.skills" />
        <list-section :title="'Languages'" :items="resume.languages" />
      </div>
      <div class="right-column">
        <h3 class="resume-title">Education</h3>
        <div>{{ resume.education }}</div>

        <h3 class="resume-title">Work experience</h3>
        <div>{{ resume.experience }}</div>
        <list-section :title="'References'" :items="resume.references" />
      </div>
    </div>
  </div>
  <div class="button-container">
    <my-button @click="convertPDF">Convert PDF</my-button>
  </div>
</template>

<script>
import ContactSection from "./ContactSection.vue";
import ListSection from "./ListSection.vue";
import html2pdf from "html2pdf.js";
export default {
  components: { ContactSection, ListSection },
  props: {
    resume: {
      type: Object,
      required: true,
    },
  },
  methods: {
    convertPDF() {
      const element = document.getElementById("resume-pdf");
      const options = {
        margin: 2,
        filename: `Resume_${this.resume.nameAndSurname.replace(/\s+/g, "_")}.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { porientation: "portrait" },
      };
      try {
        html2pdf().set(options).from(element).save();
      } catch (error) {
        console.error("Error converting to PDF:", error);
      }
    },
  },
};
</script>

<style scoped>
.name {
  color: rgb(0, 161, 255);
  font-size: 40px;
  font-weight: 700;
  min-height: 100px;
  background-color: lightblue;
  border-radius: 12px 12px 0 0;
  text-align: center;
  padding-top: 20px;
}

.container {
  display: flex;
  justify-content: space-between;
  font-size: 20px;
}

.left-column,
.right-column {
  flex: 1;
  padding: 40px;
}
</style>

<style>
.resume-title {
  text-transform: uppercase;
  font-size: 22px;
  font-weight: 700;
  padding: 15px 0;
}

a {
  word-break: break-all;
  text-decoration: none;
  cursor: pointer;
  color: rgb(0, 161, 255);
}

.button-container {
  display: flex;
  justify-content: flex-end;
  padding: 20px;
}
</style>
