import { Layout } from "../../../components/ui/Header";
import SideSettings from "../../../components/ui/settings/side settings/SideSettings";
import SecuritySettings from "../../../components/ui/settings/SecuritySettings";
import GeneralSettings from "../../../components/ui/settings/GeneralSettings";
import { Dispatch, SetStateAction, useContext, useState } from "react";
import NotificationsSettings from "../../../components/ui/settings/NotificationsSettings";
import { PanelState } from "../../../components/ui/settings/types";
import DarkModeContext from "../../context/DarkModeContext";
import SettingsLayout from "components/ui/settings/SettingsLayout";

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
        <div className="mx-auto max-w-[80rem] pt-4 flex gap-[2rem] max-[1068px]:flex max-[1068px]:flex-col px-3">
          <SideSettings panelState={panelState} setPanelState={setPanelState} />
          {panelState.general && (
            <SettingsLayout
              children={<GeneralSettings />}
              title="Profile"
              description="This information will be displayed publicly so be careful what you
              share"
            />
          )}
          {panelState.security && (
            <SettingsLayout
              children={<SecuritySettings />}
              title="Security"
              description="This is your security panel"
            />
          )}
          {panelState.notifications && (
            <SettingsLayout
              children={<NotificationsSettings />}
              title="Notifications"
              description="These are your notifications panel"
            />
          )}
        </div>
      </Layout>
    </div>
  );
};

export default SettingsPage;
