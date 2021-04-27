import React from 'react';

const ProductCard = ({name, price, imageUrl}) => {
    return (
        <div className="flex bg-white w-10/12 rounded-md shadow-md  m-auto mb-10">
        <div className="flex-none w-48 relative">
            <img src={imageUrl} alt={name} className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <form className="flex-auto p-6">
            <div className="flex flex-wrap">
            <h1 className="flex-auto text-xl font-semibold">
                {name}
            </h1>
            <div className="text-xl font-semibold text-gray-500">
                GHC {price}
            </div>
            <div className="w-full flex-none text-sm font-medium text-gray-500 mt-2">
                In stock
            </div>
            </div>
            <div className="flex space-x-3 mb-4 text-sm font-medium">
            <div className="flex-auto flex space-x-3">
                <button className="w-1/2 flex items-center justify-center w-9 h-9 rounded-md bg-black text-white" type="submit">Buy now</button>
                <button className="w-1/2 flex items-center justify-center w-9 h-9 rounded-md border border-gray-300" type="button">Add to bag</button>
            </div>

            </div>
        </form>
    </div>
    );
}

export default ProductCard;
