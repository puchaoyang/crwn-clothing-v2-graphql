import { createContext, useState, useEffect } from 'react';
import {gql,useQuery} from "@apollo/client";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

const gqlStatement=gql`
  query{
    collections{
      id
      title
      items{
        id
        name
        price
        imageUrl
      }
    }
  }
`

export const CategoriesProvider = ({ children }) => {
  const {loading,data,error}=useQuery(gqlStatement)

  const [categoriesMap, setCategoriesMap] = useState({});

  const value = { categoriesMap };

  useEffect(()=>{
    if (data){
      const {collections}=data
      setCategoriesMap(collections.reduce((acc,collection)=>{
        const {title,items}=collection
        acc[title.toLowerCase()]=items;
        return acc
      },{}))
    }
  },[data])
  // console.log(data)
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
