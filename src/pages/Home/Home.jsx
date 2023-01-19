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
      link: "/laboratory",
    },
    {
      label: "Просмотр отчетов",
      link: "/ReportS_mes/browse/SKK",
      icon: (props) => <DashboardIcon {...props} />,
    },
    {
      label: "Выработка / потребление электроэнергии",
      link: "/electricity",
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
