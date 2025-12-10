// components/ProfileCard.tsx
// This component should receive a `user` object with `name` (string) and `age` (number)

type User = {
  name: string;
  age: number;
};

type ProfileCardProps = {
  user: User;
};

const ProfileCard = ({ user }: ProfileCardProps) => {
  return (
    <p>
      {user.name} is {user.age} years old
    </p>
  );
};

export default ProfileCard;
