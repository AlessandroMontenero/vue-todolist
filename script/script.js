const { createApp } = Vue

createApp({
    data() {
      return {
        newTask: '',
        tasks: [
            {
                text: 'Prova 1',
                done: false
            },
            {
                text: 'Prova 2',
                done: false
            },
            {
                text: 'Prova 3',
                done: true
            },
        ]
      }
    },
    methods: {
        addTask(){
            const newTaskObj = {
                text: this.newTask,
                done: false
            }
            this.tasks.push(newTaskObj)
            this.newTask = ''
        }
    }

}).mount('#app')
