import { defineStore } from 'pinia'
import { useSession } from './session';
import { User } from './user';

export const usePosts = defineStore('posts', {

  state: () => ({
    list: [] as Post[],
    session: useSession(),
  }),
  actions: {
    async fetchPosts(handle: string = '') {
      const posts = await this.session.api('posts/wall/' + handle); //need to use a session api here
      this.list = posts;
    },

    async fetchAllPosts() {
      const posts = await this.session.api('posts'); //need to use a session api here
      this.list = posts;
    },

    async createPost(post: Post) {
      const newPost = await this.session.api('posts', post);
      this.list.push(newPost);
    }
  }
})

export interface Post {
  _id?: string;
  src: string;
  caption: string;
  owner: string;
  user?: User;
  likes: string[];
  comments: any[];
  isPublic: boolean;

}