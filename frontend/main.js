//start vue
const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      titleApp: "ToDo List",
      list: [],

      newToDo: {
        text: "",
        done: false,
      },
    };
  },

  methods: {
    //1 creo il metodo per la chiamata axios all'api
    fetchToDoList() {
      axios.get("../backend/api/list-to-do.php").then((response) => {
        this.list = response.data;
      });
    },

    //chiamata per aggiunta(invio) task toDo
    fetchAddToDoList() {
      //dati da postare
      const params = {
        text: this.newToDo.text,
        done: false,
      };
      //metto in una var i parametri da inviare
      const Headers = {
        headers: { "Content-Type": "multipart/form-data" },
      };
      //chiamata aggiunta task
      axios
        .post("../backend/api/store-task.php", params, Headers)
        .then((response) => {
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
