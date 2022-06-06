import {combineReducers} from 'redux';

const songsReducer = ( ) => {
    return [
        {title: 'The Way Life Goes', duration: '3:42'},
        {title: 0, duration: '3:24'},
        {title: 'Nights', duration: '5:07'},
        {title: 'Peaches', duration: '3:18'}
    ];
};
const initState = { key: 'Hello'};
const selectedSongReducer = (selectedSong=initState, action) => {
    if(action.type === 'SONG_SELECTED') {
        selectedSong = action.payload;
        return selectedSong;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});