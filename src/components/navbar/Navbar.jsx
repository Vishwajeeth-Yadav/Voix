// import React from "react";
// import {
//     Navbar,
//     Typography,
//     IconButton,
//     Avatar,
//     Collapse,
// } from "@material-tailwind/react";
// import { useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { LuLogOut } from "react-icons/lu";
// import myContext from "../../context/data/myContext";
// import SearchDialog from "../searchDailog/SearchDialog";
// import ShareDialogBox from "../shareDailog/ShareDialog";
// import { account } from "../../appWrite/AppwriteConfig";
// import Blog_img from '../../assets/blog.png'


// export default function Nav() {
//     const [openNav, setOpenNav] = React.useState(false);

//     const context = useContext(myContext);
//     const { mode, toggleMode } = context;

//     const Role = localStorage.getItem('role'); 

//     // All NavList 
//     const navList = (
//         <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
//             <Typography
//                 as="li"
//                 variant="small"
//                 color="blue-gray"
//                 className="p-1 font-bold text-base "
//                 style={{ color: mode === 'dark' ? 'white' : 'black' }}
//             >
//                 <Link to={'/'} className="flex items-center text-lg">
//                     Home
//                 </Link>
//             </Typography>
//             <Typography
//                 as="li"
//                 variant="small"
//                 color="blue-gray"
//                 className="p-1 font-bold text-base"
//                 style={{ color: mode === 'dark' ? 'white' : 'black' }}
//             >
//                 <Link to={'/allblogs'} className="flex items-center text-lg">
//                     Blogs
//                 </Link>
//             </Typography>
//             {!(Role ==='admin' || Role==='user') ? <Typography
//                 as="li"
//                 variant="small"
//                 color="blue-gray"
//                 className="p-1 font-bold text-base"
//                 style={{ color: mode === 'dark' ? 'white' : 'black' }}
//             >
//                 <Link to={'/adminlogin'} className="flex items-center text-lg">
//                     Login
//                 </Link>
//             </Typography> : ""}

//         </ul>
//     );
//     const navigate = useNavigate()
//     const logout = async () => {
//         try {
//             await account.deleteSessions('current')
//             localStorage.clear()
//             setTimeout(()=>{
//                 navigate('/')
//             },1000)
//         }
//         catch (error) {
//             console.error("Logout Error", error)
//         }
//     }

//     return (
//         <>
//             {/* Navbar  */}
//             <Navbar
//                 className="sticky inset-0 z-20 h-max max-w-full border-none rounded-none py-2 px-4 lg:px-8 lg:py-2"
//                 style={{
//                     background: mode === 'dark'
//                     ? 'linear-gradient(135deg, rgba(0, 31, 63, 0.5), rgba(58, 124, 165, 0.5))'
//                     : 'linear-gradient(135deg, rgba(58, 124, 165, 0.5), rgba(118, 181, 197, 0.5))',
//                     borderBottom: mode==='light'? '1px solid black': '1px solid white',

//                 }}
//             >

//                 {/* Desktop View  */}
//                 <div className="flex items-center justify-between text-blue-gray-900">

//                     {/* Home Page Link  */}
//                     <Link to={'/'}>
//                         <Typography
//                             as="a"
//                             className="mr-4 cursor-pointer py-1.5 text-xl font-bold flex gap-2 items-center hover:scale-105 transition-transform duration-200 "
//                             style={{ color: mode === 'dark' ? 'white' : '#001f3f' }}
//                         >
//                             {/* Logo Image  */}
//                             <img
//                                 className=' w-10 h-10 '
//                                 src={Blog_img}
//                             />
//                             {/* Logo Text  */}
//                             <span className="font-sans font-semibold text-2xl"
//                                 style={{
//                                     fontFamily: 'Brush Script MT',
//                                     fontSize: '2.5rem',
//                                     marginLeft: '2px',
//                                 }}>
//                                 Voix
//                             </span>
//                         </Typography>
//                     </Link>

//                     {/* All Items  */}
//                     <div className="flex items-center gap-4">

//                         {/* Navlist  */}
//                         <div className="hidden lg:block">
//                             {navList}
//                         </div>

//                         {/* Search Icon */}
//                         <div className="hover:cursor-pointer">
//                             {/* <AiOutlineSearch size={20} color="#f20089" /> */}
//                             <SearchDialog />
//                         </div>

