import { useState } from "react";
import CardsLayout from "../../components/CardsLayout/CardsLayout";
import { ReactComponent as ManagementIcon } from "../../assets/icons/management.svg";
import { ReactComponent as IsuIcon } from "../../assets/icons/isu.svg";

const Settings = () => {
  const [sites] = useState([
    {
      label: "Управление проектами\n(боты, ису-модули)",
      icon: (props) => <ManagementIcon {...props} />,
      link: "/",
    },
    {
      label: "Оригинальная ИСУ",
      icon: (props) => <IsuIcon {...props} />,
      link: "http://172.27.70.10/MES",
      isExternal: true,
    },
  ]);

  return (
    <div>
      <h1>Дополнительные приложения</h1>
      <CardsLayout items={sites} />
    </div>
  );
};

export default Settings;
