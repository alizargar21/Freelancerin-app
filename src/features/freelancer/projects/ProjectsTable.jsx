import React from 'react'
import Loading from '../../../ui/Loading';
import Empty from '../../../ui/Empty';
import useProjects from "../../../hooks/useProjects"
import Table from '../../../ui/Table';
import ProjectRow from './ProjectsRow';
const ProjectsTable = () => {
          const { projects, isLoading } = useProjects();

          if (isLoading) return <Loading />;
          if (!projects.length) return <Empty resourceName=" پروژه ای" />;
          return (
            <Table>
              <Table.Header>
              <th>#</th>
                <th>عنوان پروژه</th>
                
                <th>بودجه</th>
                <th>ددلاین</th>

             
                <th>وضعیت</th>
                <th>عملیات</th>
             
              </Table.Header>
              <Table.Body>
                {projects.map((project, index) => (
                  <ProjectRow project={project} index={index} key={project._id} />
                ))}
              </Table.Body>
            </Table>
          );
}

export default ProjectsTable