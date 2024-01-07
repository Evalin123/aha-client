import { FolderOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import { LogoIcon } from "../icons/Logo";

const { Text } = Typography;

const NavigationMenu = () => {
  return (
    <ul className="menu flex sm:flex-col xs:flex-row">
      <li className="mb-9 xs:hidden">
        <LogoIcon />
      </li>
      <li className="sm:mb-[22px] xs:mr-[50px]">
        <a className="flex flex-col items-center" href="/">
          <FolderOutlined style={{ color: "white", fontSize: "24px" }} />
          <Text className="text-[12px] xs:hidden">Home</Text>
        </a>
      </li>
      <li>
        <a className="flex flex-col items-center" href="/tagList">
          <FolderOutlined style={{ color: "white", fontSize: "24px" }} />
          <Text className="text-[12px] xs:hidden">Tags</Text>
        </a>
      </li>
    </ul>
  );
};

export default NavigationMenu;
