let fakeUserObject = {
  username: "adlan",
  name: "adlan",
  createdAt: "3:30pm",
  updatedAt: "3:31pm",
  loginToken: "TOKEN",
  favorites: [],
  ownStories:[]
}

let fakeUser1 = new User(fakeUserObject);


let fakeStoryList = new StoryList([]);

let fakeStoryObject = {
  author: "john smith",
  title: "fake book",
  url: "www.fakebook.com",
  username: "adlan",
  storyId: "id",
  createdAt: "3:30pm",
  updatedAt: "3:31pm"
};

let fakeStory = new Story(fakeStoryObject);

// fakeStoryList.addStory(fakeUser1,fakeStory);

fakeStoryList.addStory(abc,fakeStory);