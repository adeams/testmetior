var require = meteorInstall({"lib":{"collections":{"posts.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// lib/collections/posts.js                                          //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
Posts = new Mongo.Collection('posts');                               // 1
///////////////////////////////////////////////////////////////////////

}}},"server":{"fixtures.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// server/fixtures.js                                                //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
if (Posts.find().count() === 0) {                                    // 1
  Posts.insert({                                                     // 2
    title: 'Introducing Telescope1',                                 // 3
    url: 'http://sachagreif.com/introducing-telescope/'              // 4
  });                                                                // 2
  Posts.insert({                                                     // 7
    title: 'Meteor1',                                                // 8
    url: 'http://meteor.com'                                         // 9
  });                                                                // 7
  Posts.insert({                                                     // 12
    title: 'The Meteor Book1',                                       // 13
    url: 'http://themeteorbook.com'                                  // 14
  });                                                                // 12
}                                                                    // 16
///////////////////////////////////////////////////////////////////////

},"publications.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// server/publications.js                                            //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
Meteor.publish('posts', function () {                                // 1
  return Posts.find();                                               // 2
});                                                                  // 3
///////////////////////////////////////////////////////////////////////

},"main.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// server/main.js                                                    //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
var Meteor = void 0;                                                 // 1
module.watch(require("meteor/meteor"), {                             // 1
  Meteor: function (v) {                                             // 1
    Meteor = v;                                                      // 1
  }                                                                  // 1
}, 0);                                                               // 1
Meteor.startup(function () {// code to run on server at startup      // 3
});                                                                  // 5
///////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./lib/collections/posts.js");
require("./server/fixtures.js");
require("./server/publications.js");
require("./server/main.js");
//# sourceMappingURL=app.js.map
