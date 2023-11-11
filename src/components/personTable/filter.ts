import { IUser } from '@/store/slices/users/types';

export const filterUsers = (data: IUser[] | undefined, usersAdd: IUser[], filterValue: string) => {
  let fullData: IUser[] | undefined = data
  if (data) {
    fullData = [...usersAdd, ...data]
  } else {
    return []
  }

  const filterValueLowerCase = filterValue.toLowerCase()
  const results = [];

  for (const user of fullData) {
    if (user.firstName.toLowerCase().includes(filterValueLowerCase) ||
      user.lastName.toLowerCase().includes(filterValueLowerCase) ||
      user.email.toLowerCase().includes(filterValueLowerCase)) {
      results.push(user);
    }
  }

  return results;
}
