import ProjectCaseStudy from './ProjectCaseStudy';
import { projectCaseStudies } from './caseStudyData';

export default function PearlOudCaseStudyNew() {
  return <ProjectCaseStudy project={projectCaseStudies.pearl} />;
}
