const {TweetRepository} = require('../repository/index');

const {HashtagRepository} = require('../repository/index');



class TweetService { 
    constructor(){
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository =  new HashtagRepository();
    }

    async create(data) {
        const content = data.content;
        const tags = content.match(/#[a-zA-Z0-9_]+/g).map((tag) => tag.substring(1));;      // this regex extracts hastags.
        
        const tweet = await this.tweetRepository.create(data);
        
        let alreadyPresenttags = await this.hashtagRepository.findByName(tags);
        
        let titleOfPresentTags = alreadyPresenttags.map(tags => tags.title);     // here we filer all the tags from the hashrepo file (See doc- 45)
    
        let newTags = tags.filter(tag => !titleOfPresentTags.includes(tag));         // this will give all the tags which are not present in hashrepo (! this will not equals for all the includes)
        newTags = newTags.map(tag => {
            return {title :  tag, tweets : [tweet.id]}
        })

        const reponse = await this.hashtagRepository.bulkCreate(newTags);
        alreadyPresenttags.forEach((tag) => {
            tag.tweets.push(tweet.id);
            tag.save();
        });
        return tweet;
    }

}

module.exports = TweetService;


/*
    Example : 
    this is my #First #tweet I'm raelly #excited
*/