//-----------------------------------------------
//Projects Index
//-----------------------------------------------


Template.projects_index.onCreated(function () {
  this.autorun( () => {
    return this.subscribe('allProjects');
  });
});

Template.projects_index.helpers({
  path_projects_create: () => {
    return FlowRouter.path('projects_create');
  },
});

Template.projects_index.onRendered(function() {
  new Vue({
    el: '#projects_list',
    methods: {
      doStuff: function (projectId){
        //Binding: v-on:click="doStuff(project._id)"
        return alert('Project id = ' + projectId);
        //Coffe.script: alert "Project id = #{projectId}"
      }
    },
    sync:{
      projects: function(){
        return Projects.find({}, {sort: {createdAt: -1}});
      }
    }
  })
});

//-----------------------------------------------
//Projects Create
//-----------------------------------------------

Template.projects_create.onRendered(function () {
  new Vue({
    el: '#projects_create_form',
    data: {
      title: ''
    },
    methods: {
      submit: function () {
        if(!this.title)
          return alert('Title can\'t be blank!');

        //classe im lib wird aufgerufen
        let project = new Project({
          title: this.title
        });


        /*if(project.validate()){
          project.save()
          FlowRouter.go('projects_index');
        } else{
          return alert('validation error');
        }*/

      }
    }
  }); // Vue
});
