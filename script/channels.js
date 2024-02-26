const tvChannels = [
    {
        id: 1,
        name: "HRT1",
        image: "https://logovectorseek.com/wp-content/uploads/2021/03/hrvatska-radiotelevizija-hrt-logo-vector-xs.png"
    },
    {
        id: 2,
        name: "RTL",
        image: "https://logowik.com/content/uploads/images/rtl5032.logowik.com.webp"
    },
    {
        id: 3,
        name: "Mreža TV",
        image: "https://okz.hr/sites/default/files/styles/naslovna_slider700x450/public/novosti/mrezatv.jpg?itok=dZnhZ0Eu"
    },
    {
        id: 4,
        name: "Cinestar series",
        image: "https://www.supernova-colosseum.hr//fileadmin/shared/stores/Cinestar/Cinestar.jpg"
    }
]



if (tvChannels.length === 0) {
    const tvChannelsString = JSON.stringify(tvChannels);
    localStorage.setItem("tvChannels", tvChannelsString);
}

export {tvChannels}