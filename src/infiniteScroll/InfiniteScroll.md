# Infinite scoll in your web app using react.

1. Add a event listener "scroll" event

useEffect(()=>{
    fetchData();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
},[])

2. In handleScroll function check for scroll and innerHeight of windoe is equals to webpage scrollHeight or not.

const handleScroll = () => {
    if(window.scrollY + window.innerHeight >= document.body.scrollHeight) {
        fetchData();
    }
}

scrolly - how much i have scrolled
innerheight - height of the window(visible section)
scrollHeight - total height of the web page

here,"window.scrollY + window.innerHeight >= document.body.scrollHeight", it means, we reached the bottom of the page.

const fetchData = async () => {
    setShowShimmer(true);
    const data = await fetch("https://....");
    const json = await data.json();

    setShowShimmer(false);
    setData((memes)=> [...memes, ...json.memes]);
}


