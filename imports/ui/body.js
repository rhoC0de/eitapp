

import { Template } from 'meteor/templating';

import './body.html';

Template.body.helpers({
  tasks: [
    { name: 'Akanni Oreoluwa' },
    { name: 'Amanda Williams' },
    { name: 'Solomon Igori' },
  ],
});

