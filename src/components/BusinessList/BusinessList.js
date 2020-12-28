//PAI DO BUSINESS E FILHO DO APP
// Simular como uma lista de Business apareceria no site
import React from 'react';

import './BusinessList.css';

//Componente Business
import '../Business/Business'; 
import Business from '../Business/Business';

class BusinessList extends React.Component {
    render (){
        return(
            <div className="BusinessList">
                {/* recebe um array do app com as propriedades de business, faz um map desse array e envia como props essa lista para Business */}
                {this.props.businessesProp.map(business => {
                    return <Business business={business}/>
                })}
            </div>
        );
    }
} 

export default BusinessList;