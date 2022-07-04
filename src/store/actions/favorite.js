export const addCurrentFavourite =(payload)=>({
    type:"ADD_TO_FAVORITES",
    payload,
});

export const removeCurrentFavourite=(payload)=>({
    type:"REMOVE_TO_FAVORITES",
    payload,
})