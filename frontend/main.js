//start vue
const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      titleApp: "ToDo List",
    };
  },
});

app.mount("#app");
