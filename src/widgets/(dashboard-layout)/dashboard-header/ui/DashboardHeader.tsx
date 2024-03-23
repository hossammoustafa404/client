import React from "react";
import { ThemeSwitcher } from "../../../../features/(theme)/change-theme";
import AvatarDropMenu from "./AvatarDropMenu";
import NotificationsDropMenu from "./NotificationsDropMenu";

const DashboardHeader = () => {
  return (
    <header className="sticky top-0 z-20 bg-white dark:bg-slate-950 px-6 h-[4.5rem] flex items-center">
      <div className="ml-auto flex items-center gap-x-8">
        {/* Theme Switcher */}
        <ThemeSwitcher />

        {/* Notifications */}
        <NotificationsDropMenu />

        {/* Avatar */}
        <AvatarDropMenu />
      </div>
    </header>
  );
};

export default DashboardHeader;
