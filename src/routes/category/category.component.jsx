import {useState, useEffect, Fragment} from 'react';
import {useParams} from 'react-router-dom';
import {gql, useMutation, useQuery} from "@apollo/client";

import ProductCard from '../../components/product-card/product-card.component';

import {CategoryContainer, Title} from './category.styles';

const gqlStatement = gql`
    query($title:String!){
        getCollectionsByTitle(title:$title){
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
//新增数据
const mutaion = gql`
    mutation($category:Category!){
        addCategory(category:$Category){
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

const Category = () => {
    const {category} = useParams();
    const {data} = useQuery(gqlStatement, {
        variables: {
            title: category
        }
    })

    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (data) {
            const {getCollectionsByTitle: {items}} = data
            setProducts(items)
        }

    }, [category, data])


    return (
        <Fragment>
            <Title>{category.toUpperCase()}</Title>
            <CategoryContainer>
                {products &&
                    products.map((product) => (
                        <ProductCard key={product.id} product={product}/>
                    ))}
            </CategoryContainer>
        </Fragment>
    );
};

export default Category;
