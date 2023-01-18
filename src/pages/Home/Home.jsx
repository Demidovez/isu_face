import { useState } from "react";
import CardsLayout from "../../components/CardsLayout/CardsLayout";
import { ReactComponent as DashboardIcon } from "../../assets/icons/dashboard.svg";

const Home = () => {
  const [sites] = useState([
    {
      label: "Рабочие области",
      icon: (props) => <DashboardIcon {...props} />,
      link: "/MES/ILM/UI/Insight/browse",
    },
    {
      label: "Лаборатория",
      icon: (props) => <DashboardIcon {...props} />,
      link: "/11111",
    },
    {
      label: "Просмотр отчетов",
      link: "/11111",
      icon: (props) => <DashboardIcon {...props} />,
    },
    {
      label: "Выработка / потребление электроэнергии",
      link: "/11111",
      icon: (props) => <DashboardIcon {...props} />,
    },
  ]);

  return (
    <div>
      <h1>Выберите приложение</h1>
      <CardsLayout items={sites} />
    </div>
  );
};

export default Home;
