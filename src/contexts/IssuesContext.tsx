import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

interface IssuesProviderProps {
  children: ReactNode
}

export interface IssueProps {
  html_url: string
  number: number
  title: string
  created_at: Date
  body: string
  comments: number
  user: {
    login: string
  }
}

interface IssueContextType {
  issues: IssueProps[]
  issuesCount: number
  filterIssue: (issueNumber: number) => IssueProps | null
  searchIssues: (query: string) => IssueProps[] | null
}

export const IssuesContext = createContext({} as IssueContextType)

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issues, setIssues] = useState<IssueProps[]>([])
  const [issuesCount, setIssuesCount] = useState(0)

  const fetchIssues = useCallback(async () => {
    const repositoryOwner = 'leonardospereira'
    const repositoryName = 'github-blog'

    const response = await api.get(
      `/search/issues?q=repo:${repositoryOwner}/${repositoryName}`,
    )
    setIssues(response.data.items)
    setIssuesCount(response.data.total_count)
  }, [])

  const filterIssue = useCallback(
    (issueNumber: number) => {
      const filteredIssue = issues.find((issue) => issue.number === issueNumber)

      if (!filteredIssue) {
        return null
      }

      return filteredIssue
    },
    [issues],
  )

  const searchIssues = useCallback(
    (query: string) => {
      const filteredIssues = issues.filter((issue) =>
        issue.title.toLowerCase().includes(query.toLowerCase()),
      )

      if (filteredIssues.length === 0) {
        return null
      }

      return filteredIssues
    },
    [issues],
  )

  useEffect(() => {
    fetchIssues()
  }, [fetchIssues])

  return (
    <IssuesContext.Provider
      value={{ issues, issuesCount, filterIssue, searchIssues }}
    >
      {children}
    </IssuesContext.Provider>
  )
}
