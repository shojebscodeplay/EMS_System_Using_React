import React from 'react'
import Header from '../Header'
import TaskList from '../TaskList'
import TaskShowcase from '../TaskShowcase'
import Footer from '../Footer'

const EmployeeDashboard = ({handleLogout , user}) => {
  return (
    <>
    <Header user={user} handleLogout={handleLogout}/>
    <TaskList/>
    <TaskShowcase/>
    <Footer/>
    </>
  )
}

export default EmployeeDashboard