import react from "react";
import unsplash from '../api/unsplash';

import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import "./app.css"



class App extends react.Component {

    state = {
        images: []
    };

    onSearchSubmit = async (term) => {

        // 1st argument is the adress to make request to
        // 2nd argument is an object to customize request
        const response = await unsplash.get("/search/photos", {
            params: {
                query: term
            }         
        });

        this.setState({ images: response.data.results});
    }

    render() {
        return (
            <div className="ui container wrap">
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        );
    }
        
    
};

export default App;