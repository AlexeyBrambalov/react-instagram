import { async } from "q";

export default class InstaService {
  constructor() {
    this._apiBase = "https://api.myjson.com/bins/vl74f";
  }

  getResourse = async url => {
    const res = await fetch(`${this._apiBase}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, recieved ${res.status}`);
    }

    return res.json();
  };

  getAllPosts = async () => {
    const res = await this.getResourse("posts/");

    return res;
  };

  getAllUsers = async () => {
    const res = await this.getResourse("posts/");

    return res;
  };

  getAllPhotos = async () => {
    const res = await this.getResourse("posts/");
    return res.map(this._transformPosts);
  };

  _transformPosts = post => {
    return {
      src: post.src,
      alt: post.alt,
      id: post.id
    };
  };
}
