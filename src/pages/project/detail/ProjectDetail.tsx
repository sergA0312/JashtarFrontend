import { NavPanel } from '@/src/shared/ui/navpanel/NavPanel';
import { Name } from '../detail/sections/Name/Name';
import { Aim } from '../detail/sections/Aims/Aim';
import { Gallery } from '../detail/sections/Gallary/Gallary';
import { projects } from '../Staticdata/projects';
import { notFound } from 'next/navigation';
import scss from './ProjectDetail.module.scss';


export default async function ProjectDetail({ params }: any) {
  const resolvedParams = params ? await params : null;
  const slug = resolvedParams?.slug;

  // 2. Если мы на этапе сборки и slug еще нет, просто возвращаем пустоту
  if (!slug) {
    return null; 
  }

  const project = projects.find((p) => String(p.id) === slug);
  
  if (!project) {
    return notFound();
  }

  return (
    <div>
      <NavPanel
        items={[
          { label: 'Проекты', href: '/projects' },
          { label: `Проект ${project.title}` },
        ]}
      />
      <div className="container">
        <div className={scss.ProjectDetail}>
          <Name
            title={project.title}
            fullText={project.full_text}
            image={project.image}
          />
          <Aim
            title={project.goals_title}
            goals={project.goals}
          />
          <Gallery images={project.gallery_images} />
        </div>
      </div>
    </div>
  );
}
