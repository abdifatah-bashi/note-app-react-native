export default class api {

  static fetchAllNotes = async () => {
 
    const response = await fetch("http://localhost:3000/notes/");
    return response.json();
   
  }

  static addNote = async (body) => {
  
    const response = await fetch('http://localhost:3000/notes/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
        body: JSON.stringify(body),
      });

    return response.json();
   
  }


  static editNote = async (body) => {
  
    const response = await fetch('http://localhost:3000/notes/'+body.id, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
        body: JSON.stringify(body),
      });

    return response.json();
   
  }
  
  

  static deleteNote = async (id) => {
   
    const response = await fetch('http://localhost:3000/notes/'+id, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },

  })
    return response.json();
   
  }
  
  
}


