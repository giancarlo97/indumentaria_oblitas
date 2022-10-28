import React, {useEffect, useState} from "react";
import ItemList from "./ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    const URL_BASE = 'https://fakestoreapi.com/products';
    const URL_CAT = `${URL_BASE}/category/${id}`;

    useEffect(() => {
        const getProducts = async () => {
            try{
                const res = await fetch( id ? URL_CAT : URL_BASE);
                const data = await res.json();
                const productos = data.map(item => {
                  return {...item, stock:Math.floor(Math.random() * 50)}
                });
                //console.log(data);
                setProducts(productos);
            } catch{
                console.log("error");
            } finally {
                setLoading(false);
            }
        };
        getProducts();
            /*.then((res) => res.json())
            .then((json) => setProductos(json))
            .catch((error) => {
                console.log(error);
            })
            .finally(setLoading(false));*/
    }, [id, URL_BASE, URL_CAT]);

    return (
        <>
            <h1>{greeting}</h1>
            {
                <>
                    {loading ? <h1>Cargando...</h1> : <ItemList products={products} />}
                </>
            }
        </>    
    );
};