//                         {/* Share Icon */}
//                         <div className="hidden lg:block hover:cursor-pointer ">
//                             <ShareDialogBox />
//                             {/* <AiOutlineShareAlt size={20} color="#006400" /> */}
//                         </div>

//                         {/* Admin Profile Pic */}
//                         {(Role==="admin") ? <div>
//                             <Link to={'/dashboard'}>
//                                 <div className="">
//                                     <Avatar
//                                         key={1}
//                                         src={'https://cdn-icons-png.flaticon.com/128/3135/3135715.png'}
//                                         alt="avatar"
//                                         withBorder={true}
//                                         className="p-0.5 text-red-500 w-10 h-10"
//                                         style={{
//                                             border:
//                                                 mode === 'dark'
//                                                     ?
//                                                     '2px solid rgb(226, 232, 240)'
//                                                     :
//                                                     '2px solid rgb(30, 41, 59)'
//                                         }}
//                                     />
//                                 </div>
//                             </Link>
//                         </div> :(Role==='user')?
//                             <div>
//                                 <LuLogOut size={20} strokeWidth={3.5} className=" text-white hover:text-red-800 hover:cursor-pointer" onClick={logout} />
//                             </div>:""}

//                         {/* dark And Light Button */}
//                         <div>
//                             {mode === 'light'
//                                 ?
//                                 <>
//                                     {/* Light Button  */}
//                                     <IconButton onClick={toggleMode} className=" lg:inline-block rounded-full" style={{ background: mode === 'light' ? '#ced6e0' : '#57606f', color: mode === 'dark' ? 'white' : 'black' }}>
//                                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black">
//                                             <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
//                                         </svg>
//                                     </IconButton>
//                                 </>
//                                 :
//                                 <>
//                                     {/* Dark Button  */}
//                                     <IconButton onClick={toggleMode} className=" lg:inline-block rounded-full" style={{ background: mode === 'light' ? '#ced6e0' : '#57606f' }}>
//                                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                                             <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
//                                         </svg>
//                                     </IconButton>
//                                 </>}
//                         </div>

//                         {/* Mobile Toggle  */}
//                         <div>
//                             <IconButton
//                                 className="ml-auto h-10 w-10 text-inherit rounded-lg lg:hidden"
//                                 ripple={false}
//                                 onClick={() => setOpenNav(!openNav)}
//                                 style={{ background: mode === 'light' ? '#ced6e0' : '#57606f', color: mode === 'dark' ? 'white' : 'black' }}
//                             >
//                                 {openNav ?
//                                     (
//                                         <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             fill="none"
//                                             className="h-6 w-6"
//                                             viewBox="0 0 24 24"
//                                             stroke="currentColor"
//                                             strokeWidth={2}
//                                         >
//                                             <path
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 d="M6 18L18 6M6 6l12 12"
//                                             />
//                                         </svg>
//                                     )
//                                     :
//                                     (
//                                         <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             className="h-6 w-6"
//                                             fill="none"
//                                             stroke="currentColor"
//                                             strokeWidth={2}
//                                         >
//                                             <path
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 d="M4 6h16M4 12h16M4 18h16"
//                                             />
//                                         </svg>
//                                     )}
//                             </IconButton>
//                         </div>

//                     </div>
//                 </div>

//                 {/* Mobile View */}
//                 <Collapse open={openNav}>
//                     {/* NavList  */}
//                     {navList}
//                 </Collapse>
//             </Navbar>
//         </>
//     );
// }


import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
    Navbar,
    Typography,
    IconButton,
    Avatar,
} from "@material-tailwind/react";
import { LuLogOut } from "react-icons/lu";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import myContext from "../../context/data/myContext";
import SearchDialog from "../searchDailog/SearchDialog";
import ShareDialogBox from "../shareDailog/ShareDialog";
import { account } from "../../appWrite/AppwriteConfig";
import Blog_img from '../../assets/blog.png';

const NavLink = ({ to, children }) => (
    <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
    >
        <Link
            to={to}
            className="relative group"
        >
            <span className="text-lg font-semibold">
                {children}
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300" />
        </Link>
    </motion.div>
);

