import Button from '@mui/material/Button';

export type Tracks = {
    imgSrc: string,
    title: string,
    artists: Array<{
        name: string,
        id: string,
    }>,
    album: string,
    uri: string,
    handleSelectTrack: (uri: string) => void,
    isSelected: boolean,
}

const SongCard = ({imgSrc, title, artists,releasedate, album, Selected, handleSelect, uri }) => {
    return (
    <div className="cardsong">
        <div className="searchcard">
                <img src={imgSrc} alt="" />
                <div className="titlesong">
                    <h1>Album : {album}</h1>
                    <h3>Title : {title}</h3>
                    <h2> Artist : {artists.map(artist => artist.name).join(', ')}</h2>
                    <h2> Release Date : {releasedate}</h2>
                    <button onClick={() => handleSelect(uri)}> {Selected ? 'Deselect' : 'Select'} </button>
                </div>
        </div>
        </div>
    );
}

export default SongCard;