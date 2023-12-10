import type { Member, ReturnJSONMembers } from "@/interfaces"

export default defineEventHandler(
    async (event): Promise<ReturnJSONMembers> => {
        let memberList = new Map<number, Member>()
        const storage = useStorage()
        const memberListStorage = await storage.getItem("local:member-management_members")
        if (memberListStorage != undefined) {
            memberList = new Map<number, Member>(memberListStorage as any)
        }
        const memberListValues = memberList.values()
        const memberListArray = Array.from(memberListValues)
        return {
            result: 1,
            data: memberListArray
        }
    }
)
