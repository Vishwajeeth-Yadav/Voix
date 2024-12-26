// import React, { useContext, useEffect, useState } from 'react'
// import Layout from '../../../components/layout/Layout'
// import myContext from '../../../context/data/myContext';
// import { Button } from '@material-tailwind/react';
// import { Link, useNavigate } from 'react-router-dom';
// import { account } from '../../../appWrite/AppwriteConfig';
// import Loader from '../../../components/loader/Loader'
// import { Helmet } from 'react-helmet';

// function Dashboard() {
//     const context = useContext(myContext);
//     const { mode, getallblog, deleteBlog } = context;
//     const navigate = useNavigate()
//     const [loading, setLoading] = useState(true)

//     useEffect(() => {
//         setLoading(true);
//         window.scrollTo(0,0)
//         // Simulate fetch
//         setTimeout(() => {
//             setLoading(false); // Set loading to false after fetch is complete
//         }, 1000);
//     }, [])

//     // console.log(getallblog)

//     const logout = async () => {
//         try {
//             await account.deleteSessions('current')
//             localStorage.clear()
//             navigate('/')
//         }
//         catch (error) {
//             console.error("Logout Error", error)
//         }
//     }

//     return (
//         <>
//             <Helmet><title>Dashboard -Voix</title></Helmet>
//             <Layout>
//                 <div className="py-10">
//                     <div
//                         className="flex flex-wrap justify-start items-center lg:justify-center gap-2 lg:gap-10 px-4 lg:px-0 mb-8">
//                         <div className="left">
//                             <img
//                                 className=" w-40 h-40  object-cover rounded-full border-2 border-pink-600 p-1"
//                                 src={'https://cdn-icons-png.flaticon.com/128/3135/3135715.png'} alt="profile"
//                             />
//                         </div>
//                         <div className="right">
//                             <h1
//                                 className='text-left font-bold text-2xl mb-2'
//                                 style={{ color: mode === 'dark' ? 'white' : 'black' }}
//                             >
//                                 Vishwajeeth Yadav
//                             </h1>

//                             <h2
//                                 style={{ color: mode === 'dark' ? 'white' : 'black' }} className="font-semibold">
//                                 Web Developer
//                             </h2>
//                             <h2
//                                 style={{ color: mode === 'dark' ? 'white' : 'black' }} className="font-semibold">viswajeethyadav@gmail.com
//                             </h2>
//                             <h2
//                                 style={{ color: mode === 'dark' ? 'white' : 'black' }} className="font-semibold">
//                                 <span>Total Blog : </span>  {getallblog.length}
//                             </h2>
//                             <div className=" flex gap-2 mt-2">
//                                 <Link to={'/createblog'} >
//                                     <div className=" mb-2">
//                                         <Button
//                                             style={{
//                                                 background: mode === 'dark'
//                                                     ? 'rgb(226, 232, 240)'
//                                                     // : 'rgb(30, 41, 59)',
//                                                     : '#3A7CA5',
//                                                 color: mode === 'dark'
//                                                     ? 'black'
//                                                     : 'white'
//                                             }}
//                                             className='px-8 py-2 '
//                                         >
//                                             Create Blog
//                                         </Button>
//                                     </div>
//                                 </Link>
//                                 <div className="mb-2">
//                                     <Button
//                                         onClick={logout}
//                                         style={{
//                                             background: mode === 'dark'
//                                                 ? 'rgb(226, 232, 240)'
//                                                 // : 'rgb(30, 41, 59)'
//                                                 : '#3A7CA5',
//                                             color: mode === 'dark'
//                                                 ? 'black'
//                                                 : 'white'
//                                         }}
//                                         className='px-8 py-2'
//                                     >
//                                         Logout
//                                     </Button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Line  */}
//                     <hr className={`border-2
//                  ${mode === 'dark'
//                             ? 'border-gray-300'
//                             : 'border-gray-400'}`
//                     }
//                     />

