import Header from './components/Header'
import HomePage from './pages/HomePage'
import WorkPage from './pages/WorkPage'
import ProjectsPage from './pages/ProjectsPage'
import SkillsPage from './pages/SkillsPage'
import ContactPage from './pages/ContactPage'

const sections = [
  { id: 'home', Component: HomePage },
  { id: 'work', Component: WorkPage },
  { id: 'projects', Component: ProjectsPage },
  { id: 'skills', Component: SkillsPage },
  { id: 'contact', Component: ContactPage },
]

export default function App() {
  return (
    <div className="min-h-dvh bg-bg-primary">
      <div className="max-w-md sm:max-w-lg lg:max-w-4xl mx-auto w-full lg:ml-44">
        <Header />
        <main>
          {sections.map(({ id, Component }, index) => (
            <section
              key={id}
              id={id}
              className={`scroll-mt-14 lg:scroll-mt-6 ${index > 0 ? 'border-t border-bg-border' : ''}`}
            >
              <Component />
            </section>
          ))}
        </main>
      </div>
    </div>
  )
}
