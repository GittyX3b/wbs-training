// components/Avatar.tsx
// This component should receive `url` (string) and `altText` (string)

type AvatarProps = {
  url: string;
  altText: string;
};

const Avatar = ({ url, altText }: AvatarProps) => {
  return (
    <img src={url} alt={altText} style={{ width: "50px", display: "block" }} />
  );
};

export default Avatar;