//                     {/* Table  */}
//                     <div className="">
//                         <div className=' container mx-auto px-4 max-w-7xl my-5' >
//                             <div className="relative overflow-x-auto shadow-md sm:rounded-xl">
//                                 {/* table  */}
//                                 <table className="w-full border-2 border-white shadow-md text-sm text-left text-gray-500 dark:text-gray-400" >
//                                     {/* thead  */}
//                                     <thead
//                                         style={{
//                                             background: mode === 'dark'
//                                                 ? 'white'
//                                                 : '#3A7CA5'
//                                             // 'rgb(30, 41, 59)'
//                                         }}
//                                         className="text-xs ">
//                                         <tr>
//                                             <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} scope="col" className="px-6 py-3">
//                                                 S.No
//                                             </th>
//                                             <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} scope="col" className="px-6 py-3">
//                                                 Thumbnail
//                                             </th>
//                                             <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} scope="col" className="px-6 py-3">
//                                                 Title
//                                             </th>
//                                             <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} scope="col" className="px-6 py-3">
//                                                 Category
//                                             </th>
//                                             <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} scope="col" className="px-6 py-3">
//                                                 Date
//                                             </th>
//                                             <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} scope="col" className="px-6 py-3">
//                                                 Action
//                                             </th>
//                                         </tr>
//                                     </thead>

//                                     {/* tbody  */}
//                                     {loading ?
//                                         (<div className="flex justify-center items-center mt-10">
//                                             <Loader />
//                                         </div>)
//                                         : getallblog.length > 0 ? <>
//                                             {
//                                                 getallblog.map((item, index) => {
//                                                     const { thumbnail, date, id } = item
//                                                     console.log(item)
//                                                     return (
//                                                         <tbody key={index}>
//                                                             <tr className=" border-b-2" style={{ background: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }}>
//                                                                 {/* S.No   */}
//                                                                 <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
//                                                                     {index + 1}
//                                                                 </td>

//                                                                 {/* Blog Thumbnail  */}
//                                                                 <th style={{ color: mode === 'dark' ? 'white' : 'black' }} scope="row" className="px-6 py-4 font-medium ">
//                                                                     {/* thumbnail  */}
//                                                                     <img className='w-16 rounded-lg' src={thumbnail} alt="thumbnail" />
//                                                                 </th>

//                                                                 {/* Blog Title  */}
//                                                                 <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
//                                                                     {item.title}
//                                                                 </td>

//                                                                 {/* Blog Category  */}
//                                                                 <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
//                                                                     {item.category}
//                                                                 </td>

//                                                                 {/* Blog Date  */}
//                                                                 <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
//                                                                     {date}
//                                                                 </td>

//                                                                 {/* Delete Blog  */}
//                                                                 <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
//                                                                     <button onClick={() => deleteBlog(id)} className=' px-4 py-1 rounded-lg text-white font-bold bg-red-500'>
//                                                                         Delete
//                                                                     </button>
//                                                                 </td>
//                                                             </tr>
//                                                         </tbody>
//                                                     )
//                                                 })
//                                             }
//                                         </> : <div className="text-center mt-10">
//                                             <h2>No Blogs Found</h2>
//                                         </div>}

//                                 </table>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </Layout>
//         </>

//     )
// }

// export default Dashboard


import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import  Layout  from '../../../components/layout/Layout';
import  myContext  from '../../../context/data/myContext';
import { Button } from '@material-tailwind/react';
import { Link, useNavigate } from 'react-router-dom';
import { account } from '../../../appWrite/AppwriteConfig';
import  Loader from '../../../components/loader/Loader';
import { Helmet } from 'react-helmet';

