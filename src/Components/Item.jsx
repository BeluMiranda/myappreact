import React from 'react';

const Item = ({shoee}) => {
   const {nombre, photo} = shoee
    return (
        <>
          <div className="card card-size mt-5">
                <div className="card-body">
                    <h5 className="card-title fw-bolder"> {nombre} </h5>
                    <img src={photo} className="card-img-top" alt="..."></img>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="d-flex gap-3 justify-content-center mt-1">
                        <button type="button" className="btn card-btn-cart mt-3 btn-sm btn-add btn btn-outline-dark">Details</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Item;
