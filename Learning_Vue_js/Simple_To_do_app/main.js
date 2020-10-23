const app = Vue.createApp({

	// holds data of our app, provides initial data 
    data() {
        return {
            newTodo: '', // stores current todo, initially empty string
            todos: [] // stores all todos, initially empty list
        }
    },
    
    // methods of our Vue app
    methods: {
    	// to add new todo item to our list of todos
    	addNewTodo(){ // will be called when we submit the form after an input
    		a = this.newTodo;

    		// we will append this task to our todos list
    		a_id = this.todos.length;// id of the current task
    		a_content = a; // content of current task
    		a_done = false; // done is false, since not completed
    		
    		b = {id:a_id, content:a_content, done:a_done}; // format of element to add into todos
    		
    		console.log(a); // this line just outputs the log of the currently inputted and submitted todo via form
    		
    		// if empty task, alert the user to enter something
    		if (a === '') {
		    	alert('Blank task?\nPlease write something that you want to do :)\nThanks!')
		        return
		    }
		    // otherwise, add this todo item to our list of todos
    		else{
    			this.todos.push(b); // adding to our todos
	    		//this.todos.push(a) // this line pushes the currently inputted and submitted todo, via form, into our todos list
	    		this.newTodo = ''; // this line clears the input, so that we can add new todo in input
	   		}
    	},

    	// to remove the todo with id as supplied from the todos list
    	clearTodo(id){
    		var Updated = this.todos
    		if(this.todos.length !== 1){
    			Updated.splice(id,1);
    		}
    		else{
    			Updated = [];
    		}
    		this.todos = Updated;
    	},

    	// to clear all todo in todos
    	clearTodos(){
    		this.todos = [];
    	},

    	// to mark all todo in todos as done
    	doneTodos(){
    		var i;
    		for(i = 0; i < this.todos.length; i++){
    			this.todos[i].done = true;
    		}
    	}

    },

    // computed properties/actions, currently empty, as we don't need them for this app 
    computed: {

    }
})
