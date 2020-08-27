import { observable, action } from "mobx";

const UserStore = observable({
  id: 1,
  name: 'Drex',
  age: 30
});

UserStore.changeAge = action((value) => {
  UserStore.age = value
})

export default UserStore