const Dashboard = () => {
  const context = useContext(myContext);
  const { mode, getallblog, deleteBlog } = context;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  // Theme colors
  const theme = {
    light: {
      primary: '#2563eb', // Bright blue
      secondary: '#3b82f6',
      background: '#f8fafc',
      card: '#f2f2f2',
      text: '#1e293b',
      textSecondary: '#64748b',
      border: '#e2e8f0'
    },
    dark: {
      primary: '#60a5fa',
      secondary: '#3b82f6',
      background: '#0f172a',
      card: '#1e293b',
      text: '#f1f5f9',
      textSecondary: '#94a3b8',
      border: '#334155'
    }
  };

  const currentTheme = mode === 'dark' ? theme.dark : theme.light;

  useEffect(() => {
    setLoading(true);
    window.scrollTo(0, 0);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const logout = async () => {
    try {
      await account.deleteSessions('current');
      localStorage.clear();
      navigate('/');
    } catch (error) {
      console.error("Logout Error", error);
    }
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const tableRowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1
      }
    })
  };

  return (
    <>
      <Helmet><title>Dashboard - Voix</title></Helmet>
      <Layout>
        <motion.div 
          className="min-h-screen py-8"
          style={{ background: currentTheme.background }}
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" variants={fadeIn}>
            {/* Profile Card */}
            <div 
              style={{ 
                background: currentTheme.card,
                borderColor: currentTheme.border,
              }}
              className="rounded-xl shadow-lg border p-8 mb-8 "
            >
              <div className="flex flex-col lg:flex-row items-center gap-10">
                {/* Profile Image */}
                <motion.div 
                  className="relative flex-shrink-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    className="w-40 h-40 rounded-full object-cover shadow-lg p-1"
                    style={{ borderColor: currentTheme.primary }}
                    src={'https://cdn-icons-png.flaticon.com/128/3135/3135715.png'}
                    alt="profile"
                  />
                  <div className="absolute -bottom-2 right-0 w-6 h-6 bg-emerald-500 rounded-full border-4"
                       style={{ borderColor: currentTheme.card }} />
                </motion.div>

                {/* Profile Info */}
                <div className="flex-1 text-center lg:text-left space-y-6">
                  <div>
                    <h1 
                      className="text-3xl font-bold mb-2"
                      style={{ color: currentTheme.text }}
                    >
                      Vishwajeeth Yadav
                    </h1>
                    <div className="space-y-1">
                      <p style={{ color: currentTheme.textSecondary }}>Web Developer</p>
                      <p style={{ color: currentTheme.textSecondary }}>viswajeethyadav@gmail.com</p>
                      <p style={{ color: currentTheme.textSecondary }}>
                        Total Blogs: <span className="font-semibold">{getallblog.length}</span>
                      </p>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                    <Link to="/createblog">
                      <Button
                        className="px-6 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                        style={{
                          background: currentTheme.primary,
                          color: '#ffffff'
                        }}
                      >
                        Create Blog
                      </Button>
                    </Link>
                    <Button
                      onClick={logout}
                      className="px-6 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                      style={{
                        background: mode === 'dark' ? '#475569' : '#64748b',
                        color: '#ffffff'
                      }}
                    >
                      Logout
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Table */}
            <motion.div 
              className="rounded-xl shadow-lg overflow-hidden border"
              style={{ 
                background: currentTheme.card,
                borderColor: currentTheme.border
              }}
              variants={fadeIn}
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr style={{ background: mode === 'dark' ? '#003554' : '#fcfcfa' }} >
                      {['S.No', 'Thumbnail', 'Title', 'Category', 'Date', 'Action'].map((header) => (
                        <th 
                          key={header} 
                          className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider"
                          style={{ color: currentTheme.textSecondary }}
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody className="divide-y" style={{ borderColor: currentTheme.border }}>
                    {loading ? (
                      <tr>
                        <td colSpan="6" className="px-6 py-16 text-center">
                          <Loader />
                        </td>
                      </tr>
                    ) : getallblog.length > 0 ? (
                      getallblog.map((item, index) => (
                        <motion.tr
                          key={item.id}
                          custom={index}
                          initial="hidden"
                          animate="visible"
                          variants={tableRowVariants}
                          className="group transition-colors hover:bg-gray-50/5"
                        >
                          <td className="px-6 py-4" style={{ color: currentTheme.textSecondary }}>
                            {index + 1}
                          </td>
                          <td className="px-6 py-4">
                            <motion.div 
                              whileHover={{ scale: 1.05 }}
                              className="rounded-lg overflow-hidden shadow-sm"
                            >
                              <img 
                                className="w-16 h-16 object-cover"
                                src={item.thumbnail}
                                alt="thumbnail"
                              />
                            </motion.div>
                          </td>
                          <td 
                            className="px-6 py-4 font-medium"
                            style={{ color: currentTheme.text }}
                          >
                            {item.title}
                          </td>
                          <td className="px-6 py-4">
                            <span 
                              className="px-3 py-1 rounded-full text-sm font-medium inline-block"
                              style={{ 
                                background: mode === 'dark' ? '#1e40af30' : '#dbeafe',
                                color: currentTheme.primary 
                              }}
                            >
                              {item.category}
                            </span>
                          </td>
                          <td 
                            className="px-6 py-4"
                            style={{ color: currentTheme.textSecondary }}
                          >
                            {item.date}
                          </td>
                          <td className="px-6 py-4">
                            <Button
                              onClick={() => deleteBlog(item.id)}
                              className="px-4 py-2 rounded-lg text-white transition-all duration-300 hover:shadow-lg"
                              style={{
                                background: '#ef4444',
                                opacity: 0.9,
                              }}
                            >
                              Delete
                            </Button>
                          </td>
                        </motion.tr>
                      ))
                    ) : (
                      <tr>
                        <td 
                          colSpan="6" 
                          className="px-6 py-16 text-center"
                          style={{ color: currentTheme.textSecondary }}
                        >
                          No blogs found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </Layout>
    </>
  );
};

export default Dashboard;