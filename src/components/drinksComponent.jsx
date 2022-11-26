import React, { useState, useEffect } from "react";

const Drinks = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {

        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://gunter-food-api.herokuapp.com/drinks");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
            }

            return () => {
                componentMounted = false;
            }
        }

        getProducts();
    }, []);

    const Loading = () => {
        return (
            <div>
                Loading.....
            </div>
        )
    }

    const ShowDrinks = () => {
        return (
            <>

                {filter.map((product) => {
                    return (
                        <>
                            <div className="col-md-3 mb-4">
                                <div className="card h-100 text-center p-4" key={product.id}>
                                    <img src={product.image} className="card-img-top" alt={product.name} height="100vh" />
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">{product.name}</h5>
                                        <p className="card-text lead fw-bold pt-4">
                                        {/* <a href="#" className="btn btn-outline-dark">Go somewhere</a> */}
                                        <span className='bg-orange-500 text-white px-2 py-1.5 rounded-full m-1 hover:bg-orange-400'>
                                            <button>+ Add</button>
                                        </span>
                                        <span className='bg-orange-500 text-white px-2 py-1.5 rounded-full m-1'>
                                         ₹{product.price}0
                                        </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        )
    }

    return (
        <div>
            <div className="container my-s py-s">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="text-orange-600 display-6 fw-bolder text-center">Other SoftDrinks</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowDrinks />}
                </div>
            </div>
        </div>
    )
}

export default Drinks