const { createApp } = Vue

createApp({
    data() {
      return {
        newTask: '',
        tasks: [
            {
                text: 'prova1',
                done: false
            },
            {
                text: 'prova2',
                done: false
            },
            {
                text: 'prova3',
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
