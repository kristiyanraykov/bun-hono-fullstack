import { createFileRoute } from "@tanstack/react-router";
import { userQueryOptions } from "../../lib/api";
import { useQuery } from "@tanstack/react-query";

export const Route = createFileRoute("/_authenticated/profile")({
  component: Profile,
});

function Profile() {
  const { isPending, error, data } = useQuery(userQueryOptions);

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Not logged in</div>;

  return (
    <div className='p-2'>
      {data.user.given_name}
      <a href='api/logout'>Logout</a>
    </div>
  );
}
