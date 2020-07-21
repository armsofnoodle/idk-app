import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import FiltersContext from '../context/FiltersContext';
import NativeSelect from '@material-ui/core/NativeSelect';

const Filters = () => {
    const { filters, dispatch } = useContext(FiltersContext);

    const setEstablishment = (e) => {
        dispatch({ type: 'SET_ESTABLISHMENT', establishment: e.target.value });
    }

    const setPrice = (price) => {
        dispatch({ type: 'SET_PRICE', price });
    }

    const setRadius = (e) => {
        dispatch({ type: 'SET_RADIUS', radius: parseInt(e.target.value) });
    }

    const requestAccess = () => {
        if (isNaN(filters.radius)) {
            alert('Please enter a distance and try again!');
        } else {
            DeviceOrientationEvent.requestPermission();
            dispatch({ type: 'SET_PLACE_FOUND', placeFound: false });
            dispatch({ type: 'SET_DISTANCE_FOUND', distanceFound: false });
            dispatch({ type: 'SET_COMPASS_FOUND', compassFound: false });
            dispatch({type: 'SET_POS_FOUND', posFound: false});
        }
    }

    const prices = [1, 2, 3, 4];
    
    return (
        <div className='filters'>
            <label>Vibe: </label>
            <NativeSelect className='select' onChange={setEstablishment} defaultValue={filters.establishment}>
                <option value='restaurant'>Restaurant</option>
                <option value='bar'>Bar</option>
                <option value='cafe'>Cafe</option>
                <option value='meal_takeaway'>Takeaways</option>

            </NativeSelect>
            <div className='price'>
                <label>Price:</label>
                {prices.map((price) => {
                    return (
                        <button key={`pricebutton${price}`} className={filters.price === price ? 'price-active' : 'price-default'} onClick={() => setPrice(price)}>{'$'.repeat(price)}</button>
                    )
                })}
            </div>
            <div className='distance-input'>
                <label>Distance: </label>
                <input type='number' onChange={setRadius} value={filters.radius} />
                <label className='label-small'>m</label>
            </div>
            <div className='searchButton'>
                <Link to={isNaN(filters.radius) ? '/' : '/search'} onClick={requestAccess} >Take Me There!</Link>
            </div>
        </div>
    );
}

export default Filters;