<template>
    <div class="post">
        <div>
            <div><strong>Name:</strong> {{ resume.nameAndSurname }}</div>
            <div><strong>Contact</strong>: {{ resume.contact }}</div>
            <div><strong>Experience</strong>: {{ resume.experience }}</div>
            <div>
                <strong>Languages:</strong>
                <ul>
                    <li v-for="(language, index) in resume.languages" :key="index">
                        {{ language }}
                    </li>
                </ul>
            </div>
            <div>
                <strong>Skills:</strong>
                <ul>
                    <li v-for="(skill, index) in resume.skills" :key="index">
                        {{ skill }}
                    </li>
                </ul>
            </div>
        </div>
    <div class="post__btns">
        <my-button @click="$emit('remove', resume)">Delete</my-button>
    </div>
        
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: {
        resume: {
            type: Object,
            required: true,
        }
    }
}

</script>

<style>

.resume {
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

</style>