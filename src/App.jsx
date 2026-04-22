import { useMemo, useState } from 'react'
import './App.css'

const initialProjects = [
  {
    id: 1,
    title: '智能日报助手',
    description: '自动汇总业务数据并生成可读日报，减少重复人工整理工作。',
    techStack: ['React', 'Node.js', 'OpenAI API'],
    url: 'https://example.com/project-daily-report',
    enabled: true,
  },
  {
    id: 2,
    title: '天气可视化看板',
    description: '展示城市天气趋势与异常提醒，支持按时间维度查看历史变化。',
    techStack: ['Vue', 'ECharts', 'REST API'],
    url: 'https://example.com/project-weather',
    enabled: true,
  },
  {
    id: 3,
    title: '任务协作平台',
    description: '用于团队任务分发、进度追踪和提醒，提高跨角色协同效率。',
    techStack: ['React', 'TypeScript', 'Firebase'],
    url: 'https://example.com/project-task',
    enabled: false,
  },
]

function App() {
  const [projects, setProjects] = useState(initialProjects)

  const enabledCount = useMemo(
    () => projects.filter((project) => project.enabled).length,
    [projects],
  )

  const toggleProject = (id) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === id ? { ...project, enabled: !project.enabled } : project,
      ),
    )
  }

  return (
    <main className="portfolio-page">
      <section className="hero-section">
        <p className="tag">Portfolio</p>
        <h1>你好，我是你的名字</h1>
        <p className="hero-intro">
          我专注于将想法快速落地为可用产品，覆盖数据分析、前端交互和 AI
          应用方向。
        </p>
        <div className="hero-links">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="mailto:your-email@example.com">Email</a>
        </div>
      </section>

      <section className="about-section">
        <h2>关于我</h2>
        <p>
          我喜欢做具备实际价值的项目，把复杂问题拆解为可执行步骤，并通过清晰的交互让用户快速上手。
          如果你希望合作或交流，欢迎通过上方联系方式找到我。
        </p>
      </section>

      <section className="projects-section">
        <div className="projects-header">
          <div>
            <h2>项目列表</h2>
            <p>已开启 {enabledCount} / {projects.length} 个项目</p>
          </div>
          <span className="hint">点击开关可控制是否开放，点击按钮进入项目</span>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article
              className={`project-card${project.enabled ? '' : ' is-disabled'}`}
              key={project.id}
            >
              <div className="project-top">
                <h3>{project.title}</h3>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={project.enabled}
                    onChange={() => toggleProject(project.id)}
                  />
                  <span className="slider" />
                </label>
              </div>

              <p>{project.description}</p>

              <div className="stack-list">
                {project.techStack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              {project.enabled ? (
                <a
                  className="enter-btn"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  进入项目
                </a>
              ) : (
                <button className="enter-btn disabled-btn" type="button" disabled>
                  暂未开放
                </button>
              )}
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
