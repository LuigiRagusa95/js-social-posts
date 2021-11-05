const posts = [
    { author: 'Jeff Bezos', profileImage: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg', date: '05/11/2021', likes: '80', imageHeader: 'https://picsum.photos/id/237/600/350' },
    { author: 'Elon Musk', profileImage: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg', date: '05/11/2021', likes: '40', imageHeader: 'https://picsum.photos/id/238/600/350' },
    { author: 'Jeff Atwood', profileImage: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Long_Zheng%2C_Dan_Rigsby%2C_Jeff_Atwood_%282979598012%29.jpg', date: '05/11/2021', likes: '10', imageHeader: 'https://picsum.photos/id/239/600/350' },
    { author: 'Bill Gates', profileImage: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Bill_Gates_2017_%28cropped%29.jpg', date: '05/11/2021', likes: '100', imageHeader: 'https://picsum.photos/id/240/600/350' },
    { author: 'Linus Torvalds', profileImage: 'https://upload.wikimedia.org/wikipedia/commons/0/01/LinuxCon_Europe_Linus_Torvalds_03_%28cropped%29.jpg', date: '05/11/2021', likes: '20', imageHeader: 'https://picsum.photos/id/242/600/350' },
];

const postTemplate = (...data) => {
    return `
    <div class="post">
        <div class="post__header">
            <div class="post-meta">
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${data.profileImage}" alt="${data.author}">
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${data.author}</div>
                    <div class="post-meta__time">${data.date}</div>
                </div>
            </div>
        </div>
        <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
        <div class="post__image">
            <img src="${data.imageHeader}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="1">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${data.likes}</b> persone
                </div>
            </div> 
        </div>
    </div>
    `;
};

/* JS Logic */
const container = document.getElementById('.container');
