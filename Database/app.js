let left_btn = document.getElementsByClassName('bi-chevron-left')[0];
let marvel_left_btn = document.getElementsByClassName('bi-marvel-left')[0];
let dc_left_btn = document.getElementsByClassName('bi-dc-left')[0];
let english_left_btn = document.getElementsByClassName('bi-english-left')[0];
let telugu_left_btn = document.getElementsByClassName('bi-telugu-left')[0];
let tamil_left_btn = document.getElementsByClassName('bi-tamil-left')[0];
let hindi_left_btn = document.getElementsByClassName('bi-hindi-left')[0];
let malayalam_left_btn = document.getElementsByClassName('bi-malayalam-left')[0];

let right_btn = document.getElementsByClassName('bi-chevron-right')[0];
let marvel_right_btn = document.getElementsByClassName('bi-marvel-right')[0];
let dc_right_btn = document.getElementsByClassName('bi-dc-right')[0];
let english_right_btn = document.getElementsByClassName('bi-english-right')[0];
let telugu_right_btn = document.getElementsByClassName('bi-telugu-right')[0];
let tamil_right_btn = document.getElementsByClassName('bi-tamil-right')[0];
let hindi_right_btn = document.getElementsByClassName('bi-hindi-right')[0];
let malayalam_right_btn = document.getElementsByClassName('bi-malayalam-right')[0];

let count_container = document.getElementsByClassName('count-container') [0];
let swiper_wrapper = document.getElementsByClassName('swiper-wrapper') [0];
let marvel_container = document.getElementsByClassName('marvel_container') [0];
let dc_container = document.getElementsByClassName('dc_container') [0];
let english_container = document.getElementsByClassName('english_container') [0];
let telugu_container = document.getElementsByClassName('telugu_container') [0];
let tamil_container = document.getElementsByClassName('tamil_container') [0];
let hindi_container = document.getElementsByClassName('hindi_container') [0];
let malayalam_container = document.getElementsByClassName('malayalam_container') [0];
let post_container = document.getElementsByClassName('post_container') [0];
let movie_container = document.getElementsByClassName('movie-container') [0];

let search = document.getElementsByClassName('search')[0];
let search_input = document.getElementById('search_input');



