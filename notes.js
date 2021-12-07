const fs= require('fs/promises');
const addNote =async (title,body="nothing was added so this appeared by default") =>{
    const notes= await loadNotes();
    const duplicateNotes= notes.filter((note)=>{
        if(note.title===title){
            note.body = body
            return true
        }
        else{
            return false
        }
    })
    if(duplicateNotes.length===0){
        notes.push({
            title:title,
            body:body
        })
        console.log("New note added");
    } else{
        console.log("Old note was replaced")
    }
    saveNotes(notes);
};
const removeNote= async (title)=>{
    const notes= await loadNotes();
    deletedNotes= notes.find((note)=>{
        if(note.title === title){
            return true;
        }
    })
    if(deletedNotes){
        a= notes.indexOf(removeNote);
        notes.splice(a-1,1);
        saveNotes(notes);
    }else{
        console.log("no note with a given name")
    }
}
const listAllNote= async ()=>{
    notes= await loadNotes();
    for(note of  notes){
        console.log(note.title)
        console.log(note.body)
        console.log();
        console.log();
    }
}
const readNote= async (title)=>{
    notes= await loadNotes();
    note= notes.find((note)=>{
        if (note.title === title){
            return true;
        }
    })
    if(note){
        console.log(note.title);
        console.log(note.body)
    }
    else{
        console.log("No note with the given title exists");
    }
}
const loadNotes=async ()=>{
    return fs.readFile('noteData.json').then((result)=>result.toString()).then((result)=>{
        return JSON.parse(result)
    }).catch(()=>{
        console.log("Probably the file does not exists")
        return [];
    })
}
const saveNotes=async (data)=>{
    fs.writeFile('noteData.json',JSON.stringify(data)).catch(()=>{
        console.log("some serious error occured ");
        console.log(error);
    })
}
module.exports={addNote,removeNote,listAllNote,readNote};