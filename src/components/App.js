import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    onSearchSubmit(term){
        axios.get('https://api.unsplash.com/search/photos', {
            params:{ query: term },
            headers: {
                Authorization: 'Client-ID 7c0274de79939dafd8c8c9306ea4c1bf8e763b62acbf965a54b49d356aa7fa28'
            }
        })
        .then((resp) => {

        });
    }
    render(){
        return (
            <div className="ui container" style={{ marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        );
    }
}

export default App;