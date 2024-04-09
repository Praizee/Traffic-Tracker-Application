import React, { useState } from "react";
import { NavLink, Link, Outlet } from "react-router-dom";

import { Layout, Menu, Button, Drawer, theme } from "antd";
import ScrollButton from "./Components/ScrollToTop/ScrollToTop";

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

const HomeLayout = () => {
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
          <Link
            to="/dashboard"
            className="text-[#011750] text-center font-bold text-[18px] mb-2"
          >
            Traffic Tracker
          </Link>
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
          // defaultSelectedKeys={["1"]}
        >
          <Menu.Item key="1" icon={<FaUserLarge className="w-4 h-4" />}>
            <Link to="profile">Profile</Link>
          </Menu.Item>

          <Menu.Item
            key="2"
            icon={<MdOutlineHistory className="w-4 h-4 mr-1" />}
          >
            <Link to="trip-history">Trip History</Link>
          </Menu.Item>

          <Menu.Item key="3" icon={<RiRouteFill className="w-4 h-4" />}>
            <Link to="favorite-routes">Favorite Routes</Link>
          </Menu.Item>

          <Menu.Item
            key="4"
            icon={<PiWarningOctagonFill className="w-4 h-4 mr-1" />}
          >
            <Link to="report-happening">Report Happening</Link>
          </Menu.Item>

          <Menu.Item key="5" icon={<MdFeedback className="w-4 h-4" />}>
            <Link to="feedback-and-rating">Feedback & Rating</Link>
          </Menu.Item>

          {/*            */}
          <Menu.Item disabled={true} style={{ padding: 0 }} />
          <Menu.Item disabled={true} style={{ padding: 0 }} />
          <Menu.Item disabled={true} style={{ padding: 0 }} />
          {/*            */}

          <Menu.Item
            key="6"
            icon={<IoSettingsSharp className="w-4 h-4 mr-1" />}
          >
            <Link to="settings">Settings</Link>
          </Menu.Item>

          <Menu.Item
            key="7"
            icon={<IoShareSocialOutline className="w-4 h-4 mr-1" />}
          >
            <Link to="invite">Invite</Link>
          </Menu.Item>

          <Menu.Item key="8" icon={<LuLogOut className="w-4 h-4" />}>
            <Link to="/">Logout</Link>
          </Menu.Item>
        </Menu>
      </Sider>

      <Drawer
        // title="Traffic Tracker"
        className="!bg-[#F5F8FF] !rounded-r-3xl md:hidden !p-0"
        placement="left"
        closable={false}
        width={200}
        onClose={toggleDrawer}
        open={drawerVisible}
      >
        <div className="pb-4 flex flex-col gap-2">
          <Link
            to="/dashboard"
            className="text-[#011750] text-center font-bold text-[18px] mb-2"
          >
            Traffic Tracker
          </Link>
        </div>
        <Menu
          mode="vertical"
          className="!bg-[#F5F8FF]"
          // defaultSelectedKeys={["1"]}
        >
          <Menu.Item key="1">
            <Link to="">Live Traffic</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="trip">Trip</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="reports">Reports</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="community">Community</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="emergency">Emergency</Link>
          </Menu.Item>

          <Menu.Item disabled={true} style={{ padding: 0 }} />

          <Menu.Item key="6" icon={<FaUserLarge className="w-4 h-4" />}>
            <Link to="profile">Profile</Link>
          </Menu.Item>

          <Menu.Item key="7" icon={<MdOutlineHistory className="w-4 h-4" />}>
            <Link to="trip-history">Trip History</Link>
          </Menu.Item>

          <Menu.Item key="8" icon={<RiRouteFill className="w-4 h-4" />}>
            <Link to="favorite-routes">Favorite Routes</Link>
          </Menu.Item>

          <Menu.Item
            key="9"
            icon={<PiWarningOctagonFill className="w-4 h-4 mr-1" />}
          >
            <Link to="report-happening">Report Happening</Link>
          </Menu.Item>

          <Menu.Item key="10" icon={<MdFeedback className="w-4 h-4" />}>
            <Link to="feedback-and-rating">Feedback & Rating</Link>
          </Menu.Item>

          {/* <Menu.Item disabled={true} style={{ padding: 0 }} />
          <Menu.Item disabled={true} style={{ padding: 0 }} /> */}

          <Menu.Item
            key="11"
            icon={<IoSettingsSharp className="w-4 h-4 mr-1" />}
          >
            <Link to="settings">Settings</Link>
          </Menu.Item>

          <Menu.Item
            key="12"
            icon={<IoShareSocialOutline className="w-4 h-4 mr-1" />}
          >
            <Link to="invite">Invite</Link>
          </Menu.Item>

          <Menu.Item key="13" icon={<LuLogOut className="w-4 h-4" />}>
            <Link to="/">Logout</Link>
          </Menu.Item>
        </Menu>
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
              <Link
                to=""
                className="duration-200 transition hover:font-medium hover:text-blue-600"
              >
                Live Traffic
              </Link>
              <Link
                to="trip"
                className="duration-200 transition hover:font-medium hover:text-blue-600"
              >
                Trip
              </Link>
              <Link
                to="reports"
                className="duration-200 transition hover:font-medium hover:text-blue-600"
              >
                Reports
              </Link>
              <Link
                to="community"
                className="duration-200 transition hover:font-medium hover:text-blue-600"
              >
                Community
              </Link>
              <Link
                to="emergency"
                className="duration-200 transition hover:font-medium hover:text-blue-600"
              >
                Emergency
              </Link>
            </div>

            <div className="flex gap-4 justify-between md:justify-normal lg:flex-none">
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
                    className="grow w-full"
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

        <Footer style={{ textAlign: "center" }}>
          Traffic Tracker © {new Date().getFullYear()} Created by Team 37
        </Footer>
      </Layout>

      <ScrollButton />
    </Layout>
  );
};

export default HomeLayout;
