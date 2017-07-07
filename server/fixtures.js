if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Introducing Telescope1',
    url: 'http://sachagreif.com/introducing-telescope/'
  });

  Posts.insert({
    title: 'Meteor1',
    url: 'http://meteor.com'
  });

  Posts.insert({
    title: 'The Meteor Book1',
    url: 'http://themeteorbook.com'
  });
}