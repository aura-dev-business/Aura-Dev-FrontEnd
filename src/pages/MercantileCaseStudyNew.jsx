import ProjectCaseStudy from './ProjectCaseStudy';
import { projectCaseStudies } from './caseStudyData';

export default function MercantileCaseStudyNew() {
  return <ProjectCaseStudy project={projectCaseStudies.mercantile} />;
}
