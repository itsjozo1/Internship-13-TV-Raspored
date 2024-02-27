let watchlist = [

];

/* if (watchlist.length === 0) {
    const watchlistString = JSON.stringify(watchlist);
    localStorage.setItem("watchlist", watchlistString);
} */

const addToWatchlist = (item) => {
    let watchlist = JSON.parse(localStorage.getItem("watchlist")) || []; 

    const isDuplicate = watchlist.some(watchlistItem => watchlistItem.id === item.id);

    if (!isDuplicate) {

        watchlist.push(item);

        const updatedWatchlistString = JSON.stringify(watchlist);
        localStorage.setItem("watchlist", updatedWatchlistString);
    }
};

const removeFromWatchlist = (tvProgram) => {
    let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

    const indexToRemove = watchlist.findIndex(item => item.id === tvProgram.id);

    if (indexToRemove !== -1) {
        watchlist.splice(indexToRemove, 1);

        const updatedWatchlistString = JSON.stringify(watchlist);
        localStorage.setItem("watchlist", updatedWatchlistString);
    }
};


const isProgramInWatchlist = (item) => {
    const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    const isInWatchlist = watchlist.some(watchlistItem => watchlistItem.id === item.id);

    return isInWatchlist;
};

export {addToWatchlist, isProgramInWatchlist, removeFromWatchlist};