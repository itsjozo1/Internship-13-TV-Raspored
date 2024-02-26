const changePage = async (href) => {
    try {
        const response = await fetch(href);
        
        if (!response.ok) {
            throw new Error('Failed to fetch HTML file');
        }
        const htmlContent = await response.text();
        
        const parser = new DOMParser();
        const newDocument = parser.parseFromString(htmlContent, 'text/html');

        document.querySelector("#root").innerHTML = newDocument.querySelector("#root").innerHTML;
    } catch (error) {
        console.error(error);
    }
}

export {changePage};