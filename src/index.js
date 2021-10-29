const { search } = require('yt-getvideos');

search('Never gonna give you up')
  .then(result => console.log(result))
  .catch(e => console.log(e));
