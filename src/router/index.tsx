import {
  createBrowserRouter,
} from "react-router-dom";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

import Login from "../views/login";
import Home from "../views/modules/home";
import Echarts from "../views/modules/echarts";
import TodoList from "../views/modules/todo-list";

export const routes = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    icon: <UserOutlined />,
    element: <Home />,
  },
  {
    path: "/echarts",
    icon: <UploadOutlined />,
    element: <Echarts />,
  },
  {
    path: "/todo-list",
    icon: <VideoCameraOutlined />,
    element: <TodoList />,
  },

]


const router = createBrowserRouter(routes);
export default router;