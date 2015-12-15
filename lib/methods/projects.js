Meteor.methods({
  projectInsert: (postAttributes) => {

    check(postAttributes, {
      title: String
    });

    let projectEntry = _.extend(postAttributes, {
      createdAt: new Date(),
      updatedAt: new Date()
    });

    let projectId = Projects.insert(projectEntry);

    return {_id: projectId};
  },
  touchProject: (projectId) => {
    Projects.update(projectId, {
      $set: {
        updatedAt: new Date()
      }
    });
  }
});
