import ProjectCaseStudy from './ProjectCaseStudy';
import { projectCaseStudies } from './caseStudyData';

export default function SculptCaseStudyNew() {
  return <ProjectCaseStudy project={projectCaseStudies.sculpt} />;
}