let moviesjson_url = "movie.json";

 fetch(moviesjson_url).then(Response => Response.json())
    .then((data) => {
        data.forEach((ele, i) => {
            let { Title, imdbRating, Year, Poster, Genre, Quality, Language, url } = ele;
            let card = document.createElement('a');
            card.classList.add('post_box');
            card.href = url;
            card.innerHTML = `
            <div class="post-img">
            <img alt="" src="${Poster}"/>
            </div>
            <div class="main-slider-text">
            <span class="quality">${Quality}</span>
            <div class="bottom-text">
            <div class="movie-name">
            <span>${Year}</span>
            <a href="${url}">${Title}</a>
            <span>${Language}</span>
            </div>
            <div class="category-rating">
            <div class="category">
            <a href="#">${Genre}</a>
            </div>
            <div class="rating">${imdbRating}<img alt="imbd" src="img/IMDb-icon.png"/>
            </div>
            </div>
            </div>
            </div>
            </div> 
            `
            post_container.appendChild(card);
        });
    
   
        //     document.getElementById('Title').innerText = data[0].Title;
        //     document.getElementById('Genre').innerText = data[0].Genre;
        //     document.getElementById('Year').innerText = data[0].Year;
        //     document.getElementById('Language').innerText = data[0].Language
        //     document.getElementById('imdbRating').innerHTML = `<span>IMDB</span><i class="bi bi-star-fill"></i> ${data[0].imdbRating}`;


        //     // search data  load 
        //     data.forEach(element => {
        //         let { Title, imdbRating, Year, Poster, Genre, Language, url } = element;
        //         let card = document.createElement('a');
        //         card.classList.add('search_card');
        //         card.href = url;
        //         card.innerHTML = `
        //         <img src="${Poster}" alt="">
        //                     <div class="cont">
        //                         <h3 >${Title} </h3>
        //                         <p>${Genre}, ${Year} , <span>IMDB</span><i class="bi bi-star-fill"></i> ${imdbRating}</p>
        //                         <p>${Language}</p>
        //                         </div>
        //         `
        //         search.appendChild(card);
        //     });

        //    // search filter  

        //    search_input.addEventListener('keyup', () => {
        //     let filter = search_input.value.toUpperCase();
        //     let a = search.getElementsByTagName('a');

        //     for (let index = 0; index < a.length; index++) {
        //         let b = a[index].getElementsByClassName('cont')[0];
        //         // console.log(a.textContent)
        //         let TextValue = b.textContent || b.innerText;
        //         if (TextValue.toUpperCase().indexOf(filter) > -1) {
        //             a[index].style.display = "flex";
        //             search.style.visibility = "visible";
        //             search.style.opacity = 1;
        //         } else {
        //             a[index].style.display = "none";
        //         }
        //         if (search_input.value == 0) {
        //             search.style.visibility = "hidden";
        //             search.style.opacity = 0;
        //         }
        //     }
        // })

        // let video = document.getElementsByTagName('video')[0];
        // let play = document.getElementById('play');
        // play.addEventListener('click', () => {
        //     if (video.paused) {
        //         video.play();
        //         play.innerHTML = `Play <i class="bi bi-pause-fill"></i>`
        //     } else {
        //         video.pause();
        //         play.innerHTML = `Watch <i class="bi bi-play-fill"></i>`
        //     }
        // })

        let series = document.getElementById('series');
        let movies = document.getElementById('movies');
        let Anime = document.getElementById('Anime');

        Anime.addEventListener('click', () => {
            post_container.innerHTML = '';
    
            let Anime_array = data.filter(ele => {
                return ele.Type === "Anime";
                });
    
            Anime_array.forEach((ele, i) => {
            let { Title, imdbRating, Year, Poster, Genre, Quality, Language, url } = ele;
            let card = document.createElement('a');
            card.classList.add('post_box');
            card.href = url;
            card.innerHTML = `
            <!--img-->
            <div class="post-img">
            <img alt="" src="${Poster}"/>
            </div>
            <!--text---------->
            <div class="main-slider-text">
            <!--quality----->
            <span class="quality">${Quality}</span>
            <!--bottom-text-->
            <div class="bottom-text">
            <!--name----->
            <div class="movie-name">
            <span>${Year}</span>
            <a href="${url}">${Title}</a>
            <span>${Language}</span>
            </div>
            <!--Category-and-rating---->
            <div class="category-rating">
            <!--category-->
            <div class="category">
            <a href="#">${Genre}</a>
            </div>
            <!--rating--->
            <div class="rating">${imdbRating}<img alt="imbd" src="img/IMDb-icon.png"/>
            </div>
            </div>
            </div>
            </div>
            </div>
            `
            post_container.appendChild(card);
        });
        })

        series.addEventListener('click', () => {
        post_container.innerHTML = '';

        let series_array = data.filter(ele => {
            return ele.Type === "series";
            });

        series_array.forEach((ele, i) => {
        let { Title, imdbRating, Year, Poster, Genre, Quality, Language, url } = ele;
        let card = document.createElement('a');
        card.classList.add('post_box');
        card.href = url;
        card.innerHTML = `
        <!--img-->
        <div class="post-img">
        <img alt="" src="${Poster}"/>
        </div>
        <!--text---------->
        <div class="main-slider-text">
        <!--quality----->
        <span class="quality">${Quality}</span>
        <!--bottom-text-->
        <div class="bottom-text">
        <!--name----->
        <div class="movie-name">
        <span>${Year}</span>
        <a href="${url}">${Title}</a>
        <span>${Language}</span>
        </div>
        <!--Category-and-rating---->
        <div class="category-rating">
        <!--category-->
        <div class="category">
        <a href="#">${Genre}</a>
        </div>
        <!--rating--->
        <div class="rating">${imdbRating}<img alt="imbd" src="img/IMDb-icon.png"/>
        </div>
        </div>
        </div>
        </div>
        </div>
        `
        post_container.appendChild(card);
    });
    })

    movies.addEventListener('click', () => {
        post_container.innerHTML = '';

        let movies_array = data.filter(ele => {
            return ele.Type === "movie";
            });

        movies_array.forEach((ele, i) => {
        let { Title, imdbRating, Year, Poster, Genre, Quality, Language, url } = ele;
        let card = document.createElement('a');
        card.classList.add('post_box');
        card.href = url;
        card.innerHTML = `
        <!--img-->
        <div class="post-img">
        <img alt="" src="${Poster}"/>
        </div>
        <!--text---------->
        <div class="main-slider-text">
        <!--quality----->
        <span class="quality">${Quality}</span>
        <!--bottom-text-->
        <div class="bottom-text">
        <!--name----->
        <div class="movie-name">
        <span>${Year}</span>
        <a href="${url}">${Title}</a>
        <span>${Language}</span>
        </div>
        <!--Category-and-rating---->
        <div class="category-rating">
        <!--category-->
        <div class="category">
        <a href="#">${Genre}</a>
        </div>
        <!--rating--->
        <div class="rating">${imdbRating}<img alt="imbd" src="img/IMDb-icon.png"/>
        </div>
        </div>
        </div>
        </div>
        </div>
        `
        post_container.appendChild(card);
    });
    })
        // movies.addEventListener('click', () => {
        // telugu_container.innerHTML = '';
    
            let telugu_array = data.filter(ele => {
                return ele.Category === "Telugu";
                });
    
                telugu_array.forEach((ele, i) => {
                let { Title, imdbRating, Year, Poster, Genre, Quality, Language, url } = ele;
                let card = document.createElement('a');
                card.classList.add('telugupost_box');
                card.href = url;
                card.innerHTML = `<!--img-->
                <div class="telugupost-img">
                    <img alt=""src="${Poster}"/>
                    </div>
                    <!--text---------->
                    <div class="main-slider-text">
                    <!--quality----->
                    <span class="quality">${Quality}</span>
                    <!--bottom-text-->
                    <div class="bottom-text">
                    <!--name----->
                    <div class="movie-name">
                    <span>${Year}</span>
                    <a href="${url}">${Title}</a>
                    <span>${Language}</span>
                    </div>
                    <!--Category-and-rating---->
                    <div class="category-rating">
                    <!--category-->
                    <div class="category">
                    <a href="#">${Genre}</a>
                    </div>
                    <!--rating--->
                    <div class="rating" >${imdbRating}<img alt="imbd" src="img/IMDb-icon.png"/>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                `
                telugu_container.appendChild(card);
                });
            

                let english_array = data.filter(ele => {
                    return ele.Category === "English";
                });
        
                english_array.forEach((ele, i) => {
                    let { Title, imdbRating, Year, Poster, Genre, Quality, Language, url } = ele;
                    let card = document.createElement('a');
                    card.classList.add('englishpost_box');
                    card.href = url;
                    card.innerHTML = `<!--img-->
                    <div class="englishpost-img">
                        <img alt=""src="${Poster}"/>
                        </div>
                        <!--text---------->
                        <div class="main-slider-text">
                        <!--quality----->
                        <span class="quality">${Quality}</span>
                        <!--bottom-text-->
                        <div class="bottom-text">
                        <!--name----->
                        <div class="movie-name">
                        <span>${Year}</span>
                        <a href="${url}">${Title}</a>
                        <span>${Language}</span>
                        </div>
                        <!--Category-and-rating---->
                        <div class="category-rating">
                        <!--category-->
                        <div class="category">
                        <a href="#">${Genre}</a>
                        </div>
                        <!--rating--->
                        <div class="rating" >${imdbRating}<img alt="imbd" src="img/IMDb-icon.png"/>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                    `
                    english_container.appendChild(card);
                    });

                let marvel_array = data.filter(ele => {
                    return ele.Category === "Marvel";
                });
        
                marvel_array.forEach((ele, i) => {
                    let { Title, imdbRating, Year, Poster, Genre, Quality, Language, url } = ele;
                    let card = document.createElement('a');
                    card.classList.add('marvelpost_box');
                    card.href = url;
                    card.innerHTML = `<!--img-->
                    <div class="marvelpost-img">
                        <img alt=""src="${Poster}"/>
                        </div>
                        <!--text---------->
                        <div class="main-slider-text">
                        <!--quality----->
                        <span class="quality">${Quality}</span>
                        <!--bottom-text-->
                        <div class="bottom-text">
                        <!--name----->
                        <div class="movie-name">
                        <span>${Year}</span>
                        <a href="${url}">${Title}</a>
                        <span>${Language}</span>
                        </div>
                        <!--Category-and-rating---->
                        <div class="category-rating">
                        <!--category-->
                        <div class="category">
                        <a href="#">${Genre}</a>
                        </div>
                        <!--rating--->
                        <div class="rating">${imdbRating}<img alt="imbd" src="img/IMDb-icon.png"/>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                    `
                    marvel_container.appendChild(card);
    });

                let dc_array = data.filter(ele => {
                    return ele.Category === "DC";
                });
            
                dc_array.forEach((ele, i) => {
                    let { Title, imdbRating, Year, Poster, Genre, Quality, Language, url } = ele;
                    let card = document.createElement('a');
                    card.classList.add('dcpost_box');
                    card.href = url;
                    card.innerHTML = `<!--img-->
                    <div class="dcpost-img">
                        <img alt=""src="${Poster}"/>
                        </div>
                        <!--text---------->
                        <div class="main-slider-text">
                        <!--quality----->
                        <span class="quality">${Quality}</span>
                        <!--bottom-text-->
                        <div class="bottom-text">
                        <!--name----->
                        <div class="movie-name">
                        <span>${Year}</span>
                        <a href="${url}">${Title}</a>
                        <span>${Language}</span>
                        </div>
                        <!--Category-and-rating---->
                        <div class="category-rating">
                        <!--category-->
                        <div class="category">
                        <a href="#">${Genre}</a>
                        </div>
                        <!--rating--->
                        <div class="rating">${imdbRating}<img alt="imbd" src="img/IMDb-icon.png"/>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                    `
                    dc_container.appendChild(card);
            });

                let tamil_array = data.filter(ele => {
                    return ele.Category === "Tamil";
                } );
        
                tamil_array.forEach((ele, i) => {
                    let { Title, imdbRating, Year, Poster, Genre, Quality, Language, url } = ele;
                    let card = document.createElement('a');
                    card.classList.add('tamilpost_box');
                    card.href = url;
                    card.innerHTML = `<!--img-->
                    <div class="tamilpost-img">
                        <img alt=""src="${Poster}"/>
                        </div>
                        <!--text---------->
                        <div class="main-slider-text">
                        <!--quality----->
                        <span class="quality">${Quality}</span>
                        <!--bottom-text-->
                        <div class="bottom-text">
                        <!--name----->
                        <div class="movie-name">
                        <span>${Year}</span>
                        <a href="${url}">${Title}</a>
                        <span>${Language}</span>
                        </div>
                        <!--Category-and-rating---->
                        <div class="category-rating">
                        <!--category-->
                        <div class="category">
                        <a href="#">${Genre}</a>
                        </div>
                        <!--rating--->
                        <div class="rating">${imdbRating}<img alt="imbd" src="img/IMDb-icon.png"/>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                    `
                    tamil_container.appendChild(card);
                    }); 

                    let hindi_array = data.filter(ele => {
                        return ele.Category === "Hindi";
                        });
            
                        hindi_array.forEach((ele, i) => {
                        let { Title, imdbRating, Year, Poster, Genre, Quality, Language, url } = ele;
                        let card = document.createElement('a');
                        card.classList.add('hindipost_box');
                        card.href = url;
                        card.innerHTML = `<!--img-->
                        <div class="hindipost-img">
                            <img alt=""src="${Poster}"/>
                            </div>
                            <!--text---------->
                            <div class="main-slider-text">
                            <!--quality----->
                            <span class="quality">${Quality}</span>
                            <!--bottom-text-->
                            <div class="bottom-text">
                            <!--name----->
                            <div class="movie-name">
                            <span>${Year}</span>
                            <a href="${url}">${Title}</a>
                            <span>${Language}</span>
                            </div>
                            <!--Category-and-rating---->
                            <div class="category-rating">
                            <!--category-->
                            <div class="category">
                            <a href="#">${Genre}</a>
                            </div>
                            <!--rating--->
                            <div class="rating">${imdbRating}<img alt="imbd" src="img/IMDb-icon.png"/>
                            </div>
                            </div>
                            </div>
                            </div>
                            </div>
                        `
                        hindi_container.appendChild(card);
                        }); 
                        let malayalam_array = data.filter(ele => {
                            return ele.Category === "Malayalam";
                            });
                
                            malayalam_array.forEach((ele, i) => {
                            let { Title, imdbRating, Year, Poster, Genre, Quality, Language, url } = ele;
                            let card = document.createElement('a');
                            card.classList.add('malayalampost_box');
                            card.href = url;
                            card.innerHTML = `<!--img-->
                            <div class="malayalampost-img">
                                <img alt=""src="${Poster}"/>
                                </div>
                                <!--text---------->
                                <div class="main-slider-text">
                                <!--quality----->
                                <span class="quality">${Quality}</span>
                                <!--bottom-text-->
                                <div class="bottom-text">
                                <!--name----->
                                <div class="movie-name">
                                <span>${Year}</span>
                                <a href="${url}">${Title}</a>
                                <span>${Language}</span>
                                </div>
                                <!--Category-and-rating---->
                                <div class="category-rating">
                                <!--category-->
                                <div class="category">
                                <a href="#">${Genre}</a>
                                </div>
                                <!--rating--->
                                <div class="rating">${imdbRating}<img alt="imbd" src="img/IMDb-icon.png"/>
                                </div>
                                </div>
                                </div>
                                </div>
                                </div>
                            `
    malayalam_container.appendChild(card);
});
    // let movie_array = data.filter(ele => {
    //     return ele.Type === "movie";
    //     });
    //     movie_array.forEach((ele, i) => {
    //     let { Title, imdbRating, Year, Poster, Genre, Quality, Language, url } = ele;
    //     let card = document.createElement('a');
        
    //     });
    });
 
    








    let searchjson_url = "movie.json";

    fetch(searchjson_url).then(Response => Response.json())
    .then((data) => {
        data.forEach((ele, i) => {
            let { Title, imdbRating, Year, Poster, Genre, Language, Rated,Runtime, url } = ele;
            let card = document.createElement('a');
            card.classList.add('search_card');
            card.href = url;
            card.innerHTML = `
            <img src="${Poster}" alt="">
                        <div class="cont">
                            <h3>${Title} </h3>
                            <p>${Genre},<img src="img/IMDb-icon.png">${imdbRating}</p>
                            <p>${Language}</p>
                            <p>${Year},${Rated}</p>
                            <p>${Runtime}</p>
                        </div>
            `
            search.appendChild(card);
        });

       // search filter  

       search_input.addEventListener('keyup', () => {
        let filter = search_input.value.toUpperCase();
        let a = search.getElementsByTagName('a');

        for (let index = 0; index < a.length; index++) {
            let b = a[index].getElementsByClassName('cont')[0];
            // console.log(a.textContent)
            let TextValue = b.textContent || b.innerText;
            if (TextValue.toUpperCase().indexOf(filter) > -1) {
                a[index].style.display = "flex";
                search.style.visibility = "visible";
                search.style.opacity = 1;
            } else {
                a[index].style.display = "none";
            }
            if (search_input.value == 0) {
                search.style.visibility = "hidden";
                search.style.opacity = 0;
            }
        }
    });
});


