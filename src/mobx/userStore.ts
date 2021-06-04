import axios from "axios";
import { error } from "console";
import {
  makeObservable,
  observable,
  action,
  computed,
  when,
  reaction,
  autorun,
} from "mobx";

export interface UserData {
  id: string;
  fullName: string;
  image: string;
  position: string;
  gender: string;
  birthDay: string;
  phone: string;
  email: string;
  skype: string;
  instagram: string;
  facebook: string;
  like: number;
  createdAt: string;
  updatedAt: string;
}
const baseUrl = "http://localhost:8080";
class UserStore {
  users: Array<UserData> = new Array<UserData>();
  user: UserData | null = null;
  loading: boolean = false;
  error: string | null = null;

  constructor() {
    makeObservable(this, {
      users: observable,
      user: observable,
      loading: observable,
      error: observable,
      totalUser: computed,
      addUser: action.bound,
      removeUser: action.bound,
      editUser: action.bound,
      getAllUser: action.bound,
      getUser: action.bound,
    });

    reaction(
      () => this.totalUser,
      (totalUser) => {
        console.log(totalUser);
      }
    );

    when(
      () => this.totalUser >= 3,
      () => console.log("3 task reached")
    );
  }

  get totalUser() {
    return this.users.length;
  }
  getAllUser() {
    this.loading = true;
    axios
      .get(baseUrl + "/user")
      .then((res) => {
        this.loading = false;
        console.log(res.data);
        this.users = res.data;
      })
      .catch((err) => {
        this.loading = false;
        this.error = JSON.stringify(err);
      });
  }
  getUser(id: string) {
    this.loading = true;
    this.user = null;
    axios
      .get(baseUrl + "/user/" + id)
      .then((res) => {
        this.loading = false;
        this.user = res.data;
      })
      .catch((err) => {
        this.loading = false;
        this.error = JSON.stringify(err);
      });
  }
  addUser(values: UserData) {
    this.loading = true;
    axios
      .post(baseUrl + "/user", values)
      .then((res) => {
        this.loading = false;
        this.users.push(values);
      })
      .catch((err) => {
        this.loading = false;
        this.error = JSON.stringify(err);
      });
  }
  editUser(id: string, values: any) {
    this.loading = true;
    axios
      .patch(baseUrl + "/user/" + id, values)
      .then((res) => {
        this.loading = false;
        this.users = this.users.map((user: UserData) => {
          if (user.id === id) return { ...user, ...values };
          return user;
        });
      })
      .catch((err) => {
        this.loading = false;
        this.error = JSON.stringify(err);
      });
  }

  removeUser(id: string) {
    this.loading = true;
    axios
      .delete(baseUrl + "/user/" + id)
      .then((res) => {
        this.loading = false;
        this.users = this.users.filter((user: UserData) => user.id !== id);
      })
      .catch((err) => {
        this.loading = false;
        this.error = JSON.stringify(err);
      });
  }
}

const userStore = new UserStore();

export default userStore;
