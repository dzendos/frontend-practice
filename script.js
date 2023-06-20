let imageLabel = document.getElementById('image_title');
let image = document.getElementById('img_id');
let imageDate = document.getElementById('image_date')


async function getID() {
    const res = await fetch('https://fwd.innopolis.university/api/hw2?email=e.gerasimov@innopolis.university');
    const json = await res.json();
    return json;
}

getID().then(id => {
    const id_api = id

    async function getData() {
        const res = await fetch('https://fwd.innopolis.university/api/comic?id=' + id_api);
        const json = await res.json();
        return json;
    }

    getData().then(data => {
        const imageTitle = data.safe_title;
        const imageAlt = data.alt
        const imageLink = data.img;
        const imageDay = data.day
        const imageMonth = data.month
        const imageYear = data.year
        const dateString = new Date(Date.UTC(imageYear, imageMonth, imageDay, 3, 0, 0));
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        image.src = imageLink;
        image.alt = imageAlt
        imageLabel.textContent = imageTitle;
        imageDate.textContent = dateString.toLocaleDateString('en-en', options);
    })
})