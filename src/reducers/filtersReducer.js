export const defaultFiltersReducerState = {
    establishment: 'restaurant',
    price: 1,
    radius: 1000,
    distance: 0,
    heading: 0,
    userFacing: 0,
    placeFound: false,
    distanceFound: false,
    compassFound: false,
    noResults: false,
    posFound: false
}

const filtersReducer = (state, action) => {
    switch (action.type) {
        case 'SET_ESTABLISHMENT':
            return {
                ...state,
                establishment: action.establishment
            }

        case 'SET_PRICE':
            return {
                ...state,
                price: action.price
            }

        case 'SET_RADIUS':
            return {
                ...state,
                radius: action.radius
            }
        
        case 'SET_DISTANCE':
            return {
                ...state,
                distance: action.distance
            }

        case 'SET_HEADING':
            return {
                ...state,
                heading: action.heading
            }
    
        case 'SET_USER_FACING':
            return {
                ...state,
                userFacing: action.userFacing
            }

        case 'SET_PLACE_FOUND':
            return {
                ...state,
                placeFound: action.placeFound
            }

        case 'SET_DISTANCE_FOUND':
            return {
                ...state,
                distanceFound: action.distanceFound
            }

        case 'SET_COMPASS_FOUND':
            return {
                ...state,
                compassFound: action.compassFound
            }
        
        case 'SET_NO_RESULTS':
            return {
                ...state,
                noResults: action.noResults
            }

        case 'SET_POS_FOUND':
            return {
                ...state,
                posFound: action.posFound
            }

        default:
            return state;
    }
}

export default filtersReducer;