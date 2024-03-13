import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import { Layout, Menu, Button, Drawer, theme } from "antd";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
import {
  IoArrowBack,
  IoArrowForwardSharp,
  IoShareSocialOutline,
  IoSettingsSharp,
} from "react-icons/io5";
import { FaUserLarge } from "react-icons/fa6";
import { MdOutlineHistory, MdFeedback } from "react-icons/md";
import { RiRouteFill } from "react-icons/ri";
import { PiWarningOctagonFill } from "react-icons/pi";
import { LuLogOut } from "react-icons/lu";

const { Header, Content, Footer, Sider } = Layout;

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  return (
    <Layout className="!max-w-screen !min-h-screen !bg-white">
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        breakpoint="lg"
        className="!bg-[#F5F8FF] hidden md:block !rounded-r-3xl !fixed !left-0 !h-full !z-[10000]"
      >
        <div className="py-6 flex flex-col gap-2">
          <h2 className="text-[#011750] text-center font-bold text-[18px] mb-2">
            Traffic Tracker
          </h2>
          <div
            className={`pb-2 flex flex-col px-4 ${
              collapsed ? "items-center" : "items-end"
            } border-b-2`}
          >
            <button onClick={toggleCollapsed} className="">
              {collapsed ? <IoArrowForwardSharp /> : <IoArrowBack />}
            </button>
          </div>
        </div>

        <Menu
          mode="inline"
          className="!bg-[#F5F8FF] "
          //   !w-max
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <FaUserLarge className="w-5 h-5 mr-1" />,
              label: "Profile",
              //   title: "Profile",
            },
            {
              key: "2",
              icon: <MdOutlineHistory className="w-5 h-5 mr-1" />,
              label: "Trip History",
              //   title: "Trip History",
            },
            {
              key: "3",
              icon: <RiRouteFill className="w-5 h-5 mr-1" />,
              label: "Favorite Routes",
              //   title: "Favorite Routes",
            },
            {
              key: "4",
              icon: <PiWarningOctagonFill className="w-5 h-5 mr-1" />,
              label: "Report Happening",
              //   title: "Report Happening",
            },
            {
              key: "5",
              icon: <MdFeedback className="w-5 h-5 mr-1" />,
              label: "Feedback & Rating",
              //   title: "Feedback & Rating",
            },

            {
              key: "",
              icon: "",
              label: "",
            },
            {
              key: "",
              icon: "",
              label: "",
            },
            {
              key: "6",
              icon: <IoSettingsSharp className="w-5 h-5 mr-1" />,
              label: "Settings",
              //   title: "Settings",
            },
            {
              key: "7",
              icon: <IoShareSocialOutline className="w-5 h-5 mr-1" />,
              label: "Invite",
              //   title: "Invite",
            },
            {
              key: "8",
              icon: <LuLogOut className="w-5 h-5 mr-1" />,
              label: "Logout",
              //   title: "Logout",
            },
          ]}
        />
      </Sider>

      <Drawer
        title="Traffic Tracker"
        className="!bg-[#F5F8FF] !rounded-r-3xl md:hidden !p-0"
        placement="left"
        closable={false}
        width={200}
        onClose={toggleDrawer}
        open={drawerVisible}
      >
        <Menu
          mode="vertical"
          className="!bg-[#F5F8FF]"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <FaUserLarge className="w-5 h-5 mr-1" />,
              label: "Profile",
              title: "Profile",
            },
            {
              key: "2",
              icon: <MdOutlineHistory className="w-5 h-5 mr-1" />,
              label: "Trip History",
              title: "Trip History",
            },
            {
              key: "3",
              icon: <RiRouteFill className="w-5 h-5 mr-1" />,
              label: "Favorite Routes",
              title: "Favorite Routes",
            },
            {
              key: "4",
              icon: <PiWarningOctagonFill className="w-5 h-5 mr-1" />,
              label: "Report Happening",
              title: "Report Happening",
            },
            {
              key: "5",
              icon: <MdFeedback className="w-5 h-5 mr-1" />,
              label: "Feedback & Rating",
              title: "Feedback & Rating",
            },
            {
              key: "",
              icon: "",
              label: "",
            },
            {
              key: "",
              icon: "",
              label: "",
            },
            {
              key: "6",
              icon: <IoSettingsSharp className="w-5 h-5 mr-1" />,
              label: "Settings",
              title: "Settings",
            },
            {
              key: "7",
              icon: <IoShareSocialOutline className="w-5 h-5 mr-1" />,
              label: "Invite",
              title: "Invite",
            },
            {
              key: "8",
              icon: <LuLogOut className="w-5 h-5 mr-1" />,
              label: "Logout",
              title: "Logout",
            },
          ]}
        />
      </Drawer>

      <Layout className={collapsed ? "md:ml-[80px]" : "md:ml-[200px]"}>
        <Header className="border-b-2 fixed z-[1000] w-full p-0 bg-white flex items-center">
          <Button
            type="text"
            icon={collapsed ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
            onClick={toggleDrawer}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
            className="md:hidden block"
          />
          <div className="hidden md:flex flex-wrap gap-8 px-6 md:pl-24">
            <a className="duration-200 transition hover:font-medium hover:text-blue-600">
              Live Traffic
            </a>
            <a className="duration-200 transition hover:font-medium hover:text-blue-600">
              Trip
            </a>
            <a className="duration-200 transition hover:font-medium hover:text-blue-600">
              Reports
            </a>
            <a className="duration-200 transition hover:font-medium hover:text-blue-600">
              Emergency
            </a>
          </div>
        </Header>

        <Content
          className="!bg-white"
          style={{
            marginTop: 64,
            marginLeft: collapsed ? 0 : 0,
            // padding: "24px",
            minHeight: "calc(100vh - 64px)",
          }}
        >
          <Outlet />
        </Content>

        {/* <Footer style={{ textAlign: "center" }}>
          Traffic Tracker ©{new Date().getFullYear()} Created by Dev Team 37
        </Footer> */}
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
