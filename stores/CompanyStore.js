import {configure, action, observable, runInAction, decorate, computed} from "mobx"
import { useStaticRendering } from 'mobx-react'

const isServer = typeof window === 'undefined'
// eslint-disable-next-line react-hooks/rules-of-hooks
//useStaticRendering(isServer)
//configure({enforceActions: "observed"});

export class CompanyStore{
    
    companies;

    constructor() {        
        this.companies = [];
    }

    addCompany = (company) => {
        this.companies.push(company);
    }
}

decorate(CompanyStore, {
    companies: observable,
    addCompany: action
});


export async function fetchInitialCompanyState() {
    // You can do anything to fetch initial store state
    return {}
}