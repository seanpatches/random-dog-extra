export default function dogAPI(){
  return fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'There was an issue fetching the image.';

      return json;
    })
    .then(json => json.message);
}
