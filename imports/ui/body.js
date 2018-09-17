

import { Template } from 'meteor/templating';

import './body.html';

Template.body.helpers({
  tasks: [
    { firstname: 'Oreoluwa', surname: 'Akanni', gender: 'F', dob: '9th March' },
    { firstname: 'Amanda', surname: 'Williams', gender: 'F', dob: '16th June' },
    { firstname: 'Solomon', surname: 'Igori', gender: 'M', dob: '21st Feburary' },
  ],
});

