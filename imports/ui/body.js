import { Template } from 'meteor/templating';

import { Tasks } from '../api/tasks.js';

import './body.html';

Template.body.helpers({
  tasks() {
    return Tasks.find({});
  },
});

Template.body.events({
  'submit .new-task'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const firstname = target.firstname.value;
    const surname = target.surname.value;
    const gender = target.gender.value;
    const dob = target.dob.value;

    // Insert a task into the collection
    Tasks.insert({
      firstname,
      surname,
      gender,
      dob,
      createdAt: new Date(), // current time
    });

    // Clear form
    target.firstname.value = '';
    target.surname.value = '';
    target.gender.value = '';
    target.dob.value = '';
  },
});