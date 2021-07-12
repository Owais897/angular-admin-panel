import { Injectable } from "@angular/core";
import { User } from "../models/user";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private upersons: User[] = [
    {
      id: 1,
      firstName: "muhammad",
      lastName: "owais",
    },
    {
      id: 2,
      firstName: "mujtaba",
      lastName: "quaiyum",
    },
    {
      id: 3,
      firstName: "musawair",
      lastName: "maqsood",
    },
  ];

  constructor() {}

  getUsersFromData(): User[] {
    return this.upersons;
  }

  addUser(user: User) {
    user.id = this.upersons.length + 1;
    this.upersons.push(user);
  }
  updateUser(user: User) {
    const index = this.upersons.findIndex((u) => user.id === u.id);
    this.upersons[index] = user;
  }
  deleteUser(user: User) {
    this.upersons.splice(this.upersons.indexOf(user), 1);
  }
}
