const paragraph = document.querySelector('#paragraph');

const params = new URLSearchParams(window.location.search);

params.forEach((value, key)=>{
    paragraph.append(`${value} ${key}`);
    paragraph.append(document.createElement('br'));
});
