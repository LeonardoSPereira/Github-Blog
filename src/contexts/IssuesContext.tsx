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

interface IssueProps {
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
  filterIssue: (issueNumber: number) => IssueProps | undefined
}

export const IssuesContext = createContext({} as IssueContextType)

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issues, setIssues] = useState<IssueProps[]>([])
  const [issuesCount, setIssuesCount] = useState(0)

  const fetchIssues = useCallback(async () => {
    const response = await api.get(
      '/search/issues?q=repo:leonardospereira/github-blog',
    )
    setIssues(response.data.items)
    setIssuesCount(response.data.total_count)
  }, [])

  const filterIssue = useCallback(
    (issueNumber: number) => {
      return issues.find((issue) => issue.number === issueNumber)
    },
    [issues],
  )

  useEffect(() => {
    fetchIssues()
  }, [fetchIssues])

  return (
    <IssuesContext.Provider value={{ issues, issuesCount, filterIssue }}>
      {children}
    </IssuesContext.Provider>
  )
}
