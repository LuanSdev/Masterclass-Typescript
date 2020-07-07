import React from 'react';

interface IUser {
  name: string;
  email: string;
}

interface IProps {
  user: IUser;
}

/* FC = Funtional component */

/* inclui, além das interfaces criadas, as proprieades
   específicas do React */
const User: React.FC<IProps> = ({ user }) => {
  return (
    <div>
      <strong>Nome: {user.name}</strong>
      <br />
      <strong>Email: {user.email}</strong>
      <br />
    </div>
  );
};

export default User;
