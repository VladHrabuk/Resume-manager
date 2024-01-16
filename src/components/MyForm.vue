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
                    />
                    <my-input
                        v-model="resume.contact"
                        labelText="Enter telephone number"
                        labelFor="contact"
                        type="tel" 
                        placeholder="Telephone number"
                    />
                    <my-input
                        v-model="resume.email"
                        labelText="Enter email"
                        labelFor="email"
                        type="email" 
                        placeholder="Email"
                    />
                    <my-input
                        v-model="resume.linkedin"
                        labelText="Enter Linkedin link"
                        labelFor="linkedin"
                        type="text" 
                        placeholder="Linkedin"
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
                    />
                </div>
            </div>
        </div>
        <div class="button-wrapper">
            <my-button 
                class="submit-button"
                @click="createResume">
                Generate resume
            </my-button>
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return {
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
    methods: {
        createResume() {
            this.resume.id = Date.now();
            this.$emit('create', this.resume);
            this.formSubmitted = true;
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
            }
            this.resetForm();
        },
        addRecord(records, field) {
            this.resume[field] = records;
        },
        resetForm() {
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