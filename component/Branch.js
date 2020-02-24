import React from 'react'
import Link from 'next/link'
import { inject, observer } from 'mobx-react'

export class Branch extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }
  
    componentWillUnmount() {
      
    }

      
    render() {

        const {CompanyStore} = this.props;
        console.log("cm", CompanyStore);
        return (
            <div>
                <h1>Branch:</h1>
                <ul>
                    {
                        CompanyStore.companies.map(company => (
                            <li key={company}>{company}</li>
                        ))
                    }
                </ul>
            
            </div>
        )
    }
}

Branch = inject('CompanyStore')(observer(Branch))