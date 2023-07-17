import {useParams} from "next/navigation"
import {useMemo} from "react"

const useConversation = () => {
    const params = useParams()

    const conversationId = useMemo(() => {
        if (!params?.coverastionId) {
            return ''
        }

        return params.coverastionId as string
    }, [params?.conversationId])

    const isOpen = useMemo(() => !!conversationId, [conversationId])

    return useMemo(() => ({
        isOpen,
        conversationId
    }), [isOpen, conversationId])

}

export default useConversation