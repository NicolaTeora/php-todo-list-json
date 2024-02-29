//start vue
const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      titleApp: "ToDo List",
      list: [
        {
          text: "cose da fare",
          one: false,
        },
        {
          text: "cose da fare",
          done: true,
        },
        {
          text: "cose da fare",
          done: false,
        },
        {
          text: "cose da fare",
          done: true,
        },
        {
          text: "cose da fare",
          done: false,
        },
        {
          text: "cose da fare",
          done: true,
        },
      ],
    };
  },
});

app.mount("#app");
