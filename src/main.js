import { createApp } from "vue";
import App from "./views/App.vue";
import components from "@/components/ResumeFormFields";

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

app.mount("#app");
