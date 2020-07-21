const toRad = (x) => {
    return x * Math.PI / 180;
};

// Haversine formula
export const getDistance = (lat1, lng1, lat2, lng2) => {
    const R = 6378137; // Earth’s mean radius in meter
    const x1 = lat2 - lat1;
    const dLat = toRad(x1);
    const x2 = lng2 - lng1;
    const dLng = toRad(x2);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
        Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;
    
    return d;
}

export const getHeading = (lat1, lng1, lat2, lng2) => {
    const y = Math.sin(lng2 - lng1) * Math.cos(lat2);
    const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(lng2 - lng1);
    const bearing = Math.atan2(y, x) * 180 / Math.PI;

    return bearing;
}