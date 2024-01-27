<template>
  <form @submit.prevent class="form">
    <div class="row">
      <div class="column">
        <field-wrapper :title="'Contacts'">
          <my-input
            v-model="resume.nameAndSurname"
            labelText="Enter Name and Surname"
            labelFor="nameAndSurname"
            type="text"
            placeholder="Name and Surname"
            :error="getError('nameAndSurname')"
          />
          <my-input
            v-model="resume.contact"
            labelText="Enter telephone number"
            labelFor="contact"
            type="tel"
            placeholder="Telephone number"
            :error="getError('contact')"
          />
          <my-input
            v-model="resume.email"
            labelText="Enter email"
            labelFor="email"
            type="email"
            placeholder="Email"
            :error="getError('email')"
          />
          <my-input
            v-model="resume.linkedin"
            labelText="Enter Linkedin link"
            labelFor="linkedin"
            type="text"
            placeholder="Linkedin"
            :error="getError('linkedin')"
          />
        </field-wrapper>
        <field-wrapper :title="'About'">
          <my-textarea
            v-model="resume.aboutme"
            labelText="Describe yourself"
            labelFor="about"
            type="text"
            placeholder="Enter here"
            :error="getError('aboutme')"
          />
        </field-wrapper>
        <field-wrapper :title="'Languages'">
          <my-input-records
            v-model="resume.languages"
            labelText="Enter languages skills"
            labelFor="languages"
            type="text"
            placeholder="Enter here"
            @input="(records) => addRecord(records, 'languages')"
            :clear-on-submit="formSubmitted"
            :error="getError('languages')"
          />
        </field-wrapper>
      </div>
      <div class="column">
        <field-wrapper :title="'Education'">
          <my-textarea
            v-model="resume.education"
            labelText="Describe education"
            labelFor="education"
            type="text"
            placeholder="Enter here"
            :error="getError('education')"
          />
        </field-wrapper>
        <field-wrapper :title="'Work experience'">
          <my-textarea
            v-model="resume.experience"
            labelText="Describe experience"
            labelFor="experience"
            type="text"
            placeholder="Enter here"
            :error="getError('experience')"
          />
        </field-wrapper>
        <field-wrapper :title="'Skills'">
          <my-input-records
            v-model="resume.skills"
            labelText="Describe skills"
            labelFor="skills"
            type="text"
            placeholder="Enter here"
            @input="(records) => addRecord(records, 'skills')"
            :clear-on-submit="formSubmitted"
            :error="getError('skills')"
          />
        </field-wrapper>
        <field-wrapper :title="'References'">
          <my-input-records
            v-model="resume.references"
            labelText="Enter references"
            labelFor="references"
            type="text"
            placeholder="Enter here"
            @input="(records) => addRecord(records, 'references')"
            :clear-on-submit="formSubmitted"
            :error="getError('references')"
          />
        </field-wrapper>
      </div>
    </div>
    <div class="button-wrapper">
      <my-button class="submit-button" @click="createResume">
        Generate resume
      </my-button>
    </div>
  </form>
</template>

<script>
import FieldWrapper from "./FieldWrapper.vue";
import useVuelidate from "@vuelidate/core";
import { validations } from "./validations/validationRules";
export default {
  components: { FieldWrapper },
  data() {
    return {
      v$: useVuelidate(),
      resume: {
        nameAndSurname: "",
        contact: "",
        email: "",
        linkedin: "",
        aboutme: "",
        experience: "",
        education: "",
        skills: [],
        languages: [],
        references: [],
      },
      formSubmitted: false,
    };
  },
  validations() {
    return {
      resume: {
        nameAndSurname: validations.nameAndSurname,
        contact: validations.contact,
        email: validations.emailRule,
        linkedin: validations.linkedin,
        aboutme: validations.aboutme,
        experience: validations.experience,
        education: validations.education,
        skills: validations.skills,
        languages: validations.languages,
        references: validations.references,
      },
    };
  },
  methods: {
    createResume() {
      this.v$.$touch();
      if (!this.v$.$pending && !this.v$.$error) {
        this.resume.id = Date.now();
        this.$emit("create", this.resume);
        this.formSubmitted = true;
        this.resetForm();
      }
    },

    addRecord(records, field) {
      this.resume[field] = records;
    },

    resetForm() {
      this.resume = {};
      this.v$.$reset();
      this.$nextTick(() => {
        this.formSubmitted = false;
      });
    },

    getError(field) {
      return this.v$.resume[field].$error
        ? this.v$.resume[field].$errors[0].$message
        : "";
    },
  },
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
}

.row {
  display: flex;
  justify-content: space-between;
}

.column {
  flex: 1;
  margin-right: 20px;
}

.button-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>
