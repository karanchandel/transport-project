const API_URL = "http://localhost:5000";


export const environment = {
  production: false,

  API_URL: API_URL,

  //sign up component 
  FormData: API_URL + '/users/form',
  saveAsDraft: API_URL + '/users/saveAsDraft',
  Submitdata: API_URL + '/users/submitdata',
  DraftData: API_URL + '/users/draftdata',
  typenametable: API_URL + '/users/typenametable',
  Update: API_URL + '/users/update',
  delete: API_URL + '/users/deleteTemplate',
  UseTemplate: API_URL + '/users/UseTemplate',
  deleteStatus: API_URL + '/users/deleteStatus',
email: API_URL + '/users/email',
  // rest services
  filePath: API_URL + '/getFile',
  url: API_URL + '/url',
  findeone: API_URL + '/findeone',
};

