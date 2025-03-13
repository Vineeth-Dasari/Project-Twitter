const {TweetRepository} = require('../repository/index');

class TweetService { 

    constuctor() {
        this.tweetRepository = new TweetRepository();
    }

    async create(data) {
        const content = data.content;
        const tags = content.match(/#[a-zA-Z0-9_]+/g);      // this regex extracts hastags.
        tags = tags.map((tag) => tag.substring(1));
        console.log(tags);
        const tweet = await this.tweetRepository.create(data);
        return tweet;
    }

}

module.exports = TweetService;


/*
    Example : 
    this is my #First #tweet I'm raelly #excited
*/