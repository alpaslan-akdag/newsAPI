const button= document.querySelector('button');
const articles = document.getElementById('articles');
const APIKEY = '67894c4e782d40c0b271c7c27a97aca4';
function getArticle(){
    const article = document.getElementById('article').value;
      
    fetch(`https://newsapi.org/v2/everything?q=${article}&from=2021-09-28&sortBy=publishedAt&apiKey=${APIKEY}`)
    .then(response => response.json())
    .then(data => {console.log(data);
        for(let i=0; i<data.articles.length; i++){

            var p = document.createElement('p');
            p.textContent = data.articles[i].title;
            articles.appendChild(p);
        }
        console.log(article)
        });

}
button.addEventListener('click', getArticle);