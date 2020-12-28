//FILHO DO APP

import React from 'react';

import './SearchBar.css';

const sortByOptions = {

    //opções de sorting
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count',
}

class SearchBar extends React.Component {
        //metodo que cria dinamicamente uma lista de itens das opções de sorting acima
        renderSortByOptions(){
            // iterar entre as keys e values do objeto e retornar uma lista de itens. 
            // Os elementos dessa lista devem usar as keys como atributos e os valores como conteúdo.
            return Object.keys(sortByOptions).map(sortByOption => {
                let sortByOptionValue = sortByOptions[sortByOption];
    
                return <li key="sortByOptionValue"> {sortByOptionValue}</li>
            });
        }
        
    render(){
        return (
            <div className="SearchBar">

                <div className="SearchBar-sort-options">
                    <ul>
                    {this.renderSortByOptions()}
                    </ul>
                </div>

                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where?" />
                </div>

                <div className="SearchBar-submit">
                    <a>Let's Go</a>
                </div>

            </div>
        );
    }
}

export default SearchBar;