import React from 'react'
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ProductCard from '../../components/productCard';
import Categories from '../../components/categories';

const category = () => {
    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
            color: '#ff6d75',
        },
        '& .MuiRating-iconHover': {
            color: '#ff3d47',
        },
    });
    return (
        <>
            <div className="flex justify-center bg-white mt-3.5 shadow-xl " >

                <Categories />
                <Categories />
                <Categories />
                <Categories />
                <Categories />
                <Categories />
                <Categories />
                <Categories />
                <Categories />
                <Categories />

            </div>

            <div className='container mx-auto w-screen'>
                <div className='min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5  lg:grid-cols-4 max-w-6xl mx-auto p-2'>

                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />


                </div>
            </div>
        </>
    )
}

export default category