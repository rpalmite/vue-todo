# vue-todo

## installation

### node

curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -
sudo apt-get install -y nodejs

sudo apt update
sudo apt upgrade


### npm

sudo npm i -g npm

### vue cli

sudo npm install -g vue-cli
sudo npm install -g @vue/cli-init


## setup

vue init webpack vue-todo


webpack

https://sketchboard.io/vue-jsx-typescript-example/static/structure.svg

testing

...

<initalize a new git repo here>


## dev cycle 1

git pull

npm install

npm run dev

brower: localhost:8080

<make changes>

npm test

git commit

git push

## planning cycle 1

one screen

4 components:

VueTodoApp
VueTodoListTitle
VueTodoList
VueTodoTask


## TodoApp

### step 1

Example component:

<template>
    
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>

### step 2
Fix routing in router/index.js

### step 3: template
<template>
    
</template>




### step 4: script

Vue instance

export default {
  // standard
  name: 'VueTodoApp',
  components: { },
  data: { },
  props: { },
  computed: { },
  methods: { },
  
  // lifecycle
  beforeCreate: function () { },
  created: function () { },
  beforeMount: function () { },
  mounted: function () { },
  beforeUpdate: function () { },
  updated: function () { },
  beforeDestroy: function () { },
  destroyed: function () { }
}

Lifecycle: https://vuejs.org/images/lifecycle.png

## TodoList

v-for directive


## TodoTask

## properties

export default {
    props: {
        'title': {
            type: String,
            required: true,
            default: function () {
                return 'thing to do';
            }

        }
    }
}

## v-if and v-model

<div>
    <span v-if="complete">X </span>
    <span @click="toggleComplete">{{title}}</span>
    <button>edit</button>
    <button>delete</button>
</div>



## methods

    <span @click="toggleComplete">{{title}}</span>

    methods: {
        toggleComplete: function() {
            this.complete = !this.complete;
        }
    }