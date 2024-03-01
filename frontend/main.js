//start vue
const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      titleApp: "ToDo List",
      list: [],
    };
  },

  methods: {
    //1 creo il metodo per la chiamata axios all'api
    fetchToDoList() {
      axios.get("../backend/api/list-to-do.php").then((response) => {
        console.log(response.data);
        this.list = response.data;
      });
    },

    toDoItem() {
      // al click aggiungere la classe "text-decoration-line-through"
      console.log("Fatto!");
    },
  },

  //2 interrogare l'api dopo averla creata nel backend e la richiamo all'apertura dell'app
  mounted() {
    this.fetchToDoList();
  },
});

app.mount("#app");
