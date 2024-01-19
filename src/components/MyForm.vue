<template>
    <form @submit.prevent class="form">
        <div class="row">
            <div class="column">
                <div class="border">
                    <h2>Contacts</h2>
                    <my-input
                        v-model="resume.nameAndSurname"
                        labelText="Enter Name and Surname"
                        labelFor="nameAndSurname"
                        type="text" 
                        placeholder="Name and Surname"
                        :error="v$.resume.nameAndSurname.$error ? v$.resume.nameAndSurname.$errors[0].$message : ''"
                    />
                    <my-input
                        v-model="resume.contact"
                        labelText="Enter telephone number"
                        labelFor="contact"
                        type="tel" 
                        placeholder="Telephone number"
                        :error="v$.resume.contact.$error ? v$.resume.contact.$errors[0].$message : ''"
                    /> 
                    <my-input
                        v-model="resume.email"
                        labelText="Enter email"
                        labelFor="email"
                        type="email" 
                        placeholder="Email"
                        :error="v$.resume.email.$error ? v$.resume.email.$errors[0].$message : ''"
                    />                 
                    <my-input
                        v-model="resume.linkedin"
                        labelText="Enter Linkedin link"
                        labelFor="linkedin"
                        type="text" 
                        placeholder="Linkedin"
                        :error="v$.resume.linkedin.$error ? v$.resume.linkedin.$errors[0].$message : ''"
                    />   
                </div>
                <div class="border">
                    <h2>About</h2>
                    <my-textarea
                        v-model="resume.aboutme"
                        labelText="Describe yourself"
                        labelFor="about"
                        type="text" 
                        placeholder="Enter here"
                        :error="v$.resume.aboutme.$error ? v$.resume.aboutme.$errors[0].$message : ''"
                    />
                </div>
                <div class="border">
                    <h2>Languages</h2>
                    <my-input-records 
                        v-model="resume.languages"
                        labelText="Enter languages skills"
                        labelFor="languages"
                        type="text" 
                        placeholder="Enter here"
                        @input="records => addRecord(records, 'languages')"
                        :clear-on-submit="formSubmitted"
                        :error="v$.resume.languages.$error ? v$.resume.languages.$errors[0].$message : ''"    
                 />
                </div>
            </div>
            <div class="column">
                <div class="border">
                    <h2>Education</h2>
                    <my-textarea
                        v-model="resume.education"
                        labelText="Describe education"
                        labelFor="education"
                        type="text" 
                        placeholder="Enter here"
                        :error="v$.resume.education.$error ? v$.resume.education.$errors[0].$message : ''"
                    />
                </div>
                <div class="border">
                    <h2>Work experience</h2>
                    <my-textarea
                        v-model="resume.experience"
                        labelText="Describe experience"
                        labelFor="experience"
                        type="text" 
                        placeholder="Enter here"
                        :error="v$.resume.experience.$error ? v$.resume.experience.$errors[0].$message : ''"
                    />
                </div>                
                <div class="border">
                    <h2>Skills</h2>
                    <my-input-records 
                        v-model="resume.skills"
                        labelText="Describe skills"
                        labelFor="skills"
                        type="text" 
                        placeholder="Enter here"
                        @input="records => addRecord(records, 'skills')"
                        :clear-on-submit="formSubmitted"
                        :error="v$.resume.skills.$error ? v$.resume.skills.$errors[0].$message : ''"                       
                    />
                </div>
                <div class="border">
                    <h2>References</h2>
                    <my-input-records 
                        v-model="resume.references"
                        labelText="Enter references"
                        labelFor="references"
                        type="text" 
                        placeholder="Enter here"
                        @input="records => addRecord(records, 'references')"
                        :clear-on-submit="formSubmitted"
                        :error="v$.resume.references.$error ? v$.resume.references.$errors[0].$message : ''"                  
                    />
                </div>
            </div>
        </div>
        <div class="button-wrapper">
            <my-button 
                class="submit-button"
                @click="createResume"
                >
                Generate resume
            </my-button>
        </div>
    </form>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import {required, minLength, maxLength, email, numeric, url, helpers} from "@vuelidate/validators";
export default {
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
                references: []
            },
            formSubmitted: false,
        }
    },
    validations() {
        return {
            resume: {
                nameAndSurname: { 
                    required:helpers.withMessage("Name and Surname is required field!", required), 
                    minLength:helpers.withMessage("Name and Surname must be at least 4 symbols!", minLength(4)),
                    maxLength:helpers.withMessage("Name and Surname must be at least 4 symbols!", maxLength(30)),
                    $autoDirty: true
                },
                contact: { 
                    required:helpers.withMessage("Telephone number is required field!", required), 
                    numeric:helpers.withMessage("Telephone number must contain only numerics!", numeric), 
                    $autoDirty: true 
                },
                email: { 
                    required:helpers.withMessage("Email is required field!", required), 
                    email:helpers.withMessage("Follow email structure!", email), 
                    $autoDirty: true 
                },
                linkedin: { 
                    required:helpers.withMessage("Linkedin is required field!", required), 
                    url:helpers.withMessage("Follow link structure!", url), 
                    $autoDirty: true },
                aboutme: { required:helpers.withMessage("About is required field!", required), $autoDirty: true },
                experience: { required:helpers.withMessage("Experience is required field!", required), $autoDirty: true },
                education: { required:helpers.withMessage("Education is required field!", required), $autoDirty: true },
                skills: { 
                    arrayNotEmpty: helpers.withMessage("Skills is required field!", value => value.length > 0),
                    $autoDirty: true  
                },
                languages: { 
                    arrayNotEmpty: helpers.withMessage("Languages is required field!", value => value.length > 0),
                    $autoDirty: true        
                },
                references: { 
                    arrayNotEmpty: helpers.withMessage("References is required field!", value => value.length > 0),
                    $autoDirty: true       
                },
            },
        };
    },
    methods: {
        createResume() {
            this.v$.$touch();
            if (!this.v$.$pending && !this.v$.$error) {
                this.resume.id = Date.now();
                this.$emit('create', this.resume);
                this.formSubmitted = true;
                this.resetForm();
            }
        },
        
        addRecord(records, field) {
            this.resume[field] = records;
        },

        resetForm() {
            this.resume = {
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
            };
            this.v$.$reset();

            this.$nextTick(() => {
            this.formSubmitted = false;
            });
        },
    }
}
</script>

<style>

h2 {
    color: #333;
}

form {
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

.border {
  border: 2px solid #00bfff; 
  border-radius: 10px;
  padding: 15px; 
  margin-top: 10px;
}

.button-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

</style>