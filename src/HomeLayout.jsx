import React, { useState } from "react";
import { NavLink, Link, Outlet } from "react-router-dom";

import { Layout, Menu, Button, Drawer, theme } from "antd";
import ScrollButton from "./Components/ScrollToTop/ScrollToTop";

import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
import { LuLogIn } from "react-icons/lu";
import { HiOutlineUserAdd } from "react-icons/hi";
import TrafficIcon from "./assets/svg/TrafficIcon";
import TripIcon from "./assets/svg/TripIcon";
import ReportsIcon from "./assets/svg/ReportsIcon";
import CommunityIcon from "./assets/svg/CommunityIcon";
import EmergencyIcon from "./assets/svg/EmergencyIcon";

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
        className="!bg-[#F5F8FF] p-3 pt-36 hidden md:block !rounded-r-3xl !fixed !left-0 !h-full !z-[10000]"
      >
        <div className="flex flex-col gap-[80px]">
          <div className="flex flex-col gap-[8px]">
            <h2 className="text-[#011750] text-center font-medium text-[22px]">
              Welcome to{" "}
              <span className="text-[24px] font-extrabold">
                Traffic Tracker
              </span>
            </h2>
            <p className="text-[#01175099] text-center font-medium text-[14px]">
              Stay ahead of time now!
            </p>
          </div>

          <div className="flex flex-col gap-[32px]">
            <Link
              to="register"
              className="text-[18px] rounded-[10px] text-center p-3 block bg-[#011750] border border-transparent text-white hover:text-[#011750] hover:bg-transparent hover:border-[#011750]"
            >
              Register
            </Link>
            <Link
              to="login"
              className="text-[18px] rounded-[10px] text-center p-3 block hover:bg-[#011750] bg-transparent border hover:border-transparent hover:text-white text-[#011750] border-[#011750]"
            >
              Login
            </Link>
          </div>
        </div>
      </Sider>

      <Drawer
        // title="Traffic Tracker"
        className="!bg-[#F5F8FF] !rounded-r-3xl md:hidden !p-0 !pt-12"
        placement="left"
        closable={false}
        width={250}
        onClose={toggleDrawer}
        open={drawerVisible}
      >
        <div className="flex flex-col gap-[40px]">
          <div className="flex flex-col gap-[8px]">
            <h2 className="text-[#011750] text-center font-medium text-[18px]">
              Welcome to <br />
              <span className="text-[20px] font-extrabold">
                Traffic Tracker
              </span>
            </h2>
            <p className="text-[#01175099] text-center font-medium text-[12px]">
              Stay ahead of time now!
            </p>
          </div>

          <div className="flex flex-col gap-[10px]">
            <Link
              to="register"
              className="text-[14px] rounded-[10px] text-center p-3 block bg-[#011750] border border-transparent text-white hover:text-[#011750] hover:bg-transparent hover:border-[#011750]"
            >
              Register
            </Link>
            <Link
              to="login"
              className="text-[14px] rounded-[10px] text-center p-3 block hover:bg-[#011750] bg-transparent border hover:border-transparent hover:text-white text-[#011750] border-[#011750]"
            >
              Login
            </Link>
          </div>
        </div>

        <div className="border-b-2 border-[#848484] py-3" />

        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          className="!bg-[#F5F8FF] mt-5"
        >
          <Menu.Item key="1" icon={<TrafficIcon className="w-4 h-4" />}>
            <Link to="">Live Traffic</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<TripIcon className="w-4 h-4" />}>
            <Link to="trip">Trip</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<ReportsIcon className="w-4 h-4" />}>
            <Link to="reports">Reports</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<CommunityIcon className="w-4 h-4" />}>
            <Link to="community">Community</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<EmergencyIcon className="w-4 h-4" />}>
            <Link to="emergency">Emergency</Link>
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
                <label htmlFor="Search" className="sr-only">
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
                    strokeWidth="1.5"
                    stroke="#84848466"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
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
