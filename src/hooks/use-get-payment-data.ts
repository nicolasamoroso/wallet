import { useEffect, useState } from "react"

const useGetData = ({ name }: { name: string }) => {
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedData = localStorage.getItem(name)
      if (storedData) {
        setData(JSON.parse(storedData) as any[])
      }
    }
  }, [name])

  return { data, setData }
}

export default useGetData
