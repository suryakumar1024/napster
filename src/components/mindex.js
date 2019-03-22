import React, {Component} from 'react';
import {connect} from 'react-redux';
import './../App.css'

class MApp extends Component {
    constructor(props){
        super(props);
    }
   
    buildHtml(){
        let html = '', musicJson = this.props.musicList, loading= this.props.loading;
        if(musicJson){
            // html = musicJson.map((tracks, index) => (<h1>{tracks.albumId}</h1>));
            // musicJson.map((tracks, index) => (<h1>{tracks.albumId}</h1>))
            html = musicJson.tracks.map((tracks,index) => (
            <div className="audiotrackwrapper">
            <div className="audiotrack">{tracks.albumName}<div>{tracks.artistName}</div></div>
            <div className='audiotrackright'>
            
            <audio controls><source src={tracks.previewURL} type="audio/mpeg" /></audio>
            
            </div>
            </div>));
        }
        if(loading){
            html = <h1>Composing your favourite music</h1>
        }
        return html
    }

    render(){
        return(
            <div className="music_wrapper">
                {this.buildHtml()}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    musicList: state.json,
    loading: state.loading
});

export default connect(mapStateToProps, null)(MApp);