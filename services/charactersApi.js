const axios = require("axios");



class CharactersApi {
    constructor(
        baseURL = process.env.API_URL, 
        API_KEY = process.env.API_KEY,
        API_USER = process.env.API_USER
        ){
        this.API_KEY = API_KEY; // || "https://ih-crud-api.herokuapp.com";
        this.API_USER = API_USER; // || "default key";
        this.baseURL = baseURL; // || " dafalut user";

        this.api = axios.create({ baseURL: this.baseURL }); // Typocal connection string requires keys etc... `${this.baseURL}/?key=${API_KEY}`
    }

    getAllCharacters = () => {
        return this.api.get("/characters");
      }; //Name should be descriptive of your service
      getOneCharacter = (id) => {
        return this.api.get(`/characters/${id}`);
      };
      createOneCharacter = () => {};
      updateOneCharacter = () => {};
      deleteOneCharacter = () => {};
}
module.exports = CharactersApi;