let latestjson_url = "latest.json";

fetch(latestjson_url).then(Response => Response.json())
    .then((data) => {
        data.forEach((ele, i) => {
            let { Title, imdbRating, Year, Bposter, Genre, Quality, Language, url } = ele;
            let card = document.createElement('a');
            card.classList.add('swiper-slide');
            card.href = url;
            card.innerHTML = `
                <div class="main-slider-box">
                <a href="${url}" class="main-slider-overlay">
                <i class="fas fa-play"></i>
                </a>
                <div class="main-slider-img">
                <img alt="Poster" src="${Bposter}"/>
                </div>
                <div class="main-slider-text1">
                <span class="quality">${Quality}</span>
                <div class="bottom-text">
                <div class="movie-name">
                <span>${Year}</span>
                <a href="${url}">${Title}</a>
                <span>${Language}</span>
                </div>
                <div class="category-rating">
                <div class="category">
                <a href="#">${Genre}</a>
                </div>
                <div class="rating">
                ${imdbRating}<img alt="imbd" src="img/IMDb-icon.png"/>
                </div>
                </div>
                </div>
                </div>
                </div>
                `
                swiper_wrapper.appendChild(card);
             })
        })

        let count_json = "count.json";

    fetch(count_json).then(Response => Response.json())
    .then((data) => {
        data.forEach((ele, i) => {
            let { movie, series, Anime, total } = ele;
            let card = document.createElement('div');
            card.classList.add('cout-list');
            card.innerHTML = `
            <p>Movies:-${movie}</p>
            <p>Series:-${series}</p>
            <p>Anime:-${Anime}</p>
            <p>Total:-${total}</p>
                `
                count_container.appendChild(card);
             })
})


