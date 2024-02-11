import { Layout } from "../../../components/ui/Header";
import SideSettings from "../../../components/ui/settings/side settings/SideSettings";
import SecuritySettings from "../../../components/ui/settings/SecuritySettings";
import GeneralSettings from "../../../components/ui/settings/GeneralSettings";
import { Dispatch, SetStateAction, useContext, useState } from "react";
import NotificationsSettings from "../../../components/ui/settings/NotificationsSettings";
import { PanelState } from "../../../components/ui/settings/types";
import DarkModeContext from "../../context/DarkModeContext";

const SettingsPage = () => {
  const [isDark] = useContext(DarkModeContext);
  const [panelState, setPanelState]: [
    PanelState,
    Dispatch<SetStateAction<PanelState>>
  ] = useState({
    general: Boolean(true),
    security: Boolean(false),
    notifications: Boolean(false),
  });

  return (
    <div
      className="w-full h-[100vh] bg-background-color"
      data-theme={isDark ? "dark" : "light"}
    >
      <Layout>
        <div className="mx-auto max-w-[80rem] pt-8 flex gap-[4rem]">
          <SideSettings panelState={panelState} setPanelState={setPanelState} />
          {panelState.general && <GeneralSettings />}
          {panelState.security && <SecuritySettings />}
          {panelState.notifications && <NotificationsSettings />}
        </div>
      </Layout>
    </div>
  );
};

export default SettingsPage;
