import { TestBed } from '@angular/core/testing';
import { ProjectListComponent } from './project-list.component';
import { MOCK_PROJECTS } from '../../../../core/mocks/projects-mocks';

describe('ProjectListComponent', () => {
  const create = () => {
    TestBed.configureTestingModule({ imports: [ProjectListComponent] });
    return TestBed.createComponent(ProjectListComponent).componentInstance;
  };

  it('shows every project with corporate ones first', () => {
    const component = create();
    const projects = component.visibleProjects();
    expect(projects.length).toBe(MOCK_PROJECTS.length);
    const firstPersonal = projects.findIndex(p => !p.corporate);
    expect(projects.slice(firstPersonal).every(p => !p.corporate)).toBe(true);
  });

  it('filters corporate and personal projects', () => {
    const component = create();
    component.activeFilter.set('corporate');
    expect(component.visibleProjects().every(p => p.corporate)).toBe(true);
    component.activeFilter.set('personal');
    expect(component.visibleProjects().every(p => !p.corporate)).toBe(true);
    expect(component.countFor('corporate') + component.countFor('personal')).toBe(MOCK_PROJECTS.length);
  });
});
