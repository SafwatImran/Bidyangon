if (Meteor.isClient) {
    Template.navbar.onRendered(function () {
      $(document).foundation();
    });
}
