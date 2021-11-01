import React from "react";

class SearchBar extends React.Component {

    state = {
        term: ""
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} action="" className="ui form">
                    <div className="field">
                        <label htmlFor="search">Image Search</label>
                        <input type="text" name="search" id="search" onChange={e => {
                            this.setState({term: e.target.value})
                        }}
                        value={this.state.term}/>
                    </div>
                </form>
            </div>
        );
    };
}

export default SearchBar;