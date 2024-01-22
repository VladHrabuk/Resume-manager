<template>
  <div class="resume">
    <my-dialog v-model:show="dialogVisible">
      <h2 class="name">{{ resume.nameAndSurname }}</h2>
      <hr style="border-color: rgb(0, 191, 255)" />
      <div class="container">
        <div class="left-column">
          <h3 class="resume-title">Contact</h3>
          <div class="contact-row">
            <svg
              class="icon"
              fill="rgb(0, 161, 255)"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 
                      64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 
                      11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
              />
            </svg>
            {{ resume.contact }}
          </div>

          <div class="contact-row">
            <svg
              class="icon"
              fill="rgb(0, 161, 255)"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 
                      8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 
                      176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
              />
            </svg>
            {{ resume.email }}
          </div>

          <div class="contact-row">
            <div>
              <svg
                class="icon"
                fill="rgb(0, 161, 255)"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 
                      32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 
                      96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 
                      0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                />
              </svg>
            </div>
            <div>
              <a :href="resume.linkedin">{{ resume.linkedin }}</a>
            </div>
          </div>

          <h3 class="resume-title">About me</h3>
          <div>{{ resume.aboutme }}</div>

          <h3 class="resume-title">Skills</h3>
          <ul>
            <li v-for="(skill, index) in resume.skills" :key="index">
              {{ skill }}
            </li>
          </ul>

          <h3 class="resume-title">Languages</h3>
          <ul>
            <li v-for="(language, index) in resume.languages" :key="index">
              {{ language }}
            </li>
          </ul>
        </div>
        <div class="right-column">
          <h3 class="resume-title">Education</h3>
          <div>{{ resume.education }}</div>

          <h3 class="resume-title">Work experience</h3>
          <div>{{ resume.experience }}</div>

          <h3 class="resume-title">References</h3>
          <ul>
            <li v-for="(reference, index) in resume.references" :key="index">
              <a :href="reference" target="_blank">{{ reference }}</a>
            </li>
          </ul>
        </div>
      </div>
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
export default {
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

<style>
.resume {
  padding: 15px;
  border: 2px solid #00bfff;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

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

.resume-title {
  text-transform: uppercase;
  font-size: 22px;
  font-weight: 700;
  padding: 15px 0;
}

.icon {
  display: inline-block;
  width: 20px;
  margin-bottom: 5px;
  margin-right: 10px;
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

a {
  word-break: break-all;
  text-decoration: none;
  cursor: pointer;
  color: rgb(0, 161, 255);
}

.contact-row {
  display: flex;
  align-content: center;
  margin-bottom: 10px;
}

ul {
  padding-left: 20px;
}

li::marker {
  color: rgb(0, 161, 255);
}
</style>
