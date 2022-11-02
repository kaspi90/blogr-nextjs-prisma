import { useSession } from "next-auth/react";

function start() {
  const { data } = useSession();
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default start;
