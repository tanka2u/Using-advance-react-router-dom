import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
function RootPage() {
  const navigation = useNavigation();
  return (
    <>
      <MainNavigation />
      <main>
        {navigation.state === "loading" && <p>Loading...</p>}
        <Outlet />
      </main>
    </>
  );
}
export default RootPage;
