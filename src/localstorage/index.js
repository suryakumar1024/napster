export const loadstate = () => {
    try{
        const localdata = localStorage.getItem('state');
        if(localdata == null){
            return undefined;
        }
        return JSON.parse(localdata);
    }
    catch(err){
        return undefined;
    }
}

export const savestate = state => {
    try {
        const savedata = JSON.stringify(state);
        localStorage.setItem('state', savedata);
    }
    catch(err){
        console.log(err);
    }
}