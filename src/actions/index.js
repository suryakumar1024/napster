import * as c_name from './../constants'

export const request_music = () => ({
    type: c_name.REQUEST_MUSIC
});

export const receive_music = (received_json) => ({
    type: c_name.RECEIVING_MUSIC,
    json: received_json
});

export function apiconnecter(){

    return function(dispatch) {
        dispatch(request_music());
        return fetch(`https://api.napster.com/v2.1/tracks/top?apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm`).then(
            response => response.json(),
            error => console.log('Error occured during fetch ', error),
        ).then((json) =>{
            dispatch(receive_music(json));
        });
    };
}