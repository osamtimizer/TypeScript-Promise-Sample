import SampleUserDocument from './SampleDocument';

const sampleDocument = new SampleUserDocument(2000);
sampleDocument.findById('aaa').then((result) => {
    console.log(result.getName());
}).catch((err) => {
    console.error(err);
});

console.log('end line');