import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import FiltersContext from '../context/FiltersContext';


const Compass = () => {
    const { filters, dispatch } = useContext(FiltersContext);

    const arrowDirection = filters.heading - filters.userFacing;

    const resetNoResults = () => {
        dispatch({ type: 'SET_NO_RESULTS', noResults: false });
    }


    return (
        <div>
            {!filters.compassFound &&
                <div className='loading-container'>
                    <div className='loading'>
                        <p>Sorry, your browser and/or device is not supported.</p>
                    </div>
                </div>}
            {!filters.distanceFound &&
                <div className='loading-container'>
                    <div className='loading'>
                        {filters.noResults ?
                            <p>Sorry, couldn't find somewhere that matched your search, <Link to='/' onClick={resetNoResults}>please try again.</Link></p>
                            :
                            <p>Definitely not freaking out<span className='loading-dot1'>.</span><span className='loading-dot2'>.</span><span className='loading-dot3'>.</span></p>}
                    </div>
                </div>
            }
            {filters.distanceFound &&
                <div>
                    <div className='distance-container'>
                        <h1 className='distance'>{`${filters.distance}m`}</h1>
                        <h1 className='distance-subtitle'>to {filters.establishment === 'bar' ? ` those mystery dranks` : `the mystery snack`}</h1>
                    </div>
                    <div>
                        <img className='compass dial' style={{ transform: `rotate(${-filters.userFacing}deg)` }} src='/assets/dial.png' alt='compass' />
                        <img className='compass crosshair' src='/assets/crosshair.png' alt='compass' />
                        <img className='compass direction-arrow' style={{ transform: `rotate(${arrowDirection}deg)` }} src='/assets/direction-arrow.png' alt='heading' />
                    </div>
                </div>
            }
        </div>
    );
}

export default Compass;

