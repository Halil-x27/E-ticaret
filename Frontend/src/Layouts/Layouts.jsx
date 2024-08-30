import { isAdmin,} from "../Config/Admin";
import AdminLayout from "./AdminLayout";
import MainLayout from "./MainLayout";




export const Layout = isAdmin ? AdminLayout : MainLayout;
