
// import { Icon } from "@iconify/react";
// import React from "react";
import {  useLocation, useNavigate } from "react-router";
import {
  TbUserCircle,
  TbMail,
  TbSettings,
  TbEye,
  TbLock,
  TbCurrencyPound,
  TbUsers,
  TbPhone,
  TbKey,
} from "react-icons/tb";

// const MemoizedIcon = React.memo(Icon);
const ProfileTab = () => {
  const path = useLocation(); 
  const location = path.pathname;

  const navigate = useNavigate();
  const ProfileTabs = [
    {
      label: "Profile",
      icon: TbUserCircle,
      to: "/apps/user-profile/profiletwo",
    },
    {
      label: "Daily Emails",
      icon: TbMail,
      to: "/apps/user-profile/daily-emails",
    },
    {
      label: "Settings",
      icon: TbSettings,
      type: "heading",
    },
    {
      label: "Common Settings",
      icon: TbSettings,
      to: "/apps/user-profile/common-settings",
    },
    {
      label: "Order Panel Settings",
      icon: TbSettings,
      to: "/apps/user-profile/order-panel-settings",
    },
    {
      label: "Order Review Settings",
      icon: TbEye,
      to: "/settings/order-review",
    },
    {
      label: "Security Setting",
      icon: TbLock,
      to: "/settings/security",
    },
    {
      label: "Supplier Spend Settings",
      icon: TbCurrencyPound,
      to: "/apps/user-profile/supplier-spend-settings",
    },
    {
      label: "User Security Settings",
      icon: TbUsers,
      to: "/settings/user-security",
    },
    {
      label: "Contact Us",
      icon: TbPhone,
      to: "/apps/user-profile/contact-us",
    },
    {
      label: "Change Password",
      icon: TbKey,
      to: "/apps/user-profile/change-password",
    },
  ];

  const IconWrapper = ({ icon: Icon, }:{icon:any}) => {
    return <Icon size={20} />;
  };

  return (
    <>

      <div className="overflow-x-auto [&::-webkit-scrollbar]:h-[5px] [&::-webkit-scrollbar-track]:bg-gray-100  [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:cursor-pointer">
        <div className="flex mt-5 gap-4 w-max pb-3">
          {ProfileTabs.map((tab, index) => {
            if (!tab.to) {
              return null; // skip headings
            }

            const isActive = location === tab.to;

            return (
              <button
                key={index}
                onClick={() => navigate(tab.to)}
                className={
                  isActive
                    ? "flex gap-2 items-center px-4 py-3 border-b-2 border-primary text-primary"
                    : "flex gap-2 items-center px-4 py-3 border-b-2 border-transparent text-ld opacity-80"
                }
              >
                <IconWrapper icon={tab.icon} />
                <span className="md:block hidden text-base font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
      
    </>
  );
};

export default ProfileTab;
