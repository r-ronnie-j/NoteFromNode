const yargs= require('yargs');
const note= require('./notes')
yargs.command({
    command: 'add',
    describe:"Add a new note",
    builder:{
        title:{
            describe:"This is going to be notetitle",
            demandOption:true,
            type:"string"
        },
        body:{
            describe:"We need to write the body of the note here",
            demandOption:true,
            type:"string"
        }
    },
    handler:(argv)=>{
        note.addNote(argv.title,argv.body);
    }
})
yargs.command({
    command: 'remove',
    describe:"move a new note",
    builder:{
        title:{
            describe:"We need title to remove the note",
            demandOption:true,
            type:"string",
        }
    },
   handler:(argv)=>{
        note.removeNote(argv.title)
   }
})
yargs.command({
    command:"list",
    describe:"This command lists all the notes",
    handler:()=>{
        note.listAllNote();
    }
})
yargs.command({
    command:"read",
    describe:"We will read all the notes for a title",
    builder:{
        title:{
            describe:"We need title of the note we are going to read",
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv)=>{
       note.readNote(argv.title);
    }
})
yargs.parse();