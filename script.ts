
import { formatDistanceToNow } from 'date-fns';


interface Api {
    image_title: string,
    image_alt: string,
    image_link: string,
    image_day: number,
    image_month: number,
    image_year: number,
}

let imageLabel: HTMLElement = document.getElementById('image_title');
let image = document.getElementById('img_id') as HTMLImageElement;
let imageDate: HTMLElement = document.getElementById('image_date')
let imageDate_ago: HTMLElement = document.getElementById('image_date_ago')


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
        const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        let api: Api = {
            image_title: data.safe_title,
            image_alt: data.alt,
            image_link: data.img,
            image_day: data.day,
            image_month: data.month,
            image_year: data.year,
        }
        const dateString = new Date(Date.UTC(api.image_year, api.image_month, api.image_day, 3, 0, 0));
        const timeAgo = formatDistanceToNow(dateString, { addSuffix: true });
        image.src = api.image_link;
        image.alt = api.image_alt;
        imageLabel.textContent = api.image_title;
        imageDate.textContent = dateString.toLocaleDateString('en-en', options);
        imageDate_ago.textContent = timeAgo;
    })
})