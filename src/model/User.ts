type User = {
    id: number;
    email: string;
    first_name: string;
};
  
type GetUsersResponse = {
    data: User[];
};

export { User, GetUsersResponse }