left_btn.addEventListener('click', () => {
    post_container.scrollLeft -= 150;
})
marvel_left_btn.addEventListener('click', () => {
    marvel_container.scrollLeft -= 150;
})
dc_left_btn.addEventListener('click', () => {
    dc_container.scrollLeft -= 150;
})
english_left_btn.addEventListener('click', () => {
    english_container.scrollLeft -= 150;
})
telugu_left_btn.addEventListener('click', () => {
    telugu_container.scrollLeft -= 150;
})
tamil_left_btn.addEventListener('click', () => {
    tamil_container.scrollLeft -= 150;
})
hindi_left_btn.addEventListener('click', () => {
    hindi_container.scrollLeft -= 150;
})
malayalam_left_btn.addEventListener('click', () => {
    malayalam_container.scrollLeft -= 150;
})


right_btn.addEventListener('click', () => {
    post_container.scrollLeft += 150;
})
marvel_right_btn.addEventListener('click', () => {
    marvel_container.scrollLeft += 150;
})
dc_right_btn.addEventListener('click', () => {
    dc_container.scrollLeft += 150;
})
english_right_btn.addEventListener('click', () => {
    english_container.scrollLeft += 150;
})
telugu_right_btn.addEventListener('click', () => {
    telugu_container.scrollLeft += 150;
})
tamil_right_btn.addEventListener('click', () => {
    tamil_container.scrollLeft += 150;
})
hindi_right_btn.addEventListener('click', () => {
    hindi_container.scrollLeft += 150;
})
malayalam_right_btn.addEventListener('click', () => {
    malayalam_container.scrollLeft += 150;
})