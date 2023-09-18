import { useEffect } from "react"

export const useOutside = (ref, handler) => {
   useEffect(() => {
      const listener = (event) => {
         if (!ref.current || ref.current.contains(event.target)) {
            return
         }
         handler(false)
      }
      document.addEventListener("mousedown", listener)

      return () => {
         document.removeEventListener("mousedown", listener)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [ref, handler])
}
