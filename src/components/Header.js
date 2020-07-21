import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
    let location = useLocation();
    const [search, setSearch] = useState(true);

    useEffect(() => {
        location.pathname === '/search' ? setSearch(true) : setSearch(false);
    }, [location]);
    

    return (
        <div className='header'>
            {search && <Link to='/' className='backButton'><div></div></Link>}
            <Link to='/' className={search ? 'logo-link' : 'logo-link logo-home'}><img src='/assets/logo.png' alt='idk app'/></Link>
            <Link to='/about' className='about-link'>?</Link>
        </div>
    );
}

export default Header;

