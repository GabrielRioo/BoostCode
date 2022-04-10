import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { AiFillAppstore, AiFillHome, AiFillNotification } from "react-icons/ai";
import { BsFillPeopleFill, BsFillStarFill, BsPlusCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

type Repository = {
  menuUid: string;
  menuId: number;
  name: string;
  routeName: string;
  isActive: boolean;
  iconName: string;
  menuItems: [
    {
      menuItemUid: string;
      menuItemId: number;
      name: string;
      isActive: boolean;
      routeName: string;
      menuId: number;
      menu: string;
    }
  ];
};

function Sidebar() {
  const { data } = useFetch<Repository[]>(
    "https://localhost:7284/api/menu/getallmenumocklist"
  );

  return (
    <ProSidebar>
      <Menu className="Sidebar" iconShape="square">
        <MenuItem icon={<AiFillHome style={{ fontSize: 20 }} />}>
          {" "}
          <Link to="/getting-start">Getting Started </Link>
        </MenuItem>
        {/* <SubMenu icon={<BsFillPeopleFill style={{fontSize: 20}}/>}>
                <Link to="/clientes"> <MenuItem>Clientes</MenuItem> </Link>
                </SubMenu> */}

        <SubMenu
          title="Components"
          icon={<AiFillNotification style={{ fontSize: 20 }} />}
        >
          <MenuItem>
            <Link to="/buttons">Button</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/tables">Table</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/component/buttons">Menu</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/component/buttons">Sidebar</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/component/buttons">Accordion</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/component/buttons">Form</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/component/buttons">Alert</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/component/buttons">Dropdown</Link>
          </MenuItem>
        </SubMenu>

        <SubMenu
          title="Repository"
          icon={<BsFillStarFill style={{ fontSize: 20 }} />}
        >
          <MenuItem>
            <Link to="/buttons">Botão customizado</Link>
          </MenuItem>
          <MenuItem icon={<BsPlusCircle style={{ fontSize: 20 }} />}>
            <Link to="/buttons">Add new category</Link>
          </MenuItem>
        </SubMenu>

        <MenuItem icon={<BsFillPeopleFill style={{ fontSize: 20 }} />}>
          {" "}
          <Link to="/community"> Community </Link>
        </MenuItem>

        {data?.map((repo) => {
          // console.log('tipo: ', typeof(repo.menuItems))
          // console.log('repo: ', repo.menuItems)
          var teste = `<${repo.iconName} style={{ fontSize: 20 }} />`;

          return (
            <>
              {repo.menuItems.length > 0 ? (
                <SubMenu
                  title={repo.name}
                  icon={<BsPlusCircle style={{ fontSize: 20 }} />}
                >
                  {repo.menuItems.map((items) => {
                    return (
                      <MenuItem>
                        <Link to={`${items.routeName}`}>{items.name}</Link>
                      </MenuItem>
                    );
                  })}
                </SubMenu>
              ) : (
                <MenuItem icon={<BsFillPeopleFill style={{ fontSize: 20 }} />}>
                  {" "}
                  <Link to={repo.routeName}> {repo.name} </Link>
                </MenuItem>
              )}
            </>
          );
        })}
      </Menu>
    </ProSidebar>
  );
}

export default Sidebar;
