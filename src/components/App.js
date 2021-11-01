import react from "react";
import axios from 'axios';

import SearchBar from "./SearchBar";
import "./app.css"



class App extends react.Component {

    async onSearchSubmit(term){
        // 1st argument is the adress to make request to
        // 2nd argument is an object to customize request
        const response = await axios.get("https://api.unsplash.com/search/photos", {
            params: {
                query: term
            },
            headers:{
                Authorization: 'Client-ID WZtVIY_4_UxDEHNH9WHRhboYg_AKt8MihPSmVIyr2TU'
            }
        });

        console.log(response.data.results);
    }

    render() {
        return (
            <div className="ui container wrap">
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        );
    }
        
    
};

export default App;