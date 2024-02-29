//start vue
const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      titleApp: "ToDo List",
      list: [],
    };
  },

  //1 creo il metodo per la chiamata axios all'api
  methods: {
    fetchToDoList() {
      axios
        .get("http://localhost/php-todo-list-json/backend/api/list-to-do.php")
        .then((response) => {
          console.log(response.data.list);
          this.list = response.data.list;
        });
    },
  },

  //2 interrogare l'api dopo averla creata nel backend e la richiamo all'apertura dell'app
  mounted() {
    this.fetchToDoList();
  },
});

app.mount("#app");
