import { UserButton } from "@clerk/nextjs";
const Files = () => {
  return (
    <div>
      Files
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Files;
