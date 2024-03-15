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
        <Header className="border-b-2 fixed z-[1000] w-full p-0 bg-white flex items-cente">
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

          <div
            // className="flex px-6 md:pl-12 mx-8 w-full max-w-[1124px]"
            className={`flex px-1 md:pl-12 md:mx-8 ${
              collapsed ? "max-w-[1224px]" : "max-w-[1124px]"
            } w-full`}
          >
            <div className="hidden lg:flex gap-8 flex-1">
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
                Community
              </a>
              <a className="duration-200 transition hover:font-medium hover:text-blue-600">
                Emergency
              </a>
            </div>

            <div className="flex gap-4 justify-between md:justify-normal lg:flex-none">
              {/* notification */}
              <div className="dropdown dropdown-end mt-1.5">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                      </svg>
                      <span className="badge badge-sm badge-error text-white indicator-item">
                        5
                      </span>
                    </div>
                  </button>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-1 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <p className="text-base font-medium">Notification 1</p>
                  </li>
                  <li>
                    <p className="text-base font-medium">Notification 2</p>
                  </li>
                  <li>
                    <p className="text-base font-medium">Notification 3</p>
                  </li>
                </ul>
              </div>

              {/* search */}
              <form className="relative hidden lg:block">
                <label for="Search" className="sr-only">
                  Search
                </label>
                <input
                  type="text"
                  id="Search"
                  placeholder="Search Area"
                  required
                  className="w-full rounded-[30px] border border-gray-200 bg-[#F5F8FF] text-[#84848466] py-2.5 pe-10 pl-9 shadow-sm sm:text-sm"
                />
                {/* search icon */}
                <span className="absolute inset-y-0 start-0 grid w-10 place-content-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#84848466"
                    className="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </span>
                {/* submit */}
                <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                  <button
                    type="submit"
                    className="text-gray-600 hover:text-gray-700"
                  >
                    <span className="sr-only">Search</span>
                    <svg
                      width="14"
                      height="13"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.88476 7.35324H0.847656V5.64699H9.88476L5.78341 1.54563L7.00011 0.347656L13.1526 6.50011L7.00011 12.6526L5.78341 11.4546L9.88476 7.35324Z"
                        fill="#C8CACE"
                      />
                    </svg>
                  </button>
                </span>
              </form>

              <div className="form-control my-auto lg:hidden block">
                <label className="input input-bordered flex items-center gap-2">
                  <input
                    type="text"
                    className="grow w-24"
                    placeholder="Search"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
              </div>

              {/* avatar */}
              <div className="dropdown dropdown-end mt-1.5">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Avatar"
                      src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-1 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-32"
                >
                  <li>
                    <a className="text-base font-medium">Profile</a>
                  </li>
                  <li>
                    <a className="text-base font-medium">Settings</a>
                  </li>
                  <li>
                    <a className="text-base font-medium">Logout</a>
                  </li>
                </ul>
              </div>
            </div>
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