export default function Nav() {
    const [openNav, setOpenNav] = useState(false);
    const { mode, toggleMode } = useContext(myContext);
    const role = localStorage.getItem('role');
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await account.deleteSessions('current');
            localStorage.clear();
            navigate('/');
        } catch (error) {
            console.error("Logout Error:", error);
        }
    };

    const navList = (
        <motion.ul
            variants={{
                open: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.2,
                        ease: "easeOut"
                    }
                },
                closed: {
                    opacity: 0,
                    y: -10,
                    transition: {
                        duration: 0.2,
                        ease: "easeIn"
                    }
                }
            }}
            className={`mb-4 mt-2 flex flex-col gap-6 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8 ${mode === 'dark' ? "text-blue-600" : "text-black"}`}
        >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/allblogs">Blogs</NavLink>
            {!(role === 'admin' || role === 'user') && (
                <NavLink to="/adminlogin">Login</NavLink>
            )}
        </motion.ul>
    );

    const containerVariants = {
        open: {
            height: "auto",
            opacity: 1,
            transition: {
                height: {
                    duration: 0.3,
                    ease: "easeOut"
                },
                opacity: {
                    duration: 0.2,
                    ease: "easeOut"
                }
            }
        },
        closed: {
            height: 0,
            opacity: 0,
            transition: {
                height: {
                    duration: 0.3,
                    ease: "easeIn"
                },
                opacity: {
                    duration: 0.2,
                    ease: "easeIn"
                }
            }
        }
    };

    return (
        <Navbar
            className="sticky inset-0 z-20 h-max max-w-full border-none rounded-none py-2 px-4 lg:px-8 lg:py-2 backdrop-blur-sm"
            style={{
                background: mode === 'dark'
                    ? 'rgba(17, 25, 40, 0.75)'
                    : 'rgba(255, 255,255, 0.75)',
                borderBottom: `1px solid ${mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
            }}
        >
            <div className="flex items-center justify-between">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link to="/" className="flex items-center gap-2">
                        <motion.img
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                            src={Blog_img}
                            className="w-10 h-10"
                            alt="Voix Blog Logo"
                        />
                        <Typography
                            className="font-sans font-semibold text-4xl"
                            style={{
                                fontFamily: 'Brush Script MT',
                                color: mode === 'dark' ? 'white' : '#001f3f',
                            }}
                        >
                            Voix
                        </Typography>
                    </Link>
                </motion.div>

                <div className="flex items-center gap-6">
                    <div className="hidden lg:block">{navList}</div>

                    <motion.div
                        className="flex items-center gap-4"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <SearchDialog />
                        <div className="hidden lg:block">
                            <ShareDialogBox />
                        </div>

                        {role === "admin" && (
                            <motion.div whileHover={{ scale: 1.1 }}>
                                <Link to="/dashboard">
                                    <Avatar
                                        src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
                                        alt="Admin Avatar"
                                        withBorder={true}
                                        className="p-0.5 w-10 h-10 border-2 border-purple-500"
                                    />
                                </Link>
                            </motion.div>
                        )}

                        {role === "user" && (
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <LuLogOut
                                    size={20}
                                    className="cursor-pointer text-purple-500 hover:text-red-500 transition-colors duration-300"
                                    onClick={handleLogout}
                                />
                            </motion.div>
                        )}

                        <motion.div whileHover={{ scale: 1.1 }}>
                            <IconButton
                                onClick={toggleMode}
                                className={`rounded-full border  ${mode==='dark'?'bg-blue-700 text-white/80 border-white' : 'bg-orange-600 text-red-900 border-red-800'} transition-colors ease-in-out duration-300`}
                            >
                                {mode === 'light' ? (
                                    <FiSun className="h-5 w-5" />
                                ) : (
                                    <FiMoon className="h-5 w-5" />
                                )}
                            </IconButton>
                        </motion.div>

                        <IconButton
                            className="ml-auto h-10 w-10 lg:hidden rounded-full"
                            onClick={() => setOpenNav(!openNav)}
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={openNav ? "close" : "open"}
                                    initial={{ opacity: 0, rotate: -90 }}
                                    animate={{ opacity: 1, rotate: 0 }}
                                    exit={{ opacity: 0, rotate: 90 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {openNav ? <FiX size={20} /> : <FiMenu size={20} />}
                                </motion.div>
                            </AnimatePresence>
                        </IconButton>
                    </motion.div>
                </div>
            </div>

            <div className="lg:hidden overflow-hidden">
                <AnimatePresence mode="wait">
                    {openNav && (
                        <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={containerVariants}
                            className="overflow-hidden"
                        >
                            {navList}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </Navbar>
    );
}