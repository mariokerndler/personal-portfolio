import type { NextPage } from 'next';
import Footer from '../components/footer';
import Header from '../components/header';
import Layout from '../components/layout';
import Profile from '../components/profile';
import ProjectPreview, { ProjectPreviewInterface } from '../components/project_preview';
import content from '../json/data.json';

const Home: NextPage = () => {
  const projectMetadataArray = [];
  
  for(let i = 0; i < content.projects.length; i++) {
    projectMetadataArray.push(content.projects[i]);
  }
  
  const projectPreviewElements = [];
  
  for (let i = 0; i < projectMetadataArray.length; i++) {
    const metaData = projectMetadataArray[i];
    const element = <ProjectPreview {...metaData} key={i} />;
    projectPreviewElements.push(element);
  }

  return (
    <div>
      <Profile/>
      <div className='mt-4 flex flex-col gap-4'>
        {projectPreviewElements}
      </div>
    </div>
  );
};

export default Home;
