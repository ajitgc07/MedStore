import React from "react";
import Layout from "./../components/Layout/Layout.js";
import { useSearch } from "../context/search.js";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cart.js";
import { toast } from "react-hot-toast";
import "../styles/Search.css";


const Search = () => {
    const [values, setValues] = useSearch();
    const navigate = useNavigate();
    const [cart, setCart] = useCart();

    return (
        <Layout>
            <div className="container-fluid mt-3 search">
                <div className="text-center">
                    <h1>Search Resuts</h1>
                    <h6>
                        {values?.results.length < 1
                            ? "No Products Found"
                            : `Found ${values?.results.length}`}
                    </h6>
                    <div className="d-flex flex-wrap mt-4">
                        {values?.results.map((p) => (
                            <div className="card m-2 border-success" key={p._id} >
                                <img
                                    src={`/api/v1/product/product-photo/${p._id}`}
                                    className="card-img-top img-fluid"
                                    alt={p.name}
                                />
                                <div className="card-body">
                                    <div className="card-name-price">
                                        <h5 className="card-title">{p.name}</h5>
                                        <hr class="card-divider"></hr>
                                        <h5 className="card-title card-price">
                                            {p.price.toLocaleString("en-US", {
                                                style: "currency",
                                                currency: "NPR",
                                            })}
                                        </h5>
                                    </div>
                                    <div className="card-name-price">
                                    
                                        <button className="btn btn-info ms-1"
                                            onClick={() => navigate(`/product/${p.slug}`)}>More Details</button>
                                        <button className="btn btn-dark ms-1"
                                            onClick={() => {
                                                setCart([...cart, p]);
                                                localStorage.setItem(
                                                    "cart",
                                                    JSON.stringify([...cart, p])
                                                );
                                                toast.success("Item Added to cart");
                                            }}>ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Search;