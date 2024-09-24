import React from 'react'
import CustomNavLink from '../../ui/CustomNavLink'
import AppLayout from '../../ui/AppLayout'
import Sidebar from '../../ui/Sidebar'
import { HiCollection, HiHome, HiUser } from 'react-icons/hi'


const AdminLayout = () => {
  return (
    <AppLayout>
    <Sidebar>
      <CustomNavLink path="dashboard" icon={<HiHome />} title={"داشبورد"} />

      <CustomNavLink
        path="projects"
        icon={<HiCollection />}
        title={" پروژه ها"}
      />
         <CustomNavLink
        path="users"
        icon={<HiUser />}
        title={" کاربران"}
      />
      <CustomNavLink
        path="proposals"
        icon={<HiCollection />}
        title={"درخواست ها"}
      />
     
    </Sidebar>
  </AppLayout>
  )
}

export default AdminLayout