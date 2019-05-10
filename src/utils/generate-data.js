'use strict';

/***
 * dreamjs - fake data generator - https://github.com/adleroliveira/dreamjs
 * jsonfile - module for writing json data to file - https://www.npmjs.com/package/jsonfile
 ***/
const dream = require('dreamjs');
const jsonfile = require('jsonfile');

/***
 * path - output for generated file
 * amount - number of generated objects
 * phraseLength - number of words for phrase property
 * images - array of all available images
 ***/

const config = {
    path: './public/data.json',
    amount: 70,
    phraseLength: 15,
    images: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10','11','12','13']
};

dream.customType('user-image', function (helper) {
    return helper.oneOf(config.images);
});

dream.customType('status', function (helper) {
    return helper.chance.sentence({words: config.phraseLength});
});

dream.customType('incrementalId', function (helper) {
    return helper.previousItem ? helper.previousItem.id + 1 : 0;
});

dream.customType('user-email', function (helper) {
    return helper.chance.email({domain: "example.com"})
});


dream.customType('RegistrationDate', function (helper) {
    var year = helper.chance.year({ min: 2015, max: 2019 });

    return helper.chance.birthday({ year: year ,string: true})
});



dream.schema('user', {

    id: 'incrementalId',
    name: 'name',
    age: 'age',
    RegistrationDate: 'RegistrationDate',
    email: 'email',
    image: 'user-image',
    status: 'status'
});

dream.useSchema('user')
    .generateRnd(config.amount)
    .output((err, result) => {
        jsonfile.writeFile(config.path, result, function (err) {
            console.log(err ? err : `Data was generated and placed to ${config.path}`);
        });
    });
