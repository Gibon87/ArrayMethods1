const app = document.querySelector('#app');

const div = document.createElement('div');

const tags = ['rap','techno'];

tags.push('rock');

const newTags = ['danielMagical','rafonix','gural',];

const allTags = [].concat(tags, newTags);

div.innerHTML = allTags.join(", #");

app.appendChild(div);
